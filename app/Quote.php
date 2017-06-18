<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    /** MASS ASSIGNMENT
	 * define which attributes are mass assignable (for security)

            DB schema

            $table->increments('id');
			$table->date('start_date');
			$table->date('end_date');
			$table->integer('num_bikes');
			$table->string('quote_text', 1000);
			$table->decimal('amount', 5, 2)->nullable()->default(0.00);
			$table->boolean('quoted')->default(0);
            $table->timestamps();
	 */
    protected $fillable = array('start_date','end_date','num_bikes','quote_text','amount','quoted');

    public function shop() {
    	return $this->belongsTo(Shop::class);
    }

    public function user() {
    	return $this->belongsTo(User::class);
    }

    public function users() {
      return $this->belongsTo(User::class, 'quote_user', 'quote_id', 'user_id');
    }

  
}
