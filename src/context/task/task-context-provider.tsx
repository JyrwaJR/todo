import React, { useEffect } from "react";
import { TaskContext } from "./task-context";

const TaskContextProviders = ({ children }: { children: React.ReactNode }) => {
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false);
  const [isAllTask, setIsAllTask] = React.useState<boolean>(true);
  const [inPending, setInPending] = React.useState<boolean>(false);
  const [inProgress, setInProgress] = React.useState<boolean>(false);

  function handleClick(
    value: "isCompleted" | "isAllTask" | "inPending" | "inProgress"
  ) {
    setIsCompleted(value === "isCompleted");
    setIsAllTask(value === "isAllTask");
    setInPending(value === "inPending");
    setInProgress(value === "inProgress");
  }

  return (
    <TaskContext.Provider
      value={{
        allTasks: isAllTask,
        isCompleted: isCompleted,
        inPending: inPending,
        inProgress: inProgress,
        setCompleted: () => handleClick("isCompleted"),
        setInPending: () => handleClick("inPending"),
        setInProgress: () => handleClick("inProgress"),
        setAllTasks: () => handleClick("isAllTask"),
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProviders;
