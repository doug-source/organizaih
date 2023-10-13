@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('pageKey', 'app')

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            columnSizeDB: {
                productCategory: {!! config('database.column-sizes.product-category.name') !!},
                productCategoryDescription: {!! config('database.column-sizes.product-category.description') !!},
                productCategoryObs: {!! config('database.column-sizes.product-category.obs') !!},
                customer: {!! config('database.column-sizes.customer.name') !!},
                customerPhone: {!! config('database.column-sizes.customer.photo') !!},
                product: {!! config('database.column-sizes.product.name') !!},
                productDescription: {!! config('database.column-sizes.product.description') !!},
                productObs: {!! config('database.column-sizes.product.obs') !!},
                addressStreet: {!! config('database.column-sizes.address.street') !!},
                addressDistrict: {!! config('database.column-sizes.address.district') !!},
                inventoryMaxQty: {!! config('database.column-sizes.inventory.qty') !!},
                saleMaxQty: {!! config('database.column-sizes.sale.qty') !!},
            },
            columnPrecisionDB: {
                inventory: {!! config('database.columns-precisions.inventory.cost') !!},
                sale: {!! config('database.columns-precisions.sale.price') !!},
            },
            columnScaleDB: {
                inventory: {!! config('database.columns-scales.inventory.cost') !!},
                sale: {!! config('database.columns-scales.sale.price') !!}
            },
            themeKey: {!! $themeKey !!},
            apiVersion: '{!! config('auth.api-version') !!}',
            tokenAuth: '{!! $tokenAuth !!}'
        };
    </script>
    @vite('resources/js/app.ts')
@endsection

@section('body')
    @parent
@endsection
