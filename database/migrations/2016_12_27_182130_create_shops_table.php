<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('shops');
    }
}
