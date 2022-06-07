export const Intersection = () => {
  type Foo = {
    a: string;
    b: number;
  };
  type Bar = {
    c: boolean;
  };

  type FooBar = Foo & Bar; //Intersection Types
  return;
};
