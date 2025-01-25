const parseIsFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;

    const isFavouriteLower = isFavourite.toLowerCase();
    
    const isBoolean = isFavouriteLower === 'true' || isFavouriteLower === 'false';
    if (!isBoolean) return;

    return isFavourite === 'true' ? true : false;
};

const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    
    const isContactType = (contactType) => ['work', 'home', 'personal'].includes(contactType);

    if (isContactType(contactType))
        return contactType;
};

export const parseFilterParams = (query) => {
    const { type, isFavourite } = query;
    
    const parsedIsFavourite = parseIsFavourite(isFavourite);
    const parsedContactType = parseContactType(type);
    
    return {
        type: parsedContactType,
        isFavourite: parsedIsFavourite,
    };
};