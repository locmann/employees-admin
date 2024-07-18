export enum Position {
  Empty = 'empty',
  Waiter = 'waiter',
  Driver = 'driver',
  Cook = 'cook',
}

export enum RuPosition {
  Empty = ' - ',
  Waiter = 'Официант',
  Driver = 'Водитель',
  Cook = 'Повар',
}

export const RuPositionToPositionMap = {
  [RuPosition.Empty]: Position.Empty,
  [RuPosition.Waiter]: Position.Waiter,
  [RuPosition.Driver]: Position.Driver,
  [RuPosition.Cook]: Position.Cook,
};

export const PositionToRuPositionMap = {
  [Position.Empty]: RuPosition.Empty,
  [Position.Waiter]: RuPosition.Waiter,
  [Position.Driver]: RuPosition.Driver,
  [Position.Cook]: RuPosition.Cook,
};

export enum SortMode {
  None = ' - ',
  Asc = 'asc',
  Desc = 'desc',
}

export enum RuSortMode {
  None = ' - ',
  Asc = 'Возрастание',
  Desc = 'Убывание',
}

export const RuSortModeToSortModeMap = {
  [RuSortMode.None]: SortMode.None,
  [RuSortMode.Asc]: SortMode.Asc,
  [RuSortMode.Desc]: SortMode.Desc,
};

export const SortModeToRuSortModeMap = {
  [SortMode.None]: RuSortMode.None,
  [SortMode.Asc]: RuSortMode.Asc,
  [SortMode.Desc]: RuSortMode.Desc,
};
