import { Legend_ } from '@/Pages/App/Components/ConfigLegend/styling';
import { HTMLAttributes } from 'react';

type ConfigLegendProps = HTMLAttributes<HTMLLegendElement>;

export const ConfigLegend = ({ children }: ConfigLegendProps) => (
    <Legend_>{children}</Legend_>
);
