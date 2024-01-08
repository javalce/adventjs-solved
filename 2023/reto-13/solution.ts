export function calculateTime(deliveries: string[]): string {
  function strToDate(s: string): Date {
    const [hours, minutes, seconds] = s.split(':').map(Number);

    const timestamp = Date.UTC(1970, 0, 1, hours, minutes, seconds);

    return new Date(timestamp);
  }

  const maxDeliveryDate = strToDate('07:00:00');

  const deliveryDate = deliveries.reduce((acc, time): Date => {
    const date = strToDate(time);

    return new Date(acc.getTime() + date.getTime());
  }, strToDate('00:00:00'));

  const maxDeliveryDateTimestamp = maxDeliveryDate.getTime();
  const deliveryDateTimestamp = deliveryDate.getTime();

  const maxTimestamp = Math.max(
    maxDeliveryDateTimestamp,
    deliveryDateTimestamp,
  );
  const minTimestamp = Math.min(
    maxDeliveryDateTimestamp,
    deliveryDateTimestamp,
  );

  const diffTimestamp = maxTimestamp - minTimestamp;

  const diffDate = new Date(diffTimestamp);

  const hours = diffDate.getUTCHours();
  const minutes = diffDate.getUTCMinutes();
  const seconds = diffDate.getUTCSeconds();

  const strHours = hours.toString().padStart(2, '0');
  const strMinutes = minutes.toString().padStart(2, '0');
  const strSeconds = seconds.toString().padStart(2, '0');
  const strDate = `${strHours}:${strMinutes}:${strSeconds}`;

  const strDiffTime = maxDeliveryDate > deliveryDate ? `-${strDate}` : strDate;

  return strDiffTime;
}
