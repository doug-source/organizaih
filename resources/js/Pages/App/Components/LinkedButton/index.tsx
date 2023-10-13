import {
    BtnLinkedProps,
    ButtonLinked_,
    ContainerBtn_,
} from '@/Pages/App/Components/LinkedButton/styling';
import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { NavLink } from 'react-router-dom';

type ContainerBtnProps = Required<ComponentPropsWithRef<typeof ContainerBtn_>>;

type LinkedButtonProps = Omit<
    ComponentPropsWithoutRef<typeof NavLink>,
    'className'
> & {
    className?: string;
    bgContainer?: ContainerBtnProps['$bg'];
    bgBtn?: Required<BtnLinkedProps>['$bg'];
};

export const LinkedButton = ({
    to,
    className,
    bgContainer,
    bgBtn,
    children,
    ...remain
}: LinkedButtonProps) => {
    return (
        <ContainerBtn_
            $bg={bgContainer}
            className={className}
        >
            <ButtonLinked_
                $bg={bgBtn}
                to={to}
                {...remain}
            >
                {children}
            </ButtonLinked_>
        </ContainerBtn_>
    );
};

export * from './styling';
