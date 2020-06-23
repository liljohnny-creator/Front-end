(function(){

    'use strict';

    var minusApp =  angular.module("minusApp", ['ngRoute']);
    
    minusApp.config(function($routerProvider){
        $routerProvider
        .when('/cursos', {
            templateUrl : 'app/view/cursos.html'
        })
        .when('/login', {
            templateUrl : 'app/view/login.html'
        })
        .when('/contatos', {
            templateUrl : 'app/view/contatos.html'
        })
        .when('/cadastro', {
            templateUrl : 'app/view/cadastro.html'
        })
        .when('/sobre', {
            templateUrl : 'app/view/sobre.html'
        })
        .otherwise({redirectTo: '/login'});
        
    });
}());