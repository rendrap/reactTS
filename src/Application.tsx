type NameTagProps = {
  name: string;
};

const NameTag = function({name}: NameTagProps) {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>

      <footer />
    </main>
  );
};

const Application = function() {
  return <NameTag name="Steve" />;
};

export default Application;
