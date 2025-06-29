import type { BaseCharacter } from './BaseCharacter';

interface Enemy extends BaseCharacter {
    challenge: string;
    experienceGranted: number;
    loot?: string[];
}

export type { Enemy };