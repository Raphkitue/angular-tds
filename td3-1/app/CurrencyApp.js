/**
 * Created by raph_ on 17/02/2017.
 */
angular.module("CurrencyApp",[]);
angular.module('CurrencyApp', [])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://free.currencyconverterapi.com/**'
        ]);
    }]);