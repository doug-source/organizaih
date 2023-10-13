import { useTranslate } from '@/libraries';

type InputFilterProps = {
    toolLabelKey?: string;
    placeholderKey: string;
    onFilterChange?: (value: string) => void;
};

export const InputFilter = ({
    toolLabelKey,
    placeholderKey = '',
    onFilterChange = (f) => f,
}: InputFilterProps) => {
    const translate = useTranslate();
    return (
        <label>
            {toolLabelKey && (
                <span>{translate(toolLabelKey, true)}: &nbsp;</span>
            )}
            <input
                type='text'
                placeholder={translate(placeholderKey, true)}
                onChange={(evt) => onFilterChange(evt.target.value)}
            />
        </label>
    );
};
