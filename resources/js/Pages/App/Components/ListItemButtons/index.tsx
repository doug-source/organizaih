import { ListItemButtonsPack } from '@/Pages/App/Components/ListItemButtonsPack';
import { ListItemEditButton } from '@/Pages/App/Components/ListItemEditButton';
import { ListItemRemoveButton } from '@/Pages/App/Components/ListItemRemoveButton';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';

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
        <ListItemButtonsPack>
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
            />
            <ListItemRemoveButton
                show={removeBtn}
                onClick={() => onRemove && onRemove(id)}
            />
        </ListItemButtonsPack>
    );
};
