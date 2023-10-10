import { useLocale } from '@/Pages/App/libraries';
import { useTranslate } from '@/libraries';
import { FlagWrapper_, Flag_, NavbarLang_ } from './styling';

export const LanguageSwitcher = () => {
    const localeData = useLocale();
    const [locale, locales] = localeData;
    const translate = useTranslate();
    return (
        <NavbarLang_>
            {locales.map(
                (item) =>
                    item !== locale && (
                        <FlagWrapper_
                            as='a'
                            key={item}
                            href={`/language/${item}`}
                        >
                            <Flag_
                                src={`/img/${item}.png`}
                                alt={`language_${item}`}
                            />
                            <span>{translate(item, true)}</span>
                        </FlagWrapper_>
                    ),
            )}
        </NavbarLang_>
    );
};
