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

rentApp.controller('QuotesController',['$http', 'moment', 'rentQuote', 'rentDate',function($http, moment, rentQuote, rentDate){

    var vm = this;

    vm.months =
    {"1" :
      { "id"    :     1,
        "name"  :     "January"
      },

    "2" :
      { "id"    :     2,
        "name"  :     "February"
      },
    "3" :
      { "id"    :     3,
        "name"  :     "March"
      },
    "4" :
      { "id"    :     4,
        "name"  :     "April"
      },
    "5" :
      { "id"    :     5,
        "name"  :     "May"
      },
    "6" :
      { "id"    :     6,
        "name"  :     "June"
      },
    "7" :
      { "id"    :     7,
        "name"  :     "July"
      },
    "8" :
      { "id"    :     8,
        "name"  :     "August"
      },
    "9" :
      { "id"    :     9,
        "name"  :     "September"
      },
    "10" :
      { "id"    :     10,
        "name"  :     "October"
      },
    "11" :
      { "id"    :     11,
        "name"  :     "November"
      },
    "12" :
      { "id"    :     12,
        "name"  :     "December"
      }
    };

    // object to hold all the data for the new quote form
    vm.quoteData = {};

    vm.dates = {
        start_date : new Date(),
        end_date : new Date(),
        start_date_min : new Date(),
        end_date_min : new Date()
    };

    vm.oneDayOnly = function ($event, value) {
        console.log('oneDayOnly | $event -> ', $event);
        var checkbox = $event.target;
        var action = (checkbox.checked ? 'add' : 'remove');
        vm.updateToggleSelection(action, value);

  };

  vm.updateToggleSelection = function(action, value) {
    if(action =='add') {
       value = true;
        vm.dates.end_date = vm.dates.start_date;
     }

    if(action == 'remove') {
     value = false;
     }
        console.log('oneDayOnly | vm.dates -> ', vm.dates);
 };
//        vm.oneDay = true;
//


    vm.checkDates = function(myControl){
        vm.dateResetShow(vm.dates.start_date);
        console.log('checkDates -> ', myControl);
        if (myControl === 'start')
        {
            dates = rentDate.compareDates.start(vm.dates);
            console.log(' checkDates | dates -> ', dates);
//            vm.quoteData.end_date = dates.endDate;
//            vm.end_date_min = dates.endDateMin;
        }
        else
        {
//            var dates = {};
//            dates = rentDate.compareDates.end(vm.quoteData.start_date, vm.quoteData.end_date);
//            vm.quoteData.end_date = dates.endDate;
//            vm.end_date_min = dates.endDateMin;
        }
    };

    vm.dateResetShow = function(date){
        return rentDate.makeMomentDate(new Date()) == rentDate.makeMomentDate(date);
    };

    vm.resetDate = function(control) {
        vm.dates = rentDate.resetDate(vm.dates, control);
        vm.oneDay = undefined;
        console.log('resetDate | ', vm.dates);
    };

    // function to handle submitting the form
    vm.submitQuote = function() {
        console.log('submit', vm.quoteData);

        vm.quoteData.end_date = rentDate.compareDates(vm.quoteData.start_date, vm.quoteData.end_date);

        vm.quoteData.start_date = rentDate.makeMomentDate(vm.quoteData.start_date);
        vm.quoteData.end_date = rentDate.makeMomentDate(vm.quoteData.end_date);

//        if (vm.quoteData.start_date > vm.quoteData.end_date)
//        {
//            vm.quoteData.end_date = vm.quoteData.start_date + 1day;
//            vm.end_date_min = vm.quoteData.start_date;
//        }
//
//        if (vm.quoteData.start_date < vm.quoteData.end_date)
//        {
//            vm.quoteData.end_date = vm.quoteData.start_date;
//            vm.end_date_min = vm.quoteData.start_date;
//        }

        // save the quote. pass in quote data from the form
        // use the function we created in our service
        rentQuote.save(vm.quoteData)
            .then(function(data) {
            console.log('success', data);
            // if successful, we'll need to refresh the quote list
//                Quote.get()
//                    .success(function(getData) {
//                        vm.quotes = getData;
//                        vm.loading = false;
//                    });

        }, function(data) {
            console.log('error ', data);
        });

        vm.quoteData.start_date = new Date();
        vm.quoteData.end_date = new Date();

    };

    vm.specificEnquiry = function($event, control) {
      console.log('specificEnquiry clicked', vm.specificEnquiryVal);
    };

    vm.generalEnquiry = function($event, control) {
      console.log('generalEnquiry clicked', vm.specificEnquiryVal);
    };

    vm.enquiryType = function(val){

      switch (val) {
        case 'general':
          vm.generalEnquiryVal = true;
          vm.specificEnquiryVal = false;
          console.log(vm.generalEnquiryVal, vm.specificEnquiryVal);
          break;
        case 'specific':
          vm.generalEnquiryVal = false;
          vm.specificEnquiryVal = true;
          console.log(vm.generalEnquiryVal, vm.specificEnquiryVal);
          break;

        default:

        }
      vm.quoteData.specificEnquiryVal = val;
      console.log(vm.quoteData.generalEnqMonth);
    };



}]);

