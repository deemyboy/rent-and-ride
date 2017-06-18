<?php

namespace App\Http\Controllers;

use App\Shop;
use App\StaffMember;
use App\Quote;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;

class QuotesController extends Controller
{
    public function index()
    {
		$shops = Shop::all();
        return view('pages.quote',compact('shops'));
    }
	
	/*
 	 *      $table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->date('start_date');
			$table->date('end_date');
			$table->integer('num_bikes');
			$table->string('quote_text', 1000);
			$table->decimal('amount', 5, 2)->nullable();
			$table->boolean('quoted');
			$table->integer('staff_id')->unsigned();
			$table->foreign('staff_id')->references('id')->on('staff_members');
            $table->timestamps();
	 */
	public function store(Request $request)
	{
//        die('hit');
//		$start_date = $request->input('start_date');
//        dd($start_date);   
////		return view('pages.quoted', compact('request'));
//    return dd($request);
        Quote::create(array(
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'num_bikes' => $request->input('num_bikes'),
            'quote_text' => $request->input('quote_text'),            
        ));
//    
        return Response(array('success' => true));
	}
	
}
