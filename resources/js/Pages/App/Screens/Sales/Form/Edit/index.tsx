import { SaleBase } from '@/Pages/App/Screens/Sales/Form/Base';
import {
    useEditInitSelection,
    useSaleItemRequest,
} from '@/Pages/App/Screens/Sales/Form/Edit/libraries/hooks';
import { SaleFormInitProps } from '@/Pages/App/Screens/Sales/Form/libraries';
import { useInitPage, useSelections } from '@/Pages/App/libraries/hooks';
import { useState } from 'react';

type EditProps = {
    saleID: number;
    onInit: SaleFormInitProps;
};

const Edit = ({ saleID, onInit }: EditProps) => {
    const selections = useSelections();

    useInitPage('sale-edit-title');

    const [submitting, setSubmitting] = useState(false);
    const [saleInfo] = useSaleItemRequest(saleID, submitting);
    useEditInitSelection(saleInfo, onInit, saleID, submitting);

    if (submitting || !selections) {
        return null;
    }
    return (
        <SaleBase
            method='PUT'
            beforeSubmit={() => setSubmitting(true)}
            afterSubmit={() => setSubmitting(false)}
            saleID={saleID}
        />
    );
};

export { Edit as SaleEdit };
