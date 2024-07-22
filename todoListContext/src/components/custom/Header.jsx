import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import TodoContext from "@/context/TodoContext";

const choices = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [todoFormOpen, setTodoFormOpen] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const { dispatch, state } = useContext(TodoContext);

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo(""); // Clear the input field
    setTodoFormOpen(false); // Close the dialog
  };

  return (
    <div className="flex justify-between items-center p-4">
      <AlertDialog open={todoFormOpen} onOpenChange={setTodoFormOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Add</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Todo</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter your new todo item below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            <div className="p-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="submit">Add</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {choices.find((choice) => choice.value === state.filter)?.label || choices[0].label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-2">
          {choices.map((choice) => (
            <div
              key={choice.value}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                dispatch({ type: 'SET_FILTER', payload: choice.value });
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  state.filter === choice.value ? "opacity-100" : "opacity-0"
                )}
              />
              {choice.label}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Header;
