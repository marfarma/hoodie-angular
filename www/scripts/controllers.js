'use strict';

angular.module('hoodieApp')
	.controller('AppCtrl',['$scope', '$dialog', function($scope, $dialog){
		$scope.login = function(){

			$dialog.dialog({
				backdrop: true,
				keyboard: true,
				dialogFade: true,
				backdropFade: true,
				dialogClass: 'modal login',
				backdropClick: true,
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			}).open();

		}
	}])
	.controller('LoginCtrl',['$scope', 'dialog', function($scope, dialog){
		$scope.close = function(){
			dialog.close();
		}
	}])
	.controller('MainCtrl', ['$scope', 'hoodie', 'localStorage', function ($scope, hoodie) {
		$scope.todo = { title: ''};
		$scope.mail = { text: ''};
		$scope.todos = [];

		$scope.clearTodos = function(){
			$scope.todos = [];
		};

		$scope.addTodo = function(todo){
			$scope.todos.push(todo);
		};

		$scope.setTodos = function(todos){
			$scope.clearTodos();
			todos.sort( function(a, b) {
				return a.createdAt > b.createdAt;
			}).forEach( $scope.addTodo );
		};

		$scope.createTodo = function(){
			hoodie.store.add('todo', $scope.todo);
		};

		hoodie.unbind('store:add:todo');

		hoodie.store.on('add:todo', $scope.addTodo);
		hoodie.store.on('clear', $scope.clearTodos);
		hoodie.store.findAll('todo').then($scope.setTodos);

	}]);
