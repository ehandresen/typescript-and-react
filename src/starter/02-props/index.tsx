<<<<<<< HEAD
type ComponentProps = {
  name: string;
  id: number;
};

function Component({ name, id }: ComponentProps) {
=======
import React from 'react';
import { type PropsWithChildren } from 'react';

// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
  children: React.ReactNode;
}>;

function Component({ name, id, children }: ComponentProps) {
>>>>>>> 3db1501d850ba6d0feb2c4417a03c4fe9b4bebef
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>id: {id}</h2>
<<<<<<< HEAD
=======
      {children}
>>>>>>> 3db1501d850ba6d0feb2c4417a03c4fe9b4bebef
    </div>
  );
}
export default Component;
