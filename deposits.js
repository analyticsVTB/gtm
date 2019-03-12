	  //console.log("++++++++++++deposits.js is loaded from git++++++++++++++");
	  var url = new URL(window.location.href);
	var vklad_name = url.searchParams.get("name");
	 var v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
	 var btn_pos = null;
	 var active_tab = jQuery('.tab-panel__tab.active').text().trim();
	var page_type = '';
	var cat_name = v_name;
	switch(document.location.href){
				case 'https://www.vtb.ru/personal/vklady-i-scheta/':  
					page_type = " разводящей страницы вкладов";
					cat_name = active_tab ;
				break;
				case 'https://www.vtb.ru/personal/vklady-i-scheta/podobrat-vklad/':
					page_type = " разводящей страницы вкладов";
					cat_name = active_tab ;
				break;
				default: 
				page_type = " страницы вклада";
				cat_name = v_name ;
				}
	  
	if (document.location.href.indexOf('/personal/vklady-i-scheta/podobrat-vklad/') == -1) {
	  // Клик по "Рассчитать"
	  if (jQuery('.ga_deposit_calc_calculate').length) {
		jQuery(document).on('click', '.ga_deposit_calc_calculate', function() {
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
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
			yaCounter47142057.reachGoal(vklad_name+'-button-calculate');
		  }
		})
	  } else {
		jQuery(document).on('click', 'input[value="Рассчитать"]', function() {
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
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
			yaCounter47142057.reachGoal(vklad_name+'-button-calculate');
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
		  var eventAction = 'Тип не определился';
		if (jQuery('a.button.button_red.button_big.ng-binding').text() == 'Открыть в интернет-банке') {
			eventAction = 'online.vtb.ru';
			if (typeof yaCounter47142057 != "undefined") {
				yaCounter47142057.reachGoal('vklady-i-scheta-'+vklad_name+'-online.vtb.ru'); //value was like "vklady-i-scheta-komfoortnj-online.vtb.ru"
				yaCounter47142057.reachGoal('vklady-i-scheta-online.vtb.ru');
			}
		} else { // отделения или лажа
			if (jQuery('a.button.button_red.button_big.ng-binding').text() == 'Открыть в отделении'){
				eventAction = 'otdeleniya';
				if (typeof yaCounter47142057 != "undefined") {
					yaCounter47142057.reachGoal(vklad_name+'-otdeleniya');
					yaCounter47142057.reachGoal('vklad-otdeleniya');
				}
			}
		}
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
		  if (jQuery('a.button.button_red.button_big.ng-binding').text() == 'Открыть в интернет-банке') {
			eventAction = 'online.vtb.ru';
			if (typeof yaCounter47142057 != "undefined") {
				yaCounter47142057.reachGoal('vklady-i-scheta-'+vklad_name+'-online.vtb.ru'); //value was like "vklady-i-scheta-komfoortnj-online.vtb.ru"
				yaCounter47142057.reachGoal('vklady-i-scheta-online.vtb.ru');
			}
		} else { // отделения или лажа
			if (jQuery('a.button.button_red.button_big.ng-binding').text() == 'Открыть в отделении'){
				eventAction = 'otdeleniya';
				if (typeof yaCounter47142057 != "undefined") {
					yaCounter47142057.reachGoal(vklad_name+'-otdeleniya');
					yaCounter47142057.reachGoal('vklad-otdeleniya');
				}
			}
		}
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
			yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
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
			yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
		  }
		})
	  }
	  // Увеличение/Уменьшение срока // Срабатывает каждый раз
	  var depositTerm = undefined
	  var depositTerm_new = undefined
	  if (jQuery('.ga_deposit_calc_depositTerm').length) {
		jQuery(document).on('focus', '.ga_deposit_calc_depositTerm', function() {
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
				yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
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
				yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
			  }
			}
		  })
		})
	  } else {
		jQuery(document).on('focus', 'input#days', function() {
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
				yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
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
				yaCounter47142057.reachGoal('vklady-i-scheta-'+ vklad_name +'-calculator'); // value was like "vklady-i-scheta-komfoortnj-calculator"
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
		// Увеличение/Уменьшение срока // Срабатывает каждый раз
		var depositTerm = undefined
		var depositTerm_new = undefined
		if (jQuery('.ga_depositSelection_depositTerm').length) {
		  jQuery(document).on('focus', '.ga_depositSelection_depositTerm', function() {
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
		  jQuery(document).on('focus', 'input#days', function() {
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
			  'eventCategory': 'Вклады / ' + active_tab,
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
			  'eventCategory': 'Вклады / ' + active_tab,
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
			v_name = jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, '');
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab,
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по "Открыть в интернет-банке"',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': v_name, //jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, ''),
			  'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
			  'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSelection_openInternetBank');
			}
		  })
		} else {
		  jQuery(document).on('click', '.deposit-item__footer-btn a:contains("Открыть в интернет-банке")', function() {
			v_name = jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, '')
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab,
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по "Открыть в интернет-банке"',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': v_name,
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
			  v_name = jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, '');
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab,
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по "Открыть в отделении"',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': v_name,
			  'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
			  'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSelection_openInDepartment');
			}
		  })
		} else {
		  jQuery(document).on('click', '.deposit-item__footer-btn a:contains("Открыть в отделении")', function() {
			  v_name = jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().replace(/\s/g, '');
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab,
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по "Открыть в отделении"',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': v_name,
			  'amount': parseInt(jQuery(this).parents('.deposit-item__footer').siblings('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, '')),
			  'term': Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSelection_openInDepartment');
			}
		  })
		}
	  }
		
		// Клик по названию вклада
		
		if (jQuery('.ga_depositSelection_vklad').length) {
		  jQuery(document).on('click', '.ga_depositSelection_vklad', function() {
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			active_tab = jQuery('.tab-panel__tab.active').text().trim();
			var term_rounded = '';
			var amount_v = 0;
			if (jQuery("#days").val()) {
			term_rounded = Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
			} 
			if (jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text()){
				amount_v = parseInt(jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, ''))
			}
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab + ' / ' + jQuery(this).text().trim(), //.replace(/\s/g, ''),
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по названию вклада',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': jQuery(this).text().replace(/\s/g, ''),
			  'amount': amount_v,
			  'term':  term_rounded
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSelection_vklad');
			}
		  })
		} else {
		  jQuery(document).on('click', 'a[ng-bind="result.Deposit.Title"]', function() {
			snimat = jQuery('#partialWithdrawalCheck').is('.ng-not-empty') ? 'Снимать+' : 'Снимать-';
			popolnyat = jQuery('#replenishmentCheck').is('.ng-not-empty') ? 'Пополнять+' : 'Пополнять-';
			active_tab = jQuery('.tab-panel__tab.active').text().trim();
			var term_rounded = '';
			var amount_v = 0;
			if (jQuery("#days").val()) {
			term_rounded = Math.round(parseInt(jQuery("#days").val().replace(/\s/g, '')) / ((30 + 28.25 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12)) /* кол-во дней / на кол-во дней в среднем мес-це, округлить в ближ сторону */
			} 
			if (jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text()){
				amount_v = parseInt(jQuery(this).parents('.deposit-item__inner.clear-after.ng-isolate-scope').children('.deposit-item__content').children('.deposit-item__row').children('div:nth-of-type(3)').children('div:nth-of-type(2)').text().replace(/\s/g, ''))
			}
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + active_tab + ' / ' + jQuery(this).text().trim(), //.replace(/\s/g, ''),
			  'eventAction': 'Средняя часть страницы',
			  'eventLabel': 'Клик по названию вклада',
			  'tag2': jQuery('.button-group [aria-label="Снимать"].active, .button-group [aria-label="Накапливать"].active').text().replace(/\s/g, '') + ', ' + snimat + '/' + popolnyat,
			  'tag3': jQuery('a[ng-bind="pickerCurrency.Symbol"].active').text(),
			  'tag4': jQuery(this).text().replace(/\s/g, ''),
			  'amount': amount_v,
			  'term': term_rounded
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSelection_vklad');
			}
		  })
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
	  if (document.location.href.indexOf('/personal/vklady-i-scheta/podobrat-vklad/') == -1) {
	  if (jQuery('.ga_deposit_vkladCalc').length) {
		jQuery(document).on('click', '.ga_deposit_vkladCalc', function() {
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
			  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
			'eventAction': 'Верхняя часть страницы вклада',
			'eventLabel': 'Клик по "Рассчитать"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladCalc');
			yaCounter47142057.reachGoal(vklad_name + '-button-calculate');
		  }
		})
	  } else {
		jQuery(document).on('click', '.promo-deposit__buttons a:contains("Рассчитать")', function() {
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
			'eventAction': 'Верхняя часть страницы вклада',
			'eventLabel': 'Клик по "Рассчитать"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladCalc');
			yaCounter47142057.reachGoal(vklad_name + '-button-calculate');
			
		  }
		})
	  }
	  // Клик по "Открыть в отделении" на странице Вклада
	  
	  if (jQuery('.ga_deposit_vkladOpenInBranch').length) {
		jQuery(document).on('click', '.ga_deposit_vkladOpenInBranch', function() {
			var this_t = jQuery(this).text();
			switch(this_t){
				case 'Открыть в отделении':  btn_pos = "Верхняя часть";
				break;
				case 'отделении': btn_pos = "Нижняя часть";
				break;
			}
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / '+ v_name,
			'eventAction': btn_pos + page_type,
			'eventLabel': 'Клик по "Открыть в отделении"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladOpenInBranch');
			yaCounter47142057.reachGoal(vklad_name+'-otdeleniya');
			yaCounter47142057.reachGoal('vklad-otdeleniya');
		  }
		})
	  } else {
		jQuery(document).on('click', '.promo-deposit__buttons a:contains("Открыть в отделении"), .info-block__header a:contains("отделении")', function() {
			switch(jQuery(this).text()){
				case "Открыть в отделении":  btn_pos = "Верхняя часть";
				break;
				case "отделении": btn_pos = "Нижняя часть";
				break;
			}
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / '+ v_name,
			'eventAction': btn_pos + page_type,
			'eventLabel': 'Клик по "Открыть в отделении"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladOpenInBranch');
			yaCounter47142057.reachGoal(vklad_name+'-otdeleniya');
			yaCounter47142057.reachGoal('vklad-otdeleniya');
		  }
		})
	  }
	  // Клик по "Открыть в интернет-банке" на странице Вклада
	  if (jQuery('.ga_deposit_vkladOpenInInet').length) {
		jQuery(document).on('click', '.ga_deposit_vkladOpenInInet', function() {
			switch(jQuery(this).text()){
				case "Открыть в интернет-банке":  btn_pos = "Верхняя часть";
				break;
				case "ВТБ-Онлайн": btn_pos = "Нижняя часть";
				break;
			}
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
			'eventAction': btn_pos + page_type,
			'eventLabel': 'Клик по "Открыть в интернет-банке"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladOpenInInet');
			//vklad_name
			yaCounter47142057.reachGoal('vklady-i-scheta-'+vklad_name+'-online.vtb.ru'); //value was like "vklady-i-scheta-komfoortnj-online.vtb.ru"
			yaCounter47142057.reachGoal('vklady-i-scheta-online.vtb.ru');
		  }
		})
	  } else {
		jQuery(document).on('click', '.promo-deposit__buttons a:contains("Открыть в интернет-банке"), .info-block__header > a:contains("ВТБ-Онлайн")', function() {
			switch(jQuery(this).text()){
				case "Открыть в интернет-банке":  btn_pos = "Верхняя часть";
				break;
				case "ВТБ-Онлайн": btn_pos = "Нижняя часть";
				break;
			}
			v_name = jQuery('div.promo-deposit__content-inner h1').text().trim().replace(/\n.*/g, ''); 
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + v_name,
			'eventAction': btn_pos + page_type,
			'eventLabel': 'Клик по "Открыть в интернет-банке"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_deposit_vkladOpenInInet');
			yaCounter47142057.reachGoal('vklady-i-scheta-'+vklad_name+'-online.vtb.ru'); //value was like "vklady-i-scheta-komfoortnj-online.vtb.ru"
			yaCounter47142057.reachGoal('vklady-i-scheta-online.vtb.ru');
		  }
		})
	  }

	  
	  
	  
	  
	  
	  
	  // Клик по Рассчитать на странице Меню Вкладов
	  if (jQuery('.ga_depositMenu_calc').length) {
		jQuery(document).on('click', '.ga_depositMenu_calc', function() {
		  dataLayer.push({
			'event': 'UA event',
			'eventCategory': 'Вклады / ' + active_tab + ' / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
			'eventAction': 'Средняя часть страницы',
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
			'eventCategory': 'Вклады / '+ active_tab + ' / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
			'eventAction': 'Средняя часть страницы',
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
			'eventCategory': 'Вклады / ' + active_tab + ' / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
			'eventAction': 'Средняя часть страницы',
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
			'eventCategory': 'Вклады / ' + active_tab + ' / ' + jQuery(this).parents('.deposit-item__content').siblings('.deposit-item__head').children('h3').text().trim().replace(/\n.*/g, ''),
			'eventAction': 'Средняя часть страницы',
			'eventLabel': 'Клик по "' + jQuery(this).text() + '"'
		  })
		  if (typeof yaCounter47142057 != "undefined") {
			yaCounter47142057.reachGoal('ym_depositMenu_bid');
		  }
		})
	  }
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  // Клик по "Открыть счет" на странице Накопительный счет
	  if (document.location.href.indexOf('nakopitelny-schet') > -1) {
		var _txtths = '_';

		if (jQuery('.ga_depositSavingsAcc_clickOpenAcc').length) {
		  jQuery(document).on('click', '.ga_depositSavingsAcc_clickOpenAcc', function() {
			_txtths = jQuery(this).text().trim();
			jQuery(this).is(jQuery('.promo-deposit__card > p > .button.button_red')) ? _txtths = 'Клик по "' + jQuery(this).text() + '" (сверху)' : _txtths = 'Клик по "' + jQuery(this).text() + '"';
			jQuery(this).is(jQuery('.promo-deposit__card > p > .button.button_red')) ?  btn_pos = "Верхняя часть страницы" :  btn_pos = "Средняя часть страницы";
				
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + v_name   + ' / ' + active_tab,
			  'eventAction': btn_pos,
			  'eventLabel': _txtths,
			  'tag2': active_tab
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSavingsAcc_clickOpenAcc');
			}
		  });
		} else {
			// +  Клик по "ВТБ-онлайн" и "отделении" на странице Накопительный счет
			// +  Клик по "мультикарту" на странице Накопительный счет
		  jQuery(document).on('click', '.button.button_red, div.info-block__content > p > a:contains("ВТБ-Онлайн"), div.info-block__content > p > a:contains("отделении"), div.promo-deposit__card > p > a', function() {
			_txtths = jQuery(this).text().trim();
			switch(_txtths){
				case "ВТБ-онлайн":  btn_pos = "Средняя часть страницы";
				break;
				case "Мультикарту":  btn_pos = "Верхняя часть страницы";
				break;
				case "отделении": btn_pos = "Средняя часть страницы";
				break;
				//default: btn_pos = "неопределенная часть страницы счета";
			}
			
			jQuery(this).is(jQuery('.promo-deposit__card > p > .button.button_red')) ? _txtths = 'Клик по "' + jQuery(this).text() + '" (сверху)' : _txtths = 'Клик по "' + jQuery(this).text() + '"';
						
			dataLayer.push({
			  'event': 'UA event',
			  'eventCategory': 'Вклады / ' + v_name + ' / ' +   active_tab,
			  'eventAction': btn_pos,
			  'eventLabel': _txtths,
			  'tag2':  active_tab
			})
			if (typeof yaCounter47142057 != "undefined") {
			  yaCounter47142057.reachGoal('ym_depositSavingsAcc_clickOpenAcc');
			}
		  });
		}
		jQuery("section.simple-tab.simple-tab_queen-size.margin-slim-top.margin-middle-bottom > div.simple-tab__heads > div.simple-tab__header.clear-after > ul.simple-tab__heads-list.clear-after > li > a.simple-tab__heads-link > span, ol.order-list.order-list_steps > li > h4 > a:contains('Мультикарту ВТБ'), h4 > a:contains('Сбережения'), a.button.button_common").on('click', function() {
		 txt = $(this).text().replace(/\n.*/g, '');
		 console.log(txt);
		 switch(txt){
				case "«Сбережения»":  btn_pos = "Средняя часть страницы";
				break;
				case "Мультикарту ВТБ":  btn_pos = "Средняя часть страницы";
				break;
				case "Узнать больше": btn_pos = "Нижняя часть страницы";
				break;
				//Автопополнение
				case "Автопополнение": btn_pos = "Нижняя часть страницы";
				break;
				//Условия и преимущества
				case "Условия и преимущества": btn_pos = "Нижняя часть страницы";
				break;
				//default: btn_pos = "неопределенная часть страницы счета";
			}
		dataLayer.push({
		  'eventCategory': 'Вклады / ' + v_name  + ' / ' +  active_tab,
		  'eventAction': btn_pos,
		  'eventLabel': 'Клик по ' + txt,
		  'event': 'UA event'
		});
		if (typeof yaCounter47142057 != "undefined") 
		{
		yaCounter47142057.reachGoal('nakopitelny-schet_click_'+txt);
		}
	});
		
	  }
	  
	  
	  // Изменение значений расчета (цифры на синем фоне). "Рассчитать доход" на странице Вклада
	  var bidCh = jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '');
	  var incCh = jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '');
	  var sumCh = jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '');
	  var CH = bidCh + ' / ' + incCh + ' / ' + sumCh;
	  jQuery(document).on('click', '#calculation > div a', function() {
		setTimeout(function() {
		  if (CH != jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '') + ' / ' + jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '') + ' / ' + jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '')) {
			bidCh = jQuery('.deposit-detail-calc_stake .ng-binding').text().replace(/\s/g, '');
			incCh = jQuery('.deposit-detail-calc_income .ng-binding').text().replace(/\s/g, '');
			sumCh = jQuery('.deposit-detail-calc_sum .ng-binding').text().replace(/\s/g, '');
			CH = bidCh + ' / ' + incCh + ' / ' + sumCh;
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
	  
