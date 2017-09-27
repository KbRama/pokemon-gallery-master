#Angular Resource
Built on the top of the $http service, Angular’s $resource is a service that lets you interact with RESTful backends easily. In this exercise, we're going to make use of a pokemon API that can be found here: https://pokemon-api.herokuapp.com/pokemons/?api_key=WDI18RULES.

##Installation

1. Create a new angular app and controller.
2. The $resource service doesn’t come bundled with the main Angular script. Add it to your index.html file.

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>
```
3. Now you need to load the $resource module into your application.

```javascript
angular.module('app', ['ngResource']);
```

##Interacting with the API

1. To use $resource inside your controller/service you need to declare a dependency on $resource. The next step is calling the $resource() function with your REST endpoint, as shown in the following example. This function call returns a $resource class representation which can be used to interact with the REST backend. Create a services.js file and put your new $resource service in it.

```javascript
angular.module('myApp').service('Pokemon', function($resource) {
  return $resource('https://pokemon-api.herokuapp.com/pokemons/?api_key=WDI18RULES');
});
```
##Execution
1. The image_url, name and ndex/number retrieved for the endpoint address mentioned above is displayed on the html page in an iterative manner using the directive ng_repeat.
2. note- the exercise was to use the endpoint -"http://pokeapi.co/api/v2/pokemon?limit=151", but there seems to be some issues with JSON data retreive from this url. Though I could fix the CORS issue, the array retreived in the JSON has only 20 elements. Hence , I have used the endpoint - https://pokemon-api.herokuapp.com/pokemons/?api_key=WDI18RULES to display the image , names and numbers.
3. Open the index.html page to view the diplay.
