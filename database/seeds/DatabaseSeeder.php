<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
      public function run()
      {
    Eloquent::unguard();

        //call uses table seeder class
  		$this->call('UsersTableSeeder');
		$this->call('ShopsTableSeeder');
		$this->call('QuotesTableSeeder');
        $this->call('WorkersTableSeeder');
        $this->call('QuoteUserTableSeeder');
		
        //this message shown in your terminal after running db:seed command
        $this->command->info("workers, shops, quotes, users and quote_user tables seeded !!");
       }
}

class UsersTableSeeder extends Seeder {
 
   public function run()
   {
     //delete users table records
     DB::table('users')->delete();
     //insert some dummy records
     DB::table('users')->insert(array(
         array('first_name'=>'john','family_name'=>'johnson','email'=>'john@roopy.com','password'=>'PHP'),
         array('first_name'=>'mark','family_name'=>'nanson','email'=>'mark@seam.com','password'=>'JS'),
         array('first_name'=>'Karl','family_name'=>'jorty','email'=>'karl@clivesinclair.com','password'=>'Jquery'),
         array('first_name'=>'marl','family_name'=>'yhann','email'=>'marl@live-reload.com','password'=>'Not'),
         array('first_name'=>'mary','family_name'=>'johnny','email'=>'mary@liver.nz','password'=>'HTML'),
         array('first_name'=>'sels','family_name'=>'anders','email'=>'sels@clipclop.co.uk','password'=>'CSS'), array('first_name'=>'taylor','family_name'=>'jo','email'=>'taylor@shoo.ca','password'=>'Laravel')
      ));
   }
 
}


class ShopsTableSeeder extends Seeder {
 
   public function run()
   {
     //delete shops table records
     DB::table('shops')->delete();
     //insert some dummy records
     DB::table('shops')->insert(array(
         array('shop_name'=>'Red Bikes','address_1'=>'12 height street','address_2'=>'','email'=>'shop@redbikes.com','city'=>'oxford','postcode'=>'ox1 3te','area_code'=>'01765','tel_no'=>'721757'),
         array('shop_name'=>'Bikers','address_1'=>'4 london road','address_2'=>'','email'=>'info@bikers.com','city'=>'oxford','postcode'=>'ox3 2te','area_code'=>'0265','tel_no'=>'723456'),
         array('shop_name'=>'Rent Kwik','address_1'=>'23 big alleyway','address_2'=>'bartsy','email'=>'enquiry@rentkwik.com','city'=>'beckley','postcode'=>'be4 2ee','area_code'=>'01425','tel_no'=>'234532'),
         array('shop_name'=>'SWOOSH','address_1'=>'1-7 northcourt road','address_2'=>'north abington','email'=>'shop@swoosh.com','city'=>'abington','postcode'=>'ox25 3te','area_code'=>'06435','tel_no'=>'223177')
      ));
   }
 
}

class QuotesTableSeeder extends Seeder {
 
    public function run()
    {
     //delete quotes table records
     DB::table('quotes')->delete();
     //insert some dummy records
     DB::table('quotes')->insert(array(
         array('start_date'=>'2017-01-29 18:44:06','end_date'=>'2017-12-31 09:00:06','num_bikes'=> 1,'quote_text'=>'i wan to go to london on a unicycle','amount'=>0,'quoted'=>0),
         array('start_date'=>'2016-12-29 11:14:01','end_date'=>'2016-12-31 19:00:06','num_bikes'=> 3,'quote_text'=>'red bikes please we we like red','amount'=>0,'quoted'=>0),
         array('start_date'=>'2017-02-28 13:22:33','end_date'=>'2017-03-31 19:00:06','num_bikes'=> 6,'quote_text'=>'there\'s a big race so defo need these','amount'=>0,'quoted'=>0),
         array('start_date'=>'2016-12-31 10:00:00','end_date'=>'2017-01-31 19:00:00','num_bikes'=> 9,'quote_text'=>'9 tourist bikes for touring oxford, thanks','amount'=>0,'quoted'=>0)
      ));
    }

}

class WorkersTableSeeder extends Seeder {
 
   public function run()
   {
     //delete workers table records
     DB::table('workers')->delete();
     //insert some dummy records
     DB::table('workers')->insert(array(
         array('first_name'=>'bob','family_name'=>'orden','email'=>'bob@redbikes.com','password'=>'redBikes'),
         array('first_name'=>'mark','family_name'=>'nanson','email'=>'mark@rentkwik.com','password'=>'kw1kp455'),
         array('first_name'=>'murdoc','family_name'=>'tinter','email'=>'mt@rentkwik.com','password'=>'d0ntkn0w'),
         array('first_name'=>'stu','family_name'=>'potter','email'=>'stupot@bikers.com','password'=>'5tup0tyy'),
         array('first_name'=>'colby','family_name'=>'ditto','email'=>'colby@redbikes.com','password'=>'81k3y80y'),
         array('first_name'=>'marly','family_name'=>'linoter','email'=>'marly@swoosh.com','password'=>'p4ss1t2m3'),
         array('first_name'=>'ricky','family_name'=>'callahan','email'=>'ricky@bikers.com','password'=>'123qwe'),
         array('first_name'=>'deena','family_name'=>'sheen','email'=>'deena@bikers.com','password'=>'500nb3th3r3')
      ));
   }

}

class QuoteUserTableSeeder extends Seeder {
 
   public function run()
   {
     //delete quote_user table records
     DB::table('quote_user')->delete();
     //insert some dummy records
     DB::table('quote_user')->insert(array(
         array('user_id'=>'14','quote_id'=>'1'),
         array('user_id'=>'13','quote_id'=>'2'),
         array('user_id'=>'12','quote_id'=>'3'),
         array('user_id'=>'11','quote_id'=>'4')
      ));
   }
}