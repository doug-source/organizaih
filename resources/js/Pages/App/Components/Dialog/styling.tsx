import { commafyList, remifyList } from '@/Pages/App/libraries';
import { CloseSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { css, styled } from 'styled-components';

export const Dialog_ = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;

export const Overlay_ = styled.div`
    ${({ theme }) => css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.dialog.overlay.bg.color};
    `}
`;

export const Section_ = styled.section`
    ${({ theme }) => {
        const sectionTheme = theme.dialog.section;
        const sectionMeasure = theme.measures.dialog.section;
        return css`
            display: flex;
            flex-direction: column;
            position: absolute;
            z-index: 2;
            align-items: center;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            background-color: ${sectionTheme.bg};
            min-width: ${remOutput(sectionMeasure.minWidth)};
            width: ${sectionMeasure.width};
            min-height: ${remOutput(sectionMeasure.minHeight)};
            height: ${sectionMeasure.height};
            border-radius: ${remOutput(sectionMeasure.borderRadius)};
        `;
    }}
`;

type CloseDialogProps = ComponentPropsWithoutRef<'svg'> & {
    onClose?: () => void;
};

const CloseDialogItem = ({
    className,
    onClose,
    ...remain
}: CloseDialogProps) => (
    <Suspense>
        <CloseSVG
            className={className}
            onClick={onClose}
            {...remain}
        />
    </Suspense>
);

export const CloseDialog = styled(CloseDialogItem)`
    ${({ theme }) => {
        const closeMeasure = theme.measures.dialog.close;
        return css`
            cursor: pointer;
            flex: 1;
            position: absolute;
            width: ${remOutput(closeMeasure.width)};
            top: ${remOutput(closeMeasure.top)};
            right: ${remOutput(closeMeasure.right)};
            fill: ${theme.dialog.closeIcon.fill};
        `;
    }}
`;

export const Header_ = styled.header`
    ${({ theme }) => {
        const headingMeasure = theme.measures.dialog.header;
        return css`
            flex: 1;
            display: flex;
            align-items: center;
            padding-top: ${remOutput(headingMeasure.padding.top)};
            padding-bottom: ${remOutput(headingMeasure.padding.bottom)};
            padding-left: ${remOutput(headingMeasure.padding.left)};
            padding-right: ${remOutput(headingMeasure.padding.right)};
        `;
    }}
`;

export const Heading2_ = styled.h2`
    ${({ theme }) => {
        const headingMeasure = theme.measures.dialog.header;
        return css`
            font-weight: bold;
            font-size: ${remOutput(headingMeasure.title.fontSize)};
            font-family: ${fonts.family[5]};
        `;
    }}
`;

export const Main_ = styled.main`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: flex-start;
`;

export const Paragraph_ = styled.p`
    ${({ theme }) => {
        const mainMeasure = theme.measures.dialog.main;
        return css`
            display: block;
            user-select: none;
            margin: ${mainMeasure.paragraph.margin};
            font-family: ${fonts.family[4]};
            font-size: ${remOutput(mainMeasure.paragraph.fontSize)};
        `;
    }}
`;

export const Footer_ = styled.footer`
    ${({ theme }) => {
        const footerMeasure = theme.measures.dialog.footer;
        return css`
            flex: 1;
            display: flex;
            align-items: center;
            padding-top: ${remOutput(footerMeasure.padding.top)};
            padding-bottom: ${remOutput(footerMeasure.padding.bottom)};
            padding-left: ${remOutput(footerMeasure.padding.left)};
            padding-right: ${remOutput(footerMeasure.padding.right)};
        `;
    }}
`;

export const DialogBtn_ = styled.button`
    ${({ theme }) => {
        const btnTheme = theme.dialog.footer.btn;
        const btnMeasure = theme.measures.confirmDialog.footer.btn;
        const btnHoverMeasure = btnMeasure.hover;
        const btnActiveMeasure = btnMeasure.active;
        return css`
            align-items: center;
            appearance: none;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-flex;
            justify-content: center;
            list-style: none;
            overflow: hidden;
            position: relative;
            text-align: left;
            text-decoration: none;
            transition: box-shadow 0.15s, transform 0.15s;
            user-select: none;
            touch-action: manipulation;
            white-space: nowrap;
            will-change: box-shadow, transform;
            border: 0;
            background: ${btnTheme.bg};
            box-shadow: ${btnTheme.boxShadow};
            border-radius: ${remOutput(btnMeasure.border.radius)};
            padding-left: ${remOutput(btnMeasure.padding)};
            padding-right: ${remOutput(btnMeasure.padding)};
            height: ${remOutput(btnMeasure.height)};
            color: ${btnTheme.color};
            &:hover {
                box-shadow: ${btnTheme.hover.boxShadow};
                transform: translate(
                    ${commafyList(
                        remifyList(btnHoverMeasure.transform.translate),
                    )}
                );
            }
            &:active {
                box-shadow: ${btnTheme.active.boxShadow};
                transform: translate(
                    ${commafyList(
                        remifyList(btnActiveMeasure.transform.translate),
                    )}
                );
            }
        `;
    }}
`;
