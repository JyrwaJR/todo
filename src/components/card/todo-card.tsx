import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
type TaskType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  status: "NOT_STARTED" | "COMPLETED" | "IN_PROGRESS" | "IN_PENDING";
  createdAt?: string;
  updatedAt?: string;
};
type Props = {
  task: TaskType[];
};
const TodoCard = ({ task }: Props) => {
  return (
    <div className='grid items-start justify-start w-full grid-cols-12 gap-2'>
      {task.map((item, i) => (
        <Card
          key={i}
          className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 '
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.status}</CardDescription>
          </CardHeader>
          <CardContent className=''>
            <p className='text-gray-400 line-clamp-3 '>{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant={item.completed ? "outline" : "default"}
              className='justify-start w-full gap-2 h-9 text-md'
            >
              <CheckCircledIcon className='w-4 h-4 font-bold' />
              {item.completed ? "Completed" : "Mark as completed"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TodoCard;
