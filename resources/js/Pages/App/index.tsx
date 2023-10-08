import { Theme } from '@/settings';
import { Dispatch, createContext, useReducer } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { WrapContexts, dataReducer, useConnectionChecker } from './libraries';
import { Payload } from './libraries/payload';
import { GlobalStyle } from './styling';

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
                            <h1>Foi</h1>
                        </>
                    </ThemeProvider>
                </WrapContexts>
            </AppDispatchContext.Provider>
        </HashRouter>
    );
};
