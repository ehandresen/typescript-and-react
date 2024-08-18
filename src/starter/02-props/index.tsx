function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>id: {id}</h2>
    </div>
  );
}
export default Component;
