import { CityDropdown } from '@/Pages/App/Components/CityDropdown';
import { DatePicker } from '@/Pages/App/Components/DatePicker';
import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { FormItem } from '@/Pages/App/Components/FormItem';
import { InputForm_ } from '@/Pages/App/Components/InputForm';
import { InputNumber } from '@/Pages/App/Components/InputNumber';
import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { RadioToggle } from '@/Pages/App/Components/RadioToggle';
import { StateDropdown } from '@/Pages/App/Components/StateDropdown';
import {
    useCityChange,
    useCustomerSubmit,
    useStateChange,
} from '@/Pages/App/Screens/Customer/Form/Base/libraries';
import {
    makeDatePickerChange,
    makeDistrictChange,
    makeFirstPhoneChange,
    makeNameChange,
    makeNumberChange,
    makePhotoChange,
    makeSecondPhoneChange,
    makeSexChange,
    makeStreetChange,
} from '@/Pages/App/Screens/Customer/Form/Base/libraries/handlers';
import {
    FormItemPhoto_,
    InputNumber_,
} from '@/Pages/App/Screens/Customer/Form/Base/styling';
import {
    useCustomer,
    useCustomerDispatch,
    useErrors,
    useErrorsSetter,
} from '@/Pages/App/Screens/Customer/Form/libraries/hooks';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { columnSizeDB, sexSettingList } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef, Suspense, useRef } from 'react';
import { useTheme } from 'styled-components';

type BaseProps = {
    preSelection?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof DefaultForm>, 'children' | 'disabled'>;

export const Base = ({ preSelection = false, ...remain }: BaseProps) => {
    const translate = useTranslate();
    const customer = useCustomer();
    const dispatch = useCustomerDispatch();
    const errors = useErrors();
    const setErrors = useErrorsSetter();

    const inputFile = useRef<HTMLInputElement>(null);
    const inputNumberRef = useRef<HTMLInputElement>(null);

    const onCustomerSubmit = useCustomerSubmit(customer, inputFile, setErrors);

    const theme = useTheme();
    return (
        <DefaultForm
            {...remain}
            onSubmit={onCustomerSubmit}
        >
            <FormItem
                errorData={errors.name}
                labelName='form--field_name'
                labelText={translate('name', true) + ':'}
            >
                <InputForm_
                    id='form--field_name'
                    name='name'
                    value={customer.name}
                    maxLength={columnSizeDB.customer}
                    onChange={makeNameChange(dispatch)}
                    required
                />
            </FormItem>
            <FormItemPhoto_
                errorData={errors.photo}
                labelName='form--field_photo'
                labelText={translate('photo', true) + ':'}
            >
                <ProfilePhotoInput
                    ref={inputFile}
                    iconNoPhoto={
                        <Suspense>
                            <AnonymousSVG />
                        </Suspense>
                    }
                    photo={customer.photo}
                    photoChosen={customer.photoChosen}
                    onChange={makePhotoChange(dispatch)}
                />
            </FormItemPhoto_>
            <FormItem
                errorData={errors.sex}
                labelName='-'
                labelText={translate('customer-fields-sex', true) + ':'}
            >
                <RadioToggle
                    options={sexSettingList(translate, theme.radioToggle)}
                    stateValue={customer.sex}
                    onChange={makeSexChange(dispatch)}
                />
            </FormItem>
            <FormItem
                errorData={errors.phone_1}
                labelName='form--field_phone_1'
                labelText={translate('customer-fields-phone_1', true) + ':'}
            >
                <InputForm_
                    id='form--field_phone_1'
                    pattern='^\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$'
                    name='phone_1'
                    maxLength={columnSizeDB.customerPhone}
                    value={customer.phone_1 ?? ''}
                    onChange={makeFirstPhoneChange(dispatch)}
                    placeholder='DDD 00000-0000'
                />
            </FormItem>
            <FormItem
                errorData={errors.phone_2}
                labelName='form--field_phone_2'
                labelText={translate('customer-fields-phone_2', true) + ':'}
            >
                <InputForm_
                    id='form--field_phone_2'
                    pattern='^\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$'
                    name='phone_2'
                    value={customer.phone_2 ?? ''}
                    maxLength={columnSizeDB.customerPhone}
                    onChange={makeSecondPhoneChange(dispatch)}
                    placeholder='DDD 00000-0000'
                />
            </FormItem>
            <FormItem
                errorData={errors.birthday}
                labelName='form--field_birthday'
                labelText={translate('customer-fields-birthday', true) + ':'}
            >
                <DatePicker
                    date={customer.birthday}
                    label='dd/mm/yyyy'
                    placeholder={true}
                    yearRangeType='before'
                    qtyYears={100}
                    onDateChanged={makeDatePickerChange(dispatch)}
                />
            </FormItem>
            <StateDropdown
                stateID={customer.address.state.id}
                stateError={errors.state}
                stateLabelText={translate('customer-fields-state', true) + ':'}
                stateSelectOption={translate('select-state', true)}
                preSelection={preSelection}
                onStateChange={useStateChange(dispatch)}
            />
            <CityDropdown
                stateID={customer.address.state.id}
                cityID={customer.address.city.id}
                cityError={errors.city}
                cityLabelText={translate('customer-fields-city', true) + ':'}
                citySelectOption={translate('select-city', true)}
                preSelection={preSelection}
                onCityChange={useCityChange(dispatch)}
            />
            <FormItem
                errorData={errors.street}
                labelName='form--field_street'
                labelText={translate('customer-fields-street', true) + ':'}
            >
                <InputForm_
                    value={customer.address.street}
                    id='form--field_street'
                    name='street'
                    maxLength={columnSizeDB.addressStreet}
                    onChange={makeStreetChange(dispatch)}
                    required
                />
            </FormItem>
            <FormItem
                errorData={errors.number}
                labelName='form--field_number'
                labelText={translate('customer-fields-number', true)}
            >
                <InputNumber_
                    as={InputNumber}
                    min='1'
                    value={customer.address.number}
                    id='form--field_number'
                    name='number'
                    onChange={makeNumberChange(dispatch)}
                    ref={inputNumberRef}
                    required
                />
            </FormItem>
            <FormItem
                errorData={errors.district}
                labelName='form--field_district'
                labelText={translate('customer-fields-district', true) + ':'}
            >
                <InputForm_
                    value={customer.address.district}
                    id='form--field_district'
                    name='district'
                    maxLength={columnSizeDB.addressDistrict}
                    onChange={makeDistrictChange(dispatch)}
                    required
                />
            </FormItem>
        </DefaultForm>
    );
};
