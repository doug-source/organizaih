import { CloseSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { ComponentPropsWithoutRef, Suspense } from 'react';

type CloseDialogIconProps = ComponentPropsWithoutRef<'svg'> & {
    onClose?: () => void;
};

export const CloseDialogIcon = ({
    className,
    onClose,
    ...remain
}: CloseDialogIconProps) => (
    <Suspense>
        <CloseSVG
            className={className}
            onClick={onClose}
            {...remain}
        />
    </Suspense>
);
