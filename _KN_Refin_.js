  // console.log("++++++++++++KN_refin.js is loaded from git++++++++++++++");
  //------------------------------Калькулятор - Целевые действия-----------------------------
  var cart, mortgage, staff, bankroll, sum, term, _insurance, _hasMulticard;
  //Клик на кнопку Рассчитать - КН  
  jQuery(document).on('click', '.ga_kn_calculate', function() {
    cart = jQuery("#test-check1").prop('checked') ? 'Карта+' : 'Карта-';
    // mortgage = jQuery("#test-check5").prop('checked') ? 'Ипотека+' : 'Ипотека-';
    _insurance = jQuery("#test-check5").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check6").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Рассчитать"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': jQuery("#sum").val().replace(/\s/g, ''),
      'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
      'term': parseInt(jQuery("#term").val().replace(/\s/g, ''))
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_kn_calculate');
    }
  });
  //Клик на кнопку Рассчитать - Рефинансирование
  jQuery(document).on('click', '.ga_ref_calculate', function() {
    cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
    // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
    _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Рассчитать"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': jQuery("#debt").val().replace(/\s/g, ''),
      'amount': parseInt(jQuery("#debt").val().replace(/\s/g, '')),
      'term': undefined
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_ref_calculate');
    }
  });
  //Клик по Распечатать - КН
  if (document.location.href.indexOf('refinansirovanie') < 0) {
    jQuery(document).on('click', '.ga_kn_printer', function() {
      cart = jQuery("#test-check1").prop('checked') ? 'Карта+' : 'Карта-';
      // mortgage = jQuery("#test-check5").prop('checked') ? 'Ипотека+' : 'Ипотека-';
      _insurance = jQuery("#test-check5").prop('checked') ? 'Страхование+' : 'Страхование-';
      _hasMulticard = jQuery("#test-check6").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + 'Кредит наличными',
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
        'tag3': jQuery("#sum").val().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': parseInt(jQuery("#term").val().replace(/\s/g, ''))
      });
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_kn_printer');
      }
    });
  }
  //Клик по Распечатать - Рефинансирование
  if (jQuery('.ga_ref_printer').length) {
    jQuery(document).on('click', '.ga_ref_printer', function() {
      cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
      // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
      // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
      _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
      _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
      sum = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#debt").val().replace(/\s/g, '') : jQuery("#on-hands").val().replace(/\s/g, '');
      term = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#term").val().replace(/\s/g, '') : jQuery("#new-term").val().replace(/\s/g, '');
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
        'tag3': sum,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(sum),
        'term': parseInt(term)
      });
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ref_printer');
      }
    });
  } else {
    jQuery(document).on('click', 'refund-credit .icon-common-printer', function() {
      cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
      // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
      // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
      _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
      _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
      sum = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#debt").val().replace(/\s/g, '') : jQuery("#on-hands").val().replace(/\s/g, '');
      term = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#term").val().replace(/\s/g, '') : jQuery("#new-term").val().replace(/\s/g, '');
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать"',
        'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
        'tag3': sum,
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'amount': parseInt(sum),
        'term': parseInt(term)
      });
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ref_printer');
      }
    });
  }
  //Клик по "График платежей" - КН
  jQuery(document).on('click', '.ga_kn_schedule', function() {
    cart = jQuery("#test-check1").prop('checked') ? 'Карта+' : 'Карта-';
    // mortgage = jQuery("#test-check5").prop('checked') ? 'Ипотека+' : 'Ипотека-';
    _insurance = jQuery("#test-check5").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check6").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "График платежей"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': jQuery("#sum").val().replace(/\s/g, ''),
      'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
      'term': parseInt(jQuery("#term").val().replace(/\s/g, ''))
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_kn_schedule');
    }
  });
  //Клик по "График платежей" - Рефинансирование
  jQuery(document).on('click', '.ga_ref_schedule', function() {
    cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
    // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
    _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    sum = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#debt").val().replace(/\s/g, '') : jQuery("#on-hands").val().replace(/\s/g, '');
    term = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#term").val().replace(/\s/g, '') : jQuery("#new-term").val().replace(/\s/g, '');
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "График платежей"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': sum,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': parseInt(sum),
      'term': parseInt(term)
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_ref_schedule');
    }
  });
  //Клик по "Распечатать" в Графике платежей  - КН
  jQuery(document).on('click', '.modal__body a.round-icon-link', function() {
    if ($('.tab-panel__tab.active').text().trim() != 'Рефинансирование') {
      cart = jQuery("#test-check1").prop('checked') ? 'Карта+' : 'Карта-';
      // mortgage = jQuery("#test-check5").prop('checked') ? 'Ипотека+' : 'Ипотека-';
      _insurance = jQuery("#test-check5").prop('checked') ? 'Страхование+' : 'Страхование-';
      _hasMulticard = jQuery("#test-check6").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + 'Кредит наличными',
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Распечатать" в Графике платежей',
        'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
        'tag3': jQuery("#sum").val().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': parseInt(jQuery("#term").val().replace(/\s/g, ''))
      });
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_kn_schPrinter');
      }
    }
  });
  //Клик по "Распечатать" Графике платежей - Рефинансирование
  jQuery(document).on('click', '.modal__body a.round-icon-link', function() {
    cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
    // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
    _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    sum = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#debt").val().replace(/\s/g, '') : jQuery("#on-hands").val().replace(/\s/g, '');
    term = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#term").val().replace(/\s/g, '') : jQuery("#new-term").val().replace(/\s/g, '');
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Распечатать" в Графике платежей',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': sum,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': parseInt(sum),
      'term': parseInt(term)
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_ref_schPrinter');
    }
  });
  //Клик на кнопку Оформить заявку - КН
  jQuery(document).on('click', '.ga_kn_statement', function() {
    cart = jQuery("#test-check1").prop('checked') ? 'Карта+' : 'Карта-';
    // mortgage = jQuery("#test-check5").prop('checked') ? 'Ипотека+' : 'Ипотека-';
    _insurance = jQuery("#test-check5").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check6").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Оформить заявку"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': jQuery("#sum").val().replace(/\s/g, ''),
      'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
      'term': parseInt(jQuery("#term").val().replace(/\s/g, ''))
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_kn_statement');
    }
  });
  //Клик на кнопку Оформить заявку - Рефинансирование
  jQuery(document).on('click', '.ga_ref_statement', function() {
    cart = jQuery("#test-check7").prop('checked') ? 'Карта+' : 'Карта-';
    // staff = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    // bankroll = jQuery("#test-check6").prop('checked') ? 'Доп.средства+' : 'Доп.средства-';
    _insurance = jQuery("#test-check8").prop('checked') ? 'Страхование+' : 'Страхование-';
    _hasMulticard = jQuery("#test-check12").prop('checked') ? 'Мультикарта+' : 'Мультикарта-';
    sum = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#debt").val().replace(/\s/g, '') : jQuery("#on-hands").val().replace(/\s/g, '');
    term = (jQuery('.simple-tab__heads-item.active a:first').text().indexOf('Сниженный') + 1) ? jQuery("#term").val().replace(/\s/g, '') : jQuery("#new-term").val().replace(/\s/g, '');
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Клик по "Оформить заявку"',
      'tag2': cart + "/" + _insurance + "/" + _hasMulticard,
      'tag3': sum,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': parseInt(sum),
      'term': parseInt(term)
    });
    if (typeof yaCounter47142057 != "undefined") {
      yaCounter47142057.reachGoal('ym_ref_statement');
    }
  });
  //-----------------------------------КН - Взаимедействие с калькулятором-----------------------------------
  // Уменьшение суммы кредита
  jQuery(document).on('click', '.ga_kn_sum_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение суммы кредита',
      'tag4': undefined,
      'tag2': jQuery("#sum").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение суммы кредита
  jQuery(document).on('click', '.ga_kn_sum_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение суммы кредита',
      'tag4': undefined,
      'tag2': jQuery("#sum").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение срока кредита
  jQuery(document).on('click', '.ga_kn_term_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение срока кредита',
      'tag4': undefined,
      'tag2': jQuery("#term").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение срока кредита
  jQuery(document).on('click', '.ga_kn_term_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение срока кредита',
      'tag4': undefined,
      'tag2': jQuery("#term").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение ежемесячного платежа
  jQuery(document).on('click', '.ga_kn_monthly_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение ежемесячного платежа',
      'tag4': undefined,
      'tag2': jQuery("#aside-block-input-4").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение ежемесячного платежа
  jQuery(document).on('click', '.ga_kn_monthly_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Кредит наличными',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение ежемесячного платежа',
      'tag4': undefined,
      'tag2': jQuery("#aside-block-input-4").val().replace(/\s/g, ''),
      'tag3': undefined,
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  //------------------------------------Рефинансирование - Взаимедействие с калькулятором-------------------------------------------------
  // Уменьшение ежемесячного платежа в других банках
  jQuery(document).on('click', '.ga_ref_monthly_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение ежемесячного платежа в других банках',
      'tag2': jQuery('#monthly-payments').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение ежемесячного платежа в других банках
  jQuery(document).on('click', '.ga_ref_monthly_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение ежемесячного платежа в других банках',
      'tag2': jQuery('#monthly-payments').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение остатка долга
  jQuery(document).on('click', '.ga_ref_dept_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение остатка долга',
      'tag2': jQuery('#debt').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение остатка долга
  jQuery(document).on('click', '.ga_ref_dept_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение остатка долга',
      'tag2': jQuery('#debt').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение нового платежа
  jQuery(document).on('click', '.ga_ref_newmonthly_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение нового платежа',
      'tag2': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Сниженный платеж' ? jQuery('#payment').val().replace(/\s/g, '') : jQuery('#new-payment').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение нового платежа
  jQuery(document).on('click', '.ga_ref_newmonthly_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение нового платежа',
      'tag2': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Сниженный платеж' ? jQuery('#payment').val().replace(/\s/g, '') : jQuery('#new-payment').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение нового срока
  jQuery(document).on('click', '.ga_ref_term_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение нового срока',
      'tag2': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Сниженный платеж' ? jQuery('#term').val().replace(/\s/g, '') : jQuery('#new-term').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение нового срока
  jQuery(document).on('click', '.ga_ref_term_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение нового срока',
      'tag2': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Сниженный платеж' ? jQuery('#term').val().replace(/\s/g, '') : jQuery('#new-term').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Уменьшение суммы кредита - только для второй вкладки
  jQuery(document).on('click', '.ga_ref_sum_down', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Уменьшение суммы кредита',
      'tag2': jQuery('#on-hands').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  // Увеличение суммы кредита - только для второй вкладки
  jQuery(document).on('click', '.ga_ref_sum_up', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + 'Рефинансирование кредита',
      'eventAction': 'Калькулятор',
      'eventLabel': 'Увеличение суммы кредита',
      'tag2': jQuery('#on-hands').val().replace(/\s/g, ''),
      'tag3': undefined,
      'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
      'amount': undefined,
      'term': undefined,
      'increment': 1
    });
  });
  //--------------------------------- <!-- ВТОРОЙ ЭТАП --> --------------------------------------------------
  // <!-- КН -->
   if (document.location.href.indexOf('www.vtb.ru/personal/kredit-nalichnymi/') > -1) {
     /*// Клик Заполнить заявку (КН) верхний баннер
     jQuery(document).on('click', 'a.button.button_big.button_red', function() {
       dataLayer.push({
         'event': 'UA event',
         'eventCategory': 'Кредиты / ' + jQuery(this).siblings('h3').text().trim(),
         'eventAction': 'Верхний баннер',
         'eventLabel': jQuery(this).text()
       });
       //if (typeof yaCounter47142057 != "undefined") {
       //         yaCounter47142057.reachGoal('ym_kn_upBannerAppClck');}
     });*/
  // Клик Оформить заявку (КН) нижняя часть страницы
  jQuery(document).on('click', '.margin-middle-bottom .button.button_red', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + jQuery('h1').text().trim(),
      'eventAction': 'Нижняя часть страницы',
      'eventLabel': jQuery(this).text()
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_kn_downBannerAppClck');}
  });
  //  'Условия' / 'Оформление кредита' / Название кликнутой ссылки
  jQuery(document).on('click', 'section.simple-tab.simple-tab_queen-size.margin-middle-top.margin-middle-bottom a', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + jQuery('h1').text().trim(),
      'eventAction': 'Блок под калькулятором',
      'eventLabel': jQuery(this).text()
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_kn_downLink');}
  });
   }
  // <!-- Рефинансирование кредита -->
  if (document.location.href.indexOf('www.vtb.ru/personal/kredit-nalichnymi/refinansirovanie/') > -1) {
   /* // Клик Оформить заявку (Рефинансирование) верхний баннер
    jQuery(document).on('click', 'a.button.button_big.button_red', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + jQuery(this).siblings('h3').text().trim() + ' кредита',
        'eventAction': 'Верхний баннер',
        'eventLabel': jQuery(this).text()
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ref_upBannerAppClck');}
    });*/
  // Клик Оформить заявку (Рефинансирование) Нижняя часть страницы
  jQuery(document).on('click', '.margin-middle-bottom .button.button_red', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + jQuery('h1').text().trim() + ' кредита',
      'eventAction': 'Нижняя часть страницы',
      'eventLabel': jQuery(this).text()
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_ref_downBannerAppClck');}
  });
  //  'Условия' / 'Оформление кредита' / Название кликнутой ссылки
  jQuery(document).on('click', 'section.simple-tab.simple-tab_queen-size.margin-middle-top.margin-middle-bottom a', function() {
    dataLayer.push({
      'event': 'UA event',
      'eventCategory': 'Кредиты / ' + jQuery('h1').text().trim() + ' кредита',
      'eventAction': 'Блок под калькулятором',
      'eventLabel': jQuery(this).text()
    });
    //if (typeof yaCounter47142057 != "undefined") {
    //         yaCounter47142057.reachGoal('ym_ref_downLink');}
  });
  }
  // <!--  Ипотечный бонус -->
  //   Ипотечный бонус оформить заявку
  if (document.location.href.indexOf('www.vtb.ru/personal/kredit-nalichnymi/ipotechniy-bonus/') > -1) {
    jQuery(document).on('click', 'a.button.button_red', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Кредиты / ' + jQuery('h1').text().trim(),
        'eventAction': jQuery(this).text(),
        'eventLabel': undefined
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('ym_ibonus_order');}
    });
  }

