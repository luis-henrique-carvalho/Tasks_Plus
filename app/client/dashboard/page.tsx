"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession({ required: true });
  return (
    <div>
      <h1 className="text-l-bg">Pagina Inicial</h1>
    </div>
  );
};

export default Dashboard;



