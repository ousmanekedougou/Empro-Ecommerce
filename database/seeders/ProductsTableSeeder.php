<?php

namespace Database\Seeders;

use App\Models\User\CategoryFather;
use App\Models\User\Category;
use App\Models\User\SousCategory;
use App\Models\User\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

    

        for ($i=0; $i < 12; $i++) { 
                CategoryFather::create([
                'name' => $faker->sentence('2'),
                'slug' => $faker->slug,
                'image' => 'https://via.placeholder.com/412x170',
                'auteur' => $faker->firstName . ' ' .$faker->lastName,
                'user_id' => 1
            ]);
        }

        $category_fathers = CategoryFather::all();
        foreach ($category_fathers as $category_father) {
           for ($i=0; $i < 6; $i++) { 
                Category::create([
                'name' => $faker->sentence('2'),
                'slug' => $faker->slug,
                'image' => 'https://via.placeholder.com/360x360',
                'category_father_id' => $category_father->id,
                'auteur' => $faker->firstName . ' ' .$faker->lastName,
                'user_id' => 1
                ]);
            }

        }

        $categorys = Category::all();
        foreach ($categorys as $category) {
           for ($i=0; $i < 8; $i++) { 
                SousCategory::create([
                'name' => $faker->sentence('3'),
                'slug' => $faker->slug,
                'category_id' => $category->id,
                'auteur' => $faker->firstName . ' ' .$faker->lastName,
                'user_id' => 1
                ]);
            }

        }

       
        for ($i=0; $i < 15; $i++) { 
                Product::create([
                'title' => $faker->sentence('5'),
                'slug' => $faker->slug,
                'subtitle' => $faker->sentence('4'),
                'description' =>$faker->text,
                'price' =>$faker->numberBetween(15 , 300) * 100,
                'image' => 'https://via.placeholder.com/360x360'
            ])->categories()->attach([
                rand(1,4),
            ]);
        }
        

    }
}
