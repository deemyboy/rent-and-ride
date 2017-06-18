<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable {
  /**
    * The attributes that are mass assignable.
    *       $table->increments('id');
    *        $table->string('first_name', 50);
		* $table->string('family_name', 50);
    *        $table->string('email')->unique();
    *        $table->string('password');
    *        $table->rememberToken();
    *        $table->timestamps();
     */
    protected $fillable = array('first_name', 'family_name', 'email', 'password');

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = array('password', 'remember_token');

  public function quotes() {
		return $this->hasMany(Quote::class, 'quote_user', 'user_id', 'quote_id');
	}

    public function shop() {
    	return $this->hasMany(Shop::class);
    }

    public function requestedQuote() {
      return $this->with('quote');
    }

    // public function getQuote($id) {
    //   return $this->with()
    // }
}
