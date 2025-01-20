import { Suspense } from "react";

async function fetchTodos() {
  const response = await fetch("http://localhost:3000/api/todos", { cache: "no-store" });
  
  if (!response.ok) throw new Error("Failed to fetch TODOs");

  return response.json();
}

export default async function TodoList() {
  const todos = await fetchTodos();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        {todos.map((todo: { id: number; title: string }) => (
          <li key={todo.id} className="border border-border p-2 mb-2 rounded">
            {todo.title}
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
