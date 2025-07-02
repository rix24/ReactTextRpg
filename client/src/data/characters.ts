import type { PartyMember } from "./types/PartyMember";
import { ARCANE_SPELLS, HOLY_SPELLS } from "./spells";
import { WARRIOR_SKILLS, ROGUE_SKILLS } from "./skills";
import MaleKnight from '../assets/Portraits/MaleKnight.png';
import MaleMageElderly from '../assets/Portraits/MaleMageElderly.png';
import FemaleRogueDemonic from '../assets/Portraits/FemaleRogueDemonic.png';
import FemalePaladin from '../assets/Portraits/FemalePaladin.png';


export const CHARACTERS: Record<string, PartyMember> = {
  TRYSTAN: {
    id: "TrystanCharacter",
    name: "Trystan",
    health: { current: 100, max: 100 },
    mana: { current: 0, max: 0 },
    portrait: MaleKnight,
    armor: 10,
    position: 0,
    stats: {
      strength: 14,
      dexterity: 12,
      constitution: 14,
      wisdom: 10,
      intelligence: 8,
      charisma: 6,
    },
    level: 1,
    experience: 0,
    class: "Warrior",
    weapon: { name: "Longsword", minDamage: 5, maxDamage: 10, type: "Melee" },
    isSpellcaster: false,
    skills: [WARRIOR_SKILLS.Cleave, WARRIOR_SKILLS.StunningBlow, WARRIOR_SKILLS.Brace],
  },
  ELAIN: {
    id: "ElainCharacter",
    name: "Elain",
    health: { current: 120, max: 120 },
    mana: { current: 70, max: 70 },
    armor: 8,
    position: 0,
    stats: {
      strength: 12,
      dexterity: 8,
      constitution: 14,
      wisdom: 8,
      intelligence: 6,
      charisma: 14,
    },
    level: 1,
    experience: 0,
    class: "Paladin",
    weapon: { name: "Mace", minDamage: 6, maxDamage: 8, type: "Melee" },
    portrait: FemalePaladin,
    isSpellcaster: true,
    spells: [HOLY_SPELLS.HolyLight, HOLY_SPELLS.Heal, HOLY_SPELLS.DivineShield],
  },
  MYCAH: {
    id: "MycahCharacter",
    name: "Mycah",
    health: { current: 80, max: 80 },
    mana: { current: 100, max: 100 },
    armor: 3,
    position: 0,
    stats: {
      strength: 8,
      dexterity: 14,
      constitution: 10,
      wisdom: 10,
      intelligence: 16,
      charisma: 4,
    },
    level: 1,
    experience: 0,
    class: "Mage",
    weapon: { name: "Staff", minDamage: 3, maxDamage: 5, type: "Melee" },
    portrait: MaleMageElderly,
    isSpellcaster: true,
    spells: Object.values(ARCANE_SPELLS)
  },
  LIRANA: {
    id: "LiranaCharacter",
    name: "Lirana",
    health: { current: 90, max: 90 },
    mana: { current: 0, max: 0 }, 
    armor: 4,
    position: 0,
    stats: {
      strength: 10,
      dexterity: 14,
      constitution: 10,
      wisdom: 8,
      intelligence: 12,
      charisma: 12,
    },
    level: 1,
    experience: 0,
    class: "Rogue",
    weapon: { name: "Shortbow", minDamage: 2, maxDamage: 6, type: "Ranged" },
    portrait: FemaleRogueDemonic,
    isSpellcaster: false,
    skills: [ROGUE_SKILLS.Backstab, ROGUE_SKILLS.SmokeBomb, ROGUE_SKILLS.Evasion],
  },
};

