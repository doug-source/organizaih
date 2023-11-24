import {
    BtnsItemContainer_,
    BtnsItem_,
} from '@/Pages/App/Components/ListItemButtons/styling';
import { ListItemEditButton } from '@/Pages/App/Components/ListItemEditButton';
import { ListItemRemoveButton } from '@/Pages/App/Components/ListItemRemoveButton';
import {
    DataReducerEnum,
    EditSVG,
    useAppDispatch,
} from '@/Pages/App/libraries';
import { Suspense } from 'react';

type ListItemButtonsProps = {
    updateBtn?: boolean;
    urlLink?: string;
    id: number;
    removeBtn?: boolean;
    onRemove?: (id: number) => void;
    onUpdate?: () => void;
};

export const ListItemButtons = ({
    updateBtn = true,
    urlLink,
    id,

    removeBtn = true,
    onRemove,
    onUpdate,
}: ListItemButtonsProps) => {
    const appDispatch = useAppDispatch();
    return (
        <BtnsItemContainer_>
            <BtnsItem_>
                <>
                    <ListItemEditButton
                        show={updateBtn}
                        to={`${urlLink}/edit`}
                        onClick={() => {
                            onUpdate && onUpdate();
                            appDispatch({
                                type: DataReducerEnum.TITLE,
                                payload: '',
                            });
                        }}
                    >
                        <Suspense>
                            <EditSVG />
                        </Suspense>
                    </ListItemEditButton>
                    <ListItemRemoveButton
                        show={removeBtn}
                        onClick={() => onRemove && onRemove(id)}
                    />
                </>
            </BtnsItem_>
        </BtnsItemContainer_>
    );
};
