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