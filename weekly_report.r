## encoding with Windows-1251
#gc()
#rm(list=ls())

library(googleAnalyticsR) #Подключаем GA API$
library(plyr) # Необходима для функции rename
library(dplyr) #Необходима для функции full_join
library(lubridate)
library(googleAuthR) #for authentication in GA
library(reshape2)
ga_auth()

#final version of function for weekly
funnel <- function(ga_id, #Счетчик Google Analytics
                   site, #Имя хоста по которому выгружать данные
                   product, #Название продукта по которому идет выгрузка
                   date_range, #Диапазон дат
                   productPage, #URL продуктовых страниц
                   # excludePagePath, #страницы, которые необходимо исключить
                   anketa #ID анкет в анкетном сервисе
){
  metrics <- "sessions" #выгружаемые показатели
  dimensions <- c("date","source", "medium", "campaign", "deviceCategory") #выгружаемые параметры
  forJoin <- c("segment"="segment","date"="date","source"="source",
               "medium"="medium", "campaign"="campaign", "deviceCategory"="deviceCategory")
  #Описываем необходимые сегменты
  #Шаг анкеты 1 - Продуктовая страница
  segmentProductPage <- segment_ga4("productPage",
                                    segment_id = paste0(
                                      "sessions::condition::ga:pagePath=~",productPage#,
                                      #";ga:pagePath!~",excludePagePath
                                    )
  )
  #Шаг анкеты 2 - Переход на анкету
  segmentAnketaPage <- segment_ga4("anketaPage",
                                   segment_id = paste0("sessions::condition::ga:hostname=~", site,
                                                       ";ga:pagePath=~",anketa))
  #Шаг анкеты 3 - Успешная верификация
  segmentSMSPage <- segment_ga4("smsPage", segment_id = paste0("sessions::condition::ga:hostname=~",site,
                                                               ";ga:pagePath=~",anketa,".*tab1$"))
  #Шаг анкеты 4 - Анкета отправлена
  segmentGraciasPage <- segment_ga4("graciasPage",
                                    segment_id = paste0("sessions::condition::ga:hostname=~",site,
                                                        ";ga:pagePath=~.*gracias.*",anketa))
  
  #Выгружаем данные продуктовой страницы
  productPage <- google_analytics(ga_id,  
                                  date_range = date_range, 
                                  metrics = metrics, 
                                  dimensions = dimensions,
                                  max = -1, anti_sample = TRUE,
                                  segments = segmentProductPage)
  print(paste0("Numbers of rows in productPage data is: ",nrow(productPage)))
  if(!is.null(productPage)) {
    productPage <- plyr::rename(productPage,c('sessions'='productPage'))
  }
  #Выгружаем данные страницы анкеты
  anketaPage <- google_analytics(ga_id,  date_range = date_range, 
                                 metrics = metrics, dimensions = dimensions, 
                                 max = -1, anti_sample = TRUE,
                                 segments = segmentAnketaPage)
  if(!is.null(anketaPage)) {
    anketaPage <- plyr::rename(anketaPage,c('sessions'='anketaPage'))
  }
  
  #Выгружаем данные по верификации
  smsPage <- google_analytics(ga_id,  date_range = date_range, 
                              metrics = metrics, dimensions = dimensions, 
                              max = -1, anti_sample = TRUE,
                              segments = segmentSMSPage)
  if(!is.null(smsPage)) {
    smsPage <- plyr::rename(smsPage,c('sessions'='smsPage'))
  }
  
  #Выгружаем данные по заявкам
  graciasPage <- google_analytics(ga_id,
                                  date_range = date_range,
                                  metrics = metrics,
                                  dimensions = dimensions,
                                  max = -1,
                                  anti_sample = TRUE,
                                  segments = segmentGraciasPage)
  if(!is.null(graciasPage)) {
    graciasPage <- plyr::rename(graciasPage,c('sessions'='graciasPage'))
  }
  
  #Объединение таблиц по продукту
  if(!is.null(productPage)) {
    tableData <- productPage
    if(!is.null(anketaPage)){
      tableData <- full_join(tableData, anketaPage, by=forJoin)
    }else{tableData$anketaPage <- 0}
    if(!is.null(smsPage)){
      tableData <- full_join(tableData, smsPage, by=forJoin)
    }else{tableData$smsPage <- 0}
    if(!is.null(graciasPage)) {
      tableData <- full_join(tableData, graciasPage, by=forJoin)
    }else{tableData$graciasPage <- 0}
    
    tableData <- plyr::rename(tableData,c('segment'='product'))
    tableData$product <- product
    tableData[is.na(tableData)] <- 0
    tableData$ga_id<-ga_id
    tableData$SiteName<-site
    return(tableData)
  }else{return(NULL)}
}


