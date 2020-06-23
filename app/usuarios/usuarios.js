(function(){
    'use strict';
    var minusApp = angular.module("minusApp");
    
    minusApp.controller('usuarioController', usuarioController);

    usuarioController.$inject =['$scope','$http','$location', 'utilService'];

    function usuarioController($scope, $http, $location, utilService){
        var vm = this;


        vm.usuario = {};

        vm.signin = function(){
            $http.post(utilService.HOST_HTTP + '/usuarios/signin', vm.usuario) .then (
                function (response){

                },
                function(err){
                    console.log('ERRO - ' +err.data.message);
                }
);
        };

        vm.login = function(){
            $http.post(utilService.HOST_HTTP + '/usuarios/login', vm.usuario).then(
                function(response){
                        $location.path('/cursos');
                },
                function(err){
                    console.log('ERRO - '+ err.data.message);
                    vm.alertMessage = err.data.message;
                }
            );
        };

        vm.alertClose = function(){
            vm.alertMessage = null;
        };

    }
}()); 
