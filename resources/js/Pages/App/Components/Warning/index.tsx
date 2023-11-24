import { useTranslate } from '@/libraries/hooks';
import { Dialog, DialogBtn_ } from '@/Pages/App/Components/Dialog';

type WarningProps = {
    titleKey: string;
    text: string;
    textBtnKey: string;
    show: boolean;
    onClick?: () => void;
    onClose?: () => void;
};

export const Warning = ({
    titleKey,
    text,
    textBtnKey,
    show,
    onClick,
    onClose,
}: WarningProps) => {
    const translate = useTranslate();
    return (
        <Dialog
            showDialog={show}
            title={translate(titleKey, true)}
            text={text}
            buttonSection={
                <DialogBtn_ onClick={onClick}>
                    {translate(textBtnKey, true)}
                </DialogBtn_>
            }
            onClose={onClose}
        />
    );
};
