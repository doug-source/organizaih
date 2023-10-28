import {
    NoticeLabel_,
    NoticeValue_,
    Notice_,
} from '@/Pages/App/Components/ItemEditorNotice/styling';
import { ReactNode } from 'react';

type ItemEditorNoticeStateProps = {
    show: boolean;
    label: ReactNode & {};
    value: ReactNode & {};
};

export const ItemEditorNotice = ({
    show,
    label,
    value,
}: ItemEditorNoticeStateProps): JSX.Element | null => {
    if (!show) {
        return null;
    }
    return (
        <Notice_>
            <NoticeLabel_>{label}</NoticeLabel_>
            <NoticeValue_>{value}</NoticeValue_>
        </Notice_>
    );
};

export { NoticeLabel_, NoticeValue_, Notice_ };
