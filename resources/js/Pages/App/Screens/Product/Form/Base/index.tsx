import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { FormItem } from '@/Pages/App/Components/FormItem';
import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { dettachCategoryName } from '@/Pages/App/Screens/Product/Form/Base/libraries';
import {
    makeCatSelectionClick,
    makeObsChange,
    makeProfilePhotoChange,
} from '@/Pages/App/Screens/Product/Form/Base/libraries/handlers';
import {
    useProductDescriptionHandler,
    useProductNameHandler,
} from '@/Pages/App/Screens/Product/Form/Base/libraries/hooks';
import { useProductSubmit } from '@/Pages/App/Screens/Product/Form/Base/libraries/hooks/submittions';
import {
    CategoryContainer_,
    CategoryInfo_,
    FormItemPhoto_,
    ProductInput_,
    ProductsIcon_,
    SelectCategoryLink_,
} from '@/Pages/App/Screens/Product/Form/Base/styling';
import {
    useErrors,
    useErrorsSetter,
    useProduct,
    useProductDispatch,
} from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { useAppDispatch } from '@/Pages/App/libraries';
import { columnSizeDB } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef, useRef } from 'react';

type BaseProps = Omit<
    ComponentPropsWithoutRef<typeof DefaultForm>,
    'children' | 'disabled'
>;

const Base = (props: BaseProps) => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    const product = useProduct();
    const errors = useErrors();
    const setErrors = useErrorsSetter();
    const dispatch = useProductDispatch();

    const inputFile = useRef<HTMLInputElement | null>(null);
    const onProductSubmit = useProductSubmit(
        product,
        product.category,
        inputFile,
        setErrors,
    );
    const productNameHandler = useProductNameHandler(dispatch);
    const productDescriptionHandler = useProductDescriptionHandler(dispatch);

    return (
        <DefaultForm
            {...props}
            onSubmit={onProductSubmit}
        >
            <FormItemPhoto_
                errorData={errors.photo}
                labelName='form--field_photo'
                labelText={translate('photo', true) + ':'}
            >
                <ProfilePhotoInput
                    ref={inputFile}
                    iconNoPhoto={<ProductsIcon_ />}
                    photo={product.photo}
                    photoChosen={product.photoChosen}
                    onChange={makeProfilePhotoChange(dispatch)}
                />
            </FormItemPhoto_>
            <FormItem
                errorData={errors.name}
                labelName='form--field_name'
                labelText={translate('name', true) + ':'}
            >
                <ProductInput_
                    id='form--field_name'
                    name='name'
                    value={product.name}
                    maxLength={columnSizeDB.product}
                    onChange={productNameHandler}
                    required
                />
            </FormItem>
            <FormItem
                errorData={errors.category}
                labelName='form--field_category'
                labelText={translate('category', true) + ':'}
            >
                <CategoryContainer_>
                    <SelectCategoryLink_
                        to='/product-categories/select/products'
                        onClick={makeCatSelectionClick(appDispatch)}
                    >
                        <CategoryInfo_>
                            <div className='category-info-data'>
                                <div>
                                    {dettachCategoryName(product, translate)}
                                </div>
                            </div>
                        </CategoryInfo_>
                    </SelectCategoryLink_>
                </CategoryContainer_>
            </FormItem>
            <FormItem
                errorData={errors.description}
                labelName='form--field_description'
                labelText={translate('description', true) + ':'}
            >
                <ProductInput_
                    as='textarea'
                    id='form--field_description'
                    rows={2}
                    value={product.description ?? ''}
                    name='description'
                    maxLength={columnSizeDB.productDescription}
                    onChange={productDescriptionHandler}
                />
            </FormItem>
            <FormItem
                errorData={errors.obs}
                labelName='form--field_obs'
                labelText={translate('obs', true) + ':'}
            >
                <ProductInput_
                    as='textarea'
                    id='form--field_obs'
                    rows={5}
                    value={product.obs ?? ''}
                    name='obs'
                    maxLength={columnSizeDB.productObs}
                    onChange={makeObsChange(dispatch)}
                />
            </FormItem>
        </DefaultForm>
    );
};

export { Base as ProductFormBase };
