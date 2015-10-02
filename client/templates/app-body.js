Template.appBody.onCreated(function () {
    var setLang = function () {
        accountsUIBootstrap3.setLanguage(TAPi18n.getLanguage());
    };
    setLang();
    TAPi18n._afterUILanguageChange = setLang;
});
