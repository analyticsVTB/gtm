console.log("++++++++++++morgage.js is loaded from git++++++++++++++");
  var _amount_, _term_, _term1_;

  function _amoter_() {
    //console.log('_amoter_');
    _amount_ = undefined;
    _term_ = undefined;
    if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости') {
      _amount_ = jQuery('div[id^="creditSumByCost"].calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input[id^="creditTermByCost"]').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо доходу') {
      _amount_ = jQuery('input[id^="creditSumByIncome"]').val().replace(/\s/g, '');
      _term_ = String(jQuery('input[id^="creditTermByIncome"]').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'ДополнительныеденьгиДо 450 000 рублей на руки') {
      _amount_ = jQuery('div[id^="extraMoneyLoanSum"].calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input[id^="extraMoneyLoanPeriod"]').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Сниженный платеж') {
      _amount_ = jQuery('div[id^="creditSumByCost"].calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input[id^="smallerPaymentLoanSum"]').val().replace(/\s/g, '') * 12);
    } else if (document.location.href.indexOf('/personal/ipoteka/voennaja-ipoteka') > -1) {
      _amount_ = jQuery('div[id^="militaryCreditSize"].calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input[id^="militaryCreditTerm"]').val().replace(/\D/g, '') * 12);
    }
    return _amount_, _term_
  }
  var sel_ = '';
  var tabtxt_ = '';
  var ref_ = '';
  // Клик по "Рассчитать"
  if (jQuery('.ga_ipoteka_calculate').length) {
    jQuery(document).on('click', '.ga_ipoteka_calculate', function() {
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': String(parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, ''))),
        'tag4': undefined,
        'amount': parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_calculate');
      }
    })
  } else if (window.location.href.indexOf('/personal/ipoteka/voennaja-ipoteka') > -1) {
    jQuery(document).on('click', '.button.button_huge.button_common', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text().trim(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': undefined,
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_calculate');
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') == -1) {
    jQuery(document).on('click', '.button.button_huge.button_common', function() {
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': String(parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, ''))),
        'tag4': undefined,
        'amount': parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_calculate');
      }
    })
  }
  // Клик по "Распечатать"
  if (jQuery('.ga_ipoteka_printer').length) {
    jQuery(document).on('click', '.ga_ipoteka_printer', function() {
      _amoter_(_amount_, _term_);
      // console.log(_amount_ + ' / ' + _term_);
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': _amount_,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(_amount_),
        'term': parseInt(_term_)
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_printer');
      }
    })
  } else if (window.location.href.indexOf('/personal/ipoteka/voennaja-ipoteka') > -1) {
    jQuery(document).on('click', '.border-icon-link.icon-common-printer', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text().trim(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': undefined,
        'tag3': jQuery('div[id^="militaryCreditSize"].calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery('div[id^="militaryCreditSize"].calc-result__sum').text().replace(/\D/g, '')),
        'term': jQuery('p[id^="militaryCreditTerm"]').text().replace(/\D/g, '') * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_printer');
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') == -1) {
    jQuery(document).on('click', '.border-icon-link.icon-common-printer', function() {
      _amoter_(_amount_, _term_);
      // console.log(_amount_ + ' / ' + _term_);
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': _amount_,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(_amount_),
        'term': parseInt(_term_)
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_printer');
      }
    })
  }
  // Клик по "Оформить заявку"
  if (jQuery('.ga_ipoteka_statement').length) {
    jQuery(document).on('click', '.ga_ipoteka_statement', function() {
      _amoter_(_amount_, _term_);
      // console.log(_amount_ + ' / ' + _term_);
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Оформить заявку"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': _amount_,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(_amount_),
        'term': parseInt(_term_)
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_statement');
      }
    })
  } else if (window.location.href.indexOf('/personal/ipoteka/voennaja-ipoteka') > -1) {
    jQuery(document).on('click', '#militaryMakeInvoiceButton_MilitaryProgram', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text().trim(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Оформить заявку"',
        'tag2': undefined,
        'tag3': jQuery('div[id^="militaryCreditSize"].calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery('div[id^="militaryCreditSize"].calc-result__sum').text().replace(/\D/g, '')),
        'term': jQuery('p[id^="militaryCreditTerm"]').text().replace(/\D/g, '') * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_statement');
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') == -1) {
    jQuery(document).on('click', 'input.button.button_big.button_red', function() {
      _amoter_(_amount_, _term_);
      // console.log(_amount_ + ' / ' + _term_);
      area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
      revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
      cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
      menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
      mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Оформить заявку"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': _amount_,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(_amount_),
        'term': parseInt(_term_)
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipoteka_statement');
      }
    })
  }
  // Уменьшение стоимости жилья
  if (jQuery('.ga_ipoteka_housecost_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_housecost_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение стоимости жилья',
        'tag2': jQuery("#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65').siblings('.input-number__button.input-number__button_down ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение стоимости жилья',
        'tag2': jQuery("#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение стоимости жилья
  if (jQuery('.ga_ipoteka_housecost_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_housecost_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение стоимости жилья',
        'tag2': jQuery("#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65').siblings('.input-number__button.input-number__button_up ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение стоимости жилья',
        'tag2': jQuery("#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram, #propertyPrice_Refinance, #propertyPrice_Zalogovaya, #propertyPrice_Pobeda, #propertyPrice_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение первоначального взноса
  if (jQuery('.ga_ipoteka_firstdonation_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_firstdonation_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение первоначального взноса',
        'tag2': jQuery("#downPayment_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#propertyPrice_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65').siblings('.input-number__button.input-number__button_down ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение первоначального взноса',
        'tag2': jQuery("#downPayment_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение первоначального взноса
  if (jQuery('.ga_ipoteka_firstdonation_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_firstdonation_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение первоначального взноса',
        'tag2': jQuery("#downPayment_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#downPayment_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65').siblings('.input-number__button.input-number__button_up ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение первоначального взноса',
        'tag2': jQuery("#downPayment_NewBuildingProgram, #downPayment_ResaleProgram, #downPayment_Zalogovaya, #downPayment_Pobeda, #downPayment_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение дохода
  if (jQuery('.ga_ipoteka_earnings_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_earnings_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение дохода',
        'tag2': jQuery("#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65').siblings('.input-number__button.input-number__button_down ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение дохода',
        'tag2': jQuery("#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение дохода
  if (jQuery('.ga_ipoteka_earnings_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_earnings_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение дохода',
        'tag2': jQuery("#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65').siblings('.input-number__button.input-number__button_up ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение дохода',
        'tag2': jQuery("#monthlyIncome_NewBuildingProgram, #monthlyIncome_ResaleProgram, #monthlyIncome_Zalogovaya, #monthlyIncome_Pobeda, #monthlyIncome_NewBuildingProgram65").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение Остатка долга по ипотеке (Рефинансирование)
  if (jQuery('.ga_ipoteka_debt_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_debt_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение остатка долга по ипотеке',
        'tag2': jQuery("#debtLeftover_Refinance").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#debtLeftover_Refinance').siblings('.input-number__button.input-number__button_down ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение остатка долга по ипотеке',
        'tag2': jQuery("#debtLeftover_Refinance").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение Остатка долга по ипотеке (Рефинансирование)
  if (jQuery('.ga_ipoteka_debt_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_debt_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение остатка долга по ипотеке',
        'tag2': jQuery("#debtLeftover_Refinance").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#debtLeftover_Refinance').siblings('.input-number__button.input-number__button_up ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение остатка долга по ипотеке',
        'tag2': jQuery("#debtLeftover_Refinance").val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение возраста (Ипотека для военных)
  if (jQuery('.ga_ipoteka_ageMilitary_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_ageMilitary_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение возраста',
        'tag2': String(jQuery("#ageMilitary").val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#ageMilitary').siblings('.input-number__button.input-number__button_down ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение возраста',
        'tag2': String(jQuery("#ageMilitary").val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение возраста (Ипотека для военных)
  if (jQuery('.ga_ipoteka_ageMilitary_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_ageMilitary_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение возраста',
        'tag2': String(jQuery("#ageMilitary").val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#ageMilitary').siblings('.input-number__button.input-number__button_up ').on('click', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение возраста',
        'tag2': String(jQuery("#ageMilitary").val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': undefined,
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение ежемесячного платежа
  if (jQuery('.ga_ipoteka_monthlyPayment_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_monthlyPayment_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag3': undefined,
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', '[for="monthlyPaymentByCost_NewBuildingProgram"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_NewBuildingProgram"] + span > .input-number__button_down, [for="monthlyPaymentByCost_ResaleProgram"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_ResaleProgram"] + span > .input-number__button_down, [for="monthlyPaymentByCost_Zalogovaya"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_Zalogovaya"] + span > .input-number__button_down, [for="monthlyPaymentByCost_Pobeda"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_Pobeda"] + span > .input-number__button_down, [for="monthlyPaymentByCost_NewBuildingProgram65"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_NewBuildingProgram65"] + span > .input-number__button_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag3': undefined,
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  }
  // Увеличение ежемесячного платежа
  if (jQuery('.ga_ipoteka_monthlyPayment_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_monthlyPayment_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag3': undefined,
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', '[for="monthlyPaymentByCost_NewBuildingProgram"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_NewBuildingProgram"] + span > .input-number__button_up, [for="monthlyPaymentByCost_ResaleProgram"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_ResaleProgram"] + span > .input-number__button_up, [for="monthlyPaymentByCost_Zalogovaya"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_Zalogovaya"] + span > .input-number__button_up, [for="monthlyPaymentByCost_Pobeda"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_Pobeda"] + span > .input-number__button_up, [for="monthlyPaymentByCost_NewBuildingProgram65"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_NewBuildingProgram65"] + span > .input-number__button_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag3': undefined,
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  }
  // Уменьшение срока кредита
  if (jQuery('.ga_ipoteka_creditTerm_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditTerm_down', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' ? jQuery('[for^="creditTermByCost"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="creditTermByIncome"] + span > .input-number__button_down').siblings('input');
      // console.log(_amount_ + ' / ' + _term1_);
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditTermByCost_NewBuildingProgram"] + span > .input-number__button_down, [for="creditTermByIncome_NewBuildingProgram"] + span > .input-number__button_down, [for="creditTermByCost_ResaleProgram"] + span > .input-number__button_down, [for="creditTermByIncome_ResaleProgram"] + span > .input-number__button_down, [for="creditTermByCost_Zalogovaya"] + span > .input-number__button_down, [for="creditTermByIncome_Zalogovaya"] + span > .input-number__button_down, [for="creditTermByCost_Pobeda"] + span > .input-number__button_down, [for="creditTermByIncome_Pobeda"] + span > .input-number__button_down, [for="creditTermByCost_NewBuildingProgram65"] + span > .input-number__button_down, [for="creditTermByIncome_NewBuildingProgram65"] + span > .input-number__button_down', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' ? jQuery('[for^="creditTermByCost"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="creditTermByIncome"] + span > .input-number__button_down').siblings('input');
      // console.log(_amount_ + ' / ' + _term1_);
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение срока кредита
  if (jQuery('.ga_ipoteka_creditTerm_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditTerm_up', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' ? jQuery('[for^="creditTermByCost"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="creditTermByIncome"] + span > .input-number__button_down').siblings('input');
      // console.log(_amount_ + ' / ' + _term1_);
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditTermByCost_NewBuildingProgram"] + span > .input-number__button_up, [for="creditTermByIncome_NewBuildingProgram"] + span > .input-number__button_up, [for="creditTermByCost_ResaleProgram"] + span > .input-number__button_up, [for="creditTermByIncome_ResaleProgram"] + span > .input-number__button_up, [for="creditTermByCost_Zalogovaya"] + span > .input-number__button_up, [for="creditTermByIncome_Zalogovaya"] + span > .input-number__button_up, [for="creditTermByCost_Pobeda"] + span > .input-number__button_up, [for="creditTermByIncome_Pobeda"] + span > .input-number__button_up, [for="creditTermByCost_NewBuildingProgram65"] + span > .input-number__button_up, [for="creditTermByIncome_NewBuildingProgram65"] + span > .input-number__button_up', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' ? jQuery('[for^="creditTermByCost"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="creditTermByIncome"] + span > .input-number__button_down').siblings('input');
      // console.log(_amount_ + ' / ' + _term1_);
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение суммы кредита
  if (jQuery('.ga_ipoteka_creditSum_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditSum_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditSumByIncome_NewBuildingProgram"] + span > .input-number__button_down, [for="creditSumByIncome_ResaleProgram"] + span > .input-number__button_down, [for="creditSumByIncome_Zalogovaya"] + span > .input-number__button_down, [for="creditSumByIncome_Pobeda"] + span > .input-number__button_down, [for="creditSumByIncome_NewBuildingProgram65"] + span > .input-number__button_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение суммы кредита
  if (jQuery('.ga_ipoteka_creditSum_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditSum_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditSumByIncome_NewBuildingProgram"] + span > .input-number__button_up, [for="creditSumByIncome_ResaleProgram"] + span > .input-number__button_up, [for="creditSumByIncome_Zalogovaya"] + span > .input-number__button_up, [for="creditSumByIncome_Pobeda"] + span > .input-number__button_up, [for="creditSumByIncome_NewBuildingProgram65"] + span > .input-number__button_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // <!-- РЕФИНАНСИРОВАНИЕ -->
  // Уменьшение суммы на руки
  if (jQuery('.ga_ipoteka_handsSum_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_handsSum_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы на руки',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="extraMoneyLoanNeatSum_Refinance"] + span > .input-number__button_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы на руки',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение суммы на руки
  if (jQuery('.ga_ipoteka_handsSum_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_handsSum_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы на руки',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="extraMoneyLoanNeatSum_Refinance"] + span > .input-number__button_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы на руки',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение нового платежа
  if (jQuery('.ga_ipoteka_newPayment_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_newPayment_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение нового платежа',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="smallerPaymentNewMonthlyPaymentSum_Refinance"] + span > .input-number__button_down, [for="extraMoneyNewPaymentSum_Refinance"] + span > .input-number__button_down', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение нового платежа',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение нового платежа
  if (jQuery('.ga_ipoteka_newPayment_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_newPayment_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение нового платежа',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="smallerPaymentNewMonthlyPaymentSum_Refinance"] + span > .input-number__button_up, [for="extraMoneyNewPaymentSum_Refinance"] + span > .input-number__button_up', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение нового платежа',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение срока кредита
  if (jQuery('.ga_ipoteka_creditTerm_down').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditTerm_down', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'ДополнительныеденьгиДо 450 000 рублей на руки' ? jQuery('[for^="extraMoneyLoanPeriod"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="smallerPaymentLoanPeriod"] + span > .input-number__button_down').siblings('input');
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="smallerPaymentLoanPeriod_Refinance"] + span > .input-number__button_down, [for="extraMoneyLoanPeriod_Refinance"] + span > .input-number__button_down', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'ДополнительныеденьгиДо 450 000 рублей на руки' ? jQuery('[for^="extraMoneyLoanPeriod"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="smallerPaymentLoanPeriod"] + span > .input-number__button_down').siblings('input');
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение срока кредита
  if (jQuery('.ga_ipoteka_creditTerm_up').length) {
    jQuery(document).on('click', '.ga_ipoteka_creditTerm_up', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'ДополнительныеденьгиДо 450 000 рублей на руки' ? jQuery('[for^="extraMoneyLoanPeriod"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="smallerPaymentLoanPeriod"] + span > .input-number__button_down').siblings('input');
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="smallerPaymentLoanPeriod_Refinance"] + span > .input-number__button_up, [for="extraMoneyLoanPeriod_Refinance"] + span > .input-number__button_up', function() {
      _term1_ = jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'ДополнительныеденьгиДо 450 000 рублей на руки' ? jQuery('[for^="extraMoneyLoanPeriod"] + span > .input-number__button_down').siblings('input') : jQuery('[for^="smallerPaymentLoanPeriod"] + span > .input-number__button_down').siblings('input');
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срока кредита',
        'tag2': String(_term1_.val().replace(/\s/g, '') * 12),
        'tag3': undefined,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'increment': 1,
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // <!-- ВТОРОЙ ЭТАП -->
  // Клик Оформить заявку верхний баннер
  if (jQuery('.ga_ipoteka_upBannerAppClck').length) {
    jQuery(document).on('click', '.ga_ipoteka_upBannerAppClck', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Верхний баннер',
        'eventLabel': jQuery(this).text(),
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ipoteka_upBannerAppClck');}
    });
  } else {
    jQuery(document).on('click', 'a.button.button_big.button_red', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Верхний баннер',
        'eventLabel': jQuery(this).text(),
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ipoteka_upBannerAppClck');}
    });
  }
  // Клик Оформить заявку Нижняя часть страницы
  if (jQuery('.ga_ipoteka_downAppClck').length) {
    jQuery(document).on('click', '.ga_ipoteka_downAppClck', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Нижняя часть страницы',
        'eventLabel': jQuery(this).text(),
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ipoteka_downAppClck');}
    });
  } else {
    jQuery(document).on('click', '.sms-block__form .button.button_red', function() {
      tabtxt_ = jQuery('.tab-panel__tab.active').text().trim();
      ref_ = tabtxt_ == 'Рефинансирование' ? tabtxt_ + ' ипотеки' : tabtxt_;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + ref_,
        'eventAction': 'Нижняя часть страницы',
        'eventLabel': jQuery(this).text(),
        'amount': undefined,
        'term': undefined
      })
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ipoteka_downAppClck');}
    });
  }