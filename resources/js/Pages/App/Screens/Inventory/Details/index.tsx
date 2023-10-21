import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { EntryDataItem } from '@/Pages/App/Components/EntryDataItem';
import { EntryList } from '@/Pages/App/Components/EntryList';
import { ListItemButtons } from '@/Pages/App/Components/ListItemButtons';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { ContextPack } from '@/Pages/App/Screens/Inventory/Details/libraries/contexts';
import {
    makeConfirmCancel,
    makeConfirmTouchClosing,
} from '@/Pages/App/Screens/Inventory/Details/libraries/handlers';
import {
    useConfirmNoTouch,
    useConfirmYesDefault,
    useConfirmYesTouch,
    useEntryRemoveHandler,
    useInventoryDetailsReducer,
    useInventoryDetailsRemotion,
    useInventoryDetailsRequest,
    useNoInventoryChecking,
    useTouchStartCallback,
    useTouching,
} from '@/Pages/App/Screens/Inventory/Details/libraries/hooks';
import {
    AnonymousPhoto_,
    DefineItem_,
    DetailsContainer_,
} from '@/Pages/App/Screens/Inventory/Details/styling';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries/hooks';
import { Fragment } from 'react';

const Details = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    useInitPage('inventory-show-title');

    const [state, dispatch] = useInventoryDetailsReducer();
    const [storeError] = useInventoryDetailsRequest(dispatch);
    const [doRemotion] = useInventoryDetailsRemotion(dispatch);
    const [touchListeners, touchData, setTouchData] = useTouching(dispatch);
    useNoInventoryChecking(state);

    const confirmYesDefault = useConfirmYesDefault(dispatch, doRemotion, state);
    const confirmCancel = makeConfirmCancel(dispatch);
    const confirmYesTouch = useConfirmYesTouch(
        dispatch,
        touchData,
        setTouchData,
    );
    const confirmNoTouch = useConfirmNoTouch(dispatch, touchData, setTouchData);
    const confirmCloseTouch = makeConfirmTouchClosing(dispatch);
    const onRemoveEntryListItem = useEntryRemoveHandler(dispatch);
    const touchStartCallback = useTouchStartCallback(
        setTouchData,
        touchListeners,
    );

    if (storeError || !state.inventoryItem) {
        return null;
    }
    return (
        <ContextPack
            dispatch={dispatch}
            setTouchData={setTouchData}
            touchListeners={touchListeners}
        >
            <DetailsContainer_>
                <DefineItem_
                    labelText={translate('product', true) + ':'}
                    valueText={state.inventoryItem.name}
                >
                    <ProfilePhotoOutput
                        url={state.inventoryItem.photo}
                        iconNoPhoto={<AnonymousPhoto_ />}
                    />
                </DefineItem_>
                {Object.entries(state.inventoryItem.entries).map(
                    ([createdAt, items]) => {
                        type ItemsScheme = (typeof items)[number];
                        type GetProps = Omit<ItemsScheme, 'id' | 'cost'> &
                            JSX.IntrinsicAttributes;
                        return (
                            <Fragment key={createdAt}>
                                <DefineItem_
                                    labelText={
                                        translate('registered-in', true) + ':'
                                    }
                                    valueText={createdAt}
                                    posChildren
                                    wrap
                                >
                                    <EntryList<ItemsScheme, GetProps>
                                        dataList={items}
                                        getProps={(item) => [
                                            {
                                                remain: item.remain,
                                                utilization: item.utilization,
                                            },
                                            {
                                                ...touchListeners,
                                                touchstart: () => {
                                                    return touchStartCallback(
                                                        item,
                                                        createdAt,
                                                    );
                                                },
                                            },
                                        ]}
                                        DataContent={({
                                            utilization,
                                            remain,
                                        }) => (
                                            <>
                                                <EntryDataItem>
                                                    <div className='inventory-entry-label'>
                                                        {`${translate(
                                                            'used',
                                                            true,
                                                        )}:`}
                                                    </div>
                                                    <div className='inventory-entry-value'>
                                                        {String(
                                                            utilization,
                                                        ).padStart(
                                                            utilization ? 2 : 1,
                                                            '0',
                                                        )}
                                                    </div>
                                                </EntryDataItem>
                                                <EntryDataItem>
                                                    <div className='inventory-entry-label'>
                                                        {`${translate(
                                                            'remain',
                                                            true,
                                                        )}:`}
                                                    </div>
                                                    <div className='inventory-entry-value'>
                                                        {String(
                                                            remain,
                                                        ).padStart(
                                                            remain ? 2 : 1,
                                                            '0',
                                                        )}
                                                    </div>
                                                </EntryDataItem>
                                            </>
                                        )}
                                        Actions={({ index }) => {
                                            const { id } = items[index];
                                            return (
                                                <ListItemButtons
                                                    urlPrefix='/inventories'
                                                    id={id}
                                                    onUpdate={() =>
                                                        appDispatch({
                                                            type: DataReducerEnum.SELECTION_CLEAR,
                                                        })
                                                    }
                                                    onRemove={() =>
                                                        onRemoveEntryListItem(
                                                            id,
                                                            createdAt,
                                                        )
                                                    }
                                                />
                                            );
                                        }}
                                    />
                                </DefineItem_>
                            </Fragment>
                        );
                    },
                )}
            </DetailsContainer_>
            <Confirmation
                showConfirm={Boolean(state.itemDataRemoved && state.preConfirm)}
                question={translate('question-remove', true) + '?'}
                onYes={confirmYesDefault}
                onNo={confirmCancel}
                onClose={confirmCancel}
            />
            <Confirmation
                showConfirm={Boolean(state.optionsConfirm)}
                question={translate('what-to-do-with-inventory', true)}
                yesKeyText={translate('edit', true)}
                noKeyText={translate('remove', true)}
                onYes={confirmYesTouch}
                onNo={confirmNoTouch}
                onClose={confirmCloseTouch}
            />
        </ContextPack>
    );
};

export { Details as InventoryDetails };
