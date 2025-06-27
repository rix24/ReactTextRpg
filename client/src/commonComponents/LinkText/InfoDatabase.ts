const InfoDatabase = {
    "link": "Test string for the link test component. This string is pulled from the hardcoded info database.",
    "iron wardens": "The Iron Wardens believe that arcane magic is an inherently corrupting force, they ruthlessly hunt and control mages within the Inheritor Kingdoms, ensuring that the atrocities of the Attanian Empire will never be repeated."
} as const;

type ValidKeyword = keyof typeof InfoDatabase;

export const getInfoByKeyword = (keyword: string): string => {
    const normalisedKeyword = keyword.toLowerCase().trim();

    const foundKey = Object.keys(InfoDatabase).find(key => 
        key.toLowerCase() === normalisedKeyword
    );

    if (foundKey) {
        return InfoDatabase[foundKey as keyof typeof InfoDatabase];
    }
    
    return `No information found for keyword: ${keyword}`;
}

export const isValidKeyword = (keyword: string): keyword is ValidKeyword => {
    const normalisedKeyword = keyword.toLowerCase().trim();
    return Object.keys(InfoDatabase).some(key => 
        key.toLowerCase() === normalisedKeyword
    );
};

export const getAllKeywords = (): ValidKeyword[] => {
    return Object.keys(InfoDatabase) as ValidKeyword[];
};

export default InfoDatabase;