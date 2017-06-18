<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{
     /** MASS ASSIGNMENT 
	 * define which attributes are mass assignable (for security)
	 * 
            $table->increments('id');
            $table->string('first_name', 50);
			$table->string('family_name', 50);			
            $table->string('email');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
	 */
    protected $fillable = array('first_name','family_name','email','password');
	
    public function shop()
    {
		return $this->belongsTo(Shop::class);       
    }
      
}
