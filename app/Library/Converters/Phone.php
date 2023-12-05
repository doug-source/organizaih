<?php

namespace App\Library\Converters;

final class Phone
{
    /**
     * Handle the phone if it is not null, removing all non-digits
     *
     * @param ?string $phone
     * @return ?string
     */
    public static function clear(?string $phone): ?string
    {
        if (!$phone) {
            return $phone;
        }
        return preg_replace('|[^\d]|', '', $phone);
    }
}
