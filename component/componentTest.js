angular.module("CompTest", [])
.directive("tom",function(){
	return{
		scope: {
            msg: '='
        },
		restrict : "E",
		replace : true,
		template: '<p>Hallo {{$ctrl2.msg}}</p>',
		controller: function(){
			this.msg = "Tom";
		},
		controllerAs: '$ctrl2'
	};
}).directive("zwei",function(){
	return{
		scope: {
            msg: '='
        },
		restrict : "E",
		replace : true,
		template: '<div><p>Hallo {{msg2}}</p><p>erster name {{msg}} </p></div>',
		controller: 'zweiController',
		controllerAs: '$ctrl2'
	};
}).controller('zweiController', function($scope){
	$scope.msg2 = "Anton";
	$scope.message = {name : "Ute" };
	$scope.knopf = function(){
		console.log("Trap1: " + $scope.msg2);
		$scope.msg2 = $scope.eingabe;
		console.log("Trap2: " + $scope.msg2);
		$scope.$watch();
	}
})
.component('ute',{
	template: `<p>Guten Tag {{ message.name }} </p>
	<input type="text" ng-model="eingabe">
	<button ng-click="knopf()">knopf</button>
	Hier kommt die zweite Zeile. <br>
	hier die dritte {{ message.name }}`,
	controller: 'zweiController'
	/*function(){
		this.message = {name : "Ute" };
	}*/
});
