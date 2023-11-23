import {
    DefineItemLabel_,
    DefineItemValue_,
    DefineItemWrap_,
    DefineItem_,
} from '@/Pages/App/Components/DefineItem/styling';
import { ReactNode } from 'react';

type DefineItemProps = {
    labelText?: string;
    value?: string | ReactNode;
    wrap?: boolean;
    posChildren?: boolean;
    children?: ReactNode;
    className?: string;
    childrenSimilar?: boolean;
};

export const DefineItem = ({
    labelText,
    value,
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
                        {value &&
                            (typeof value === 'string' ? (
                                <DefineItemValue_ title={value}>
                                    {value}
                                </DefineItemValue_>
                            ) : (
                                <DefineItemValue_>{value}</DefineItemValue_>
                            ))}
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
                {value && <DefineItemValue_>{value}</DefineItemValue_>}
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
                    {value && <DefineItemValue_>{value}</DefineItemValue_>}
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
            {value && <DefineItemValue_>{value}</DefineItemValue_>}
        </DefineItem_>
    );
};

export { DefineItemValue_, DefineItemWrap_ };
