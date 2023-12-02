import { DetailsIcon } from '@/Pages/App/Components/DetailsIcon';
import { EditIcon } from '@/Pages/App/Components/EditIcon';
import { GateSwitcherCheckHandle } from '@/Pages/App/Components/GateSwitcher';
import { LanguageSwitcher } from '@/Pages/App/Components/LanguageSwitcher';
import {
    useThemeClickHandler,
    useThemingRequest,
    useThemingResponse,
} from '@/Pages/App/Screens/Config/libraries/hooks';
import {
    DayModeIcon_,
    Fieldset_,
    GateSwitcher_,
    Legend_,
    NightModeIcon_,
    ThemeIconWrapper_,
} from '@/Pages/App/Screens/Config/styling';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';
import { endpoints, navigations } from '@/settings';
import { Suspense, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled, useTheme } from 'styled-components';

const DetailsIcon_ = styled(DetailsIcon)`
    width: 2.25rem;
    height: 2.25rem;
`;

const BarItems_ = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 0.5rem;
`;

const NavLink_ = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const EditIcon_ = styled(EditIcon)`
    width: 2.25rem;
    height: 2.25rem;
    fill: #2d3e50;
`;

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
            <Fieldset_>
                <Legend_>{translate('profile', true)}:</Legend_>
                <BarItems_>
                    <NavLink_ to={navigations.configuration.profile.show}>
                        <DetailsIcon_ />
                        <span>Detalhes</span>
                    </NavLink_>
                </BarItems_>
            </Fieldset_>
        </div>
    );
};
