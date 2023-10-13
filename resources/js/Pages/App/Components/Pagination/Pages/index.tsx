import {
    PagBar_,
    PagBtns_,
    PagDesc_,
    PagNextBtn_,
    PagPrevBtn_,
} from '@/Pages/App/Components/Pagination/Pages/styling';
import { ArrowSVG } from '@/Pages/App/libraries';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';

type PagesProps = {
    page: number;
    lastPage: number;
    onChangePage?: (value: number) => void;
};

export const Pages = ({
    page,
    lastPage,
    onChangePage = (f) => f,
}: PagesProps) => {
    const translate = useTranslate();
    return (
        <PagBar_>
            <PagDesc_>
                {translate('page', true)}: <span>{page}</span> {translate('of')}{' '}
                <span>{lastPage}</span>
            </PagDesc_>
            <PagBtns_>
                <PagPrevBtn_
                    onClick={() => onChangePage(Math.max(page - 1, 1))}
                >
                    <Suspense>
                        <ArrowSVG />
                    </Suspense>
                </PagPrevBtn_>
                <PagNextBtn_
                    onClick={() => onChangePage(Math.min(page + 1, lastPage))}
                >
                    <Suspense>
                        <ArrowSVG />
                    </Suspense>
                </PagNextBtn_>
            </PagBtns_>
        </PagBar_>
    );
};
