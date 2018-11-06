//console.log("++++++++++++autocredit.js is loaded from git++++++++++++++");
  var sel_ = '';
  // Клик по "Рассчитать"
  if (jQuery('.ga_avto_calculate').length) {
    jQuery(document).on('click', '.ga_avto_calculate', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': String(parseInt(jQuery('#price').val().replace(/\s/g, '')) - parseInt(jQuery('#first').val().replace(/\s/g, ''))),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
        'amount': parseInt(jQuery('#price').val().replace(/\s/g, '')) - parseInt(jQuery('#first').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_calculate');
      }
    })
  } else {
    jQuery(document).on('click', 'input.button.button_huge.button_common', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': String(parseInt(jQuery('#price').val().replace(/\s/g, '')) - parseInt(jQuery('#first').val().replace(/\s/g, ''))),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
        'amount': parseInt(jQuery('#price').val().replace(/\s/g, '')) - parseInt(jQuery('#first').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_calculate');
      }
    })
  }
  // Клик по "Распечатать"
  if (jQuery('.ga_avto_printer').length) {
    jQuery(document).on('click', '.ga_avto_printer', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_printer');
      }
    })
  } else {
    jQuery(document).on('click', 'A.border-icon-link.icon-common-printer', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_printer');
      }
    })
  }
  // Клик по "Распечатать" в Графике платежей
  jQuery(document).on('click', '.modal__body a.round-icon-link_print', function() {
    cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
    package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
    kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
    insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Распечатать" в Графике платежей',
      'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
      'amount': parseInt(jQuery('#price').val().replace(/\s/g, '')) - parseInt(jQuery('#first').val().replace(/\s/g, '')),
      'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
    })
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_avto_schPrinter');
    }
  })
  // Клик по "График платежей"
  if (jQuery('.ga_avto_paymentSchedule').length) {
    jQuery(document).on('click', '.ga_avto_paymentSchedule', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "График платежей"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_paymentSchedule');
      }
    })
  } else {
    jQuery(document).on('click', 'a.monthly_payment_button', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "График платежей"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_paymentSchedule');
      }
    })
  }
  // Клик по "Оформить заявку"
  if (jQuery('.ga_avto_statement').length) {
    jQuery(document).on('click', '.ga_avto_statement', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Оформить заявку"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_statement');
      }
    })
  } else {
    jQuery(document).on('click', 'input.button.button_big.button_red', function() {
      cart = jQuery('label:contains("Я получаю зарплату на карту ВТБ")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Зарплата+' : 'Зарплата-';
      package_ = jQuery('label:contains("Я готов предоставить полный пакет документов")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Пакет+' : 'Пакет-';
      kasko = jQuery('label:contains("С КАСКО")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Каско+' : 'Каско-';
      insurance = jQuery('label:contains("Со страхованием жизни")').closest('span').children('input[type="checkbox"]').is('.ng-not-empty') ? 'Страхование+' : 'Страхование-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Оформить заявку"',
        'tag2': cart + "/" + package_ + "/" + kasko + "/" + insurance,
        'tag3': jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, ''),
        'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(jQuery(this).parents('.simple-tab__content').children('div:nth-of-type(1)').children('div.calc-result__sum').text().replace(/\D/g, '')),
        'term': parseInt($('label:contains("Срок кредита, лет")~span input').val()) * 12
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_avto_statement');
      }
    })
  }
  // Уменьшение стоимости автомобиля
  jQuery('#price').siblings('.input-number__button.input-number__button_down ').on('click', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение стоимости автомобиля',
      'tag2': jQuery('#price').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_price_down');}
  });
  // Увеличение стоимости автомобиля
  jQuery('#price').siblings('.input-number__button.input-number__button_up ').on('click', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение стоимости автомобиля',
      'tag2': jQuery('#price').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_price_up');}
  });
  // Уменьшение первый взнос
  jQuery('#first').siblings('.input-number__button.input-number__button_down ').on('click', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение первый взнос',
      'tag2': jQuery('#first').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_firstPayment_down');}
  });
  // Увеличение первый взнос
  jQuery('#first').siblings('.input-number__button.input-number__button_up ').on('click', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение первый взнос',
      'tag2': jQuery('#first').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text(),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_firstPayment_up');}
  });
  // Уменьшение ежемесячный платеж
  if (jQuery('.ga_avto_monthlyPayment_down').length) {
    jQuery(document).on('click', '.ga_avto_firstPayment_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячный платеж',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('ym_avto_monthlyPayment_down');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', 'label:contains("Ежемесячный платеж")~span .input-number__button.input-number__button_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячный платеж',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('ym_avto_firstPayment_down');}
      }, 1000);
    });
  }
  // Увеличение ежемесячный платеж
  if (jQuery('.ga_avto_monthlyPayment_up').length) {
    jQuery(document).on('click', '.ga_avto_firstPayment_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячный платеж',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('ym_avto_monthlyPayment_up');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', 'label:contains("Ежемесячный платеж")~span .input-number__button.input-number__button_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячный платеж',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('ym_avto_monthlyPayment_up');}
      }, 1000);
    });
  }
  // Уменьшение срока
  jQuery(document).on('click', 'label:contains("Срок кредита, лет")~span .input-number__button.input-number__button_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение срока',
      'tag2': String(jQuery(this).siblings('input').val() * 12),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_creditTerm_down');}
  });
  // Увеличение срока
  jQuery(document).on('click', 'label:contains("Срок кредита, лет")~span .input-number__button.input-number__button_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение срока',
      'tag2': String(jQuery(this).siblings('input').val() * 12),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_creditTerm_up');}
  });
  // Уменьшение стоимость Каско
  jQuery(document).on('click', 'label:contains("Стоимость КАСКО, ₽")~span .input-number__button.input-number__button_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение стоимость Каско',
      'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_KaskoCost_down');}
  });
  // Увеличение стоимость Каско
  jQuery(document).on('click', 'label:contains("Стоимость КАСКО, ₽")~span .input-number__button.input-number__button_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + jQuery('a').is('.tab-panel__tab.active') ? jQuery('.tab-panel__tab.active').text().trim().replace(/\n.*/g, '') : jQuery('h1').text().trim().replace(/\n.*/g, ''),
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение стоимость Каско',
      'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
      'tag4': jQuery('.button-group__item.ng-binding.ng-scope.active').text() + ' - ' + jQuery('.simple-tab__heads-item.simple-tab__heads-item_small.active').text().trim().replace(/\n.*/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avto_KaskoCost_up');}
  });
  // <!-- ВТОРОЙ ЭТАП -->
 /* // Клик  'Заполнить заявку' / 'Узнать больше' верхний баннер
  jQuery(document).on('click', '.media-slider__inner .button.button_red.button_big, a.button.button_red:contains("Заполнить заявку")', function() {
    _this = jQuery(this).text().trim();
    _cat = jQuery('.tab-panel__tab.active').text().trim() == "" ? jQuery('h1').text().trim() : jQuery('.tab-panel__tab.active').text().trim();
    _tag2 = _this == "Заполнить заявку" ? jQuery('h1').text().trim() : jQuery(this).siblings('h3').text().trim();
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + _cat,
      'eventAction': 'Верхний баннер',
      'eventLabel': jQuery(this).text(),
      'tag2': _tag2,
      'tag3': undefined,
      'tag4': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': undefined
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avtokr_upBannerAppClck');}
  });*/
  // Клик Оформить заявку Нижняя часть страницы
  jQuery(document).on('click', '.sms-block__form a', function() {
    __cat = jQuery('.tab-panel__tab.active').text().trim() == "" ? jQuery('h1').text().trim() : jQuery('.tab-panel__tab.active').text().trim();
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Автокредиты / ' + __cat,
      'eventAction': 'Нижняя часть страницы',
      'eventLabel': jQuery(this).text(),
      'tag2': undefined,
      'tag3': undefined,
      'tag4': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': undefined
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_avtokr_downAppClck');}
  });
