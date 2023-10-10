import { EmptyScreen, Header, Loading } from '@/Pages/App/Components';
import {
    Payload,
    WrapContexts,
    dataReducer,
    useConnectionChecker,
} from '@/Pages/App/libraries';
import { ConfigRoutes } from '@/Pages/App/routes';
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

type AppDispatchContextArg = Dispatch<Payload.Skeleton> | null;
export const AppDispatchContext = createContext<AppDispatchContextArg>(null);

export const App = () => {
    const [state, dispatch] = useReducer(dataReducer, {
        title: '',
        loading: null,
        error: null,
        theme: window.data.themeKey === 'light' ? Theme.light : Theme.dark,
    });
    useConnectionChecker(dispatch);
    return (
        <HashRouter>
            <AppDispatchContext.Provider value={dispatch}>
                <WrapContexts
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
