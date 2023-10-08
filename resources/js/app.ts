import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap';

const metaTagElement = document.head.querySelector(
    '#pageKey',
) as HTMLMetaElement;
const pageKey = metaTagElement.content;

function init() {
    const $containerApp = document.getElementById('container-app');
    console.log(pageKey);

    if (pageKey === 'login') {
        import('./Pages/Login').then(({ Login }) => {
            if ($containerApp !== null) {
                createRoot($containerApp).render(React.createElement(Login));
            }
        });
    }
}

window.addEventListener('load', () => {
    init();
});
