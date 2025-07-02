import type { Spell } from './types/abilities';

export const HOLY_SPELLS: Record<string, Spell> = {
    HolyLight: {
        id: "holyLightSpell", 
        name: "Holy Light",
        description: "A divine light that burns all enemies.",
        manaCost: 30,
        targets: "enemies",
        targetCount: 4,
        targetType: "all",
        statScaling: ["wisdom"]
    },
    Heal: {
        id: "healSpell",
        name: "Heal",
        description: "Restores health to a single ally.",
        manaCost: 15,
        targets: "ally",
        targetCount: 1,
        targetType: "single",
        statScaling: ["wisdom", "charisma"]
    },
    DivineShield: {
        id: "divineShieldSpell",
        name: "Divine Shield",
        description: "Grants a shield to an ally, absorbing damage.",
        manaCost: 25,
        targets: "ally",
        targetCount: 1,
        targetType: "single",
        statScaling: ["wisdom", "charisma"]
    },
    Blessing: {
        id: "blessingSpell",
        name: "Blessing",
        description: "Blesses an ally, increasing their damage for a short duration.",
        manaCost: 20,
        targets: "ally",
        targetCount: 1,
        targetType: "single",
        statScaling: ["wisdom", "charisma"]
    },
    Smite: {
        id: "smiteSpell",
        name: "Smite",
        description: "A powerful strike that deals damage to a single enemy.",
        manaCost: 18,
        targets: "enemy",
        targetCount: 1,
        targetType: "single",
        statScaling: ["wisdom", "charisma"]
    }
}

export const ARCANE_SPELLS: Record<string, Spell> = {
    Fireball: {
        id: "fireballSpell",
        name: "Fireball",
        description: "A fiery explosion that deals damage to all enemies in a large area.",
        manaCost: 20,
        targets: "enemies",
        targetCount: 3,
        targetType: "adjacent",
        statScaling: ["intelligence"]
    },    
    LightningBolt: {
        id: "lightningBoltSpell",
        name: "Lightning Bolt",
        description: "A bolt of lightning that strikes a single enemy, dealing high damage.",
        manaCost: 25,
        targets: "enemy",
        targetCount: 1,
        targetType: "single",
        statScaling: ["intelligence"]
    },    
    ArcaneMissiles: {
        id: "arcaneMissilesSpell",
        name: "Arcane Missiles",
        description: "A barrage of arcane missiles that hit multiple enemies.",
        manaCost: 15,
        targets: "enemies",
        targetCount: 4,
        targetType: "all",
        statScaling: ["intelligence"]
    },
    FrostNova: {
        id: "frostNovaSpell",
        name: "Frost Nova",
        description: "A freezing blast that slows and damages all enemies around you.",
        manaCost: 18,
        targets: "enemies",
        targetCount: 3,
        targetType: "adjacent",
        statScaling: ["intelligence"]
    },
    Polymorph: {
        id: "polymorphSpell",
        name: "Polymorph",
        description: "Transforms an enemy into a harmless creature for a short duration.",
        manaCost: 30,
        targets: "enemy",
        targetCount: 1,
        targetType: "single",
        statScaling: ["intelligence"]
    },
    ArcaneExplosion: {
        id: "arcaneExplosionSpell",
        name: "Arcane Explosion",
        description: "An explosion of arcane energy that damages all enemies around you.",
        manaCost: 22,
        targets: "enemies",
        targetCount: 3,
        targetType: "adjacent",
        statScaling: ["intelligence"]
    },
    ManaShield: {
        id: "manaShieldSpell",
        name: "Mana Shield",
        description: "Creates a shield that absorbs damage using your mana.",
        manaCost: 10,
        targets: "self",
        targetCount: 1,
        targetType: "single",
        statScaling: ["intelligence"]
    },
    Blink: {
        id: "blinkSpell",
        name: "Blink",
        description: "Teleports you a short distance, avoiding damage.",
        manaCost: 15,
        targets: "self",
        targetCount: 1,
        targetType: "single",
        statScaling: ["intelligence"]
    },
    ArcaneIntellect: {
        id: "arcaneIntellectSpell",
        name: "Arcane Intellect",
        description: "Increases your intelligence, boosting spell damage.",
        manaCost: 12,
        targets: "self",
        targetCount: 1,
        targetType: "single",
        statScaling: ["intelligence"]
    },
    TimeWarp: {
        id: "timeWarpSpell",
        name: "Time Warp",
        description: "Slows down time for enemies, reducing their attack speed.",
        manaCost: 20,
        targets: "enemies",
        targetCount: 3,
        targetType: "adjacent",
        statScaling: ["intelligence"]
    },
};