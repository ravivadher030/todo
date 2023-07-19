import Todo from "@/Components/Todo";
import type {GetStaticProps } from "next";

export interface todosInterface {
  todos: {
    todos: {
      id: string;
      todo: string;
      completed: boolean;
      userId: string;
    }[];
  };
}

export default function Home({ todos }: todosInterface): React.ReactElement {
  return <Todo todos={todos} />;
}

export const getStaticProps: GetStaticProps<todosInterface> = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const todos = await res.json();
  return { props: { todos } };
};
