type Props = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};

function Component({ type, name, email }: Props) {
  const alertType = type === 'basic' ? 'success' : 'danger';

  return (
    <article className={`alert alert-${alertType}`}>
      <h2>User: {name}</h2>
      {email ? <h2>Email: {email}</h2> : null}
    </article>
  );
}
export default Component;
