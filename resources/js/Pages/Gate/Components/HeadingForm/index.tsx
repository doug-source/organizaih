import { Heading_ } from '@/Pages/Gate/Components/HeadingForm/styling';
import { useTranslate } from '@/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';
import { useTheme } from 'styled-components';

type StylingProps = ComponentPropsWithoutRef<typeof Heading_>;

type HeadingFormProps = {
    textKey: string;
    marginTop: StylingProps['$marginTop'];
    marginBottom: StylingProps['$marginBottom'];
};

export const HeadingForm = ({
    textKey,
    marginTop,
    marginBottom,
}: HeadingFormProps) => {
    const theme = useTheme();
    const translate = useTranslate();
    return (
        <Heading_
            $marginTop={marginTop}
            $marginBottom={marginBottom}
        >
            {translate(textKey, true)}
        </Heading_>
    );
};
