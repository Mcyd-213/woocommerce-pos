!function(a){"use strict";var b={2:function(a){return a?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};a.fn.select2.locales.sk={formatNoMatches:function(){return"Nenašli sa žiadne položky"},formatInputTooShort:function(a,c){var d=c-a.length;return 1==d?"Prosím, zadajte ešte jeden znak":4>=d?"Prosím, zadajte ešte ďalšie "+b[d](!0)+" znaky":"Prosím, zadajte ešte ďalších "+d+" znakov"},formatInputTooLong:function(a,c){var d=a.length-c;return 1==d?"Prosím, zadajte o jeden znak menej":d>=2&&4>=d?"Prosím, zadajte o "+b[d](!0)+" znaky menej":"Prosím, zadajte o "+d+" znakov menej"},formatSelectionTooBig:function(a){return 1==a?"Môžete zvoliť len jednu položku":a>=2&&4>=a?"Môžete zvoliť najviac "+b[a](!1)+" položky":"Môžete zvoliť najviac "+a+" položiek"},formatLoadMore:function(a){return"Načítavajú sa ďalšie výsledky…"},formatSearching:function(){return"Vyhľadávanie…"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.sk)}(jQuery),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(require("../moment")):"function"==typeof define&&define.amd?define(["moment"],b):b(a.moment)}(this,function(a){"use strict";function b(a){return a>1&&5>a}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pár sekúnd":"pár sekundami";case"m":return c?"minúta":e?"minútu":"minútou";case"mm":return c||e?f+(b(a)?"minúty":"minút"):f+"minútami";case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodín"):f+"hodinami";case"d":return c||e?"deň":"dňom";case"dd":return c||e?f+(b(a)?"dni":"dní"):f+"dňami";case"M":return c||e?"mesiac":"mesiacom";case"MM":return c||e?f+(b(a)?"mesiace":"mesiacov"):f+"mesiacmi";case"y":return c||e?"rok":"rokom";case"yy":return c||e?f+(b(a)?"roky":"rokov"):f+"rokmi"}}var d="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),e="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),f=a.defineLocale("sk",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return f});