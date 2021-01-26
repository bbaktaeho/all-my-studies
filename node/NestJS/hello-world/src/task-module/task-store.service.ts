import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task';

@Injectable()
export class TaskStoreService {
  public tasks: Task[] = [];

  public async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  public async getTask(id: string): Promise<Task> {
    const tasks = this.tasks.filter((e) => e.uuid === id);
    if (tasks && tasks.length > 0) return Promise.resolve(tasks[0]);
    throw new NotFoundException('task not found');
  }

  public async deleteTask(id: string): Promise<Task[]> {
    const tasks = this.tasks.filter((e) => e.uuid === id);
    if (tasks.length == 0) throw new NotFoundException('task not found');

    const newTasks = this.tasks.filter((e) => e.uuid !== id);
    this.tasks = newTasks;
    return Promise.resolve(this.tasks);
  }

  public async getAllTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  public async filterTask(filter): Promise<Task[]> {
    if (!filter) return Promise.resolve(this.tasks);
    return Promise.resolve(this.tasks.filter((e) => e.duration > 0));
  }
}
