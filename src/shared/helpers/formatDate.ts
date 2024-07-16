export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
};

export function formatDateToHtml(date: string): string {
  const [day, month, year] = date.split('.');

  // Формируем строку в нужном формате
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
