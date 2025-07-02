export type StatType = "strength" | "dexterity" | "constitution" | "wisdom" | "intelligence" | "charisma";

interface Ability {
    id: string;
    name: string;
    description: string;
    targets: "enemy" | "enemies" | "self" | "ally" | "allies" | "party";
    targetCount: number;
    targetType: "all" | "random" | "adjacent" | "single";
}

export interface Skill extends Ability {    
    cooldown: number;
    perEncounter: boolean;
    statScaling: StatType[];
}

export interface Spell extends Ability {
    
    manaCost: number;
    statScaling: StatType[];
}