import type { Skill } from './types/abilities';

export const WARRIOR_SKILLS: Record<string, Skill> = {
    Cleave: {id: "cleaveSkill", name: "Cleave", description: "A powerful swing that hits multiple enemies in front of you.", cooldown: 3, perEncounter: false, statScaling: ["strength", "dexterity"], targets: "enemies", targetCount: 4, targetType: "all"},
    StunningBlow: {id: "stunningBlowSkill", name: "Stunning Blow", description: "A strike that stuns the target for 1 turn.", cooldown: 2, perEncounter: true, statScaling: ["strength"], targets: "enemy", targetCount: 1, targetType: "single"},
    Disarm: {id: "disarmSkill", name: "Disarm", description: "A quick strike that disarms the target, preventing them from using their weapon for 1 turn.", cooldown: 3, perEncounter: true, statScaling: ["dexterity"], targets: "enemy", targetCount: 1, targetType: "single"},
    Brace: {id: "braceSkill", name: "Brace", description: "A defensive stance that reduces damage taken for 1 turn.", cooldown: 2, perEncounter: true, statScaling: ["constitution"], targets: "self", targetCount: 1, targetType: "single"},
    BattleCry: {id: "battleCrySkill", name: "Battle Cry", description: "A rallying cry that boosts the morale of allies, increasing their damage for 1 turn.", cooldown: 4, perEncounter: true, statScaling: ["charisma"], targets: "allies", targetCount: 3, targetType: "all"},
    Shockwave: {id: "shockwaveSkill", name: "Shockwave", description: "A powerful shockwave that damages and knocks all enemies away from you.", cooldown: 5, perEncounter: false, statScaling: ["strength"], targets: "enemies", targetCount: 3, targetType: "adjacent"},
}

export const ROGUE_SKILLS: Record<string, Skill> = {
    Backstab: {id: "backstabSkill", name: "Backstab", description : "A stealthy attack that deals extra damage when attacking from behind.", cooldown: 3, perEncounter: false, statScaling: ["dexterity", "strength"], targets: "enemy", targetCount: 1, targetType: "single"},
    PoisonDagger: {id: "poisonDaggerSkill", name: "Poison Dagger", description: "A quick strike that poisons the target, dealing damage over time.", cooldown: 4, perEncounter: true, statScaling: ["dexterity"], targets: "enemy", targetCount: 1, targetType: "single"},
    Evasion: {id: "evasionSkill", name: "Evasion", description: "A quick maneuver that increases your dodge chance for 1 turn.", cooldown: 2, perEncounter: true, statScaling: ["dexterity"], targets: "self", targetCount: 1, targetType: "single"},
    SmokeBomb: {id: "smokeBombSkill", name: "Smoke Bomb", description: "A quick throw that creates a smoke screen, allowing you to escape or reposition.", cooldown: 5, perEncounter: true, statScaling: ["dexterity"], targets: "self", targetCount: 1, targetType: "single"},
    ShadowStep: {id: "shadowStepSkill", name: "Shadow Step", description: "A quick teleport that allows you to move behind an enemy, dealing damage.", cooldown: 4, perEncounter: true, statScaling: ["dexterity"], targets: "enemy", targetCount: 1, targetType: "single"},
}