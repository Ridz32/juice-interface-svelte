import Store from '$utils/Store';
import type { ProjectCategory } from '$models/project-visibility';

export const selectedProjectsTab = new Store<ProjectCategory>('trending');
