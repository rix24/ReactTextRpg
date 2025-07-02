import type { PartyMember } from '../data/types/PartyMember';
import type { Enemy } from '../data/types/Enemy';
import type { Skill, Spell } from '../data/types/abilities';
import { useGameStore } from '../store/gameStore';
import { useCallback } from 'react';

export interface CombatResult {
    success: boolean;
    damage?: number;
    healing?: number;
    statusEffect?: string;
    message: string;
    combatLogEntires?: string[];
}

const randomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const useCombat = () => {
    //goal is for this hook to be the route into any ability, from here it will break down the targeting type and effect of the abillity
    //and call the appropriate functions from the game store to update the state of the target enemy or party member
    //it will also return the result of the ability execution, which can be used to update the UI or combat log
    const { updateEnemy, updatePartyMember } = useGameStore();

    const executeAbility = useCallback((ability: Skill | Spell, caster: PartyMember, targetIds?: string[]): CombatResult => {
        const { activeEnemies, activePartyMembers, activePartyMember } = useGameStore.getState();

        if (ability.targets === "enemy" && activeEnemies.length > 0) {

            const target = activeEnemies[0];

            if (ability.statScaling) {
            let damage = randomRange(1, 10);
            const statDamage = ability.statScaling.reduce((total, stat) => {
                return total + caster.stats[stat];
            }, 0);
            damage += statDamage;
            
            const newHealthCurrent = Math.max(0, target.health.current - damage);
            
            // Update the enemy in the store
            updateEnemy(target.id, { 
                health: { 
                    current: newHealthCurrent, 
                    max: target.health.max 
                } 
            });
            
            return { 
                success: true, 
                damage, 
                message: `${caster.name} dealt ${damage} damage to ${target.name}` 
            };

        }}

        return { success: false, message: "Functionality not implemented for this targeting type yet." };
    }, [ updateEnemy, updatePartyMember]);

    return { executeAbility }
}

