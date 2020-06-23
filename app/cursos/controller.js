(function(){
    'use strict';

    var minusApp = angular.module("minusApp");

    minusApp.controller('cursosController', cursosController);

    cursosController.$inject =['$scope','$http','utilService'];

    function cursosController($scope, $http, utilService) {
    var vm = this;

    var HOST_HTTP="http://localhost:4000";

        vm.curso = {};
        vm.cursos = [];

        vm.init = function(){
        vm.listarCursos();
        
    };

        vm.listar.Cursos = function(){
            $http.get(utilService.HOST_HTTP + '/cursos').then(
                function(response){
                    vm.cursos = response.data.cursos;
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );
        };
        
        vm.adicionarCurso = function(){
            if(vm.curso.id === undefined){
                vm.salvarCursoBD();


            }else{
                vm.atualizarProduto(vm.curso.id);

            }

            console.log(vm.cursos);
            
        };

        vm.salvarCursoBD = function(){

            $http.post(utilService.HOST_HTTP + '/cursos', vm.curso).then(
                function(response){
                    vm.cursos.push(angular.copy(vm.curso));
                    vm.limparCampos();
                    console.log(response);
                },
                function(err){
                    console.log(err);
                }
            );

        };
        
        vm.limparCampos = function(){
            vm.curso = {};
        };

        vm.deletarCurso = function(item){
        
            $http.delete(HOST_HTTP +'/curso',vm.curso).then(
                function(response){
                   vm.cursos.delete(vm.curso);
                   vm.limparCampos();
                    console.log(response);
                },
                function(){
                    console.log(err);
                }
            );
        };

        vm.carregarCurso = function(item){
            vm.curso = angular.copy(vm.cursos[item]);
            vm.curso.id = item;

            console.log(vm.curso);
        };

        vm.atualizarCurso = function(item){
        
            $http.put(HOST_HTTP +'/curso',vm.curso).then(
                function(response){
                   vm.cursos.put(vm.curso);
                   
                   vm.atualizarCursos();
                    console.log(response);
                },
                function(){
                    console.log(err);
                }
            );
        };
        
    }
    
    
}());