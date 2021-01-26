export interface Task {
  name: string;
  uuid?: string;
  completed?: boolean;
  description?: string;
  owner?: string;
  duration?: number;
}
