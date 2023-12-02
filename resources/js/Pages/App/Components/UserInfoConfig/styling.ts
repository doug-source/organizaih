import { DetailsIcon } from '@/Pages/App/Components/DetailsIcon';
import { EditIcon } from '@/Pages/App/Components/EditIcon';
import { remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const BarItems_ = styled.div`
    ${({ theme }) => {
        const { barItems: barItemsMeasure } = theme.measures.config.userInfo;
        return css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: ${remOutput(barItemsMeasure.gap)};
            padding-bottom: ${remOutput(barItemsMeasure.padding.bottom)};
        `;
    }}
`;

export const NavLink_ = styled(NavLink)`
    ${({ theme }) => {
        const { link: linkMeasure } = theme.measures.config.userInfo;
        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${remOutput(linkMeasure.gap)};
        `;
    }}
`;

export const DetailsIcon_ = styled(DetailsIcon)`
    ${({ theme }) => {
        const { icon: iconMeasure } = theme.measures.config.userInfo;
        const { icon: iconTheme } = theme.config.userInfo;
        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            .frame {
                fill: ${iconTheme.details.frame.fill};
            }
            .glass {
                fill: ${iconTheme.details.glass.fill};
            }
        `;
    }}
`;

export const EditIcon_ = styled(EditIcon)`
    ${({ theme }) => {
        const { icon: iconMeasure } = theme.measures.config.userInfo;
        const { icon: iconTheme } = theme.config.userInfo;
        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            fill: ${iconTheme.edit.fill};
        `;
    }}
`;
