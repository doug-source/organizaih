import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { ItemEditor } from '@/Pages/App/Components/ItemEditor';
import { ItemSaver } from '@/Pages/App/Components/ItemSaver';
import { SelectProduct } from '@/Pages/App/Components/SelectProduct';
import { SelectorsBox } from '@/Pages/App/Components/SelectorsBox';
import {
    useConfirmHandlers,
    useInventoryReducer,
    useItemEditorHandlers,
    useItemSaverDependencies,
} from '@/Pages/App/Screens/Inventory/Form/Base/libraries';
import { useProductSelectionHandler } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/hooks';
import { useInventorySubmit } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/hooks/submittions';
import {
    DefaultForm_,
    InventoryDataContainer_,
    ProductsIconItemEditor_,
    ProductsIconItemSaver_,
} from '@/Pages/App/Screens/Inventory/Form/Base/styling';
import { useLocale } from '@/Pages/App/libraries/hooks';
import { columnSizeDB } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';

type BaseProps = {
    inventoryItemID?: number;
} & Omit<ComponentPropsWithoutRef<typeof DefaultForm>, 'children' | 'disabled'>;

const Base = ({ inventoryItemID, ...remain }: BaseProps) => {
    const translate = useTranslate();
    const localeData = useLocale();

    const [state, dispatch] = useInventoryReducer();
    const {
        onItemEditorQtyChange,
        onItemEditorPriceChange,
        onItemEditorRemoveSelected,
        onItemEditorIncludeSelected,
    } = useItemEditorHandlers(state, dispatch);
    const {
        onReturnIncluded,
        onRemoveIncluded,
        onTouchStart,
        touchListeners,
        productTouched,
        setProductTouched,
    } = useItemSaverDependencies(state, dispatch);
    const { onConfirmYes, onConfirmNo, onConfirmCancel } = useConfirmHandlers(
        dispatch,
        onReturnIncluded,
        onRemoveIncluded,
        productTouched,
        setProductTouched,
    );
    const onSelectionClick = useProductSelectionHandler(inventoryItemID, state);
    const [locale] = localeData;
    const onSubmit = useInventorySubmit(
        state.productsToInventory,
        null,
        inventoryItemID,
    );

    return (
        <>
            <InventoryDataContainer_>
                <SelectorsBox show={!inventoryItemID}>
                    <SelectProduct
                        target='inventories'
                        onSelectionClick={onSelectionClick}
                    />
                </SelectorsBox>
                <ItemEditor
                    itemSelected={state.productToInventory}
                    iconDefault={<ProductsIconItemEditor_ />}
                    qtyLabelText={translate('qty', true)}
                    priceLabelText={`${translate('cost', true)} (${translate(
                        'unitary',
                    )}):`}
                    onQtyChange={onItemEditorQtyChange}
                    onPriceChange={onItemEditorPriceChange}
                    onRemoveSelected={onItemEditorRemoveSelected}
                    onIncludeSelected={onItemEditorIncludeSelected}
                    maxQty={columnSizeDB.inventoryMaxQty}
                />
                <ItemSaver
                    list={state.productsToInventory}
                    locale={locale.replace('_', '-')}
                    touchListeners={touchListeners}
                    iconDefault={<ProductsIconItemSaver_ />}
                    onReturnIncluded={onReturnIncluded}
                    onRemoveIncluded={onRemoveIncluded}
                    onTouchStart={onTouchStart}
                />
            </InventoryDataContainer_>
            <DefaultForm_
                onSubmit={onSubmit}
                {...remain}
            />
            <Confirmation
                showConfirm={Boolean(state.optionsConfirm)}
                question={translate('what-to-do-with-product', true)}
                yesKeyText={translate('re-edit', true)}
                noKeyText={translate('remove', true)}
                onYes={onConfirmYes}
                onNo={onConfirmNo}
                onClose={onConfirmCancel}
            />
        </>
    );
};

export { Base as InventoryBase };
