<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    use HasFactory;
     protected $fillable = [
        'email',
        'first_phone',
        'second_phone',
        'adresse'
    ];
}
