import { logout } from "@/actions/auth";

export default function Dashboard() {
  return (
    <div>
      DASHBOARD
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
