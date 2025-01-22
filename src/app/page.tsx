import { TaskList } from "@/components/task-list";
import { getTenent } from "@/services/tenant";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host")?.split(":")[0];

  if (!host) return null;

  const tenant = await getTenent(host);
  if (!tenant) return null;

  return (
    <div
      style={{ backgroundColor: tenant.main_color }}
      className="min-h-screen flex flex-col gap-4 items-center justify-center text-white"
    >
      <h1 className="text-3xl font-bold">Host: {tenant.host}</h1>
      <p>Nome: {tenant.name}</p>
      <TaskList tenant_id={tenant.id} />
    </div>
  );
}
