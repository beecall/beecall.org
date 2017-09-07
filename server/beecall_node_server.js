var http = require('http');
var path = require('path');
var ejs = require('ejs');
var express = require('express');
var cookieParser = require('cookie-parser');
var languageParser = require('./utils/languageParser');
var home_language_en = require('./views/home/home_language_en');
var home_language_zh = require('./views/home/home_language_zh');

var app = express();
app.engine('html', ejs.renderFile);
app.set('x-powered-by',false);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.use(cookieParser());
app.use(languageParser('siteLanguage','en')); //default language English


app.use("/static", express.static(path.join(__dirname, '../static'), {
    maxAge: 1000 * 60 * 60 * 24 * 365
}));


app.get('/', function (req, res) {
    var siteLanguage = req.siteLanguage;
    var req_query = req.query;
    var isDev = !!req_query.isDev;

    var userAgent = req.headers['user-agent'];
    var isIPhone = userAgent.indexOf('iPhone') >= 0;
    var isAndroid = userAgent.indexOf("Android") >=0;
    var isMobile = (isAndroid || isIPhone);

    var i18n = home_language_en;
    if (siteLanguage === 'zh') {
        i18n = home_language_zh;
    }
    res.render('home/home.html', {
        i18n: i18n,
        siteLanguage:siteLanguage,
        isMobile: isMobile,
        jspath: (isDev ? 'src' : 'asset')
    },function(aaa,bbb){
        bbb = bbb.replace(/\n/gm,'');
        bbb = bbb.replace(/\s{2,}/mg,' ');
        res.send(bbb);
    });

});


http.createServer(app).listen(3001, 'localserver');
console.log('Server running at localserver:3001');