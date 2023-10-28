import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { ItemEditor } from '@/Pages/App/Components/ItemEditor';
import { ItemEditorNotice } from '@/Pages/App/Components/ItemEditorNotice';
import { ItemSaver } from '@/Pages/App/Components/ItemSaver';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { SelectorsBox } from '@/Pages/App/Components/SelectorsBox';
import { ProductToSale } from '@/Pages/App/Screens/Product/types';
import {
    calculateMax,
    mountSelectionAction,
    pickMaxQtyItemEditor,
    pickMinQtyItemEditor,
} from '@/Pages/App/Screens/Sales/Form/Base/libraries';
import { makeConfirmCancel } from '@/Pages/App/Screens/Sales/Form/Base/libraries/handlers';
import {
    useConfirmNoHandler,
    useConfirmYesHandler,
    useCustomerSelectionHandler,
    useInventoryRequest,
    useInventoryResponse,
    useItemEditorIncludeSelected,
    useItemEditorPriceChange,
    useItemEditorQtyChange,
    useItemEditorRemoveSelected,
    useItemSaverTouch,
    useProductSelectionHandler,
    useRemoveIncludedCallback,
    useReturnIncludedCallback,
    useSaleReducer,
} from '@/Pages/App/Screens/Sales/Form/Base/libraries/hooks';
import { useSaleSubmit } from '@/Pages/App/Screens/Sales/Form/Base/libraries/hooks/submittions';
import {
    AnonymousPhoto_,
    DefineCustomerContainer_,
    DefineItem_,
    ProductsIconItemEditor_,
    ProductsIconItemSaver_,
    SaleDataContainer_,
    SaleDataTopRow_,
    SelectCustomer_,
    SelectProduct_,
} from '@/Pages/App/Screens/Sales/Form/Base/styling';
import { useLocale } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';

type BaseProps = ComponentPropsWithoutRef<'form'> & {
    saleID?: number;
    beforeSubmit?: () => void;
    afterSubmit?: () => void;
};

const Base = ({
    method,
    saleID,
    beforeSubmit = () => {},
    afterSubmit = () => {},
    ...remain
}: BaseProps) => {
    const translate = useTranslate();
    const [locale] = useLocale();

    const [state, dispatch] = useSaleReducer();
    const [storeInventory] = useInventoryRequest(state, dispatch);
    useInventoryResponse(state, dispatch, storeInventory);

    const onReturnIncluded = useReturnIncludedCallback(state, dispatch);
    const onRemoveIncluded = useRemoveIncludedCallback(dispatch);

    const { touchListeners, saleTouched, setSaleTouched } =
        useItemSaverTouch(dispatch);

    const onItemEditorQtyChange = useItemEditorQtyChange(state, dispatch);
    const onItemEditorPriceChange = useItemEditorPriceChange(dispatch);
    const onItemEditorRemoveSelected = useItemEditorRemoveSelected(dispatch);
    const onItemEditorIncludeSelected = useItemEditorIncludeSelected(
        state,
        dispatch,
    );

    const onConfirmYesHandler = useConfirmYesHandler(
        dispatch,
        onRemoveIncluded,
        saleTouched,
        setSaleTouched,
    );
    const onConfirmNoHandler = useConfirmNoHandler(
        dispatch,
        onRemoveIncluded,
        saleTouched,
        setSaleTouched,
    );
    const onSubmit = useSaleSubmit(
        state.salesToSave,
        null,
        state.customer?.id ?? 0,
        beforeSubmit,
        afterSubmit,
        saleID,
    );

    const selectionAction = mountSelectionAction(saleID);

    const onProductSelectionClick = useProductSelectionHandler(
        state,
        selectionAction,
    );
    const onCustomerSelectionClick = useCustomerSelectionHandler(
        state,
        selectionAction,
    );

    return (
        <>
            <SaleDataContainer_>
                <SaleDataTopRow_>
                    <SelectorsBox show>
                        <SelectProduct_
                            target='sales'
                            onSelectionClick={onProductSelectionClick}
                        />
                        <SelectCustomer_
                            show={!state.customer}
                            target='sales'
                            onSelectionClick={onCustomerSelectionClick}
                        />
                    </SelectorsBox>
                    {state.customer && (
                        <DefineCustomerContainer_>
                            <DefineItem_
                                labelText={translate('customer', true) + ':'}
                                valueText={state.customer.name}
                                childrenSimilar
                                wrap
                            >
                                <ProfilePhotoOutput
                                    iconNoPhoto={<AnonymousPhoto_ />}
                                    url={state.customer.photo}
                                />
                            </DefineItem_>
                        </DefineCustomerContainer_>
                    )}
                </SaleDataTopRow_>
                <ItemEditor
                    itemSelected={state.productToSale}
                    iconDefault={<ProductsIconItemEditor_ />}
                    qtyLabelText={translate('qty', true)}
                    priceLabelText={`${translate('price', true)} (${translate(
                        'unitary',
                    )}):`}
                    onQtyChange={onItemEditorQtyChange}
                    onPriceChange={onItemEditorPriceChange}
                    onRemoveSelected={onItemEditorRemoveSelected}
                    onIncludeSelected={onItemEditorIncludeSelected}
                    minQty={pickMinQtyItemEditor(state)}
                    maxQty={pickMaxQtyItemEditor(state)}
                    notice={
                        <ItemEditorNotice
                            show={Boolean(state.productToSale)}
                            label={`${translate(
                                'inventory-index-title',
                                true,
                            )}: `}
                            value={`${calculateMax(
                                state.productToSale,
                                state.inventory?.data ?? null,
                                state.salesFromDB,
                            )} ${translate('units')}`}
                        />
                    }
                />
                <ItemSaver
                    list={state.salesToSave}
                    locale={locale.replace('_', '-')}
                    touchListeners={touchListeners}
                    iconDefault={<ProductsIconItemSaver_ />}
                    onReturnIncluded={onReturnIncluded}
                    onRemoveIncluded={onRemoveIncluded}
                    onTouchStart={(sale: ProductToSale) => setSaleTouched(sale)}
                />
            </SaleDataContainer_>
            <DefaultForm
                onSubmit={onSubmit}
                disabled={
                    !state.salesToSave.length ||
                    Boolean(state.productToSale) ||
                    !state.customer
                }
                {...remain}
            />
            <Confirmation
                showConfirm={Boolean(state.optionsConfirm)}
                question={translate('what-to-do-with-sale', true)}
                yesKeyText={translate('re-edit', true)}
                noKeyText={translate('remove', true)}
                onYes={onConfirmYesHandler}
                onNo={onConfirmNoHandler}
                onClose={makeConfirmCancel(dispatch)}
            />
        </>
    );
};

export { Base as SaleBase };
