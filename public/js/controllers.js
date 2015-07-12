var NODO = angular.module('NODO',[]);


// THE REAL NODE SERVER


NODO.controller('Controller',function MyController($scope, $http) {

	
	$http.get('js/data.json').success(function(data) {
		$scope.core = data[0];	
		console.log($scope.core);
		console.log($scope.core);
		console.log($scope.core.content);
		$scope.edit = function () { 

		//	console.log(this.element);
			//angular.copy(this.element);
		//	console.log(this);
			if( this.checked == false ) { 

				this.checked= true;

			}else{ 
				
				this.checked= false;
			}
			//angular.add(this.element);
			//	$scope.ng-hide;
			//	ng-value="string"
			//	this.innerHTML(this.element);
		};
		$scope.intialToggle = function () { 

		if( this.visibility == false ) { 	
			this.visibility = true;
		return this.visibility;
		}

		};


		$scope.toggleDisplay =function (visibility) {
		
		this.visibility = visibility ; 
		console.log("toggle");
		console.log(this.visibility);
		
		if( this.visibility == undefined ) { 	
			this.visibility = false;
			return this.visibility;
		}

		
		};
		$scope.keyUp = function (event) { 

		//	console.log("keyUp",event.keyCode);
			switch (event.keyCode) { 
				case 13:
				//	console.log("enter");
				//	console.dir(event);
				//	console.dir(event.target);
				//	$scope.checked = false;
				//	console.log(event.currentTarget);
				//	event.target.checked = !event.target.checked;
					//event.target.querySelector('.editor-text').checked = false; 
				break;
			}

		};
		
//		displayContent($scope.core.content);
	});

});

NODO.controller('Title',function MyController($scope) {

	
		$scope.editAndRename = function () { 

		//	console.log(this.element);
			//angular.copy(this.element);
		//	console.log(this);
			if( this.checked == false ) { 

				this.checked= true;

			}else{ 
				
				this.checked= false;
			}
			
			document.title = $scope.core.content;
		};

		$scope.displayConfig = function () { 

			console.log("display Config");
		};
//		displayContent($scope.core.content);

});




NODO.controller('Navigation',function MyController($scope) {

	
		$scope.navigate = function () { 

			console.log("go to a different section");
		};
//		displayContent($scope.core.content);

});

// create an injector
var $injector = angular.injector(['ng']);

// use the injector to kick off your application
// use the type inference to auto inject arguments, or use implicit injection
	$injector.invoke(function($rootScope, $compile, $document) {
		$compile($document)($rootScope);
		$rootScope.$digest();

});









// Typography

// Styles 
// ColourPalette
// Grid
// Config
// Viewports
// Navigation
// Assets Library
// functions
// BackUp
// Animation 
// Monitor
// Admin 