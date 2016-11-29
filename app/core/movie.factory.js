(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http'];

    /* @ngInject */
    function movieFactory($http) {
        var service = {
            ombdApiT: ombdApiT,
            ombdApiS: ombdApiS
        };
        return service;

        ////////////////

        function ombdApiT(title) {
            return $http.get('http://www.omdbapi.com/?t=' + title)
        }   
        function ombdApiS(title) {
             return $http.get('http://www.omdbapi.com/?s=' + title)
        }
    }
})();