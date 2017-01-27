/**
 * Created by raph_ on 27/01/2017.
 */
angular.module("noteApp").controller("MainController",function(){
    this.messageNote="";
    this.info = "";
    this.status="";
    this.save = function(){
        this.info="Sauvegarde réussie !";
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
});
