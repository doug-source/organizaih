import {
    DefineItemLabel_,
    DefineItemValue_,
    DefineItemWrap_,
    DefineItem_,
} from '@/Pages/App/Components/DefineItem/styling';
import { ReactNode } from 'react';

type DefineItemProps = {
    labelText?: string;
    valueText?: string;
    wrap?: boolean;
    posChildren?: boolean;
    children?: ReactNode;
    className?: string;
    childrenSimilar?: boolean;
};

export const DefineItem = ({
    labelText,
    valueText,
    posChildren,
    wrap,
    children,
    className,
    childrenSimilar,
}: DefineItemProps) => {
    if (posChildren) {
        if (wrap) {
            return (
                <DefineItem_
                    className={className}
                    $similar={childrenSimilar}
                >
                    <DefineItemWrap_>
                        {labelText && (
                            <DefineItemLabel_>{labelText}</DefineItemLabel_>
                        )}
                        {valueText && (
                            <DefineItemValue_>{valueText}</DefineItemValue_>
                        )}
                    </DefineItemWrap_>
                    {children}
                </DefineItem_>
            );
        }
        return (
            <DefineItem_
                className={className}
                $similar={childrenSimilar}
            >
                {labelText && <DefineItemLabel_>{labelText}</DefineItemLabel_>}
                {valueText && <DefineItemValue_>{valueText}</DefineItemValue_>}
                {children}
            </DefineItem_>
        );
    }
    if (wrap) {
        return (
            <DefineItem_
                className={className}
                $similar={childrenSimilar}
            >
                {children}
                <DefineItemWrap_>
                    {labelText && (
                        <DefineItemLabel_>{labelText}</DefineItemLabel_>
                    )}
                    {valueText && (
                        <DefineItemValue_>{valueText}</DefineItemValue_>
                    )}
                </DefineItemWrap_>
            </DefineItem_>
        );
    }
    return (
        <DefineItem_
            className={className}
            $similar={childrenSimilar}
        >
            {children}
            {labelText && <DefineItemLabel_>{labelText}</DefineItemLabel_>}
            {valueText && <DefineItemValue_>{valueText}</DefineItemValue_>}
        </DefineItem_>
    );
};

export { DefineItemValue_ };
