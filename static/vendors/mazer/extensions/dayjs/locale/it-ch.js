!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_it_ch=o(e.dayjs)}(this,(function(e){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),t={name:"it-ch",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),ordinal:function(e){return e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"}};return n.default.locale(t,null,!0),t}));
