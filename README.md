# React Native Laravel RESTful API
This is  simple react native app that pulls data from a laravel backend.

# Table of Contents:
* [Laravel configuration](#laravel-configuration)
* [Mobile configuration](#mobile-configuration)
* [usage](#usage)

## Laravel configuration:
```sh
$ cd web
$ composer install
```
Then rename the **.env.example** file to **.env**, open it and add your database name, your username and password, then run these commands to generate the key, create tables and insert some data:
```sh
$ php artisan key:generate
$ php artisan migrate 
```
Then serve your project with this flag to let any device from your local network to access your project.
```sh
$ php artisan serve
```
## Mobile configuration:
```sh
$ cd mobile
$ npm install
```
Then go to services/FetchVehicles.js, and add your URL where your laravel project will be hosted (your local IP adress:port).

## Usage:
```
$ react-native run-android
```


