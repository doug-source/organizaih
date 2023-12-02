import { DetailsIcon } from '@/Pages/App/Components/DetailsIcon';
import { EditIcon } from '@/Pages/App/Components/EditIcon';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const BarItems_ = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 0.5rem;
`;

export const NavLink_ = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const DetailsIcon_ = styled(DetailsIcon)`
    width: 2.25rem;
    height: 2.25rem;
`;

export const EditIcon_ = styled(EditIcon)`
    width: 2.25rem;
    height: 2.25rem;
    fill: #2d3e50;
`;
