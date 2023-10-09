type NavbarNav = {
    wide: { padding: { left: number; right: number } };
};

export const calcNavbarNavSpace = ({
    wide: {
        padding: { left, right },
    },
}: NavbarNav) => {
    return left + right;
};
