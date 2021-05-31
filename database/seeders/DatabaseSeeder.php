<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\User\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // $this->call(CategoriesTableSeeder::class);
        User::create([
            'name' => 'Ousmane Diallo',
            'email' => 'admin@admin.com',
            'phone' => '77000000',
            'address' => 'Medina',
            'slug' => 'Lorem ipsum dolor sit.',
            'status' => 1,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);
        $this->call(ProductsTableSeeder::class);

     
    }

    
}
