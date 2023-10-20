import { SubmitBtn_ } from '@/Pages/App/Components/SubmitForm';
import { useInventorySubmit } from '@/Pages/App/Screens/Inventory/Form/Base/Fields/libraries/hooks';
import { DefaultFormInventory_ } from '@/Pages/App/Screens/Inventory/Form/Base/Fields/styling';
import { InventoryItemIdentifier } from '@/Pages/App/Screens/Inventory/Form/Base/libraries';
import { InventoryDefinitionState } from '@/Pages/App/Screens/Inventory/Form/libraries';
import { useTokenRequest, useTranslate } from '@/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';
import { useTheme } from 'styled-components';

type FieldsProps = ComponentPropsWithoutRef<'form'> & {
    state: InventoryDefinitionState;
    inventoryItemID: InventoryItemIdentifier;
};

export const Fields = ({
    state,
    method,
    inventoryItemID,
    ...props
}: FieldsProps) => {
    const translate = useTranslate();
    const tokenRequest = useTokenRequest();
    const theme = useTheme();
    const submitBtnTheme = theme.inventory.form.base.submitBtn;
    const onSubmit = useInventorySubmit(
        state.productsToInventory,
        null,
        inventoryItemID,
    );

    return (
        <DefaultFormInventory_
            {...props}
            onSubmit={onSubmit}
            method='POST'
            encType='multipart/form-data'
        >
            <input
                type='hidden'
                name='_token'
                value={tokenRequest}
            />
            {Boolean(method) && (
                <input
                    type='hidden'
                    name='_method'
                    value={method}
                />
            )}
            <SubmitBtn_
                as='input'
                $color={submitBtnTheme.color}
                disabled={
                    !navigator.onLine ||
                    !state.productsToInventory.length ||
                    Boolean(state.productToInventory)
                }
                value={translate('save', true)}
            />
        </DefaultFormInventory_>
    );
};
