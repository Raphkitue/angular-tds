/**
 * Created by raph_ on 03/03/2017.
 */
angular.module("CurrencyApp").controller("CurrencyController",['$http',  function($http) {

    var self = this;

    this.currencies ;
    this.from ;
    this.to ;
    this.what = 1;
    this.result=0 ;



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
                var conversion={
                    from : self.from,
                    to : self.to,
                    amount : function(){ return self.what*this.rate},
                    initialAmount : function(){ return self.what*this.initialRate},
                    delta : 0,
                    rate : val,
                    what : self.what,
                    date : new Date(),
                    update: false,
                    initialRate : val
                };
                var key=self.from+self.to;
                if(self.historique[key]){
                    var oldConversion=self.historique[key];
                    oldConversion.what=self.what;
                    conversion.delta=conversion.amount()-oldConversion.initialAmount();
                    conversion.initialRate=oldConversion.initialRate;
                }
                conversion.update=false;
                self.historique[key]=conversion;
            });
    };



    this.conversion={from :"", //monnaie1,
        to :"", //monnaie2,
        amount : function() {}, //retourne le montant (tx* somme) },
        initialAmount : function () {},
        delta :"",
        rate:"",
        what:"",
        date:"",
        update:"",
        initialRate:""

    };
    this.affHisto=false;
    this.historique = [



    ];

}]);
