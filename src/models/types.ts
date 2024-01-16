export type NonNullProps<Type> = {
  [Property in keyof Type]: NonNullable<Type[Property]>;
};