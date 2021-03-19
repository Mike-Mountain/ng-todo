export interface Task {
  id: number;
  title: string;
  description: string;
  priority: any;
  status: any;
  category: any;
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
