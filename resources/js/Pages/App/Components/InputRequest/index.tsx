import {
    InputField_,
    Label_,
} from '@/Pages/App/Components/InputRequest/styling';
import { LabelText } from '@/Pages/App/Components/LabelText';
import { RequestBtn } from '@/Pages/App/Components/RequestBtn';
import { createRef } from 'react';

type InputRequestProps = {
    placeholderKey: string;
    maxLength: number;
    toolLabelKey?: string;
    onClick?: (value: string) => void;
};

export const InputRequest = ({
    toolLabelKey,
    placeholderKey,
    maxLength = Infinity,
    onClick = () => {},
}: InputRequestProps) => {
    const inputRef = createRef<HTMLInputElement>();
    return (
        <Label_>
            <LabelText toolLabelKey={toolLabelKey} />
            <InputField_
                ref={inputRef}
                placeholderKey={placeholderKey}
                maxLength={maxLength}
            />
            <RequestBtn
                inputRef={inputRef}
                onClick={onClick}
            />
        </Label_>
    );
};

export { Label_ };
