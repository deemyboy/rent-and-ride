@extends('layouts.default')

@section('content')

<div ng-controller="QuotesController as qc" class="col-md-12">
    <h1>get a free bike hire quote today</h1>

    <hr>

    testing: {[{ qc.testDate }]}

    <hr>
    	<!-- /*
 	 *      $table->increments('id');
			$table->date('start_date');
			$table->date('end_date');
			$table->integer('num_bikes');
			$table->string('quote_text', 1000);
			$table->decimal('amount', 5, 2)->nullable();
			$table->boolean('quoted');
            $table->timestamps();
	 */ -->
    <form id="quote_form" ng-submit="qc.submitQuote()">
      <div class="form-group" >enq type

          <label class="control-label" ng-show="qc.generalEnquiryVal">general enquiry</label>
          <label class="control-label" ng-show="qc.specificEnquiryVal">specific enquiry</label>
          <div>
          <label class="control-label" ng-hide="qc.generalEnquiryVal">click if you want to make a general enquiry</label>
            <!-- <input name="" style="margin-left: 20px;" type="checkbox" ng-model="qc.generalEnquiryVal" ng-true-value="true" ng-false-value="false">&nbsp;tick if making a general enquiry -->
            <button name="" class="enq-type-btn warning pressed-button" ng-class="{'active':qc.generalEnquiryVal}" ng-click="qc.enquiryType('general')">General enquiry</button>
            <label class="control-label" ng-hide="qc.specificEnquiryVal">&nbsp;click if making a specifc enquiry with known dates</label>
            <button name="" class="enq-type-btn primary pressed-button" ng-class="{'active':qc.specificEnquiryVal}" ng-click="qc.enquiryType('specific')">Specifc enquiry</button>
        </div>
      </div>
          <div class="form-group" ng-show="qc.generalEnquiryVal">
            <label class="control-label">which month?</label>
            <span>
              <a href="#" class="btn enq-type-btn warning" value="{[{month.id}]}" ng-repeat="month in qc.months">{[{month.name}]}</a>
            </span>
            <!-- <label class="control-label" ng-hide="qc.dateResetShow(qc.dates.start_date)">
              <input name="" ng-hide="qc.dateResetShow(qc.dates.start_date)" style="margin-left: 20px;" type="checkbox" ng-model="qc.oneDay" ng-click="qc.oneDayOnly($event , qc.oneDay)" value="true">one day only
            </label> -->
          </div>


          <div id="dateContainer" ng-show="qc.specificEnquiryVal">
            <div class="form-group">
              <label class="control-label">start</label>
              <md-datepicker ng-model="qc.dates.start_date" ng-change="qc.checkDates('start')" md-min-date="qc.dates.start_date_min"></md-datepicker><span class="reset_date_span" ng-hide="qc.dateResetShow(qc.dates.start_date)" ng-click="qc.resetDate('start_date')"><i class="text-danger fa fa-times"></i></span>
              <label class="control-label" ng-hide="qc.dateResetShow(qc.dates.start_date)">
                <input name="" ng-hide="qc.dateResetShow(qc.dates.start_date)" style="margin-left: 20px;" type="checkbox" ng-model="qc.oneDay" ng-click="qc.oneDayOnly($event , qc.oneDay)" value="true">one day only
              </label>
            </div>

            <div class="form-group" ng-hide="qc.oneDay==true">
              <label class="control-label">reset dates</label>
              <span class="reset_date_span" ng-hide="qc.dateResetShow(qc.dates.start_date)" ng-click="qc.resetDates()"><i class="text-danger fa fa-refresh"></i></span>
            </div>
            <div class="form-group" ng-hide="qc.oneDay==true">
              <label class="control-label">end</label>
              <md-datepicker ng-model="qc.dates.end_date" ng-change="qc.checkDates('end')"  md-min-date="qc.dates.end_date_min"></md-datepicker>
            </div>
          </div>
        </div>
      </div>





      <div class="form-group">
          <label class="control-label">number of bikes</label>
          <select class="form-control" type="text" ng-model="qc.quoteData.num_bikes">
              <option ng-repeat="n in [] | range:1:10">{[{n}]}</option>
          </select>

      </div>
      <div class="form-group">
          <label class="control-label">requirements</label>
          <textarea class="form-control" ng-model="qc.quoteData.quote_text"></textarea>
      </div>

      <div class="form-group">
          <button class="btn btn-warning" type="submit">get my quote</button>
      </div>

      <input type="hidden" name="_token" value="{{ csrf_token() }}">
    </form>
</div>
@stop