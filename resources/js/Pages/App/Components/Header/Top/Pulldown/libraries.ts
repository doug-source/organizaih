import { useToggleSecondWord } from '@/Pages/App/libraries';

type ToggleClassFn = ReturnType<typeof useToggleSecondWord>[1];

export const makePulldownClick = (
    toggleContainerClass: ToggleClassFn,
    toggleBtnClass: ToggleClassFn,
    onTopWrappped?: () => void,
) => {
    return () => {
        toggleContainerClass();
        toggleBtnClass();
        onTopWrappped && onTopWrappped();
    };
};
