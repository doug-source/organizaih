import { InputRequest } from '@/Pages/App/Components/InputRequest';
import { RequestBtn_ } from '@/Pages/App/Components/RequestBtn/styling';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef, RefObject } from 'react';
import { useTheme } from 'styled-components';

type InputRequestProps = ComponentPropsWithoutRef<typeof InputRequest>;

type RequestBtnProps = {
    inputRef: RefObject<HTMLInputElement>;
    onClick: InputRequestProps['onClick'];
};

export const RequestBtn = ({ inputRef, onClick }: RequestBtnProps) => {
    const translate = useTranslate();
    const theme = useTheme();
    const btnTheme = theme.inputRequest.btn;
    const btnMeasure = theme.measures.tools.inputRequest.btn;
    return (
        <RequestBtn_
            $borderColor={btnTheme.border.color}
            $borderWidth={btnMeasure.border.width}
            $color={btnTheme.color}
            onClick={() => {
                const input = inputRef.current;
                if (input !== null) {
                    onClick && onClick(input.value);
                }
            }}
        >
            {translate('update', true)}
        </RequestBtn_>
    );
};
