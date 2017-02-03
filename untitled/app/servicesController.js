/**
 * Created by raph_ on 03/02/2017.
 */
angular.module("ServicesApp").controller("ServicesController",function(){
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

    this.total = function(){

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
    this.servicesActifs = 1;

});
