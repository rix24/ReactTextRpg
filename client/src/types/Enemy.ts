import type { BaseCharacter } from './BaseCharacter';

interface Enemy extends BaseCharacter {
    challenge: number;
    experienceGranted: number;
    loot?: string[];
}

export type { Enemy };