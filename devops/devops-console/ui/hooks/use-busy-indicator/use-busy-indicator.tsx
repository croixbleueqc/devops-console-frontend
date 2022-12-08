import { useEffect, useState } from 'react';

export function useBusyIndicator() {
  const [busy, setBusy] = useState(false);
  const [tasks, setTasks] = useState(0);
  const imBusy = () => {
    setTasks((t) => t + 1);
  };
  const imNotBusy = () => {
    setTasks((t) => Math.max(0, t - 1));
  };
  useEffect(() => {
    setBusy(tasks > 0);
  }, [tasks]);
  return { imBusy, imNotBusy, busy, tasks };
}
