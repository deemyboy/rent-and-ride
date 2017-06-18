var rentApp = angular.module('rentApp',['ngMaterial','angularMoment','quotesService','datesService'])

.config(function($interpolateProvider, $mdDateLocaleProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');

    $mdDateLocaleProvider.formatDate = function(date) {
        return date ? moment(date).format('DD-MM-YYYY') : '';
    };

    $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD-MM-YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

})
.filter('range', function() {
    return function(input, min, max) {
        min = parseInt(min); //Make string input int
        max = parseInt(max);
        for (var i=min; i<max; i++)

            input.push(i);
        return input;
    };
});
