(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function MovieController(movieFactory, toastr) {
        var vm = this;

        vm.OmbdApiT = OmbdApiT;
        vm.OmbdApiS = OmbdApiS;


        ////////////////

        function OmbdApiT() {
            movieFactory.ombdApiT(vm.title)
                .then(function(response) {
                    vm.data = response.data;
                    toastr.success('You succeeded!', 'Success!')

                })
        }

        function OmbdApiS() {
            movieFactory.ombdApiS(vm.title)
                .then(function(response) {
                    vm.results = response.data.Search;
                    toastr.success('You succeeded!', 'Success!')

                })
                .catch(function(error) {
                    toastr.error('You caused an error!', 'Error!')
                })
        }
    }
})();

//http://www.omdbapi.com/?t=the+simpsons&y=&plot=short&r=json
//http://img.omdbapi.com/?apikey=[yourkey]&
