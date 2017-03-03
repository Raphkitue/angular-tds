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

angular.module("ContactApp").directive("frmContactElem",function(){
    return{
        restrict:'EA',
        template:'<fieldset data-ng-show="edit" class="container form-group form-inline">
        <legend>{{operation}}</legend>
    <form name="frmContact" data-ng-submit="frmContact.$valid && update()" novalidate>
    <input class="form-control" type="text" data-ng-model="tmpContact.nom" placeholder="Entrez un nom..." required>
    <input class="form-control" type="text" data-ng-model="tmpContact.prenom" placeholder="Prénom...">
        <input class="form-control" type="email" data-ng-model="tmpContact.email" placeholder="Adresse email..." required>
    <input type="submit" value="Valider" class="btn btn-primary">
        <input type="button" value="Annuler" data-ng-click="edit=false" class="btn btn-primary">
        </form>
        </fieldset>',
        scope:{contact:'='}
    }
});