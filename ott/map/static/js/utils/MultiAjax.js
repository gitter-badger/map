ott.namespace("ott.utils");

ott.utils.MultiAjax = {

    callz : function(urls)
    {
    },

    callUrls : function(urls)
    {
       var retVal = [];

        for(var i = 0; i < urls.length; i++)
        {
            var u = urls[i];
            var n = ott.utils.StringUtils.serviceNameFromURL(u);
            var d = {'url':u, 'name':n, 'data':null}
            retVal.push(d);
            console.log(d);

        }

        var call = function(url){
            return $.get(url, null, 'text');
        };

        var call = function(url){
            return $.get(url, null, 'text');
        };

        $.when(

            for(var i = 0; i < urls; i++)
            {
                call(urls[i]);
            }
        ).done(function()
        {
            console.log('hhhh');
            if(arguments)
                for(var i = 0; i < arguments.length; i++)
                    console.log(urls[i]);
        });

/*
            call('/js/ott.js')
            ,
            call('/js/ott.leaflet.js')

for(var i = 0; i < urls; i++)
            {
                call(urls[i]);
            }*/
    },

    CLASS_NAME: "trimet.utils.MultiAjax"
}

