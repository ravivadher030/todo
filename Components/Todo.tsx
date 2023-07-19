import { todosInterface } from "@/pages";
import { Dosis } from "next/font/google";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import SearchTodo from "./SearchTodo";
import SortTodo from "./SortTodo";
import Pegination from "./Pegination";
import TodoList from "./TodoList";

export interface todoInterface {
  id: string;
  todo: string;
  completed: boolean;
  userId: string;
}
const dosis = Dosis({ weight: "400", subsets: ["latin"] });
export default function Todo({ todos }: todosInterface): React.ReactElement {
  const [todoList, setTodosList] = useState(
    todos?.todos?.filter((t) => {
      return t?.completed === true;
    })
  ); 

  /** Pegination block */
  const totalPage = [];
  const listPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [completed, setCompleted] = useState(true);
  const [search, setSearch] = useState("");

  /**Set Todo List */
  const [currentPageList, setcurrentPageList] = useState(
    todos?.todos?.filter((t) => {
      return t?.completed === true;
    })
  );

  useEffect(() => {
    setTodosList(
      todos?.todos?.filter((t) => {
        return t?.completed === completed;
      })
    );
    setCurrentPage(1);
    setcurrentPageList(
      todos?.todos
        ?.filter((t) => {
          return t?.completed === completed;
        })
        .slice(0, listPerPage)
    );
  }, [completed]);

  /**Adding page numbers */
  for (let i = 1; i <= Math.ceil(todoList?.length / listPerPage); i++) {
    totalPage.push(i);
  }
  /** handle Page data*/
  const setCurrentPageData = (pagenum: number): void => {
    setcurrentPageList(
      todos?.todos
        ?.filter((t) => {
          return t?.completed === completed;
        })
        .slice((pagenum - 1) * listPerPage, pagenum * listPerPage)
    );
  };
  /** handle current Page data*/
  const handlePage = (e: number): void => {
    setCurrentPage(e);
    setCurrentPageData(e);
  };
  /** Previous Page Data*/
  const setPrev = (): void => {
    setCurrentPage(currentPage - 1);
    setCurrentPageData(currentPage - 1);
  };
  /** Next Page Data*/
  const setNext = (): void => {
    setCurrentPage(currentPage + 1);
    setCurrentPageData(currentPage + 1);
  };

  /**Sorting  */
  const sortList = (order: string): void => {
    order === "Ascending"
      ? setcurrentPageList([
          ...currentPageList?.sort((a, b) => {
            return a?.todo < b?.todo ? -1 : 0;
          }),
        ])
      : setcurrentPageList([
          ...currentPageList?.sort((a, b) => {
            return a?.todo > b?.todo ? -1 : 0;
          }),
        ]);
  };

  return (
    <div className={`container mx-auto ${dosis.className} min-h-screen h-full`}>
      <div className="flex flex-col justify-center gap-y-5 p-5 h-full">
        <h1 className="text-xl font-bold">My Todo List</h1>
        <div className="flex flex-col md:flex-row gap-5  ">
          <Filter setCompleted={setCompleted} />
          <div className="flex md:flex-row items-center  gap-10">
            <SearchTodo setSearch={setSearch} />
            <SortTodo sortList={sortList} />
          </div>
        </div>
        <TodoList currentPageList={currentPageList} search={search} />
        <Pegination
          setPrev={setPrev}
          setNext={setNext}
          handlePage={handlePage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
}
