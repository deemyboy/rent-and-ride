<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuoteUser extends Model
{
    /**
    * The table associated with the model.
    *
    * @var string
    */
    protected $table = 'quote_user';

    protected $fillable = array('user_id', 'quote_id');
    
    public function quote()
    {
		return $this->hasMany(Quote::class);
	}
}
