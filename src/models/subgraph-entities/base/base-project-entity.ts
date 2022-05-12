import type { V1TerminalVersion } from '$models/v1/terminals'

export type CV = V1TerminalVersion | '2' // CV = contracts version

import { parseProjectJson, type Project, type ProjectJson } from '../vX/project'

export interface BaseProjectEntity {
  id: string
  cv: CV
  project: Partial<Project>
  projectId: number
}

export type BaseProjectEntityJson = Partial<
  Record<Exclude<keyof BaseProjectEntity, 'project'>, string> & {
    project: ProjectJson
  }
>

export const parseBaseProjectEntityJson = (
  j: BaseProjectEntityJson,
): Partial<BaseProjectEntity> => ({
  id: j.id,
  cv: j.cv ? (j.cv as CV) : undefined,
  project: j.project ? parseProjectJson(j.project) : undefined,
  projectId: j.projectId ? parseInt(j.projectId) : undefined,
})
