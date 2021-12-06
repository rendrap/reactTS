import React from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */
type NameTagProps = {
  name: string;
};

type GroceryListProps = {
  items: string[];
  status: 'loading' | 'error' | 'success';
};

type Item = {
  item: {
    id: string;
    title: string;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  anObject: object;
  // eslint-disable-next-line @typescript-eslint/ban-types
  anotherObject: {};
};

type Dictionary = {
  [key: number]: string;
};

type ItemHash = {
  [key: string]: Item;
};

type ContrivedExampleProps = {
  // doesn't take any args, doesn't return anything
  onHover: () => void;
  // Takes a number, return nothing
  onChange: () => void;
  // Take an event based on clicking on a buuton
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const add = (a: number, b: number): number => a + b;

function substract(a: number, b: number): number {
  return a - b;
}

const NameTag = (props: NameTagProps) => (
  <main>
    <header>
      <h1>Hello</h1>
      <p>My Name Is</p>
    </header>
    <section className="display-name">
      <p>{props.name}</p>
    </section>

    <footer />
  </main>
);

const Application = () => <NameTag name="Rendra" />;

export default Application;
