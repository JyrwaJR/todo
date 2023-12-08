import { createContext } from "react";

export type TaskContextType = {
  allTasks: boolean;
  inProgress: boolean;
  inPending: boolean;
  isCompleted: boolean;
  setInProgress: () => void;
  setInPending: () => void;
  setCompleted: () => void;
  setAllTasks: () => void;
};
export const TaskContext = createContext<TaskContextType>({
  allTasks: true,
  inProgress: false,
  inPending: false,
  isCompleted: false,
  setInProgress: () => {},
  setInPending: () => {},
  setCompleted: () => {},
  setAllTasks: () => {},
});
