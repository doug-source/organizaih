import { useToggleSecondWord } from '@/Pages/App/libraries';
import { Suspense } from 'react';
import { makePulldownClick } from './libraries';
import { Icon_, TopWrapBtn_ } from './styling';

type PulldownProps = {
    toggleContainerClass: ReturnType<typeof useToggleSecondWord>[1];
    onTopWrappped?: Required<Parameters<typeof makePulldownClick>>[2];
};

export const Pulldown = ({
    onTopWrappped,
    toggleContainerClass,
}: PulldownProps) => {
    const [btnClass, toggleBtnClass] = useToggleSecondWord('closer');
    return (
        <TopWrapBtn_
            className={btnClass}
            onClick={makePulldownClick(
                toggleContainerClass,
                toggleBtnClass,
                onTopWrappped,
            )}
        >
            <Suspense>
                <Icon_ />
            </Suspense>
        </TopWrapBtn_>
    );
};
