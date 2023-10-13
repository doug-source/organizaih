import {
    BtnsItemContainer_,
    BtnsItem_,
} from '@/Pages/App/Components/ListItemButtons/styling';
import { ListItemEditButton } from '@/Pages/App/Components/ListItemEditButton';
import { ListItemRemoveButton } from '@/Pages/App/Components/ListItemRemoveButton';
import {
    DataReducerEnum,
    EditSVG,
    RemoveSVG,
    useAppDispatch,
} from '@/Pages/App/libraries';
import { Suspense } from 'react';

type ListItemButtonsProps = {
    updateBtn?: boolean;
    urlPrefix?: string;
    id: number;
    removeBtn?: boolean;
    onRemove?: (id: number) => void;
    onUpdate?: () => void;
};

export const ListItemButtons = ({
    updateBtn = true,
    urlPrefix,
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
                        to={`${urlPrefix}/${id}/edit`}
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
                    >
                        <Suspense>
                            <RemoveSVG />
                        </Suspense>
                    </ListItemRemoveButton>
                </>
            </BtnsItem_>
        </BtnsItemContainer_>
    );
};
