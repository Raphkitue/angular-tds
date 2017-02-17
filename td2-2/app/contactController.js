/**
 * Created by raph_ on 17/02/2017.
 */
angular.module("ContactApp").controller("ContactController",function(){

    this.contacts = [
        {
            "nom":"Patrick",
            "prenom":"Hernandez",
            "adresse":"36 rue du 36"
        },
        {
            "nom":"Patricka",
            "prenom":"Hernandeza",
            "adresse":"36 rue du 36a"
        }
    ];
    this.contact = [];
    this.tmpContact = [];
    this.operation ='';
    this.edit ='';
    this.toUpdate = function(contact){
        this.operation='Modification';
        this.contact=contact;
        this.tmpContact=contact;
        console.log("oui");
    }
    this.toAdd = function () {
        this.operation='Ajout';
        this.tmpContact=[];
    }
    this.add = function () {
    }

    this.update= function () {

    }

    this.delete = function (contact) {
        this.tmpContact.add(contact);


    }
});
