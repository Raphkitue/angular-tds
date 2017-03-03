/**
 * Created by raph_ on 03/03/2017.
 */
angular.module("CurrencyApp").controller("CurrencyController",['$http', '$sce', function($http,$sce) {

    var self = this;

    this.currencies ;
    this.from = "EUR";
    this.to = "USD";
    this.what = 1;

    this.result ;


    $http.get('../app/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        }
    );






}]);
angular.module('CurrencyApp', [])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://free.currencyconverterapi.com/**'
        ]);
    }]);