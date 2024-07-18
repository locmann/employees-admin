import styles from './styles.module.scss';
import { RuPosition, RuPositionToPositionMap } from 'entities/filters';
import { useAppDispatch, useAppSelector } from 'app/store.ts';
import { ChangeEvent } from 'react';
import {
  selectFilterStatus,
  setPositionFilter,
  setNameSortMode,
  setStatusFilter,
  setDateSortMode,
} from 'entities/filters/model/filtersSlice.ts';
import { RuSortMode, RuSortModeToSortModeMap } from 'entities/filters/model/types.ts';

const EmployeeFilters = () => {
  const status = useAppSelector(selectFilterStatus);

  const dispatch = useAppDispatch();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedPosition = event.target.value as RuPosition;
    dispatch(setPositionFilter(RuPositionToPositionMap[selectedPosition]));
  };

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setStatusFilter(checked));
  };

  const onNameSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedNameSort = event.target.value as RuSortMode;
    dispatch(setNameSortMode(RuSortModeToSortModeMap[selectedNameSort]));
  };

  const onDateSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedDateSort = event.target.value as RuSortMode;
    dispatch(setDateSortMode(RuSortModeToSortModeMap[selectedDateSort]));
  };

  return (
    <div className={styles.filtersWrapper}>
      <label htmlFor="date">По дате</label>
      <select
        id="date"
        onChange={onDateSortChange}
      >
        {Object.values(RuSortMode).map((sort) => (
          <option
            key={sort}
            value={sort}
          >
            {sort}
          </option>
        ))}
      </select>
      <label htmlFor="name">По имени</label>
      <select
        id="name"
        onChange={onNameSortChange}
      >
        {Object.values(RuSortMode).map((sort) => (
          <option
            key={sort}
            value={sort}
          >
            {sort}
          </option>
        ))}
      </select>
      <label htmlFor="position">Должность</label>
      <select
        id="position"
        onChange={onSelectChange}
      >
        {Object.values(RuPosition).map((position) => (
          <option
            key={position}
            value={position}
          >
            {position}
          </option>
        ))}
      </select>
      <input
        type="checkbox"
        onChange={onCheckboxChange}
        checked={status}
        id="archive"
      />
      <label htmlFor="archive">В архиве</label>
    </div>
  );
};

export default EmployeeFilters;
