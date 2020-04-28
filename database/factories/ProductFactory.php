<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;
use App\Models\Category;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'category_id'=>Category::all()->random()->id,
        'name'=>$faker->unique()->name,
        'description'=>$faker->realText(),
        'price'=>random_int(100, 1000),
        'sale_price'=>random_int(10, 90),
    ];
});
