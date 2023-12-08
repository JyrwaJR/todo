import { useContext } from "react";
import { TaskContext, TaskContextType } from "./task-context";

const useTaskContext = () => {
  const taskContext: TaskContextType = useContext(TaskContext);
  if (!TaskContext) {
    throw new Error("Task Context must be used within an TaskProvider");
  }
  return taskContext;
};
export { useTaskContext };
