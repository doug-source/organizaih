import { ErrorMsg_ } from '@/Pages/App/Components/FormItem/ErrorMsg/styling';

type ErrorMsgProps = {
    errorData?: string[];
};

export const ErrorMsg = ({ errorData }: ErrorMsgProps) => {
    if (!errorData) {
        return null;
    }
    return <ErrorMsg_>{errorData[0]}</ErrorMsg_>;
};
