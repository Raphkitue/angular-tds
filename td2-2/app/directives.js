/**
 * Created by raph_ on 17/02/2017.
 */

angular.module("ContactApp").directive("contactElem",function(){
    return{
        restrict:'EA',
        template:'<td>{{contact.nom}}</td><td>{{contact.prenom}}</td><td>{{contact.adresse}}</td><td><div class="btn btn-info btn-xs glyphicon glyphicon-edit" ng-click="contactCtrl.toUpdate(contact)"></div><div  ng-click="contactCtrl.delete(contact)" class="btn btn-danger btn-xs glyphicon glyphicon-remove-circle"></div></td>',
        scope:{contact:'='}
    }
});