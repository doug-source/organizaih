import { Legend_ } from '@/Pages/App/Components/ConfigLegend/styling';
import { HTMLAttributes } from 'react';

type ConfigLegendProps = HTMLAttributes<HTMLLegendElement>;

export const ConfigLegend = ({ children, ...remain }: ConfigLegendProps) => (
    <Legend_ {...remain}>{children}</Legend_>
);
