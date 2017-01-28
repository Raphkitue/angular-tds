/**
 * Created by raph_ on 27/01/2017.
 */
angular.module("noteApp",['ngCookies']).controller("MainController",['$cookies',function($cookies){
    this.messageNote=$cookies.get('message');
    this.info = "";
    this.status="";
    this.save = function(){
        if(this.messageNote!="") {
            this.info = "Note sauvegardée";
            $cookies.put('message',this.messageNote);
        }
    };
    this.clear = function(){
        this.messageNote="";
        this.info="";
    };
    this.count = function(){
        var nb= 100 -this.messageNote.length;
            if(nb<50 && nb>=20)
                this.status="alert-warning";
            else if(nb<20)
                this.status="alert-danger";
            else
                this.status="alert-info"

        return nb;

    };
}]);
