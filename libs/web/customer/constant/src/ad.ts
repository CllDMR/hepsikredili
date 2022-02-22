export const AdTypes = ['satilik-daire', 'satilik-residence'] as const;

export type AdType = typeof AdTypes[number];
