function ControladorTareas($scope){
	$scope.tareas = [{texto: 'Estudiar Bootstrap', hecho: true},
					 {texto: 'Estudiar AngularJS', hecho: true},
					 {texto: 'Estudiar Node.js',   hecho: false}];

	$scope.agregarTarea = function(){
		$scope.tareas.push({texto:$scope.textoNuevaTarea, hecho:false});
		$scope.textoNuevaTarea = '';
	};

	$scope.restantes = function(){
		var contador = 0;
		angular.forEach($scope.tareas, function(tarea){
			contador += tarea.hecho ? 0 : 1 ;
		});
		return contador;
	};

	$scope.eliminar = function() {
		var tareasViejas = $scope.tareas;
		$scope.tareas = [];
		angular.forEach(tareasViejas, function(tarea){
			if(!tarea.hecho)
				$scope.tareas.push(tarea);
		});
	};
}