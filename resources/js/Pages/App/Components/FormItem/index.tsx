import { ErrorMsg } from '@/Pages/App/Components/FormItem/ErrorMsg';
import { FormItem_, Label_ } from '@/Pages/App/Components/FormItem/styling';

type FormItemProps = {
    errorData?: string[];
    labelName?: string;
    labelText: string;
    labelClass?: string;
    children?: JSX.Element | null;
    className?: string;
};

export const FormItem = ({
    errorData,
    labelName = '',
    labelText,
    labelClass = '',
    children,
    className,
}: FormItemProps) => (
    <FormItem_ className={className}>
        <Label_
            htmlFor={labelName}
            $error={Boolean(errorData)}
            className={labelClass}
        >
            <span>{labelText}&nbsp;</span>
            <ErrorMsg errorData={errorData} />
        </Label_>
        {children}
    </FormItem_>
);

export { FormItem_, Label_ };
