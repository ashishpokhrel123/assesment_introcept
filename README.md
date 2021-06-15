# project Details <br />

Submitted By: Ashish Pokhrel
Email : aashishpokhrel146@gmail.com
Contact number : 9860409629

#All countries List get from
(https://restcountries.eu/rest/v2/all)

# features

1. User can save their details on csv file.
2. User can fetch all deteails from csv file.

# Testing

For testing I have used phpunit testing.

# Continous integration

For Continous integration, I have used travis CI.
Step of CI using Travis CI
1.Login from github account from travis-ci-org (https://travis-ci.org/). 2. select git respo which you want to do continous integration. 3. Create new file in laarvel vue project with name '.travis.yml' and create following things inside file
language: php

php:

- 7.3

os: linux

before_script:

- composer install
- cp .env.example .env
- php artisan key:generate

script:

- vendor/bin/phpunit

6. After than run your test cases by using command - vendor/bin/phpunit . After some miniutes , you will see either your test pass or fail

# Log Management

For log Management , i have used 'Understand.io". <br />
understand.io is an online event and log management system which enables you to release immense value from log data that you already collect. You can get complete application visibility in real-time, helping you to track down error messages, application requests, customer problems, and much more.
(https://www.understand.io/)

       #Steps:
         1. First Up all  create new account in https://www.understand.io/.
         2. Then put token in .env.
         3. Now ready to send log to Understand.io.
