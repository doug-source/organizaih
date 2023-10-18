import { DefineItem_ } from '@/Pages/App/Components/DefineItem/styling';
import { styled } from 'styled-components';

export const DetailsContainer_ = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    ${DefineItem_}:first-child {
        padding-left: 0;
    }
`;
