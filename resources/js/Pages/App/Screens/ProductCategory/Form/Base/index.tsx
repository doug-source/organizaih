import { DefaultForm_ } from '@/Pages/App/Components/DefaultForm';
import { FormItem } from '@/Pages/App/Components/FormItem';
import { SubmitBtn_ } from '@/Pages/App/Components/SubmitForm';
import { DispatchFn } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries';
import {
    makeDescriptionChange,
    makeNameChange,
    makeObsChange,
} from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/handlers';
import { useProductCategorySubmit } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/hooks/submittions';
import { ProdCategoryInput_ } from '@/Pages/App/Screens/ProductCategory/Form/Base/styling';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { columnSizeDB } from '@/Pages/App/settings';
import { useTokenRequest, useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef } from 'react';
import { useTheme } from 'styled-components';

type BaseProps = ComponentPropsWithoutRef<'form'> & {
    productCategory: IProductCategory | null;
    errors: ErrorsType;
    setErrors: ErrorsSetterType;
    dispatch: DispatchFn;
};

const Base = ({
    method,
    productCategory,
    errors,
    setErrors = () => {},
    dispatch = (f) => f,
    ...props
}: BaseProps) => {
    const translate = useTranslate();
    const tokenRequest = useTokenRequest();
    const onNameChange = makeNameChange(dispatch);
    const onDescriptionChange = makeDescriptionChange(dispatch);
    const onObsChange = makeObsChange(dispatch);
    const theme = useTheme();
    const submitBtnTheme = theme.productCategory.form.base.submitBtn;
    const onProductCategorySubmit = useProductCategorySubmit(
        productCategory,
        setErrors,
    );

    if (productCategory === null) {
        return null;
    }
    return (
        <DefaultForm_
            {...props}
            onSubmit={onProductCategorySubmit}
            method='POST'
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
            <FormItem
                errorData={errors?.name}
                labelName='form--field_name'
                labelText={translate('name', true) + ':'}
            >
                <ProdCategoryInput_
                    id='form--field_name'
                    name='name'
                    value={productCategory.name}
                    maxLength={columnSizeDB.productCategory}
                    onChange={onNameChange}
                    required
                />
            </FormItem>
            <FormItem
                errorData={errors?.description}
                labelName='form--field_description'
                labelText={translate('description', true) + ':'}
            >
                <ProdCategoryInput_
                    as='textarea'
                    id='form--field_description'
                    rows={2}
                    value={productCategory.description || ''}
                    name='description'
                    maxLength={columnSizeDB.productCategoryDescription}
                    onChange={onDescriptionChange}
                />
            </FormItem>
            <FormItem
                errorData={errors?.obs}
                labelName='form--field_obs'
                labelText={translate('obs', true) + ':'}
            >
                <ProdCategoryInput_
                    as='textarea'
                    id='form--field_obs'
                    rows={5}
                    value={productCategory.obs || ''}
                    name='obs'
                    maxLength={columnSizeDB.productCategoryObs}
                    onChange={onObsChange}
                />
            </FormItem>
            <SubmitBtn_
                as='input'
                $color={submitBtnTheme.color}
                disabled={!navigator.onLine}
                value={translate('save', true)}
            />
        </DefaultForm_>
    );
};

export { Base as ProductCategoryBase };
