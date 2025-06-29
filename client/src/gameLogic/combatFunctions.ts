import type { PartyMember } from '../types/PartyMember';
import type { Enemy } from '../types/Enemy';

const randomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const takeDamage = (character: PartyMember | Enemy, damage: number) => {
    character.health.current -= damage;
}

export const playerAttack = (attacker: PartyMember, target: Enemy) => {
    const attackRoll = attacker.stats.strength + Math.floor(Math.random() * 20) + 1; // Simulating a D20 roll
    if (attackRoll >= target.armor) {
        const damage = randomRange(attacker.weapon.minDamage, attacker.weapon.maxDamage)
        takeDamage(target, damage);
    }
}