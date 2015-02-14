var miApp = angular.module('miApp', []);

/*
miApp.factory('Fabrica',function(){
	return {mensaje: 'Saludos desde la Fabrica'}
});
*/

miApp.factory('Fabrica',function(){
	var servicio ={
		objeto: {mensaje: 'msj Original desde la Fabrica'},
		msjInicial: function(){
			servicio.objeto['mensaje'] = 'msj Original desde la Fabrica';
		},
		msjNuevo: function(msj){
			servicio.objeto.mensaje = msj;
		}
	};
	return servicio;
});


function controladorUno($scope,Fabrica){
	//$scope.dato = {mensaje: 'Saludos desde el Controlador Uno'};
	$scope.nuevo = function(){
		Fabrica.msjNuevo($scope.nuevoMensaje);
	};
	$scope.dato = Fabrica.objeto;
};

function controladorDos($scope,Fabrica){
	//$scope.dato = {mensaje: 'Saludos desde el Controlador Dos'};
	$scope.nuevo = function(){
		Fabrica.msjNuevo($scope.nuevoMensaje);
	};
	$scope.dato = Fabrica.objeto;
};


function controladorTres($scope,Fabrica){
	$scope.resetear = function(){
		Fabrica.msjInicial();
	};	
};