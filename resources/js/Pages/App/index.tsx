import { EmptyScreen } from '@/Pages/App/Components/EmptyScreen';
import { Header } from '@/Pages/App/Components/Header';
import { Loading } from '@/Pages/App/Components/Loading';
import { Warning } from '@/Pages/App/Components/Warning';
import {
    DataPayload,
    WrapContexts,
    dataReducer,
    useConnectionChecker,
} from '@/Pages/App/libraries';
import { AbilitiesEnum, DataReducerEnum } from '@/Pages/App/libraries/enums';
import { detachErrorMessage } from '@/Pages/App/libraries/errors';
import {
    useStarterWindowResize,
    useWindowResizeHandler,
} from '@/Pages/App/libraries/hooks/Window';
import {
    ConfigRoutesAsync,
    CustomerRoutesAsync,
    GraphRoutesAsync,
    InventoryRoutesAsync,
    ProductCategoryRoutesAsync,
    ProductRoutesAsync,
    RegisterRequestRoutesAsync,
    SaleRoutesAsync,
    UserRoutesAsync,
} from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility, makeEmptySelections } from '@/Pages/App/settings';
import {
    ContainerFluid_,
    GlobalStyle,
    Main_,
    Row_,
    Spacer_,
} from '@/Pages/App/styling';
import { Theme } from '@/settings';
import { Dispatch, Suspense, createContext, useReducer } from 'react';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

type AppDispatchContextArg = Dispatch<DataPayload.Skeleton> | null;
export const AppDispatchContext = createContext<AppDispatchContextArg>(null);

const hasSettings = hasAbility(AbilitiesEnum.SETTINGS);
const hasMenu = hasAbility(AbilitiesEnum.MENU);
const hasCustomerScreen = hasAbility(AbilitiesEnum.CUSTOMER_SCREEN);
const hasProductScreen = hasAbility(AbilitiesEnum.PRODUCT_SCREEN);
const hasInventoryScreen = hasAbility(AbilitiesEnum.INVENTORY_SCREEN);
const hasSaleScreen = hasAbility(AbilitiesEnum.SALE_SCREEN);
const hasGraphScreen = hasAbility(AbilitiesEnum.GRAPHIC_SCREEN);
const hasUserScreen = hasAbility(AbilitiesEnum.USER_SCREEN);
const hasRegisterRequestScreen = hasAbility(
    AbilitiesEnum.REGISTER_REQUEST_SCREEN,
);

export const App = () => {
    const [state, dispatch] = useReducer(dataReducer, {
        title: '',
        loading: null,
        windowWidth: null,
        windowHeight: null,
        error: null,
        selections: makeEmptySelections(),
        photo: undefined,
        theme: window.data.themeKey === 'light' ? Theme.light : Theme.dark,
    });
    useConnectionChecker(dispatch);
    useStarterWindowResize(state, dispatch);
    useWindowResizeHandler(dispatch);
    const errorMessage = detachErrorMessage(state.error);
    return (
        <HashRouter>
            <AppDispatchContext.Provider value={dispatch}>
                <WrapContexts
                    selections={state.selections}
                    title={state.title}
                    windowHeight={state.windowHeight}
                    windowWidth={state.windowWidth}
                    statusloading={state.loading}
                    photo={state.photo}
                >
                    <ThemeProvider theme={state.theme}>
                        <>
                            <GlobalStyle />
                            <Header />
                            <Main_>
                                {hasMenu && <Spacer_ />}
                                <Loading show={state.loading} />
                                <ContainerFluid_ $hasMenu={hasMenu}>
                                    <Row_>
                                        {hasSettings && (
                                            <Suspense>
                                                <ConfigRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasCustomerScreen && (
                                            <Suspense>
                                                <CustomerRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasProductScreen && (
                                            <Suspense>
                                                <ProductRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasProductScreen && (
                                            <Suspense>
                                                <ProductCategoryRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasInventoryScreen && (
                                            <Suspense>
                                                <InventoryRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasSaleScreen && (
                                            <Suspense>
                                                <SaleRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasGraphScreen && (
                                            <Suspense>
                                                <GraphRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasUserScreen && (
                                            <Suspense>
                                                <UserRoutesAsync />
                                            </Suspense>
                                        )}
                                        {hasRegisterRequestScreen && (
                                            <Suspense>
                                                <RegisterRequestRoutesAsync />
                                            </Suspense>
                                        )}
                                        <Routes>
                                            <Route
                                                path='/'
                                                element={<EmptyScreen />}
                                            />
                                            <Route
                                                path='*'
                                                element={<Outlet />}
                                            />
                                        </Routes>
                                    </Row_>
                                </ContainerFluid_>
                            </Main_>
                            <Warning
                                show={Boolean(state.error)}
                                text={errorMessage}
                                textBtnKey='ok'
                                titleKey='warning'
                                onClick={() =>
                                    dispatch({
                                        type: DataReducerEnum.ERROR,
                                        payload: null,
                                    })
                                }
                                onClose={() =>
                                    dispatch({
                                        type: DataReducerEnum.ERROR,
                                        payload: null,
                                    })
                                }
                            />
                        </>
                    </ThemeProvider>
                </WrapContexts>
            </AppDispatchContext.Provider>
        </HashRouter>
    );
};
