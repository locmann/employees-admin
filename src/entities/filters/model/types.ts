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
