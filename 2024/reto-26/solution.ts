function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked.split(':').map(Number);
  const [hoursTotal, minutesTotal, secondsTotal] = totalTime.split(':').map(Number);

  const totalWorked = hoursWorked * 3600 + minutesWorked * 60 + secondsWorked;
  const total = hoursTotal * 3600 + minutesTotal * 60 + secondsTotal;

  const percentage = (totalWorked / total) * 100;

  return `${Math.round(percentage)}%`;
}

export { getCompleted };
