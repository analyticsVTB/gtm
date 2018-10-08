//console.log("++++++++++++morgage_calc.js is loaded from git++++++++++++++");
  var _amount_, _term_;

  function _amoter1_() {
    //console.log('_amoter1_');
    _amount_ = undefined;
    _term_ = undefined;
    if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' && jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
      _amount_ = jQuery('div#creditSumByCost_NewBuildingProgram.calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input#creditTermByCost_NewBuildingProgram').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо доходу' && jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
      _amount_ = jQuery('#creditSumByIncome_NewBuildingProgram').val().replace(/\D/g, '');
      _term_ = String(jQuery('input#creditTermByIncome_NewBuildingProgram').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо стоимости' && jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
      _amount_ = jQuery('div#creditSumByCost_ResaleProgram.calc-result__sum').text().replace(/\D/g, '');
      _term_ = String(jQuery('input#creditTermByCost_ResaleProgram').val().replace(/\s/g, '') * 12);
    } else if (jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, '') == 'Расчетпо доходу' && jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
      _amount_ = jQuery('#creditSumByIncome_ResaleProgram').val().replace(/\D/g, '');
      _term_ = String(jQuery('input#creditTermByIncome_ResaleProgram').val().replace(/\s/g, '') * 12);
    }
    return _amount_, _term_
  }
  var sel_ = '';
  // <!--  Ипотечный калькулятор -->
  // Уменьшение стоимости жилья
  if (jQuery('.ga_ipotekalk_propertyPrice_down').length) {
    jQuery(document).on('click', 'ga_ipotekalk_propertyPrice_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение стоимости жилья',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram').siblings('.input-number__button.input-number__button_down ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение стоимости жилья',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение стоимости жилья
  if (jQuery('.ga_ipotekalk_propertyPrice_up').length) {
    jQuery(document).on('click', 'ga_ipotekalk_propertyPrice_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение стоимости жилья',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#propertyPrice_NewBuildingProgram, #propertyPrice_ResaleProgram').siblings('.input-number__button.input-number__button_up ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение стоимости жилья',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение первоначального взноса
  if (jQuery('.ga_ipotekalk_firstPayment_down').length) {
    jQuery(document).on('click', 'ga_ipotekalk_firstPayment_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение первоначального взноса',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#downPayment_NewBuildingProgram, #downPayment_ResaleProgram').siblings('.input-number__button.input-number__button_down ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение первоначального взноса',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение первоначального взноса
  if (jQuery('.ga_ipotekalk_firstPayment_up').length) {
    jQuery(document).on('click', 'ga_ipotekalk_firstPayment_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение первоначального взноса',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#downPayment_NewBuildingProgram, #downPayment_ResaleProgram').siblings('.input-number__button.input-number__button_up ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение первоначального взноса',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение дохода
  if (jQuery('.ga_ipotekalk_earnings_down').length) {
    jQuery(document).on('click', 'ga_ipotekalk_earnings_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение дохода',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#monthlyIncome_ResaleProgram, #monthlyIncome_NewBuildingProgram').siblings('.input-number__button.input-number__button_down ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение дохода',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение дохода
  if (jQuery('.ga_ipotekalk_earnings_up').length) {
    jQuery(document).on('click', 'ga_ipotekalk_earnings_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение дохода',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery('#monthlyIncome_ResaleProgram, #monthlyIncome_NewBuildingProgram').siblings('.input-number__button.input-number__button_up ').click(function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение дохода',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag3': undefined,
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение суммы кредита
  if (jQuery('.ga_ipotekalk_creditSum_down').length) {
    jQuery(document).on('click', '.ga_ipotekalk_creditSum_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditSumByIncome_ResaleProgram"] + span > .input-number__button_down, [for="creditSumByIncome_NewBuildingProgram"] + span > .input-number__button_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение суммы кредита
  if (jQuery('.ga_ipotekalk_creditSum_up').length) {
    jQuery(document).on('click', '.ga_ipotekalk_creditSum_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditSumByIncome_ResaleProgram"] + span > .input-number__button_up, [for="creditSumByIncome_NewBuildingProgram"] + span > .input-number__button_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение суммы кредита',
        'tag2': jQuery(this).siblings('input').val().replace(/\s/g, ''),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение срок кредита
  if (jQuery('.ga_ipotekalk_creditTerm_down').length) {
    jQuery(document).on('click', '.ga_ipotekalk_creditTerm_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срок кредита',
        'tag2': String(jQuery(this).siblings('input').val().replace(/\s/g, '') * 12),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditTermByCost_NewBuildingProgram"] + span > .input-number__button_down, [for="creditTermByIncome_NewBuildingProgram"] + span > .input-number__button_down,[for="creditTermByCost_ResaleProgram"] + span > .input-number__button_down, [for="creditTermByIncome_ResaleProgram"] + span > .input-number__button_down', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Уменьшение срок кредита',
        'tag2': String(jQuery(this).siblings('input').val().replace(/\s/g, '') * 12),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Увеличение срок кредита
  if (jQuery('.ga_ipotekalk_creditTerm_up').length) {
    jQuery(document).on('click', '.ga_ipotekalk_creditTerm_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срок кредита',
        'tag2': String(jQuery(this).siblings('input').val().replace(/\s/g, '') * 12),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  } else {
    jQuery(document).on('click', '[for="creditTermByCost_NewBuildingProgram"] + span > .input-number__button_up, [for="creditTermByIncome_NewBuildingProgram"] + span > .input-number__button_up,[for="creditTermByCost_ResaleProgram"] + span > .input-number__button_up, [for="creditTermByIncome_ResaleProgram"] + span > .input-number__button_up', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Увеличение срок кредита',
        'tag2': String(jQuery(this).siblings('input').val().replace(/\s/g, '') * 12),
        'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
        'tag3': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      });
      //if (typeof yaCounter47142057 != "undefined") {
      //         yaCounter47142057.reachGoal('');}
    });
  }
  // Уменьшение ежемесячного платежа
  if (jQuery('.ga_ipotekalk_monthlyPayment_down').length) {
    jQuery(document).on('click', '.ga_ipotekalk_monthlyPayment_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', '[for="monthlyPaymentByCost_ResaleProgram"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_ResaleProgram"] + span > .input-number__button_down,[for="monthlyPaymentByCost_NewBuildingProgram"] + span > .input-number__button_down, [for="monthlyPaymentByIncome_NewBuildingProgram"] + span > .input-number__button_down', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Уменьшение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  }
  // Увеличение ежемесячного платежа
  if (jQuery('.ga_ipotekalk_monthlyPayment_up').length) {
    jQuery(document).on('click', '.ga_ipotekalk_monthlyPayment_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  } else {
    jQuery(document).on('click', '[for="monthlyPaymentByCost_ResaleProgram"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_ResaleProgram"] + span > .input-number__button_up,[for="monthlyPaymentByCost_NewBuildingProgram"] + span > .input-number__button_up, [for="monthlyPaymentByIncome_NewBuildingProgram"] + span > .input-number__button_up', function() {
      sel_ = jQuery(this).siblings('input')
      setTimeout(function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Увеличение ежемесячного платежа',
          'tag2': sel_.val().replace(/\s/g, ''),
          'tag4': jQuery('.simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        });
        //if (typeof yaCounter47142057 != "undefined") {
        //         yaCounter47142057.reachGoal('');}
      }, 1000);
    });
  }
  // Разделил id-шники чек-боксов Готовое жилье и Новостройка  ↓
  // Клик по "Рассчитать"
  if (jQuery('.ga_ipotekalk_calculate').length) {
    jQuery(document).on('click', '.ga_ipotekalk_calculate', function() {
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      }
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': String(parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, ''))),
        'tag4': undefined,
        'amount': parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipotekalk_calculate');
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') > -1) {
    jQuery(document).on('click', '.button.button_huge.button_common', function() {
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
      }
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital,
        'tag3': String(parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, ''))),
        'tag4': undefined,
        'amount': parseInt(jQuery('[name="propertyPrice"]').val().replace(/\s/g, '')) - parseInt(jQuery('[name^="downPayment_"]').val().replace(/\s/g, '')),
        'term': undefined
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_ipotekalk_calculate');
      }
    })
  }
  // Клик по "Распечатать"
  if (jQuery('.ga_ipotekalk_printer').length) {
    jQuery(document).on('click', '.ga_ipotekalk_printer', function() {
      _amoter1_();
      //console.log(_amount_ + ' / ' + _term_);
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Распечатать"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_printer');
        }
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Распечатать"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_printer');
        }
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') > -1) {
    jQuery(document).on('click', '.border-icon-link.icon-common-printer', function() {
      _amoter1_();
      //console.log(_amount_ + ' / ' + _term_);
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Распечатать"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_printer');
        }
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Распечатать"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_printer');
        }
      }
    })
  }
  // Клик по "Оформить заявку"
  if (jQuery('.ga_ipotekalk_statement').length) {
    jQuery(document).on('click', '.ga_ipotekalk_statement', function() {
      _amoter1_();
      //console.log(_amount_ + ' / ' + _term_);
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Оформить заявку"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_statement');
        }
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Оформить заявку"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_statement');
        }
      }
    })
  } else if (window.location.href.indexOf('ipotechnyj-kalkulyator') > -1) {
    jQuery(document).on('click', 'input.button.button_big.button_red', function() {
      _amoter1_();
      //console.log(_amount_ + ' / ' + _term_);
      if (jQuery('.tab-panel__tab.active').text().trim() == "Новостройка") {
        area = jQuery("#programId_NewBuildingProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_NewBuildingProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_NewBuildingProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_NewBuildingProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_NewBuildingProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Оформить заявку"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_statement');
        }
      } else if (jQuery('.tab-panel__tab.active').text().trim() == "Готовое жилье") {
        area = jQuery("#programId_ResaleProgram_1").prop('checked') ? 'Площадь+' : 'Площадь-';
        revenue = jQuery("#programId_ResaleProgram_2").prop('checked') ? 'Доход+' : 'Доход-';
        cart = jQuery("#clientTypeId_ResaleProgram_1").prop('checked') ? 'Карта+' : 'Карта-';
        menOfDeed = jQuery("#clientTypeId_ResaleProgram_2").prop('checked') ? 'ЛюдиДела+' : 'ЛюдиДела-';
        mothersCapital = jQuery("#maternialCapitalCheck_ResaleProgram").prop('checked') ? 'МатКапитал+' : 'МатКапитал-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Ипотека / ' + 'Ипотечный калькулятор - ' + jQuery('.tab-panel__tab.active').text(),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Оформить заявку"',
          'tag2': area + "/" + revenue + "/" + cart + "/" + menOfDeed + "/" + mothersCapital + ' / ' + jQuery('#form_NewBuildingProgram .simple-tab__heads-item.active a:first').text().trim().replace(/\n.*/g, ''),
          'tag3': _amount_,
          'tag4': _term_,
          'amount': parseInt(_amount_),
          'term': parseInt(_term_)
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_ipotekalk_statement');
        }
      }
    })
  }
