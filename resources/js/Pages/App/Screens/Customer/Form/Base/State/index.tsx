import { FormItem } from '@/Pages/App/Components';
import {
    usePreSelection,
    useStateRequest,
    useStateResponse,
} from '@/Pages/App/Screens/Customer/Form/Base/State/libraries';
import { DropdownCustomer_ } from '@/Pages/App/Screens/Customer/Form/Base/styling';
import { ComponentPropsWithoutRef } from 'react';

type FormItemProps = ComponentPropsWithoutRef<typeof FormItem>;

type StateProps = {
    stateID: number;
    stateLabelText: FormItemProps['labelText'];
    stateError: FormItemProps['errorData'];
    stateSelectOption: string;
    onStateChange: (stateID: number) => void;
    preSelection: boolean;
};

export const State = ({
    stateID,
    stateLabelText,
    stateSelectOption,
    stateError,
    onStateChange,
    preSelection = false,
}: StateProps) => {
    const [stateStore] = useStateRequest();
    const [stateList] = useStateResponse(stateStore);
    usePreSelection(preSelection, stateID, stateList, onStateChange);

    return (
        <FormItem
            errorData={stateError}
            labelName='form--field_state'
            labelText={stateLabelText}
        >
            <DropdownCustomer_
                value={stateID}
                name='state'
                onChange={(evt) => onStateChange(Number(evt.target.value))}
                disabled={!navigator.onLine}
            >
                <option
                    value='0'
                    disabled
                >
                    {stateSelectOption}
                </option>
                {stateList.map((state) => (
                    <option
                        key={state.id}
                        value={state.id}
                    >
                        {state.name}
                    </option>
                ))}
            </DropdownCustomer_>
        </FormItem>
    );
};
