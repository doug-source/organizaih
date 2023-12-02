import { GateSwitcherCheckHandle } from '@/Pages/App/Components/GateSwitcher';
import {
    useThemeClickHandler,
    useThemingRequest,
    useThemingResponse,
} from '@/Pages/App/Components/ThemeSwitcher/libraries/hooks';
import {
    DayModeIcon_,
    GateSwitcher_,
    NightModeIcon_,
    ThemeIconWrapper_,
} from '@/Pages/App/Components/ThemeSwitcher/styling';
import { useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';
import { Suspense, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

export const ThemeSwitcher = () => {
    const translate = useTranslate();
    const theme = useTheme();
    const [endpoint, setEndpoint] = useState<string>();
    const switchLabelRef = useRef<GateSwitcherCheckHandle | null>(null);
    const themeClickHandler = useThemeClickHandler(switchLabelRef);

    const [store] = useThemingRequest(endpoint);
    useThemingResponse(store.data, store.status, store.error);

    return (
        <GateSwitcher_
            label=''
            value={theme.key === 'dark'}
            offLabel={
                <ThemeIconWrapper_>
                    <Suspense>
                        <NightModeIcon_ />
                    </Suspense>
                    <span onClick={themeClickHandler}>
                        {translate('dark', true)}
                    </span>
                </ThemeIconWrapper_>
            }
            onLabel={
                <ThemeIconWrapper_>
                    <Suspense>
                        <DayModeIcon_ />
                    </Suspense>
                    <span onClick={themeClickHandler}>
                        {translate('light', true)}
                    </span>
                </ThemeIconWrapper_>
            }
            onChange={() => {
                const { key } = theme;
                const themeKey = key === 'light' ? 'dark' : 'light';
                setEndpoint(endpoints.theming.update(themeKey));
            }}
            ref={switchLabelRef}
        />
    );
};
