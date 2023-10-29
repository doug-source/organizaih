export const pluralize = (
    pluralRules: Intl.PluralRules,
    count: number,
    singular: string,
    plural: string,
): string => {
    const grammaticalNumber = pluralRules.select(count);
    switch (grammaticalNumber) {
        case 'one':
            return `${count} ${singular}`;
        case 'other':
            return `${count} ${plural}`;
        default:
            throw new Error('Unknown: ' + grammaticalNumber);
    }
};
