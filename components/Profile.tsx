import { useUser } from "../app/UserContext";

export default function Profile() {
  const { user, setUser } = useUser();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <button onClick={() => setUser({ name: "John Doe" })}>Login</button>
      )}
    </div>
  );
}
