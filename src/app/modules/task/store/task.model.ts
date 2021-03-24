export type TaskStatus = 'todo' | 'complete';

export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskCategory = 'personal'| 'work' | 'home';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  category: TaskCategory;
  ownerId: number;
}

export function createTask(params: Partial<Task>): Task {
  return {
    id: params?.id,
    title: params?.title,
    description: params?.description,
    priority: params?.priority,
    status: params?.status,
    category: params?.category,
    ownerId: params?.ownerId
  } as Task;
}
