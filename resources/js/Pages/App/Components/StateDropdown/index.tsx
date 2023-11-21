import { Dropdown } from '@/Pages/App/Components/Dropdown';
import { FormItem } from '@/Pages/App/Components/FormItem';
import {
    usePreSelection,
    useStateRequest,
    useStateResponse,
} from '@/Pages/App/Components/StateDropdown/libraries/hooks';
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

export const StateDropdown = ({
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
            <Dropdown
                value={stateID}
                name='state'
                onChange={(evt) => onStateChange(Number(evt.target.value))}
                disabled={!navigator.onLine}
                required={true}
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
            </Dropdown>
        </FormItem>
    );
};
