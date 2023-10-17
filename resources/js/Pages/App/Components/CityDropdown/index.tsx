import { Dropdown, FormItem } from '@/Pages/App/Components';
import {
    useCityRequest,
    useCityResponse,
    usePreSelection,
} from '@/Pages/App/Components/CityDropdown/libraries';
import { ComponentPropsWithoutRef } from 'react';

type FormItemProps = ComponentPropsWithoutRef<typeof FormItem>;

type CityProps = {
    cityID: number;
    cityLabelText: FormItemProps['labelText'];
    cityError: FormItemProps['errorData'];
    citySelectOption: string;
    onCityChange: (cityID: number) => void;
    stateID: number;
    preSelection: boolean;
};

export const CityDropdown = ({
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
            <Dropdown
                value={cityID}
                name='city'
                onChange={(evt) => onCityChange(Number(evt.target.value))}
                disabled={!navigator.onLine}
                required={true}
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
            </Dropdown>
        </FormItem>
    );
};
