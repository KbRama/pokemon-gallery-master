angular.module('pokemonApp', ['ngResource'])

.controller('PokemonsCtrl', ['$scope', 'Pokemon', function ($scope, Pokemon) {
    $scope.pokemon = {};
    $scope.pokemons = [];

    $scope.pokemons = Pokemon.query(); // returns all the pokemons   

}])

.service('Pokemon', ['$resource', function ($resource) {
    return $resource('https://pokemon-api.herokuapp.com/pokemons/:ndex?api_key=WDI18RULES', { id: '@_id'}, {
      update: {
        method: 'PUT'
      }
  });
}]);
