import {
    LabelTextRoundBtn_,
    RoundBtn_,
} from '@/Components/RoundButton/styling';
import { ComponentPropsWithoutRef } from 'react';
import { NavLink } from 'react-router-dom';

type RoundButtonProps = ComponentPropsWithoutRef<'button'> & {
    link: string;
    preIcon?: false | JSX.Element;
    posIcon?: false | JSX.Element;
    strBtnText?: string;
    onClick?: () => void;
    className?: string;
};

export const RoundButton = ({
    link,
    preIcon = false,
    posIcon = false,
    strBtnText = '',
    onClick = () => {},
    className,
}: RoundButtonProps) => (
    <RoundBtn_ className={className}>
        <NavLink
            to={link}
            onClick={onClick}
        />
        {preIcon}
        {Boolean(strBtnText) && (
            <LabelTextRoundBtn_>{strBtnText}</LabelTextRoundBtn_>
        )}
        {posIcon}
    </RoundBtn_>
);

export { RoundBtnStyle, type RoundBtnProps } from './styling';
