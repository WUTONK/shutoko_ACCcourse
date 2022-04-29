if((navigator.language || navigator.browserLanguage).toLowerCase().includes('zh-cn'))   
{
    var _this = this;
      _this.$cookies.set("language", "Chinese");
       _this.$i18n.locale = _this.$cookies.get("language");
      // location.reload();
}

if ((navigator.language || navigator.browserLanguage).toLowerCase().includes('us-en'))

{
      var _this = this;
       _this.$cookies.set("language", "English");
       _this.$i18n.locale = _this.$cookies.get("language");
}

if ((navigator.language || navigator.browserLanguage).toLowerCase().includes('ja-jp'))

{
    var _this = this;
     _this.$cookies.set("language", "japanses");
     _this.$i18n.locale = _this.$cookies.get("language");
}