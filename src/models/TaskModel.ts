import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando a tarefa for concluída
  interruptedDate: number | null; // quando a tarefa for interrompida
  type: keyof TaskStateModel['config']; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
};
