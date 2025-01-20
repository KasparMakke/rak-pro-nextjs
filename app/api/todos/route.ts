import { NextResponse } from "next/server";

interface Todo {
  id: number;
  title: string;
  priority: number;
  createdAt: Date;
  updatedAt?: Date;
  deleted: boolean;
}

const todos: Todo[] = [];

// GET: Fetch all non-deleted TODOs
export async function GET() {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  return NextResponse.json(activeTodos);
}

// POST: Add a new TODO
export async function POST(request: Request) {
  const newTodo = await request.json() as Omit<Todo, "id" | "createdAt" | "deleted">;
  const todo: Todo = {
    ...newTodo,
    id: Date.now(),
    createdAt: new Date(),
    deleted: false,
  };
  todos.push(todo);
  return NextResponse.json(todo);
}

// PATCH: Update an existing TODO
export async function PATCH(request: Request) {
  const updatedTodo = await request.json() as Partial<Todo> & { id: number };
  const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
  if (index !== -1) {
    todos[index] = {
      ...todos[index],
      ...updatedTodo,
      updatedAt: new Date(),
    };
    return NextResponse.json(todos[index]);
  }
  return NextResponse.json({ error: "TODO not found" }, { status: 404 });
}

// DELETE: Soft delete a TODO by marking it as deleted
export async function DELETE(request: Request) {
  const { id } = await request.json() as { id: number };
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index].deleted = true;
    return NextResponse.json({ message: "Deleted" });
  }
  return NextResponse.json({ error: "TODO not found" }, { status: 404 });
}
