import { GateSwitcherCheckHandle } from '@/Pages/App/Components/GateSwitcher';
import { LanguageSwitcher } from '@/Pages/App/Components/LanguageSwitcher';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';
import { endpoints } from '@/settings';
import { Suspense, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import {
    useThemeClickHandler,
    useThemingRequest,
    useThemingResponse,
} from './libraries';
import {
    DayModeIcon_,
    Fieldset_,
    GateSwitcher_,
    Legend_,
    NightModeIcon_,
    ThemeIconWrapper_,
} from './styling';

export const Config = () => {
    useInitPage('configuration', false);
    const translate = useTranslate();
    const switchLabelRef = useRef<GateSwitcherCheckHandle | null>(null);
    const themeClickHandler = useThemeClickHandler(switchLabelRef);
    const theme = useTheme();
    const [endpoint, setEndpoint] = useState<string>();

    const [store] = useThemingRequest(endpoint);
    useThemingResponse(store.data, store.status, store.error);

    return (
        <div>
            <Fieldset_>
                <Legend_>{translate('language', true)}:</Legend_>
                <LanguageSwitcher />
            </Fieldset_>
            <Fieldset_>
                <Legend_>{translate('theme', true)}:</Legend_>
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
            </Fieldset_>
        </div>
    );
};
