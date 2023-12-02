import { ConfigFieldset } from '@/Pages/App/Components/ConfigFieldset';
import { ConfigLegend } from '@/Pages/App/Components/ConfigLegend';
import { LanguageSwitcher } from '@/Pages/App/Components/LanguageSwitcher';
import { ThemeSwitcher } from '@/Pages/App/Components/ThemeSwitcher';
import { UserInfoConfig } from '@/Pages/App/Components/UserInfoConfig';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';

export const Config = () => {
    useInitPage('configuration', false);
    const translate = useTranslate();

    return (
        <div>
            <ConfigFieldset>
                <ConfigLegend>{translate('language', true)}:</ConfigLegend>
                <LanguageSwitcher />
            </ConfigFieldset>
            <ConfigFieldset>
                <ConfigLegend>{translate('theme', true)}:</ConfigLegend>
                <ThemeSwitcher />
            </ConfigFieldset>
            <ConfigFieldset>
                <ConfigLegend>{translate('profile', true)}:</ConfigLegend>
                <UserInfoConfig />
            </ConfigFieldset>
        </div>
    );
};
