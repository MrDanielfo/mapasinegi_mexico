var indicador = '1002000001'
var apiKey = '13390c1f-409d-083a-9ffb-5ced8f3267a5'

var mexicoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/00/es/false/json/' + apiKey

var agsTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/01/es/false/json/' + apiKey

var bcTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/02/es/false/json/' + apiKey

var bcsurTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/03/es/false/json/' + apiKey

var campecheTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/04/es/false/json/' + apiKey

var coahuilaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/05/es/false/json/' + apiKey

var colimaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/06/es/false/json/' + apiKey

var chiapasTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/07/es/false/json/' + apiKey

var chihuahuaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/08/es/false/json/' + apiKey

var cdmexicoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/09/es/false/json/' + apiKey

var durangoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/10/es/false/json/' + apiKey

var guanajuatoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/11/es/false/json/' + apiKey

var guerreroTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/12/es/false/json/' + apiKey

var hidalgoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/13/es/false/json/' + apiKey

var jaliscoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/14/es/false/json/' + apiKey

var edoMexTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/15/es/false/json/' + apiKey

var michoacanTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/16/es/false/json/' + apiKey

var morelosTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/17/es/false/json/' + apiKey

var nayaritTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/18/es/false/json/' + apiKey

var nleonTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/19/es/false/json/' + apiKey

var oaxacaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/20/es/false/json/' + apiKey

var pueblaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/21/es/false/json/' + apiKey

var queretaroTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/22/es/false/json/' + apiKey

var qrooTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/23/es/false/json/' + apiKey

var slpTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/24/es/false/json/' + apiKey

var sinaloaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/25/es/false/json/' + apiKey

var sonoraTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/26/es/false/json/' + apiKey

var tabascoTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/27/es/false/json/' + apiKey

var tamaulipasTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/28/es/false/json/' + apiKey

var tlaxcalaTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/29/es/false/json/' + apiKey

var veracruzTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/30/es/false/json/' + apiKey

var yucatanTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/31/es/false/json/' + apiKey

var zacatecasTotal = 'http://www3.inegi.org.mx//sistemas/api/indicadores/v1//Indicador/' + indicador + '/32/es/false/json/' + apiKey

