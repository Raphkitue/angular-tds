/**
 * Created by raph_ on 03/02/2017.
 */
angular.module("ServicesApp").controller("ServicesController",['$http',function($http,$scope){
    this.services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];
    this.servicesActifs = 1;
    this.selPromo = false;
    this.codePromo="";
    this.reduction=1.00;
    this.charger = function(data){

        this.codes = data.data;
        console.log(this.codes);

    }
    this.codes=[];
    this.test = function() {
        ($http.get('app/promo.json')).then(this.charger(data));
    }

    this.test();

    this.total = function(){
        var prix=0;

        for (var i =0;i<this.services.length;i++){
            if (this.services[i].active==true){
                prix += this.services[i].price;
            }
        }
        return prix;
    };
    this.toggleActive = function(service){
        if(service.active==false) {
            this.servicesActifs += 1;
            service.active=true;
        }
        else{
            this.servicesActifs -= 1;
            service.active=false;
        }
    };

    this.verifierCode= function(){




          return true;
    };


}]);
