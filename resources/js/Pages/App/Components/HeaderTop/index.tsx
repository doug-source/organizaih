import { LeftItems } from '@/Pages/App/Components/HeaderTop/LeftItems';
import { RightItems } from '@/Pages/App/Components/HeaderTop/RightItems';
import { useBackHistoryTouch } from '@/Pages/App/Components/HeaderTop/libraries/hooks';
import { Top_ } from '@/Pages/App/Components/HeaderTop/styling';
import { Pulldown } from '@/Pages/App/Components/Pulldown';
import { useToggleSecondWord } from '@/Pages/App/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';

type TopProps = {
    onTopWrappped?: ComponentPropsWithoutRef<typeof Pulldown>['onTopWrappped'];
};

export const HeaderTop = ({ onTopWrappped }: TopProps) => {
    const [touchTopListeners] = useBackHistoryTouch();
    const [cssClass, toggleCssClass] = useToggleSecondWord('closed');
    return (
        <Top_
            className={cssClass}
            onTouchMove={touchTopListeners.touchmove}
            onTouchStart={touchTopListeners.touchstart}
            onTouchEnd={touchTopListeners.touchend}
        >
            <LeftItems />
            <RightItems />
            <Pulldown
                onTopWrappped={onTopWrappped}
                toggleContainerClass={toggleCssClass}
            />
        </Top_>
    );
};

export * from './styling';
