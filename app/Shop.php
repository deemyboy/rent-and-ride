<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{

	 /** MASS ASSIGNMENT 
	 * define which attributes are mass assignable (for security)
            $table->increments('id');
			$table->string('shop_name');
			$table->string('address_1');
			$table->string('address_2')->nullable();
			$table->string('city');
			$table->string('postcode');
            $table->string('email')->unique();
			$table->string('area_code')->nullable();
			$table->string('tel_no')->nullable();
            $table->timestamps();
	 */
    protected $fillable = array('shop_name','address_1','address_2','city','postcode','email','area_code','telno');
			
    public function worker()
    {
		return $this->hasMany(Worker::class);       
    }
      
    public function quote()
	{
		return $this->hasMany(Quote::class);
	}
    
    public function user()
	{
		return $this->hasMany(User::class);
	}
    
}