$(document).ready(function(){
    $.getJSON(mexicoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorMexico = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorMexico += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorMexico += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorMexico += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorMexico += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorMexico += '</table>'
           $('#tablaMexico').append(mostradorMexico);
           //console.log(mostradorMexico);
    })
    //mexico total

    $.getJSON(agsTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorags = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorags += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorags += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorags += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorags += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorags += '</table>'
           $('#aguascalientes').append(mostradorags)
    })
    // termina Aguascalientes

    $.getJSON(bcTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorbc = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorbc += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorbc += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorbc += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorbc += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorbc += '</table>'
           $('#bajacalifornia').append(mostradorbc)
    })
    // termina BajaCalifornia

    $.getJSON(bcsurTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorbcsur = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorbcsur += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorbcsur += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorbcsur += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorbcsur += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorbcsur += '</table>'
           $('#bajacaliforniaSur').append(mostradorbcsur)
    })

    // termina BajaCalifornia Sur

    $.getJSON(campecheTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorcampeche = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorcampeche += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorcampeche += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorcampeche += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorcampeche += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorcampeche += '</table>'
           $('#campeche').append(mostradorcampeche)
    })

    // termina Campeche

    $.getJSON(coahuilaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorcoahuila = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorcoahuila += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorcoahuila += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorcoahuila += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorcoahuila += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorcoahuila += '</table>'
           $('#coahuila').append(mostradorcoahuila)
    })

    // termina Coahuila

    $.getJSON(colimaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorcolima = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorcolima += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorcolima += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorcolima += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorcolima += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorcolima += '</table>'
           $('#colima').append(mostradorcolima)
    })

    // termina Colima

    $.getJSON(chiapasTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorchiapas = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorchiapas += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorchiapas += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorchiapas += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorchiapas += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorchiapas += '</table>'
           $('#chiapas').append(mostradorchiapas)
    })

    // termina Chiapas

    $.getJSON(chihuahuaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorchihuahua = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorchihuahua += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorchihuahua += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorchihuahua += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorchihuahua += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorchihuahua += '</table>'
           $('#chihuahua').append(mostradorchihuahua)
    })


    // termina Chihuahua

    $.getJSON(cdmexicoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorcdMexico = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorcdMexico += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorcdMexico += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorcdMexico += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorcdMexico += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorcdMexico += '</table>'
           $('#cdMexico').append(mostradorcdMexico);
    })
    //  fin de ciudad de México

    $.getJSON(durangoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradordurango = '<table class="table table-hover" style="margin-top:50px;">'
           mostradordurango += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradordurango += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradordurango += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradordurango += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradordurango += '</table>'
           $('#durango').append(mostradordurango);
    })

    // termina durango

    $.getJSON(guanajuatoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorgto = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorgto += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorgto += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorgto += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorgto += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorgto += '</table>'
           $('#guanajuato').append(mostradorgto);
    })

    // termina guanajuato

    $.getJSON(guerreroTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorguerrero = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorguerrero += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorguerrero += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorguerrero += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorguerrero += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorguerrero += '</table>'
           $('#guerrero').append(mostradorguerrero);
    })
    // termina guerrero

    $.getJSON(hidalgoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorhgo = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorhgo += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorhgo += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorhgo += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorhgo += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorhgo += '</table>'
           $('#hidalgo').append(mostradorhgo);
    })

    // termina hidalgo

    $.getJSON(jaliscoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorjalisco = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorjalisco += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorjalisco += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorjalisco += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorjalisco += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorjalisco += '</table>'
           $('#jalisco').append(mostradorjalisco);
    })

    // fin de jalisco

    $.getJSON(edoMexTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradoredoMex = '<table class="table table-hover" style="margin-top:50px;">'
           mostradoredoMex += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradoredoMex += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradoredoMex += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradoredoMex += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradoredoMex += '</table>'
           $('#edoMex').append(mostradoredoMex);
    })

    // fin de EdoMex

    $.getJSON(michoacanTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradormichoacan = '<table class="table table-hover" style="margin-top:50px;">'
           mostradormichoacan += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradormichoacan += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradormichoacan += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradormichoacan += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradormichoacan += '</table>'
           $('#michoacan').append(mostradormichoacan);
    })

    // fin de Michoacán

    $.getJSON(morelosTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradormorelos = '<table class="table table-hover" style="margin-top:50px;">'
           mostradormorelos += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradormorelos += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradormorelos += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradormorelos += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradormorelos += '</table>'
           $('#morelos').append(mostradormorelos);
    })

    // fin de Morelos

    $.getJSON(nayaritTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradornayarit = '<table class="table table-hover" style="margin-top:50px;">'
           mostradornayarit += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradornayarit += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradornayarit += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradornayarit += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradornayarit += '</table>'
           $('#nayarit').append(mostradornayarit);
    })

    // fin de Nayarit

    $.getJSON(nleonTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradornleon = '<table class="table table-hover" style="margin-top:50px;">'
           mostradornleon += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradornleon += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradornleon += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradornleon += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradornleon += '</table>'
           $('#nleon').append(mostradornleon);
    })

    // fin de Nuevo León

    $.getJSON(oaxacaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradoroaxaca = '<table class="table table-hover" style="margin-top:50px;">'
           mostradoroaxaca += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradoroaxaca += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradoroaxaca += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradoroaxaca += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradoroaxaca += '</table>'
           $('#oaxaca').append(mostradoroaxaca);
    })

    // fin de Oaxaca

    $.getJSON(pueblaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorpuebla = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorpuebla += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorpuebla += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorpuebla += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorpuebla += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorpuebla += '</table>'
           $('#puebla').append(mostradorpuebla);
    })

    // fin de Puebla

    $.getJSON(queretaroTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorqueretaro = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorqueretaro += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorqueretaro += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorqueretaro += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorqueretaro += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorqueretaro += '</table>'
           $('#queretaro').append(mostradorqueretaro);
    })

    // fin de Querétaro

    $.getJSON(qrooTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorqroo = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorqroo += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorqroo += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorqroo += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorqroo += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorqroo += '</table>'
           $('#quintanaroo').append(mostradorqroo);
    })

    // fin de Quintana Roo

    $.getJSON(slpTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorslp = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorslp += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorslp += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorslp += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorslp += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorslp += '</table>'
           $('#sanluispotosi').append(mostradorslp);
    })

    // fin de San Luis Potosí

    $.getJSON(sinaloaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorsinaloa = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorsinaloa += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorsinaloa += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorsinaloa += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorsinaloa += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorsinaloa += '</table>'
           $('#sinaloa').append(mostradorsinaloa);
    })

    // fin de sinaloa

    $.getJSON(sonoraTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorsonora = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorsonora += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorsonora += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorsonora += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorsonora += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorsonora += '</table>'
           $('#sonora').append(mostradorsonora);
    })

    // fin de Sonora

    $.getJSON(tabascoTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradortabasco = '<table class="table table-hover" style="margin-top:50px;">'
           mostradortabasco += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradortabasco += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradortabasco += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradortabasco += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradortabasco += '</table>'
           $('#tabasco').append(mostradortabasco);
    })

    // fin de tabasco

  $.getJSON(tamaulipasTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradortamaulipas = '<table class="table table-hover" style="margin-top:50px;">'
           mostradortamaulipas += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradortamaulipas += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradortamaulipas += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradortamaulipas += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradortamaulipas += '</table>'
           $('#tamaulipas').append(mostradortamaulipas);
    })

    // fin de Tamaulipas

    $.getJSON(tlaxcalaTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradortlaxcala = '<table class="table table-hover" style="margin-top:50px;">'
           mostradortlaxcala += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradortlaxcala += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradortlaxcala += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradortlaxcala += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradortlaxcala += '</table>'
           $('#tlaxcala').append(mostradortlaxcala);
    })

    // fin de Tlaxcala

    $.getJSON(veracruzTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorveracruz = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorveracruz += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorveracruz += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorveracruz += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorveracruz += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorveracruz += '</table>'
           $('#veracruz').append(mostradorveracruz);
    })

    // fin de Veracruz

    $.getJSON(zacatecasTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradorzacatecas = '<table class="table table-hover" style="margin-top:50px;">'
           mostradorzacatecas += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradorzacatecas += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradorzacatecas += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradorzacatecas += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradorzacatecas += '</table>'
           $('#zacatecas').append(mostradorzacatecas);
    })

    // fin de yucatán

    $.getJSON(yucatanTotal, function(json){

       var nIndicador = json.MetaData.Name
       var nRegion    = json.MetaData.Region
       var serie      = json.Data.Serie
       var cadena     = json.Data.Serie.length

       var mostradoryucatan = '<table class="table table-hover" style="margin-top:50px;">'
           mostradoryucatan += '<tr class="active"><th class="text-center">' + nIndicador + ' de ' + nRegion + '</th></tr>'
           mostradoryucatan += '<tr><th class="col-lg-6">Año</th><th class="col-lg-6">Población Total (en millones)</th></tr>'
           for(var i = 0; i < cadena; i++) {
             var periodo = serie[i].TimePeriod
             mostradoryucatan += '<tr><td>' + periodo + '</td>'
             var poblacionTotal = serie[i].CurrentValue
             mostradoryucatan += '<td>' + poblacionTotal + '</td><tr>'
           }
           mostradoryucatan += '</table>'
           $('#yucatan').append(mostradoryucatan);
    })

    // fin de zacatecas
})
