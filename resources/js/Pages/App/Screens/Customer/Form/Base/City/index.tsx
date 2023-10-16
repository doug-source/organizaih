import { FormItem } from '@/Pages/App/Components';
import {
    useCityRequest,
    useCityResponse,
    usePreSelection,
} from '@/Pages/App/Screens/Customer/Form/Base/City/libraries';
import { StateIdentifier } from '@/Pages/App/Screens/Customer/Form/Base/State/libraries';
import { DropdownCustomer_ } from '@/Pages/App/Screens/Customer/Form/Base/styling';
import { ComponentPropsWithoutRef } from 'react';

type FormItemProps = ComponentPropsWithoutRef<typeof FormItem>;

type CityProps = {
    cityID: number;
    cityLabelText: FormItemProps['labelText'];
    cityError: FormItemProps['errorData'];
    citySelectOption: string;
    onCityChange: (cityID: number) => void;
    stateID: StateIdentifier;
    preSelection: boolean;
};

export const City = ({
    cityID,
    cityLabelText,
    citySelectOption,
    cityError,
    onCityChange,
    stateID,
    preSelection = false,
}: CityProps) => {
    const [cityStore] = useCityRequest(stateID);
    const [cityList] = useCityResponse(cityStore);
    usePreSelection(preSelection, cityID, cityList, onCityChange);

    return (
        <FormItem
            errorData={cityError}
            labelName='form--field_city'
            labelText={cityLabelText}
        >
            <DropdownCustomer_
                value={cityID}
                name='city'
                onChange={(evt) => onCityChange(Number(evt.target.value))}
                disabled={!navigator.onLine}
            >
                <option
                    value='0'
                    disabled
                >
                    {citySelectOption}
                </option>
                {cityList.map((city) => (
                    <option
                        key={city.id}
                        value={city.id}
                    >
                        {city.name}
                    </option>
                ))}
            </DropdownCustomer_>
        </FormItem>
    );
};
