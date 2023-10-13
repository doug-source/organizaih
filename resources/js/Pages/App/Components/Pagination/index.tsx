import { Groups } from '@/Pages/App/Components/Pagination/Groups';
import { Pages } from '@/Pages/App/Components/Pagination/Pages';
import {
    PagTotal_,
    PaginationContainer_,
} from '@/Pages/App/Components/Pagination/styling';
import { useTranslate } from '@/libraries';

type PaginationProps = {
    page: number;
    lastPage: number;
    group: number;
    groups: number[];
    total: number;
    totalLabel: string;
    onChangePage?: (value: number) => void;
    onChangeGroup?: (value: number) => void;
};

export const Pagination = ({
    page,
    lastPage,
    group,
    groups,
    total,
    totalLabel,
    onChangePage = () => {},
    onChangeGroup = (f) => f,
}: PaginationProps) => {
    const translate = useTranslate();
    return (
        <PaginationContainer_>
            <Pages
                page={page}
                lastPage={lastPage}
                onChangePage={onChangePage}
            />
            <Groups
                groups={groups}
                selected={group}
                onChangeGroup={onChangeGroup}
            />
            <PagTotal_>{`${
                totalLabel || translate('items', true)
            }: ${total}`}</PagTotal_>
        </PaginationContainer_>
    );
};
