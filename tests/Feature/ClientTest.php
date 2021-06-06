<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClientTest extends TestCase
{
    //testing for storing data to csv file

    // public function testStoreDataToCSV()
    // {
        
    //       $data = [
    //         'name' => 'New Client',
    //         'email' => 'client123@gmail.com',
    //         'phone' => '9860409629',
    //         'gender' => 'male',
    //         'dob' => '1997-09-27',
    //         'nationality' => 'clientcountry',
    //         'education' => 'client',
    //     ];
    //     $response = $this->json('POST', route('create'), $data);
    //     $response->assertStatus(200);

    // }

    //testing for fetching data from csv file

    public function testFetchDatafromCsv()
    {

          $data = [
            'name' => 'New Client',
            'email' => 'client123@gmail.com',
            'phone' => '9860409629',
            'gender' => 'male',
            'dob' => '1997-09-27',
            'nationality' => 'clientcountry',
            'education' => 'client',
        ];
        $response = $this->json('POST', route('create'), $data);
        $response = $this->json('GET', route('getclient'));
        $response->assertStatus(200);
        
        

    }
}
