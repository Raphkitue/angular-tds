/**
 * Created by raph_ on 10/03/2017.
 */
angular.module("CurrencyApp").controller("CurrencyController",['$http',  function($http) {

    this.ops=[
        {value:'('},
        {value:')'},
        {value:'M'},
        {value:' '},
        {value:'RM'},
        {value:'Off',cssClass:"btn-danger",title:"Eteindre la calculatrice"},
        {value:'\n'},
        {value:"⇤"},
        {value:"CE"},
        {value:"C"},
        {value:" "},
        {value:"±"},
        {value:"√x"},
        {value:"\n"},
        {value:7},
        {value:8},
        {value:9},
        {value:' '},
        {value:'/'},
        {value:'%'},
        {value:'\n'},
        {value:4},
        {value:5},
        {value:6},
        {value:' '},
        {value:'*'},
        {value:'1/x'},
        {value:'\n'},
        {value:1},
        {value:2},
        {value:3},
        {value:' '},
        {value:'-'},
        {value:'\n'},
        {value:0,cssClass:"colspan btn-default"},
        {value:'.',cssClass:"btn-default"},
        {value:' '},
        {value:'+'},
        {value:'=',cssClass:"rowspan btn-success",title:"Calculer ([ENTREE]) !"}
    ];

    var self = this;

}]);