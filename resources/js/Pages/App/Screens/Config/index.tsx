import { ConfigLegend } from '@/Pages/App/Components/ConfigLegend';
import { LanguageSwitcher } from '@/Pages/App/Components/LanguageSwitcher';
import { ThemeSwitcher } from '@/Pages/App/Components/ThemeSwitcher';
import { UserInfoConfig } from '@/Pages/App/Components/UserInfoConfig';
import { Fieldset_ } from '@/Pages/App/Screens/Config/styling';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';

export const Config = () => {
    useInitPage('configuration', false);
    const translate = useTranslate();

    return (
        <div>
            <Fieldset_>
                <ConfigLegend>{translate('language', true)}:</ConfigLegend>
                <LanguageSwitcher />
            </Fieldset_>
            <Fieldset_>
                <ConfigLegend>{translate('theme', true)}:</ConfigLegend>
                <ThemeSwitcher />
            </Fieldset_>
            <Fieldset_>
                <ConfigLegend>{translate('profile', true)}:</ConfigLegend>
                <UserInfoConfig />
            </Fieldset_>
        </div>
    );
};
