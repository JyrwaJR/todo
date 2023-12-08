"use client";
import TodoCard from "@src/components/card/todo-card";
import { useTaskContext } from "@src/context/task/use-task-context";
import React, { useEffect } from "react";
type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  status: "NOT_STARTED" | "COMPLETED" | "IN_PROGRESS" | "IN_PENDING";
  createdAt?: string;
  updatedAt?: string;
};
const data: Todo[] = [
  {
    completed: true,
    description:
      "talk chose snake teacher express value earlier pictured cloth tongue earn mail trade easier certain pay card fill exist memory tape accept base race",
    id: "35",

    status: "COMPLETED",
    title: "Adelaide",
  },
  {
    completed: true,
    description:
      "interior movie organized know floor strong drove scale heading stiff took nice just connected level soldier breakfast doctor cookies complete silence atomic those fire",
    id: "83",
    status: "NOT_STARTED",
    title: "Polly",
  },
  {
    completed: false,
    description:
      "account soil him concerned equator keep clothes citizen smaller power knowledge slight bound ought sitting bow phrase here egg heading speak finally slip plastic",
    id: "24",
    status: "NOT_STARTED",
    title: "Melvin",
  },
  {
    completed: false,
    description:
      "fierce nine species silk social cost meat sure front mouse enjoy bean nodded dirt ought pay fell stone leg noun public have thousand fur",
    id: "57",
    status: "NOT_STARTED",
    title: "Jeremiah",
  },
  {
    completed: false,
    description:
      "battle visit watch constantly fastened cage still fun news anyway whale ear range value smallest include temperature was onto halfway obtain date hang stiff",
    id: "56",
    status: "NOT_STARTED",
    title: "Theresa",
  },
  {
    completed: false,
    description:
      "pencil characteristic research gold high it bare will or area hollow skill parts silence tune full buy clock level fifty behavior pick carry stuck",
    id: "75",
    status: "NOT_STARTED",
    title: "Jason",
  },
  {
    completed: false,
    description:
      "respect opposite girl year anyone shore imagine fireplace rice steady lower case slip mad meet chose event children grade beyond motion sick finger love",
    id: "38",
    status: "NOT_STARTED",
    title: "Lois",
  },
  {
    completed: false,
    description:
      "quick map make men usual keep alike rich bend explain wore independent past faster happen alone sold sand fourth engineer inside motion perhaps art",
    id: "41",
    status: "NOT_STARTED",
    title: "Leo",
  },
  {
    completed: true,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
  {
    completed: true,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
  {
    completed: true,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
  {
    completed: true,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
  {
    completed: true,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
  {
    completed: false,
    description:
      "thumb swimming dinner wagon memory remain molecular pull volume purple swam vote beat engine active itself oldest eleven afraid fair outside am suit neverselection fewer limited invented slightly complete single goes grow duck pleasant mostly dish old someone fear personal partly bridge somewhere drive proper board greater",
    id: "53",
    status: "NOT_STARTED",
    title: "Winifred",
  },
];
function Page() {
  const { inPending, inProgress, isCompleted } = useTaskContext();
  const status = React.useMemo(() => {
    if (inPending) {
      return "NOT_STARTED";
    }
    if (inProgress) {
      return "IN_PROGRESS";
    }
    if (isCompleted) {
      return "COMPLETED";
    }
    return "NOT_STARTED";
  }, [inPending, inProgress, isCompleted]);
  const [todo, setTodo] = React.useState<Todo[]>(
    data.filter((item) => item.status === status)
  );
  React.useEffect(() => {
    if (status) {
      setTodo(data.filter((item) => item.status === status));
    }
  }, [status]);

  return <TodoCard task={todo} />;
}
export default Page;
