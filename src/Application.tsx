type NameTagProps = {
  name: string;
};

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
