import type { Enemy } from './types/Enemy';
import SkeletonWarrior from '../assets/Enemies/SkeletonWarrior.jpg';
import SkeletonMage from '../assets/Enemies/SkeletonMage.avif';

export const ENEMIES: Record<string, Enemy> = {
  SKELETON: {
    id: "SkeletonEnemy",
    name: "Skeleton",
    health: { current: 40, max: 40 },
    mana: { current: 0, max: 0 },
    armor: 5,
    position: 2,
    challenge: 1,
    experienceGranted: 10,
    portrait: SkeletonWarrior,
  },
  SKELETONMAGE: {
    id: "SkeletonMageEnemy",
    name: "Skeleton Mage",
    health: { current: 30, max: 30 },
    mana: { current: 50, max: 50 },
    armor: 3,
    position: 2,
    challenge: 2,
    experienceGranted: 30,
    portrait: SkeletonMage,
  },
};

export const createEnemyInstance = (baseEnemy: Enemy, overrides: Partial<Enemy> = {}): Enemy => {
  return {
    ...baseEnemy,
    ...overrides,
    health: {
      current: overrides.health?.current ?? baseEnemy.health.current,
      max: overrides.health?.max ?? baseEnemy.health.max,
    },
    mana: {
      current: overrides.mana?.current ?? baseEnemy.mana.current,
      max: overrides.mana?.max ?? baseEnemy.mana.max,
    },
    armor: overrides.armor ?? baseEnemy.armor,
    position: overrides.position ?? baseEnemy.position,
  }}