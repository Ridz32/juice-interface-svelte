import Store from '$utils/Store';
import type {
	ProjectSearchFilter,
	ProjectCategory,
	ProjectSortType
} from '$models/project-visibility';
import type { Project } from '$models/subgraph-entities/project';

export const selectedProjectsTab = new Store<ProjectCategory>('all');
export const sortType = new Store<ProjectSortType>('totalPaid');
export const searchFilter = new Store<{ filterType: ProjectSearchFilter; selected: boolean }[]>([
	{ filterType: 'v1', selected: true },
	{ filterType: 'v1.1', selected: true },
	{ filterType: 'archived', selected: false }
]);
export const searchText = new Store<string>('');
export const searchResults = new Store<Project[]>([]);
export const scrollTarget = new Store<HTMLElement | null>(null);
export const hasSearched = new Store<boolean>(false);
export const isSearching = new Store<boolean>(false);
