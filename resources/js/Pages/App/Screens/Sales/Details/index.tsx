import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import {
    useSaleRequest,
    useSaleResponse,
} from '@/Pages/App/Screens/Sales/Details/libraries/hooks';
import {
    AnonymousPhoto_,
    AnonymousProduct_,
    DefineItemUpper_,
    DefineItem_,
    DetailsContainer_,
    PhotoProduct_,
    SaleProductsItemField_,
    SaleProductsItem_,
    SaleProducts_,
} from '@/Pages/App/Screens/Sales/Details/styling';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { pluralize } from '@/Pages/App/libraries/toolbox/I18n';
import { useTranslate } from '@/libraries/hooks';
import { Fragment, useRef } from 'react';
import { useTheme } from 'styled-components';

const Details = () => {
    const translate = useTranslate();
    useInitPage('sale-show-title');

    const [store] = useSaleRequest();
    const [sale] = useSaleResponse(store);
    const pluralRulesRef = useRef(new Intl.PluralRules('en-US'));

    const theme = useTheme();
    const { defineItems: defineItemsMeasure } = theme.measures.sale.details;

    if (store.error || !sale) {
        return null;
    }
    return (
        <DetailsContainer_ gapItems={defineItemsMeasure.container.gap}>
            <DefineItemUpper_
                labelText={translate('customer', true) + ':'}
                value={sale.customerName}
            >
                <ProfilePhotoOutput
                    absolute
                    url={sale.customerPhoto}
                    iconNoPhoto={<AnonymousPhoto_ />}
                />
            </DefineItemUpper_>
            <DefineItemUpper_
                labelText={translate('registered-in', true) + ':'}
                value={sale.createdAt}
            ></DefineItemUpper_>
            <DefineItemUpper_
                labelText={translate('product', true) + 's:'}
                posChildren
                wrap
            >
                <SaleProducts_>
                    {sale.products.map((product) => {
                        return (
                            <Fragment key={product.saleItemID}>
                                <DefineItem_
                                    childrenSimilar
                                    posChildren={true}
                                    wrap={true}
                                >
                                    <>
                                        <PhotoProduct_
                                            absolute
                                            url={product.productPhoto}
                                            iconNoPhoto={<AnonymousProduct_ />}
                                        />
                                        <SaleProductsItem_>
                                            <SaleProductsItemField_
                                                childrenSimilar
                                                value={product.productName}
                                            />
                                            <SaleProductsItemField_
                                                value={pluralize(
                                                    pluralRulesRef.current,
                                                    product.qty,
                                                    translate('unit'),
                                                    translate('units'),
                                                )}
                                            />
                                        </SaleProductsItem_>
                                    </>
                                </DefineItem_>
                            </Fragment>
                        );
                    })}
                </SaleProducts_>
            </DefineItemUpper_>
        </DetailsContainer_>
    );
};

export { Details as SaleDetails };
