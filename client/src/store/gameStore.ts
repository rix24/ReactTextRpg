import { create } from "zustand";
import type { PartyMember } from "../data/types/PartyMember.ts";
import type { Enemy } from "../data/types/Enemy.ts";
import { CHARACTERS } from "../data/characters";
import { ENEMIES, createEnemyInstance } from "../data/enemies.ts";

interface GameState {
    // Current party and enemies
  activePartyMembers: PartyMember[];
  activePartyMember: PartyMember | null;
  activeEnemies: Enemy[];
  
  // Battle state
  isBattle: boolean;
  battleMenuOptions: string[];
  
  // Actions
  setActiveParty: (members: PartyMember[]) => void;
  setActivePartyMember: (member: PartyMember | null) => void;
  setActiveEnemies: (enemies: Enemy[]) => void;
  addPartyMember: (member: PartyMember) => void;
  removePartyMember: (memberId: string) => void;
  updatePartyMember: (memberId: string, updates: Partial<PartyMember>) => void;
  updateEnemy: (enemyId: string, updates: Partial<Enemy>) => void;
  setBattleMode: (isBattle: boolean) => void;
  setBattleMenuOptions: (options: string[]) => void;
  
  // Initialization
  initializeDefaultParty: () => void;
  initializeDefaultEnemies: () => void;

  //Default battle menu optiosn
  setSpellcasterBattleMenu: () => void,
  setMartialBattleMenu: () => void,
}

export const useGameStore = create<GameState>((set) => ({
  // Initial state
  activePartyMembers: [],
  activePartyMember: null,
  activeEnemies: [],
  isBattle: false,
  battleMenuOptions: [],

  // Actions
  setActiveParty: (members) => set({ activePartyMembers: members }),

  setActivePartyMember: (member: PartyMember | null) => set({ activePartyMember: member }),
  
  setActiveEnemies: (enemies) => set({ activeEnemies: enemies }),
  
  addPartyMember: (member) => set((state) => ({
    activePartyMembers: [...state.activePartyMembers, member]
  })),
  
  removePartyMember: (memberId) => set((state) => ({
    activePartyMembers: state.activePartyMembers.filter(member => member.id !== memberId)
  })),
  
  updatePartyMember: (memberId, updates) => set((state) => ({
    activePartyMembers: state.activePartyMembers.map(member =>
      member.id === memberId ? { ...member, ...updates } as PartyMember : member
    )
  })),
  
  updateEnemy: (enemyId, updates) => set((state) => ({
    activeEnemies: state.activeEnemies.map(enemy =>
      enemy.id === enemyId ? { ...enemy, ...updates } : enemy
    )
  })),
  
  setBattleMode: (isBattle) => set({ isBattle }),

  setBattleMenuOptions: (options: string[]) => set({ battleMenuOptions: options }),
  
  // Initialize with default data
  initializeDefaultParty: () => set({
    activePartyMembers: [
      { ...CHARACTERS.TRYSTAN },
      { ...CHARACTERS.ELAIN },
      { ...CHARACTERS.MYCAH },
      { ...CHARACTERS.LIRANA },
    ]
  }),
  
  initializeDefaultEnemies: () => set({
    activeEnemies: [
        createEnemyInstance(ENEMIES.SKELETON, { name: "Skeleton 1", id: "skeleton1" }),
        createEnemyInstance(ENEMIES.SKELETON, { name: "Skeleton 2", id: "skeleton2" }),
        createEnemyInstance(ENEMIES.SKELETON, { name: "Skeleton 3", id: "skeleton3" }),
        createEnemyInstance(ENEMIES.SKELETONMAGE),
    ]
  }),

  setSpellcasterBattleMenu: () => set({
    battleMenuOptions: [
        "Attack",
        "Advance",
        "Retreat",
        "Spells",
        "Inventory",
      ]
  }),

    setMartialBattleMenu: () => set({
        battleMenuOptions: [
            "Attack",
            "Advance",
            "Retreat",
            "Skills",
            "Inventory",
        ]
    }),
}));