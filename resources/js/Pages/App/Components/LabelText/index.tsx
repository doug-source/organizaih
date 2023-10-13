import { InputRequest } from '@/Pages/App/Components/InputRequest';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef } from 'react';

type InputRequestProps = ComponentPropsWithoutRef<typeof InputRequest>;

type LabelTextProps = {
    toolLabelKey: InputRequestProps['toolLabelKey'];
};

export const LabelText = ({ toolLabelKey }: LabelTextProps) => {
    const translate = useTranslate();
    if (!toolLabelKey) {
        return null;
    }
    return <span>{translate(toolLabelKey, true)}: &nbsp;</span>;
};
