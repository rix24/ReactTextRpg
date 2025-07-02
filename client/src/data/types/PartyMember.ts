import type { BaseCharacter } from './BaseCharacter';
import type { Spell } from './abilities';
import type { Skill } from './abilities';

interface BasePartyMember extends BaseCharacter {    
    stats: Statistics;
    level: number;
    experience: number;
    class: string;
    weapon: Weapon;
}

interface SpellcasterPartyMember extends BasePartyMember {
    isSpellcaster: true;
    spells: Spell[];
}

interface NonSpellcasterPartyMember extends BasePartyMember {
    isSpellcaster: false;
    skills: Skill[];
}

export type PartyMember = SpellcasterPartyMember | NonSpellcasterPartyMember;

interface Weapon {
    name: string;
    minDamage: number;
    maxDamage: number;
    type: string;
}

interface Statistics {
    strength: number;
    dexterity: number;
    constitution: number;
    wisdom: number;
    intelligence: number;
    charisma: number;
}