#Даты
#take monthly data only if today is tuesday
if(weekdays.Date(Sys.Date())=="Tuesday"){
  dataStart <- paste0("2018-",format(Sys.Date(), "%m"), "-01")
}else{
  dataStart <- format(Sys.Date()-3, "%Y-%m-%d")
}
date_range <- c(dataStart, format(Sys.Date()-1, "%Y-%m-%d"))

#date_range <- c("2018-07-09", "2018-07-15")

#Общие данные
ga_ids <- c(166760762, 77402130, 75728895)
sites <-c('vtb.ru','vtb24.ru', 'vtb24.ru')

#Р’С‹РіСЂСѓР¶Р°РµРј РІРѕСЂРѕРЅРєСѓ РїРѕ РљРќ
#productArr <- c("РљРќ", "Р РµС„","РљРљ", "Р”Рљ", "РђРІС‚Рѕ", "РРїРѕС‚РµРєР°") #UTF-8
#productArr <- c("KN", "Ref","KK", "DK", "Avto", "Ipoteka")
productArr <- c("КН", "Реф","КК", "ДК", "Авто", "Ипотека") #CP-1251
productPageArr <- c("personal/kredit-nalichnymi/(kalkulyator|ipotechniy|\\#|\\?|$)|credit/cash|kak-poluchit-kredit/",
                    "kredit-nalichnymi/refinansirovanie/|credit/refinancing/",
                    "karty/(.card-type_0|multikarta-kreditnaya)|cards/multicard.*(?:debit|salary)",
                    "troika|debetovaya|karty/(fifa|zarplatnaya|pensionnaya|pensioner|sockarta|.?card-type(_|=)(1|2|3|4))|vklady-i-scheta/scheta",
                    "(nal/avtokr)|(tocredit/(prog|stat|lad|suba|pled|auto|land|suz|res|vol|gaz|uaz|comm|niva|lif|cadi|jagu|kia|hyun|kick|chev|\\?|$))",
                    "nal/ipoteka/(dlya-semej|vtor|novo|zalo|ipot|bols|kat|voen|pobe|det|purc|ref|more|new|seco|vict|pled|mili|loans/$|stat|\\?|$)"
                    )
# excludePagePathArr <- c("request|company|dokum|inform|trebovan|wiki|welcome|refinansirovanie|refinancing|how|document",
#                         "request|company|dokum|inform|trebovan|wiki|welcome",
#                         "request|company|dokum|inform|trebovan|moj-bonus|wiki|welcome|debit|salary|card-type_1|card-type_2|card-type_3",
#                         "request|company|dokum|inform|trebovan|moj-bonus|wiki|welcome",
#                         "request|company|dokum|inform|trebovan|docum|wiki|welcome|insteadkasko",
#                         "request|loans|insurance|company|guide|welcome|docs|faq|escaped"
#                        )
#old array before 05/06/2018
# anketaArr <- c("(401.*01.*00.*01|401.*05.*00.*01)", 
#                "(401.*19.*00.*01|401.*19.*00.*02)", 
#                "(303.*01.*00.*01|302.*01.*00.*01)",
#                "(303.*02.*00.*01|1601.*00.*01.*01|1601.*01.*00.*01|1601.*03.*01.*01)",
#                "(406.*01.*00.*01|406.*02.*00.*01|406.*04.*00.*01|406.*00.*00.*01|406.*03.*00.*01|406.*54.*00.*01)",
#                "(402.*01.*00.*01|402.*01.*00.*02|402.*05.*00.*01|402.*01.*00.*07|402.*50.*00.*01|402.*51.*00.*01|402.*52.*00.*01)"
#                )
anketaArr <- c("(401.*01.*00.*01|401.*05.*00.*01)", 
               "(401.*19.*00.*01|401.*19.*00.*02)", 
               "(303.*01.*00.*01|302.*01.*00.*01)",
               "(303.*02.*00.*01|1601.*00.*01.*01|1601.*01.*00.*01|1601.*03.*01.*01)",
               "(406.*01.*00.*01|406.*02.*00.*01|406.*04.*00.*01|406.*00.*00.*01|406.*03.*00.*01|406.*54.*00.*01)",
               "(402.*01.*00.*01|402.*01.*00.*02|402.*05.*00.*01|402.*01.*00.*07|402.*50.*00.*01|402.*51.*00.*01|402.*52.*00.*01)")
