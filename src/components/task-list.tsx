import { getTasks } from "@/services/task";

type Props = {
  tenant_id: number;
};

export const TaskList = async ({ tenant_id }: Props) => {
  const tasks = await getTasks(tenant_id);

  return (
    <div className="">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
    </div>
  );
};
