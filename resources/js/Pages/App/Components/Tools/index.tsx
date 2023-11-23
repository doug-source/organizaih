import { AddButton } from '@/Pages/App/Components/AddButton';
import { Bar_ } from '@/Pages/App/Components/Bar';
import { FiltersBar_ } from '@/Pages/App/Components/FiltersBar';
import { InputFilter } from '@/Pages/App/Components/InputFilter';
import { InputRequest } from '@/Pages/App/Components/InputRequest';
import { Fragment, ReactNode } from 'react';

type ToolsProps = {
    placeholderKey?: string;
    toolLabelKey?: string;
    toolType?: ToolsType;
    maxLength?: number;
    addLink?: string;
    onAddClick?: () => void;
    onToolChange?: (value: string) => void;
    innerFilters?: ReactNode;
    outerFilters?: ReactNode;
    children?: ReactNode;
    className?: string;
};

export const enum ToolsType {
    FILTER = 'filter',
    REQUEST_NAME = 'request_name',
    NONE = 'none',
}

export const Tools = ({
    placeholderKey = '',
    toolLabelKey = '',
    toolType = ToolsType.NONE,
    maxLength = Infinity,
    addLink,
    onAddClick = () => {},
    onToolChange = (f) => f,
    innerFilters,
    outerFilters,
    children,
    className,
}: ToolsProps) => {
    return (
        <Fragment>
            <Bar_ className={className}>
                <FiltersBar_>
                    {toolType === ToolsType.FILTER && (
                        <InputFilter
                            toolLabelKey={toolLabelKey}
                            placeholderKey={placeholderKey}
                            onFilterChange={(value: string) =>
                                onToolChange(value)
                            }
                        />
                    )}
                    {toolType === ToolsType.REQUEST_NAME && (
                        <InputRequest
                            placeholderKey={placeholderKey}
                            maxLength={maxLength}
                            onClick={(name: string) => onToolChange(name)}
                        />
                    )}
                    {innerFilters}
                </FiltersBar_>
                {outerFilters}
                <AddButton
                    link={addLink}
                    onClick={onAddClick}
                />
            </Bar_>
            {children}
        </Fragment>
    );
};