#Получаем и объединяем все данные с трех счетчиков по всем продуктам, указанным выше в массиве
#Пробегаемся по каждому счетчику и по его индексу получаем адрес сайта из массива с доменами
#Пробегаемся по массиву продуктов и по индексу берем соответствующие значения исключаемых страниц и анкет

AllData <- data.frame()
for (i in 1:length(ga_ids) ){
  ga_id <- ga_ids[i]
  site <- sites[i]
  prodFunnel <- data.frame()
  for (j in 1:length(productArr)){
    product <- productArr[j]
    productPage <-productPageArr[j]
    #excludePagePath <- excludePagePathArr[j]
    anketa <- anketaArr[j]
    #print(paste0("Выгружаем данные из профиля ", ga_id, " по продукту ", product))
    tmp <- data.frame()
    tmp <- funnel(ga_id, 
                   site, 
                   product, 
                   date_range, 
                   productPage, 
                   #excludePagePath, 
                   anketa)
    head(tmp)
    if(is.null(tmp)) next
    prodFunnel <- rbind(prodFunnel, tmp)
  }
  AllData <- rbind(AllData, prodFunnel)
}

newdata2<- AllData
write.csv(newdata2, file = "weekly_new_.csv")


newdata <- melt(AllData[c("date","product", "productPage", "anketaPage", "graciasPage", "ga_id")], id=c("date", "product", "ga_id")) 
newdata2 <- dcast(data=newdata, formula= date+product ~ ga_id+variable,
                  fun.aggregate = sum,
                  value.var = "value")
newdata2$vtb24_productPage<-newdata2$`75728895_productPage`+newdata2$`77402130_productPage`
newdata2$vtb24_anketaPage<-newdata2$`75728895_anketaPage`+newdata2$`77402130_anketaPage`
newdata2$vtb24_graciasPage<-newdata2$`75728895_graciasPage`+newdata2$`77402130_graciasPage`
vtbcolNames <-c("166760762_productPage", "166760762_anketaPage", "166760762_graciasPage")
colnames(newdata2)[c(9:11)] <- c("vtb_productPage", "vtb_anketaPage", "vtb_graciasPage")
varnames <- c("date","product", "vtb_productPage", "vtb_anketaPage", "vtb_graciasPage", "vtb24_productPage", "vtb24_anketaPage", "vtb24_graciasPage")
if(weekdays.Date(Sys.Date())=="Monday"){
  monitorData <- newdata2
}else{
  monitorData <- newdata2[which(newdata2$date==date_range[2]),]
}
#format(as.Date(date_range[2])-8,"%Y-%m-%d")


library(mailR)
accountLogin <- "xxx@gmail.com"
accountPass <- "xxxxx"
recepients <- c("vtbwork@yandex.ru")

weeklyfilename <-paste("Weekly_",format(as.Date(date_range[1]),"%m.%Y"),".csv",sep="")
monitoringfilename <- paste("monitoring_report_",format(as.Date(date_range[2]),"%d.%m.%Y"),".csv",sep="")
write.csv(AllData, file = weeklyfilename)
write.csv(monitorData[,varnames], file=monitoringfilename)
attacments <- c(weeklyfilename, monitoringfilename)

textofbody <-paste ("Hello guys! There are the weekly report in attachment by ", date_range[2], sep="")
send.mail(from = accountLogin,
          to = recepients,
          subject = "Report weekly",
          body = textofbody,
          encoding = "utf-8",
          smtp = list(host.name = "smtp.gmail.com", port = 465, user.name = accountLogin, passwd = accountPass, ssl = T),
          authenticate = TRUE,
          send = TRUE,
          attach.files = attacments,
          file.names = attacments, 
          debug = TRUE)
