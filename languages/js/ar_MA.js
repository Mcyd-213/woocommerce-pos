!function(a){"use strict";a.fn.select2.locales.ar={formatNoMatches:function(){return"لم يتم العثور على مطابقات"},formatInputTooShort:function(a,b){var c=b-a.length;return 1==c?"الرجاء إدخال حرف واحد على الأكثر":2==c?"الرجاء إدخال حرفين على الأكثر":"الرجاء إدخال "+c+" على الأكثر"},formatInputTooLong:function(a,b){var c=a.length-b;return 1==c?"الرجاء إدخال حرف واحد على الأقل":2==c?"الرجاء إدخال حرفين على الأقل":"الرجاء إدخال "+c+" على الأقل "},formatSelectionTooBig:function(a){return 1==a?"يمكنك أن تختار إختيار واحد فقط":2==a?"يمكنك أن تختار إختيارين فقط":"يمكنك أن تختار "+a+" إختيارات فقط"},formatLoadMore:function(a){return"تحميل المزيد من النتائج…"},formatSearching:function(){return"البحث…"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.ar)}(jQuery),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(require("../moment")):"function"==typeof define&&define.amd?define(["moment"],b):b(a.moment)}(this,function(a){"use strict";var b=a.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});return b});