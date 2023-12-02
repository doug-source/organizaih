import { Fieldset_ } from '@/Pages/App/Components/ConfigFieldset/styling';
import { HTMLAttributes } from 'react';

type ConfigFieldsetProps = HTMLAttributes<HTMLFieldSetElement>;

export const ConfigFieldset = ({
    children,
    ...remain
}: ConfigFieldsetProps) => <Fieldset_ {...remain}>{children}</Fieldset_>;
