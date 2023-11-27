<?php

use Illuminate\Support\Str;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the database connections setup for your application.
    | Of course, examples of configuring each database platform that is
    | supported by Laravel is shown below to make development simple.
    |
    |
    | All database work in Laravel is done through the PHP PDO facilities
    | so make sure you have the driver for your particular database of
    | choice installed on your machine before you begin development.
    |
    */

    'connections' => [

        'sqlite' => [
            'driver' => 'sqlite',
            'url' => env('DATABASE_URL'),
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
        ],

        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ],

        'pgsql' => [
            'driver' => 'pgsql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '5432'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            'search_path' => 'public',
            'sslmode' => 'prefer',
        ],

        'sqlsrv' => [
            'driver' => 'sqlsrv',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // 'encrypt' => env('DB_ENCRYPT', 'yes'),
            // 'trust_server_certificate' => env('DB_TRUST_SERVER_CERTIFICATE', 'false'),
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run in the database.
    |
    */

    'migrations' => 'migrations',

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer body of commands than a typical key-value system
    | such as APC or Memcached. Laravel makes it easy to dig right in.
    |
    */

    'redis' => [

        'client' => env('REDIS_CLIENT', 'phpredis'),

        'options' => [
            'cluster' => env('REDIS_CLUSTER', 'redis'),
            'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_') . '_database_'),
        ],

        'default' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],

        'cache' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_CACHE_DB', '1'),
        ],

    ],

    'column-sizes' => [
        'user' => [
            'name' => env('COLUMN_SIZE_USER_NAME', '250'),
            'email' => env('COLUMN_SIZE_USER_EMAIL', '250'),
        ],
        'customer' => [
            'name' => env('COLUMN_SIZE_CUSTOMER_NAME', '250'),
            'phone' => env('COLUMN_SIZE_CUSTOMER_PHONE', '11'),
            'photo' => env('COLUMN_SIZE_CUSTOMER_PHOTO', '100')
        ],
        'product' => [
            'name' => env('COLUMN_SIZE_PRODUCT_NAME', '250'),
            'description' => env('COLUMN_SIZE_PRODUCT_DESCRIPTION', '250'),
            'obs' => env('COLUMN_SIZE_PRODUCT_OBS', '500'),
            'photo' => env('COLUMN_SIZE_PRODUCT_PHOTO', '100')
        ],
        'product-category' => [
            'name' => env('COLUMN_SIZE_PRODUCT_CATEGORY_NAME', '250'),
            'description' => env(
                'COLUMN_SIZE_PRODUCT_CATEGORY_DESCRIPTION',
                '250'
            ),
            'obs' => env('COLUMN_SIZE_PRODUCT_CATEGORY_OBS', '500')
        ],
        'address' => [
            'street' => env('COLUMN_SIZE_ADDRESS_STREET', '250'),
            'district' => env('COLUMN_SIZE_ADDRESS_DISTRICT', '250')
        ],
        'inventory' => [
            'qty' => env('COLUMN_SIZE_INVENTORY_QTY', '4294967295')
        ],
        'sale' => [
            'qty' => env('COLUMN_SIZE_SALE_QTY', '4294967295')
        ],
        'inventory-sale' => [
            'qty_used' => env('COLUMN_SIZE_INVENTORY_SALE_QTY', '4294967295')
        ],
        'register-request' => [
            'phone' => env('COLUMN_SIZE_REGISTER_REQUEST_PHONE', '11')
        ],
        'allowed-register' => [
            'phone' => env('COLUMN_SIZE_ALLOWED_REGISTER_PHONE', '11')
        ]
    ],

    'columns-precisions' => [
        'inventory' => [
            'cost' => env('COLUMN_PRECISION_INVENTORY_COST', '8')
        ],
        'sale' => [
            'price' => env('COLUMN_PRECISION_SALE_PRICE', '8')
        ]
    ],

    'columns-scales' => [
        'inventory' => [
            'cost' => env('COLUMN_SCALE_INVENTORY_COST', '2')
        ],
        'sale' => [
            'price' => env('COLUMN_SCALE_SALE_PRICE', '2')
        ]
    ]

];
