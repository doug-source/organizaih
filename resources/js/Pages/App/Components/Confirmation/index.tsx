import {
    NoConfirmBtn_,
    YesConfirmBtn_,
} from '@/Pages/App/Components/Confirmation/styling';
import { Dialog } from '@/Pages/App/Components/Dialog';
import { useTranslate } from '@/libraries';

type ConfirmationProps = {
    question: string;
    showConfirm?: boolean;
    yesKeyText?: string;
    noKeyText?: string;
    onNo?: () => void;
    onYes?: () => void;
    onClose?: () => void;
};

export const Confirmation = ({
    question,
    showConfirm,
    yesKeyText = '',
    noKeyText = '',
    onNo = () => {},
    onYes = () => {},
    onClose = () => {},
}: ConfirmationProps) => {
    const translate = useTranslate();
    return (
        <Dialog
            title={translate('confirm-title', true)}
            text={question}
            buttonSection={
                <>
                    <NoConfirmBtn_ onClick={onNo}>
                        {translate(noKeyText || 'no', true)}
                    </NoConfirmBtn_>
                    <YesConfirmBtn_ onClick={onYes}>
                        {translate(yesKeyText || 'yes', true)}
                    </YesConfirmBtn_>
                </>
            }
            onClose={onClose}
            showDialog={showConfirm}
        />
    );
};
