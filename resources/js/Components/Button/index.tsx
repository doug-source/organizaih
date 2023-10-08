import {
    ButtonHTMLAttributes,
    ComponentPropsWithoutRef,
    MouseEventHandler,
    createRef,
} from 'react';
import { propagateClick } from './libraries';
import { BtnProps, Btn_, LabelTextBtn_, Link_ } from './styling';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    link?: string;
    preIcon?: JSX.Element | false;
    posIcon?: JSX.Element | false;
    strBtnText?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    remain?: ButtonHTMLAttributes<HTMLButtonElement>;
} & BtnProps;

export const Button = ({
    link,
    preIcon = false,
    posIcon = false,
    strBtnText = '',
    onClick,
    ...remain
}: ButtonProps) => {
    const btnRef = createRef<HTMLButtonElement>();

    return (
        <Btn_
            ref={btnRef}
            {...remain}
        >
            <Link_
                href={link}
                onClick={(evt) => {
                    !link && evt.preventDefault();
                    onClick && onClick(evt);
                    propagateClick(btnRef);
                }}
            >
                {preIcon}
                {strBtnText && <LabelTextBtn_>{strBtnText}</LabelTextBtn_>}
                {posIcon}
            </Link_>
        </Btn_>
    );
};

export * from './styling';
