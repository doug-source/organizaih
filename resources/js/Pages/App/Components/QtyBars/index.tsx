import { InputRange } from '@/Pages/App/Components/InputRange';
import { makeQty } from '@/Pages/App/Components/QtyBars/libraries';
import { makeInputRangeChange } from '@/Pages/App/Components/QtyBars/libraries/handlers';
import { usePreQty } from '@/Pages/App/Components/QtyBars/libraries/hooks';
import {
    DatePicker_,
    GateSwitcher_,
    QtyBarContainer_,
    Tools_,
} from '@/Pages/App/Components/QtyBars/styling';
import { QtyGraph } from '@/Pages/App/Components/QtyGraph';
import {
    useAppDispatch,
    useWindowSizes,
} from '@/Pages/App/libraries/hooks/Contexts';
import { useInitPage } from '@/Pages/App/libraries/hooks/Page';
import { barGraphBasic } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries/hooks';
import { ComponentProps, useRef, useState } from 'react';

type QtyGraphProps<T> = ComponentProps<typeof QtyGraph<T>>;

type QtyBarsProps<T> = {
    title: Parameters<typeof useInitPage>[0] & {};
    label: ComponentProps<typeof InputRange>['label'];
    preQtyEndpoint: Parameters<typeof usePreQty>[0];
    makeQtyEndpoint: QtyGraphProps<T>['makeUrlEndpoint'];
    xParser: QtyGraphProps<T>['xParser'];
    yParser: QtyGraphProps<T>['yParser'];
};

export const QtyBars = <T,>({
    title,
    label,
    preQtyEndpoint,
    makeQtyEndpoint,
    xParser,
    yParser,
}: QtyBarsProps<T>) => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();
    useInitPage(title);

    const clearSelectionRef = useRef<() => void>();
    const [windowWidth, windowHeight] = useWindowSizes();
    const [qtyCur, setQtyCur] = useState(barGraphBasic.minItemsQty);
    const {
        qty,
        setAllMonths,
        monthSelected,
        setMonthSelected,
        waitPreRequest,
        setWaitPreRequest,
    } = usePreQty(preQtyEndpoint);

    if (windowWidth === null || windowHeight === null) {
        return null;
    }
    return (
        <QtyBarContainer_>
            <Tools_
                otherFilters={
                    <>
                        <InputRange
                            min={makeQty(qty)}
                            max={qty}
                            qty={makeQty(qty, qtyCur)}
                            label={label}
                            onChange={makeInputRangeChange(
                                setQtyCur,
                                clearSelectionRef,
                                appDispatch,
                            )}
                        />
                        <GateSwitcher_
                            label={`${translate('month', true)}:`}
                            offLabel={translate('all-m', true)}
                            onLabel={
                                <DatePicker_
                                    showMonthYear={true}
                                    placeholder={true}
                                    label={translate('select', true)}
                                    date={monthSelected}
                                    onDateChanged={(date) => {
                                        setMonthSelected(date);
                                        setWaitPreRequest(true);
                                    }}
                                />
                            }
                            onChange={(checked) => {
                                const newValue = !checked;
                                setAllMonths(newValue);
                                if (newValue) {
                                    setMonthSelected(null);
                                }
                            }}
                        />
                    </>
                }
            />
            {qty > 0 && (
                <QtyGraph<T>
                    qtyCur={qtyCur}
                    windowHeight={windowHeight}
                    windowWidth={windowWidth}
                    clearSelectionRef={clearSelectionRef}
                    dateSelected={monthSelected}
                    waitPreRequest={waitPreRequest}
                    makeUrlEndpoint={makeQtyEndpoint}
                    xParser={xParser}
                    yParser={yParser}
                />
            )}
        </QtyBarContainer_>
    );
};
