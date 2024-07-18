import { Employee } from 'entities/employees';
import { Position } from 'entities/filters';
import { SortMode } from 'entities/filters/model/types.ts';
import { compareDates, compareNames } from 'shared/helpers/sortFunctions.ts';

export function renderList(
  employees: Employee[],
  position: Position,
  isArchive: boolean,
  nameSort: SortMode,
  dateSort: SortMode,
) {
  if (dateSort === SortMode.None) {
    return employees
      .filter((employee) => {
        return position === Position.Empty || employee.role === position;
      })
      .filter((employee) => {
        if (isArchive) {
          return employee.isArchive;
        } else {
          return true;
        }
      })
      .sort(compareNames(nameSort));
  }
  if (nameSort === SortMode.None) {
    return employees
      .filter((employee) => {
        return position === Position.Empty || employee.role === position;
      })
      .filter((employee) => {
        if (isArchive) {
          return employee.isArchive;
        } else {
          return true;
        }
      })
      .sort(compareDates(dateSort));
  }
  return employees
    .filter((employee) => {
      return position === Position.Empty || employee.role === position;
    })
    .filter((employee) => {
      if (isArchive) {
        return employee.isArchive;
      } else {
        return true;
      }
    });
}
