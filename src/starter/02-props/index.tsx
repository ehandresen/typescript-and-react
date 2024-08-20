type ComponentProps = {
  name: string;
  id: number;
};

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>id: {id}</h2>
    </div>
  );
}
export default Component;
