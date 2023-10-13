import {
    CloseDialog,
    Dialog_,
    Footer_,
    Header_,
    Heading2_,
    Main_,
    Overlay_,
    Paragraph_,
    Section_,
} from '@/Pages/App/Components/Dialog/styling';

type DialogProps = {
    title: string;
    text: string;
    showDialog?: boolean;
    onClose?: () => void;
    buttonSection?: JSX.Element;
};

export const Dialog = ({
    title,
    text,
    showDialog = true,
    onClose = () => {},
    buttonSection = <></>,
}: DialogProps) => {
    if (!showDialog) {
        return null;
    }
    return (
        <Dialog_>
            <Overlay_ />
            <Section_>
                <CloseDialog onClose={onClose} />
                <Header_>
                    <Heading2_>{title}:</Heading2_>
                </Header_>
                <Main_>
                    <Paragraph_>{text}</Paragraph_>
                </Main_>
                <Footer_>{buttonSection}</Footer_>
            </Section_>
        </Dialog_>
    );
};

export { DialogBtn_ } from './styling';
