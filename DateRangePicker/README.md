Angular-Date-Range-Picker
==============
Module by monterail
https://github.com/monterail/angular-date-range-picker

# 1. Instalacion:
Instalar angular-date-range-picker en el proyecto

- Opcion A:

Agregar a las dependencias en bower.json:
"angular-date-range-picker": "latest"

Ejecutar: bower install

- Opcion B:

Instalar manualmente:
bower install angular-date-range-picker

# 2. Agregar dependencias a angular-date-range-picker.js

Agregar los correspondientes scripts de angular-date-range-picker y sus dependencias al HTML desde su directorio:

 <script type="text/javascript" src="./bower_components/angular/angular.js"></script>
  <script type="text/javascript" src="./bower_components/angular-bindonce/bindonce.js"></script>
  <script type="text/javascript" src="./bower_components/moment/moment.js"></script>
  <script type="text/javascript" src="./bower_components/moment-range/lib/moment-range.js"></script>
  <script type="text/javascript" src="./bower_components/angular-date-range-picker/build/angular-date-range-picker.js"></script>

# 3. Cargar dateRangePicker como dependencia de nuestro modulo JS:
 
 angular.module("AppPrueba", ["dateRangePicker"])

# 4. Uso

- Uso de las directivas:
Rango de Fechas:
<date-range-picker ng-model="range"></date-range-picker> 
<input type="text" date-range-picker ng-model="dates"/>

Fecha Unica:
<input type="text" date-range-picker ranged="false"/>      


- Funciones para nuestro Controller:
 //Valores Default
      $scope.range = moment().range("2014-10-01", "2014-10-08")

 //Restablecer Usando un Default Range
      $scope.toDefault = function(){
        $scope.range2 = $scope.range

 //Determinar Rangos Personalizados
      $scope.rangeSelectOptions = [
        {
          label: "Fiestas 2014",
          range: moment().range(
            "2014-12-24", "2015-01-01")
        }
      ]

Para usarlo, agregar la directiva al objeto date-range-picker:

custom-select-options="rangeSelectOptions"

# 5. Ejemplo

Para poder visualizar el ejemplo, tomar la carpeta example/app de este repositorio, realizar bower install en la misma, y abrir index.html

