<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->increments('id');
			$table->date('start_date');
			$table->date('end_date');
			$table->integer('num_bikes');
			$table->string('quote_text', 1000);
			$table->decimal('amount', 5, 2)->nullable()->default(0.00);
			$table->boolean('quoted')->default(0);
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
        Schema::drop('quotes');
    }
}
