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
