interface SuccessProps {
  country?: string;
}

export default function Success(props: SuccessProps) {
  return <div>Success , {props.country}</div>;
}
