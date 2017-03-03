/**
 * Created by raph_ on 03/03/2017.
 */
angular.module("CurrencyApp").controller("CurrencyController",['$http',  function($http) {

    var self = this;

    this.currencies ;
    this.from ;
    this.to ;
    this.what = 1;

    this.result=12 ;


    $http.get('app/currencymap.json').then(function(response) {
            self.currencies = response.data;
            self.from = self.currencies["EUR"];
            self.to=self.currencies["USD"];
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        }
    );

    this.swap = function (){
        var tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    };

    this.getResult = function(){


        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                console.log(response.data);
                self.result=response.data[self.from.code+'_'+self.to.code].val*self.what;

            });
    };




}]);
