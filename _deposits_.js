//console.log("++++++++++++deposits.js is loaded from git++++++++++++++");
if (document.location.href.indexOf('/personal/vklady-i-scheta/podobrat-vklad/') == -1) {
  // Клик по "Рассчитать"
  if (jQuery('.ga_deposit_calc_calculate').length) {
    jQuery(document).on('click', '.ga_deposit_calc_calculate', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': jQuery('#sum').val().replace(/\s/g, "") + '/' + Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
        'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
        'tag4': jQuery('.pickup-contribution__conditions-actions .button-group__item.active').text().trim().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_calculate');
      }
    })
  } else {
    jQuery(document).on('click', 'input[value="Рассчитать"]', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "Рассчитать"',
        'tag2': jQuery('#sum').val().replace(/\s/g, "") + '/' + Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
        'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
        'tag4': jQuery('.pickup-contribution__conditions-actions .button-group__item.active').text().trim().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_calculate');
      }
    })
  }
  //  'Клик по "Открыть в отделении"' /  'Клик по "Открыть в интернет-банке"'
  if (jQuery('.ga_deposit_calc_openInBranch').length) {
    jQuery(document).on('click', '.ga_deposit_calc_openInBranch', function() {
      var curr = jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().length - 1;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "' + jQuery('a.button.button_red.button_big.ng-binding').text() + '"',
        'tag2': jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().replace(/\s/g, "").replace(/.$/g, ""),
        'tag3': jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().charAt(curr),
        'tag4': jQuery('.pickup-contribution__conditions-actions .button-group__item.active').text().trim().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_openInBranch');
      }
    })
  } else {
    jQuery(document).on('click', 'a.button.button_red.button_big.ng-binding', function() {
      var curr = jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().length - 1;
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Клик по "' + jQuery('a.button.button_red.button_big.ng-binding').text() + '"',
        'tag2': jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().replace(/\s/g, "").replace(/.$/g, ""),
        'tag3': jQuery('.deposit-detail-calc__res div:contains(" в конце срока")~div').text().charAt(curr),
        'tag4': jQuery('.pickup-contribution__conditions-actions .button-group__item.active').text().trim().replace(/\s/g, ''),
        'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
        'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
      });
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_openInBranch');
      }
    })
  }
  // Изменение суммы вклада
  if (jQuery('.ga_deposit_calc_depositSum').length) {
    jQuery(document).on('change', '.ga_deposit_calc_depositSum', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Изменение суммы вклада',
        'tag2': jQuery('input#sum').val().replace(/\s/g, ''),
        'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_depositSum');
      }
    })
  } else {
    jQuery(document).on('change', 'input#sum', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Калькулятор',
        'eventLabel': 'Изменение суммы вклада',
        'tag2': jQuery('input#sum').val().replace(/\s/g, ''),
        'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
        'tag4': undefined,
        'amount': undefined,
        'term': undefined,
        'increment': 1
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_calc_depositSum');
      }
    })
  }
  // Увеличение/Уменьшение срока // Срабатывает 1 раз
  var depositTerm = undefined
  var depositTerm_new = undefined
  if (jQuery('.ga_deposit_calc_depositTerm').length) {
    jQuery(document).one('focus', '.ga_deposit_calc_depositTerm', function() {
      depositTerm = jQuery('.ga_deposit_calc_depositTerm').val().replace(/\s/g, '')
      jQuery(document).one('change', '.ga_deposit_calc_depositTerm', function() {
        depositTerm_new = jQuery('.ga_deposit_calc_depositTerm').val().replace(/\s/g, '')
        if (depositTerm > depositTerm_new) {
          dataLayer.push({
            'event': 'UA event',
            'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
            'eventAction': 'Калькулятор',
            'eventLabel': 'Уменьшение срока',
            'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
            'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
            'tag4': undefined,
            'amount': undefined,
            'term': undefined,
            'increment': 1
          })
          if (typeof yaCounter47142057 != "undefined") {
            yaCounter47142057.reachGoal('ym_deposit_calc_depositTermDecrease');
          }
        } else if (depositTerm < depositTerm_new) {
          dataLayer.push({
            'event': 'UA event',
            'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
            'eventAction': 'Калькулятор',
            'eventLabel': 'Увеличение срока',
            'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
            'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
            'tag4': undefined,
            'amount': undefined,
            'term': undefined,
            'increment': 1
          })
          if (typeof yaCounter47142057 != "undefined") {
            yaCounter47142057.reachGoal('ym_deposit_calc_depositTermIncrease');
          }
        }
      })
    })
  } else {
    jQuery(document).one('focus', 'input#days', function() {
      depositTerm = jQuery('input#days').val().replace(/\s/g, '')
      jQuery(document).one('change', 'input#days', function() {
        depositTerm_new = jQuery('input#days').val().replace(/\s/g, '')
        if (depositTerm > depositTerm_new) {
          dataLayer.push({
            'event': 'UA event',
            'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
            'eventAction': 'Калькулятор',
            'eventLabel': 'Уменьшение срока',
            'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
            'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
            'tag4': undefined,
            'amount': undefined,
            'term': undefined,
            'increment': 1
          })
          if (typeof yaCounter47142057 != "undefined") {
            yaCounter47142057.reachGoal('ym_deposit_calc_depositTermDecrease');
          }
        } else if (depositTerm < depositTerm_new) {
          dataLayer.push({
            'event': 'UA event',
            'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
            'eventAction': 'Калькулятор',
            'eventLabel': 'Увеличение срока',
            'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
            'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
            'tag4': undefined,
            'amount': undefined,
            'term': undefined,
            'increment': 1
          })
          if (typeof yaCounter47142057 != "undefined") {
            yaCounter47142057.reachGoal('ym_deposit_calc_depositTermIncrease');
          }
        }
      })
    })
  }
}
  // <!-- Подбор вклада -->
  if (document.location.href.indexOf('/personal/vklady-i-scheta/podobrat-vklad/') > -1) {
    // Изменение суммы вклада
    if (jQuery('.ga_depositSelection_depositSum').length) {
      jQuery(document).on('change', '.ga_depositSelection_depositSum', function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Изменение суммы вклада',
          'tag2': jQuery('input#sum').val().replace(/\s/g, ''),
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_depositSum');
        }
      })
    } else {
      jQuery(document).on('change', 'input#sum', function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Изменение суммы вклада',
          'tag2': jQuery('input#sum').val().replace(/\s/g, ''),
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': undefined,
          'amount': undefined,
          'term': undefined,
          'increment': 1
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_depositSum');
        }
      })
    }
    // Увеличение/Уменьшение срока // Срабатывает 1 раз
    var depositTerm = undefined
    var depositTerm_new = undefined
    if (jQuery('.ga_depositSelection_depositTerm').length) {
      jQuery(document).one('focus', '.ga_depositSelection_depositTerm', function() {
        depositTerm = jQuery('.ga_depositSelection_depositTerm').val().replace(/\s/g, '')
        jQuery(document).one('change', '.ga_depositSelection_depositTerm', function() {
          depositTerm_new = jQuery('.ga_depositSelection_depositTerm').val().replace(/\s/g, '')
          if (depositTerm > depositTerm_new) {
            dataLayer.push({
              'event': 'UA event',
              'eventCategory': 'Вклады / ' + 'Подбор вклада',
              'eventAction': 'Калькулятор',
              'eventLabel': 'Уменьшение срока',
              'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
              'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
              'tag4': undefined,
              'amount': undefined,
              'term': undefined,
              'increment': 1
            })
            if (typeof yaCounter47142057 != "undefined") {
              yaCounter47142057.reachGoal('ym_depositSelection_depositTermDecrease');
            }
          } else if (depositTerm < depositTerm_new) {
            dataLayer.push({
              'event': 'UA event',
              'eventCategory': 'Вклады / ' + 'Подбор вклада',
              'eventAction': 'Калькулятор',
              'eventLabel': 'Увеличение срока',
              'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
              'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
              'tag4': undefined,
              'amount': undefined,
              'term': undefined,
              'increment': 1
            })
            if (typeof yaCounter47142057 != "undefined") {
              yaCounter47142057.reachGoal('ym_depositSelection_depositTermIncrease');
            }
          }
        })
      })
    } else {
      jQuery(document).one('focus', 'input#days', function() {
        depositTerm = jQuery('input#days').val().replace(/\s/g, '')
        jQuery(document).one('change', 'input#days', function() {
          depositTerm_new = jQuery('input#days').val().replace(/\s/g, '')
          if (depositTerm > depositTerm_new) {
            dataLayer.push({
              'event': 'UA event',
              'eventCategory': 'Вклады / ' + 'Подбор вклада',
              'eventAction': 'Калькулятор',
              'eventLabel': 'Уменьшение срока',
              'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
              'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
              'tag4': undefined,
              'amount': undefined,
              'term': undefined,
              'increment': 1
            })
            if (typeof yaCounter47142057 != "undefined") {
              yaCounter47142057.reachGoal('ym_depositSelection_depositTermDecrease');
            }
          } else if (depositTerm < depositTerm_new) {
            dataLayer.push({
              'event': 'UA event',
              'eventCategory': 'Вклады / ' + 'Подбор вклада',
              'eventAction': 'Калькулятор',
              'eventLabel': 'Увеличение срока',
              'tag2': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
              'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
              'tag4': undefined,
              'amount': undefined,
              'term': undefined,
              'increment': 1
            })
            if (typeof yaCounter47142057 != "undefined") {
              yaCounter47142057.reachGoal('ym_depositSelection_depositTermIncrease');
            }
          }
        })
      })
    }
    // Клик по "Рассчитать"
    if (jQuery('.ga_depositSelection_calculate').length) {
      jQuery(document).on('click', '.ga_depositSelection_calculate', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Рассчитать"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': undefined,
          'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_calculate');
        }
      })
    } else {
      jQuery(document).on('click', '.button.button_common.pickup-contribution__footer-res', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Рассчитать"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': undefined,
          'amount': parseInt(jQuery("#sum").val().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_calculate');
        }
      })
    }
    // Клик по кнопке "Открыть в интернет-банке"
    if (jQuery('.ga_depositSelection_openInternetBank').length) {
      jQuery(document).on('click', '.ga_depositSelection_openInternetBank', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Открыть в интернет-банке"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_openInternetBank');
        }
      })
    } else {
      jQuery(document).on('click', '.deposit-item__footer-btn a:contains("Открыть в интернет-банке")', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Открыть в интернет-банке"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_openInternetBank');
        }
      })
    }
    // Клик по кнопке "Открыть в отделении"
    if (jQuery('.ga_depositSelection_openInDepartment').length) {
      jQuery(document).on('click', '.ga_depositSelection_openInDepartment', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Открыть в отделении"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_openInDepartment');
        }
      })
    } else {
      jQuery(document).on('click', '.deposit-item__footer-btn a:contains("Открыть в отделении")', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по "Открыть в отделении"',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_openInDepartment');
        }
      })
    }
    // Клик по названию вклада
    if (jQuery('.ga_depositSelection_vklad').length) {
      jQuery(document).on('click', '.ga_depositSelection_vklad', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по названию вклада',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_vklad');
        }
      })
    } else {
      jQuery(document).on('click', 'a[ng-bind="result.Deposit.Title"]', function() {
        snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
        popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Подбор вклада',
          'eventAction': 'Калькулятор',
          'eventLabel': 'Клик по названию вклада',
          'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
          'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
          'tag4': jQuery(this).text().replace(/\s/g, ''),
          'amount': parseInt(jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
          'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSelection_vklad');
        }
      })
    }
  }
  //ВТОРОЙ ЭТАП
  /*// Клик по верхнему баннеру
  if (jQuery('.ga_deposit_bannerClick').length) {
    jQuery(document).on('click', '.ga_deposit_bannerClick', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('.owl-item.active h3').text(),
        'eventAction': 'Верхний баннер',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_bannerClick');
      }
    })
  } else {
    jQuery(document).on('click', '.owl-item .button.button_big.button_red', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('.owl-item.active h3').text(),
        'eventAction': 'Верхний баннер',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_bannerClick');
      }
    })
  }*/
  // Клик по Рассчитать на странице Вклада
  if (jQuery('.ga_deposit_vkladCalc').length) {
    jQuery(document).on('click', '.ga_deposit_vkladCalc', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Рассчитать"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladCalc');
      }
    })
  } else {
    jQuery(document).on('click', '.promo-deposit__buttons a:contains("Рассчитать")', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Рассчитать"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladCalc');
      }
    })
  }
  // Клик по "Открыть в отделении" на странице Вклада
  if (jQuery('.ga_deposit_vkladOpenInBranch').length) {
    jQuery(document).on('click', '.ga_deposit_vkladOpenInBranch', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Открыть в отделении"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladOpenInBranch');
      }
    })
  } else {
    jQuery(document).on('click', '.promo-deposit__buttons a:contains("Открыть в отделении")', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Открыть в отделении"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladOpenInBranch');
      }
    })
  }
  // Клик по "Открыть в интернет-банке" на странице Вклада
  if (jQuery('.ga_deposit_vkladOpenInInet').length) {
    jQuery(document).on('click', '.ga_deposit_vkladOpenInInet', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Открыть в интернет-банке"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladOpenInInet');
      }
    })
  } else {
    jQuery(document).on('click', '.promo-deposit__buttons a:contains("Открыть в интернет-банке")', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Страница вклада',
        'eventLabel': 'Клик по "Открыть в интернет-банке"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_deposit_vkladOpenInInet');
      }
    })
  }
  // Клик по Рассчитать на странице Меню Вкладов
  if (jQuery('.ga_depositMenu_calc').length) {
    jQuery(document).on('click', '.ga_depositMenu_calc', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Меню вкладов',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_depositMenu_calc');
      }
    })
  } else {
    jQuery(document).on('click', '.deposit-item__footer-btn-pure-btn.button.button_red', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Меню вкладов',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_depositMenu_calc');
      }
    })
  }
  // Клик по Ставки и условия на странице Меню Вкладов
  if (jQuery('.ga_depositMenu_bid').length) {
    jQuery(document).on('click', '.ga_depositMenu_bid', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Меню вкладов',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_depositMenu_bid');
      }
    })
  } else {
    jQuery(document).on('click', 'span:contains("Ставки и условия")', function() {
      dataLayer.push({
        'event': 'UA event',
        'eventCategory': 'Вклады / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
        'eventAction': 'Меню вкладов',
        'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
      })
      if (typeof yaCounter47142057 != "undefined") {
        yaCounter47142057.reachGoal('ym_depositMenu_bid');
      }
    })
  }
  // Клик по "Найти отделение" на странице Обмен валют
  if (document.location.href.indexOf('/personal/platezhi-i-perevody/obmen-valjuty/') > -1) {
    if (jQuery('.ga_depositCurrencyChange_findBranch').length) {
      jQuery(document).on('click', '.ga_depositCurrencyChange_findBranch', function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Обмен валюты',
          'eventAction': jQuery(this).val(),
          'eventLabel': jQuery('#select2-method-container').text()
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositCurrencyChange_findBranch');
        }
      })
    } else {
      jQuery(document).on('click', '.button.button_red.button_big.button_big-and-small-on-medium', function() {
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Обмен валюты',
          'eventAction': jQuery(this).val(),
          'eventLabel': jQuery('#select2-method-container').text()
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositCurrencyChange_findBranch');
        }
      })
    }
  }
  // Клик по "Открыть счет" на странице Накопительный счет
  if (document.location.href.indexOf('/personal/vklady-i-scheta/scheta/nakopitelny-schet') > -1) {
    var _txtths = '_';
    if (jQuery('.ga_depositSavingsAcc_clickOpenAcc').length) {
      jQuery(document).on('click', '.ga_depositSavingsAcc_clickOpenAcc', function() {
        _txtths = jQuery(this).text().trim();
        jQuery(this).is(jQuery('.promo-deposit__card > p > .button.button_red')) ? _txtths = 'Клик по "' + jQuery(this).text() + '" (сверху)' : _txtths = 'Клик по "' + jQuery(this).text() + '"';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Накопительный счет',
          'eventAction': 'Страница счета',
          'eventLabel': _txtths,
          'tag2': jQuery('.tab-panel__tab.active').text().trim()
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSavingsAcc_clickOpenAcc');
        }
      });
    } else {
      jQuery(document).on('click', '.button.button_red', function() {
        _txtths = jQuery(this).text().trim();
        jQuery(this).is(jQuery('.promo-deposit__card > p > .button.button_red')) ? _txtths = 'Клик по "' + jQuery(this).text() + '" (сверху)' : _txtths = 'Клик по "' + jQuery(this).text() + '"';
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + 'Накопительный счет',
          'eventAction': 'Страница счета',
          'eventLabel': _txtths,
          'tag2': jQuery('.tab-panel__tab.active').text().trim()
        })
        if (typeof yaCounter47142057 != "undefined") {
          yaCounter47142057.reachGoal('ym_depositSavingsAcc_clickOpenAcc');
        }
      });
    }
  }
  // Изменение значений расчета (цифры на синем фоне). "Рассчитать доход" на странице Вклада
  var bidCh = jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '');
  var incCh = jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '');
  var sumCh = jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '');
  var CH = bidCh + '/' + incCh + '/' + sumCh;
  jQuery(document).on('click', '#calculation > div a', function() {
    setTimeout(function() {
      if (CH != jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '') + '/' + jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '') + '/' + jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '')) {
        bidCh = jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '');
        incCh = jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '');
        sumCh = jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '');
        CH = bidCh + '/' + incCh + '/' + sumCh;
        dataLayer.push({
          'event': 'UA event',
          'eventCategory': 'Вклады / ' + jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''),
          'eventAction': 'Калькулятор',
          'eventLabel': 'Изменение ' + CH,
          'tag2': jQuery('#sum').val().replace(/\s/g, "") + '/' + Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)),
          'tag3': jQuery('#calculation a[ng-bind="currency.Symbol"].active').text(),
          'tag4': jQuery('.pickup-contribution__conditions-actions .button-group__item.active').text().trim().replace(/\s/g, '')
        })
        return CH
      }
    }, 1000);
  });