angular.module('datesService', [])

.factory('rentDate', function($http) {

    var dateify = function(dateObj){
        angular.forEach(dateObj, function(value, key){
            if (value !== undefined)
            {
                dateObj[key] = new Date(value);
            }
        });
        return dateObj;
    }

    Date.prototype.addDays = function(date, days)
    {
        var dat = new Date(date);
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    return {

        today : new Date(),

        checkDate : function(date) {
            var inDate = date;
        },

        makeMomentDate : function(date) {
            return moment(date).format("YYYY-MM-DD");
        },

        resetDate : function(dates, control) {

            dates[control] = new Date();

            if (control === 'start_date')
            {
                dates.end_date_min = dates.end_date_min.addDays(new Date(), 1);
            }

            return dates;
        },

        compareDates : {
            start : function(dates) {
//                start_date = dates.start_date;
//                end_date = dates.end_date;

//                console.log('compareDates | start | start_date > start_date init -> ', start_date);
//                var temp = start_date;
                if (dates.start_date > dates.end_date)
                {
//                    console.log('compareDates -> start : | start_date > end_date b4 -> ', dates);
                    dates.end_date = dates.start_date.addDays(dates.start_date, 1);
//                    console.log('compareDates -> start : | start_date > end_date -> 4f ', dates);
//                    dates.start_date = start_date;
                    // back to date obj
//                    dates.end_date = new Date(dates.end_date);
//                    dates.end_date_min = dates.end_date;

//                    dates = dateify(dates);
                    console.log('compareDates -> start : | start_date > end_date -> b4 return ', dates);

//                    dates.end_date_min = start_date;
                    return dates;
                }
                else if (dates.start_date <= dates.end_date)
                {
                    console.log('compareDates -> start : | start_date <= end_date init -> ', dates.start_date, dates.end_date);
//                    dates.end_date = start_date.setDate(start_date.getDate() + 1);
//                    end_date = start_date.setDate(start_date.getDate() + 1);
                    // back to date obj
//                    end_date = new Date(end_date);
                    console.log('compareDates -> start : | start_date <= end_date -> b4 ', dates);
                    dates.end_date_min = dates.start_date.addDays(dates.start_date, 1);
//                    dates = dateify(dates);
                    console.log('compareDates -> start : | start_date <= end_date -> 4f ', dates);

                    return dates;                }
                },
            end : function(start_date, end_date) {

                var temp = start_date;

                console.log('compareDates | end | start_date > start_date init -> ', start_date, end_date);

                console.log('compareDates -> end : | start_date > start_date b4 -> ', start_date);
                dates.end_date.setDate(start_date.getDate() + 1);
                // back to date obj
                dates.end_date = new Date(dates.end_date);
                console.log('compareDates -> end : | start_date > end_date -> 4f ', end_date);

                return dates;

            }
        },
//            if (start_date < end_date)
//            {
//                console.log('compareDates | start_date < end_date -> ');
//                end_date = start_date;
//                return end_date;
//            }

        // get all the quotes
        get : function() {
            return $http.get('/api/quote');
        },

        // save a quote (pass in quote data)
        save : function(data) {
            return $http({
                method: 'POST',
                url: '/quote',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            });
        },

        // destroy a quote
        destroy : function(id) {
            return $http.delete('/api/quote/' + id);
        }
    }

});
angular.module('quotesService', [])

.factory('rentQuote', function($http) {

    return {
//        // get all the quotes
//        get : function() {
//            return $http.get('/quote');
//        },

        // save a quote (pass in quote data)
        save : function(data) {

            return $http({
                method: 'POST',
                url: '/quote',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(data)
            });
        },

        // destroy a quote
        destroy : function(id) {
            return $http.delete('/quote' + id);
        }
    }

});
//# sourceMappingURL=app.js.map
