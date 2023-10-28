import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { FormItem } from '@/Pages/App/Components/FormItem';
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
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef } from 'react';

type BaseProps = {
    productCategory: IProductCategory | null;
    errors: ErrorsType;
    setErrors: ErrorsSetterType;
    dispatch: DispatchFn;
} & Omit<ComponentPropsWithoutRef<typeof DefaultForm>, 'children' | 'disabled'>;

const Base = ({
    productCategory,
    errors,
    setErrors = () => {},
    dispatch = (f) => f,
    ...remain
}: BaseProps) => {
    const translate = useTranslate();
    const onNameChange = makeNameChange(dispatch);
    const onDescriptionChange = makeDescriptionChange(dispatch);
    const onObsChange = makeObsChange(dispatch);
    const onProductCategorySubmit = useProductCategorySubmit(
        productCategory,
        setErrors,
    );
    if (productCategory === null) {
        return null;
    }
    return (
        <DefaultForm
            {...remain}
            onSubmit={onProductCategorySubmit}
        >
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
        </DefaultForm>
    );
};

export { Base as ProductCategoryBase };
