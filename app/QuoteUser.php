<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuoteUser extends Model
{
    protected $table = 'quote_user';

    protected $fillable = array('quote_id', 'user_id');
    
    public function quote()
    {
		return $this->hasMany(Quote::class);
	}
}
