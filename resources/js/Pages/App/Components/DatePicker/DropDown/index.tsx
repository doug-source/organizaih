import {
    Content_,
    Dropdown_,
    Overlay_,
} from '@/Pages/App/Components/DatePicker/DropDown/styling';
import { createRef } from 'react';

type DropDownProps = {
    isOpen: boolean;
    onOverlayClick?: () => void;
    children?: React.ReactNode;
};

export const DropDown = ({
    isOpen,
    children,
    onOverlayClick,
}: DropDownProps) => {
    const overlayBgRef = createRef<HTMLDivElement>();
    if (!isOpen) {
        return null;
    }
    return (
        <Dropdown_>
            <Overlay_ />
            <Content_
                ref={overlayBgRef}
                className='datepicker-dropdown-content'
                onClick={(evt) => {
                    evt.preventDefault();
                    if (
                        overlayBgRef.current === null ||
                        evt.target !== overlayBgRef.current
                    ) {
                        return;
                    }
                    onOverlayClick && onOverlayClick();
                }}
            >
                {children}
            </Content_>
        </Dropdown_>
    );
};
