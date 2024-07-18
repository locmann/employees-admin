import { Employee } from 'entities/employees';
import { parseStringToDate } from 'shared/helpers/formatDate.ts';

export function compareNames(order: string) {
  return (a: Employee, b: Employee) => {
    const comparison = a.name.localeCompare(b.name, 'ru', {
      ignorePunctuation: true,
      sensitivity: 'base',
    });
    return order === 'asc' ? comparison : -comparison;
  };
}

export function compareDates(order: string) {
  return (a: Employee, b: Employee) => {
    const aDate = parseStringToDate(a.birthday);
    const bDate = parseStringToDate(b.birthday);
    return order === 'asc' ? aDate.valueOf() - bDate.valueOf() : bDate.valueOf() - aDate.valueOf();
  };
}
