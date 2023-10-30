import {
    CustomersIcon_,
    GraphsIcon_,
    IconsContainer_,
    LinkedButton_,
    MenuItem_,
    Menu_,
    ProductsIcon_,
    TitleLine_,
    Title_,
} from '@/Pages/App/Screens/Graph/Menu/styling';
import { emptySpaceCharacter } from '@/Pages/App/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries/hooks';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

export const GraphMenu = () => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();
    useInitPage('graphs', false);
    const { pathname } = useLocation();
    const theme = useTheme();

    return (
        <Menu_>
            <LinkedButton_
                to={'/graph-products-sales-qty'}
                onClick={() => {
                    if (
                        pathname === '/graph-products-sales-qty' ||
                        !navigator.onLine
                    ) {
                        return;
                    }
                    appDispatch({
                        type: DataReducerEnum.TITLE,
                        payload: emptySpaceCharacter,
                    });
                }}
                bgContainer={theme.graph.menu.item.linkedBtn.container.bg}
                bgBtn={theme.graph.menu.item.linkedBtn.btn.bg}
            >
                <MenuItem_>
                    <IconsContainer_>
                        <GraphsIcon_ />
                        <ProductsIcon_ />
                    </IconsContainer_>
                    <Title_>
                        <TitleLine_>
                            {translate('menu-products', true)}
                        </TitleLine_>
                        <TitleLine_>
                            vs {translate('menu-sale', true)}
                        </TitleLine_>
                        <TitleLine_>({translate('qty')})</TitleLine_>
                    </Title_>
                </MenuItem_>
            </LinkedButton_>
            <LinkedButton_
                to={'/graph-customers-sales-qty'}
                onClick={() => {
                    if (
                        pathname === '/graph-customers-sales-qty' ||
                        !navigator.onLine
                    ) {
                        return;
                    }
                    appDispatch({
                        type: DataReducerEnum.TITLE,
                        payload: emptySpaceCharacter,
                    });
                }}
                bgContainer={theme.graph.menu.item.linkedBtn.container.bg}
                bgBtn={theme.graph.menu.item.linkedBtn.btn.bg}
            >
                <MenuItem_>
                    <IconsContainer_>
                        <GraphsIcon_ />
                        <CustomersIcon_ />
                    </IconsContainer_>
                    <Title_>
                        <TitleLine_>
                            {translate('menu-customer', true)}
                        </TitleLine_>
                        <TitleLine_>
                            vs {translate('menu-sale', true)}
                        </TitleLine_>
                        <TitleLine_>({translate('qty')})</TitleLine_>
                    </Title_>
                </MenuItem_>
            </LinkedButton_>
        </Menu_>
    );
};
