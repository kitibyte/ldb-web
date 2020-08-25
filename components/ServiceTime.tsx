import clsx from 'clsx';

export default function ServiceTime(props: {
  children: string;
  estimate?: string;
}) {
  const offSchedule = props.estimate !== 'On time';
  return (
    <span className="font-features tabular-numbers stylistic-alternates font-medium">
      <span className={clsx({ 'line-through text-gray-500': offSchedule })}>
        {props.children}
      </span>{' '}
      {offSchedule && <span>{props.estimate}</span>}
    </span>
  );
}
