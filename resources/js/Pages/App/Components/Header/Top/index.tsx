import { Pulldown } from '@/Pages/App/Components/Pulldown';
import { useToggleSecondWord } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef } from 'react';
import { LeftItems } from './LeftItems';
import { RightItems } from './RightItems';
import { useBackHistoryTouch } from './libraries';
import { Top_ } from './styling';

type TopProps = {
    onTopWrappped?: ComponentPropsWithoutRef<typeof Pulldown>['onTopWrappped'];
};

export const Top = ({ onTopWrappped }: TopProps) => {
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
