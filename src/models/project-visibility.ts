export type ProjectState = 'active' | 'archived';

export const projectCategory = ['trending', 'holdings', 'myprojects', 'all'] as const;
export type ProjectCategory = typeof projectCategory[number];
