<?php
chdir(__DIR__);
exec('php artisan schedule:run >> /dev/null 2>&1');