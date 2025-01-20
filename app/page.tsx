import AddTodo from "@/components/AddTodo";
import Hero from "@/components/hero";
import TodoList from "@/components/Todolist";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
