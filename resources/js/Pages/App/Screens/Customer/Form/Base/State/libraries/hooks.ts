import { State } from '@/Pages/App/Screens/Customer/Form/Base/State';
import { IState } from '@/Pages/App/Screens/Customer/Form/Base/State/libraries/types';
import { useAPI, useGenericErrorHandler } from '@/Pages/App/libraries';
import { stateCitySelection } from '@/Pages/App/settings';
import { endpoints } from '@/settings';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

export const useStateRequest = () => {
    const [stateStore] = useAPI<IState, IState[]>(endpoints.state.list);
    useGenericErrorHandler(stateStore.error);
    return [stateStore] as const;
};

type Store = ReturnType<typeof useStateRequest>[0];

export const useStateResponse = (stateStore: Store) => {
    const [stateList, setStateList] = useState<IState[]>([]);
    useEffect(() => {
        if (stateStore.error || !stateStore.data) {
            return;
        }
        if (stateStore.data.length || stateStore.status) {
            setStateList(stateStore.data);
        }
    }, [setStateList, stateStore.error, stateStore.data, stateStore.status]);
    return [stateList] as const;
};

type StateProps = ComponentPropsWithoutRef<typeof State>;
type StateListArg = ReturnType<typeof useStateResponse>[0];

export const usePreSelection = (
    preSelection: StateProps['preSelection'],
    stateID: StateProps['stateID'],
    stateList: StateListArg,
    onStateChange: StateProps['onStateChange'],
) => {
    useEffect(() => {
        if (!preSelection || stateID > 0 || stateList.length === 0) {
            return;
        }
        const stateItem = stateList.find(
            (state) => state.acronym === stateCitySelection.stateAcronym,
        );
        if (stateItem && stateItem.id) {
            onStateChange(stateItem.id);
        }
    }, [
        preSelection,
        stateID,
        stateList,
        stateCitySelection.stateAcronym,
        onStateChange,
    ]);
};
