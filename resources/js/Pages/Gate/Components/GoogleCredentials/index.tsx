import {
    GoogleIcon_,
    GoogleRow_,
    MainText_,
} from '@/Pages/Gate/Components/GoogleCredentials/styling';

type GoogleCredentialsProps = {
    show?: boolean;
    link: string;
    text: string;
};

export const GoogleCredentials = ({
    link,
    text,
    show = true,
}: GoogleCredentialsProps) => {
    if (!show) {
        return null;
    }
    return (
        <GoogleRow_
            as='a'
            href={link}
        >
            <GoogleIcon_ />
            <MainText_>{text}</MainText_>
        </GoogleRow_>
    );
};
