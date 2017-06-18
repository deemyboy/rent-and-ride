@extends('layouts.default')

@section('content')

<div ng-controller="QuotesController as quote" class="col-md-12">
    <h1>get a free bike hire quote today</h1>
    
    <hr>
    
        you have submitted {{ $request->quote_text }}
    start {{ $request->start_date }}
    end {{ $request->end_date }}
</div>
@stop