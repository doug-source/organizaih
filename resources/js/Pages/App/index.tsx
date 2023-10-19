import { EmptyScreen, Header, Loading } from '@/Pages/App/Components';
import {
    DataPayload,
    WrapContexts,
    dataReducer,
    useConnectionChecker,
} from '@/Pages/App/libraries';
import {
    ConfigRoutes,
    CustomerRoutes,
    InventoryRoutes,
    ProductCategoryRoutes,
    ProductRoutes,
} from '@/Pages/App/routes';
import {
    ContainerFluid_,
    GlobalStyle,
    Main_,
    Row_,
    Spacer_,
} from '@/Pages/App/styling';
import { Theme } from '@/settings';
import { Dispatch, createContext, useReducer } from 'react';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

type AppDispatchContextArg = Dispatch<DataPayload.Skeleton> | null;
export const AppDispatchContext = createContext<AppDispatchContextArg>(null);

export const App = () => {
    const [state, dispatch] = useReducer(dataReducer, {
        title: '',
        loading: null,
        error: null,
        selections: {
            target: null,
            action: null,
            sales: {
                customer: null,
                product: null,
                salesToSave: [],
            },
            inventories: {
                product: null,
                inventoriesToSave: [],
            },
            products: {
                category: null,
            },
        },
        theme: window.data.themeKey === 'light' ? Theme.light : Theme.dark,
    });
    useConnectionChecker(dispatch);
    return (
        <HashRouter>
            <AppDispatchContext.Provider value={dispatch}>
                <WrapContexts
                    selections={state.selections}
                    title={state.title}
                    statusloading={state.loading}
                >
                    <ThemeProvider theme={state.theme}>
                        <>
                            <GlobalStyle />
                            <Header />
                            <Main_>
                                <Spacer_ />
                                <Loading show={state.loading} />
                                <ContainerFluid_>
                                    <Row_>
                                        <ConfigRoutes />
                                        <CustomerRoutes />
                                        <ProductRoutes />
                                        <ProductCategoryRoutes />
                                        <InventoryRoutes />
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
                        </>
                    </ThemeProvider>
                </WrapContexts>
            </AppDispatchContext.Provider>
        </HashRouter>
    );
};
