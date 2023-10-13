import { PaginationState } from '@/Pages/App/libraries/types/state';

export const statePaginationAfterDeletion = <T extends PaginationState>(
    state: T,
): T => {
    const qty = state.qty - 1;
    let page = state.page;
    let last = state.lastPage;

    if (page > Math.ceil(qty / state.group)) {
        page = Math.max(state.page - 1, 1);
        last = Math.max(state.lastPage - 1, 1);
    }
    return { ...state, page, last, qty };
};
