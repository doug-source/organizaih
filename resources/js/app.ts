import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap';

const metaTagElement = document.head.querySelector(
    '#pageKey',
) as HTMLMetaElement;
const pageKey = metaTagElement.content;

function init() {
    const $containerApp = document.getElementById('container-app');

    if (pageKey === 'login') {
        import('./Pages/Login').then(({ Login }) => {
            if ($containerApp !== null) {
                createRoot($containerApp).render(React.createElement(Login));
            }
        });
    } else {
        import('./Pages/App').then(({ App }) => {
            if ($containerApp !== null) {
                createRoot($containerApp).render(React.createElement(App));
            }
        });
    }
}

window.addEventListener('load', () => {
    init();
});
