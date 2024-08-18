interface ComponentProps {
  name: string;
  id: number;
}

function Component(props: ComponentProps) {
  return (
    <div>
      <h2>name: {props.name}</h2>
      <h2>id: {props.id}</h2>
    </div>
  );
}
export default Component;
