import { detachStatusServer } from '@/Pages/Gate/libraries';
import { LoadingDispatch, StatusServer } from '@/Pages/Gate/libraries/contexts';
import { useWindowDataInfo } from '@/Pages/Gate/libraries/hooks';
import { TokenRequest, Translate } from '@/libraries';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type PackContextProps = {
    loadingDispatch: ComponentPropsWithoutRef<typeof LoadingDispatch>['value'];
    type: Parameters<typeof detachStatusServer>[1];
    children: ReactNode;
};

export const PackContext = ({
    loadingDispatch,
    type,
    children,
}: PackContextProps) => {
    const statusServer = detachStatusServer(window.data, type);
    const [info] = useWindowDataInfo();
    return (
        <LoadingDispatch value={loadingDispatch}>
            <StatusServer value={statusServer}>
                <TokenRequest value={info.tokenRequest}>
                    <Translate value={info.translate}>{children}</Translate>
                </TokenRequest>
            </StatusServer>
        </LoadingDispatch>
    );
};
