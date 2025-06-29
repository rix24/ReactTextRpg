import type { BaseCharacter } from './BaseCharacter';

interface PartyMember extends BaseCharacter {    
    stats: {
        strength: number;
        dexterity: number;
        constitution: number;
        wisdom: number;
        intelligence: number;
        charisma: number;
    };
    level: number;
    experience: number;
    class: string;
    weapon: Weapon;
    portrait: string;
}

interface Weapon {
    name: string;
    minDamage: number;
    maxDamage: number;
    type: string;
}

export type { PartyMember }