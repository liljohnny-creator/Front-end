(function(){

    'use strict';

    var minusApp = angular.module("minusApp");

    minusApp.service('utilService', utilService);

    utilService.$inject = [];

function utilService() {

    var vm = this;
    //Link do Heroku vem aqui !
    vm.HOST_HTTP = "http://localhost:4000"; 

}
}());