const rangeBox = {
    width: 346,
    control: {
        size: 44,
        border: {
            bottom: {
                width: 4,
            },
            radius: 5,
        },
    },
    currentValue: {
        after: {
            border: {
                width: 6,
            },
        },
        border: {
            radius: 4.8,
        },
        letterSize: 9.32,
        padding: {
            top: 8,
            bottom: 8,
            left: 20,
            right: 20,
        },
        spacing: 8,
    },
};

const buildControl = (control: typeof rangeBox.control) => {
    return {
        ...control,
        fontSize: control.size,
    };
};

const calcSize = ({
    padding: { left, right },
    letterSize,
}: typeof rangeBox.currentValue) => {
    return left + right + letterSize * 3;
};

const buildCurrentValue = () => {
    const size = calcSize(rangeBox.currentValue);
    return {
        ...rangeBox.currentValue,
        size,
        width: size - 6.4,
        height: rangeBox.control.size,
    };
};

const buildSlider = ({ size }: typeof rangeBox.control) => ({
    gap: 8,
    control: {
        width: size,
        height: size,
    },
    height: size,
});

const makeSliderWidth = (
    { width, control: { size } }: typeof rangeBox,
    { gap }: ReturnType<typeof buildSlider>,
    { spacing, size: currentValueSize }: ReturnType<typeof buildCurrentValue>,
) => {
    return width - (size * 2 + gap * 2 + spacing + currentValueSize);
};

export const makeRangeBoxData = () => {
    const slider = buildSlider(rangeBox.control);
    const currentValue = buildCurrentValue();
    return {
        ...rangeBox,
        leftBorder: {
            height: rangeBox.control.size,
            left: rangeBox.control.size - 1,
        },
        rightBorder: {
            right: rangeBox.control.size,
        },
        control: buildControl(rangeBox.control),
        currentValue,
        slider: {
            ...slider,
            width: makeSliderWidth(rangeBox, slider, currentValue),
        },
    };
};
