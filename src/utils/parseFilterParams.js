const parseIsFavorite = (isFavorite) => {
    const isString = typeof isFavorite === 'string';
    if (!isString) return;

    const isFavoriteLower = isFavorite.toLowerCase();
    
    const isBoolean = isFavoriteLower === 'true' || isFavoriteLower === 'false';
    if (!isBoolean) return;

    return isFavorite === 'true' ? true : false;
};

const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    
    const isContactType = (contactType) => ['work', 'home', 'personal'].includes(contactType);

    if (isContactType(contactType))
        return contactType;
};

export const parseFilterParams = (query) => {
    const { type, isFavorite } = query;
    
    const parsedIsFavorite = parseIsFavorite(isFavorite);
    const parsedContactType = parseContactType(type);
    
    return {
        type: parsedContactType,
        isFavorite: parsedIsFavorite,
    };
};