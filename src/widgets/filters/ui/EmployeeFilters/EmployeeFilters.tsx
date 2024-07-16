import styles from './styles.module.scss';
import { RuPosition, RuPositionToPositionMap } from 'entities/filters';
import { useAppDispatch, useAppSelector } from 'app/store.ts';
import { ChangeEvent } from 'react';
import {
  selectFilterStatus,
  setPositionFilter,
  setStatusFilter,
} from 'entities/filters/model/filtersSlice.ts';

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

  return (
    <div className={styles.filtersWrapper}>
      <select onChange={onSelectChange}>
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
      />
      <label htmlFor="archive">В архиве</label>
    </div>
  );
};

export default EmployeeFilters;
