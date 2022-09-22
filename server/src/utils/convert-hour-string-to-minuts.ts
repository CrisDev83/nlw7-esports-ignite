export function convertHourStringToMinuts(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number);

  const nimutesAmount = (hours * 60) + minutes

  return nimutesAmount
}