import { useParams } from 'react-router-dom';
import { SaleEdit } from './Edit';
import { SaleCreate } from './Create';
import {
    ContextPack,
    useSaleDefinitionReducer,
    useSaleDefinitionInit,
} from './libraries';

const Form = () => {
    const { id: saleID } = useParams();
    const isCreate = typeof saleID === 'undefined';

    const [state, dispatch] = useSaleDefinitionReducer();
    const onInit = useSaleDefinitionInit(state, dispatch, saleID);

    if (!isCreate) {
        return (
            <ContextPack
                state={state}
                dispatch={dispatch}
            >
                <SaleEdit
                    onInit={onInit}
                    saleID={Number(saleID)}
                />
            </ContextPack>
        );
    }
    return (
        <ContextPack
            state={state}
            dispatch={dispatch}
        >
            <SaleCreate onInit={onInit} />
        </ContextPack>
    );
};

export { Form as SaleForm };
export * from './Base';
export * from './Create';
export * from './Edit';
