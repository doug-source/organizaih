import { ReactNode, createContext, useEffect } from 'react';

export const TitleContext = createContext<string>('');

const $title = document.head.querySelector('title')!;

type TitleProps = {
    value: string;
    children?: ReactNode;
};

export const Title = ({ value = '', children }: TitleProps) => {
    const title = value;
    useEffect(() => {
        $title.innerText = title;
    }, [title]);

    return (
        <TitleContext.Provider value={title}>{children}</TitleContext.Provider>
    );
};
