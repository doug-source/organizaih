import { formatCurrency } from '@/libraries/toolbox/Number';
import {
    Data_,
    Values_,
} from '@/Pages/App/Components/ItemSaver/List/Data/styling';

type DataProps = {
    name: string;
    qty?: number;
    price?: number;
    locale?: string;
};

export const Data = ({
    name,
    qty = 0,
    price = 0,
    locale = 'pt-BR',
}: DataProps) => {
    return (
        <Data_>
            <div className='name'>{name}</div>
            <Values_>
                <div>({qty})</div>
                <div>{formatCurrency(price, locale, 'BRL')}</div>
            </Values_>
        </Data_>
    );
};
