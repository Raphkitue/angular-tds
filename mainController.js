/**
 * Created by raph_ on 27/01/2017.
 */
angular.module("FirstApp").controller("MainController",function(){
    this.message="Hello";
    this.getMsg = function(){
        return this.message;
    };
});