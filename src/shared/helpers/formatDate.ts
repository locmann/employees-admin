export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
};

export function formatDateToHtml(date: string): string {
  const [day, month, year] = date.split('.');

  // Формируем строку в нужном формате
  return `${year}-${month}-${day}`;
}

export function parseStringToDate(dateString: string) {
  const [day, month, year] = dateString.split('.').map(Number);

  if (!day || !month || !year || year < 1000 || year > 9999) {
    throw new Error('Invalid date format');
  }

  const date = new Date(year, month - 1, day);

  if (date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
    throw new Error('Invalid date');
  }

  return date;
}
