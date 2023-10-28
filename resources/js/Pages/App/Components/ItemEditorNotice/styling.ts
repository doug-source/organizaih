import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const NoticeLabel_ = styled.div`
    ${({ theme }) => {
        const noticeMeasure = theme.measures.sale.form.base.notice;
        return css`
            padding: ${remOutput(noticeMeasure.label.padding)};
        `;
    }}
`;

export const NoticeValue_ = styled.div`
    ${({ theme }) => {
        const noticeMeasure = theme.measures.sale.form.base.notice;
        const noticeTheme = theme.sale.form.base.notice;
        return css`
            padding: ${remOutput(noticeMeasure.value.padding)};
            border-top-right-radius: ${remOutput(
                noticeMeasure.value.border.radius,
            )};
            border-bottom-right-radius: ${remOutput(
                noticeMeasure.value.border.radius,
            )};
            font-size: ${remOutput(noticeMeasure.value.fontSize)};
            background-color: ${noticeTheme.value.bg};
            text-align: left;
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
        `;
    }}
`;

export const Notice_ = styled.div`
    ${({ theme }) => {
        const noticeMeasure = theme.measures.sale.form.base.notice;
        const noticeTheme = theme.sale.form.base.notice;
        return css`
            display: flex;
            align-items: center;
            background-color: ${noticeTheme.bg};
            color: ${noticeTheme.color};
            font-weight: bold;
            border-radius: ${remOutput(noticeMeasure.border.radius)};
        `;
    }}
`;
