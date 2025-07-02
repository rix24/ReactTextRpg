interface BaseCharacter {
  id: string;
  name: string;
  health: {
    current: number;
    max: number;
  };
  mana: {
    current: number;
    max: number;
  };
  portrait: string;
  armor: number;
  position: number; //fed into the distance array to calculate distance from the current character
}

export type { BaseCharacter };
