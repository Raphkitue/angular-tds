/**
 * Created by raph_ on 27/01/2017.
 */
angular.module("noteApp").controller("MainController",function(){
    this.messageNote="";
    this.info = "";
    this.status="";
    this.save = function(){
        return this.message;
    };
    this.clear = function(){
        return null;
    };
    this.count = function(){
        return 100 -this.messageNote.length;
    };
});
