import Store from '$utils/Store';
import type {
	ProjectSearchFilter,
	ProjectCategory,
	ProjectSortType
} from '$models/project-visibility';

export const selectedProjectsTab = new Store<ProjectCategory>('all');
export const sortType = new Store<ProjectSortType>('totalRaised');
export const searchFilter = new Store<ProjectSearchFilter[]>(['v1', 'v1.1']);
