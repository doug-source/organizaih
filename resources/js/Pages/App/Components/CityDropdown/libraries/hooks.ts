import { CityDropdown } from '@/Pages/App/Components/CityDropdown';
import { ICity } from '@/Pages/App/Components/CityDropdown/libraries/types';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries';
import { stateCitySelection } from '@/Pages/App/settings';
import { endpoints } from '@/settings';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

type CityProps = ComponentPropsWithoutRef<typeof CityDropdown>;
type StateID = CityProps['stateID'];

export const useCityRequest = (stateID: StateID) => {
    const appDispatch = useAppDispatch();
    const [cityStore, requestCities] = useAPI<ICity, ICity[]>();
    useGenericErrorHandler(cityStore.error);
    // selection by user
    useEffect(() => {
        if (stateID > 0) {
            appDispatch({ type: DataReducerEnum.LOADING, payload: true });
            requestCities(endpoints.city.list(stateID));
        }
    }, [appDispatch, requestCities, stateID, endpoints.city.list]);

    return [cityStore] as const;
};

type Store = ReturnType<typeof useCityRequest>[0];

export const useCityResponse = (cityStore: Store) => {
    const appDispatch = useAppDispatch();
    const [cityList, setCityList] = useState<ICity[]>([]);
    useEffect(() => {
        if (cityStore.error || !cityStore.data) {
            return;
        }
        if (cityStore.data.length || cityStore.status) {
            setCityList(cityStore.data);
            appDispatch({ type: DataReducerEnum.LOADING, payload: false });
        }
    }, [cityStore.error, cityStore.status, cityStore.data, appDispatch]);
    return [cityList] as const;
};

type CityListArg = ReturnType<typeof useCityResponse>[0];

export const usePreSelection = (
    preSelection: CityProps['preSelection'],
    cityID: CityProps['cityID'],
    cityList: CityListArg,
    onCityChange: CityProps['onCityChange'],
) => {
    useEffect(() => {
        if (!preSelection || cityID > 0 || cityList.length === 0) {
            return;
        }
        const cityItem = cityList.find(
            (city) => city.name === stateCitySelection.cityName,
        );
        if (cityItem && cityItem.id) {
            onCityChange(cityItem.id);
        }
    }, [
        preSelection,
        cityID,
        cityList,
        stateCitySelection.cityName,
        onCityChange,
    ]);
};
