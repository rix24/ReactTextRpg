interface BaseCharacter {
    id: string;
    name: string;
    health: {
        current: number;
        max: number;
    }
    mana?: {
        current: number;
        max: number;
    }
    portrait: string; 
    armor: number;
    position: number; //fed into the distance array to calculate distance from the current character
    tempDistance?: string; //will eventually be returned by a function that calculates the distance each character has from the currntly selected character, using this for now to design ui
}

export type { BaseCharacter };