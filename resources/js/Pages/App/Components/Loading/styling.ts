import ReactLoading from 'react-loading';
import { styled } from 'styled-components';

export const LoadingOverlay_ = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.reactLoading.overlay.bg.color};
    z-index: 4;
`;

export const ReactLoading_ = styled(ReactLoading)`
    svg {
        fill: ${({ theme }) => theme.reactLoading.svg.fill};
    }
`;
