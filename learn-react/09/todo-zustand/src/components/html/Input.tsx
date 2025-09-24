type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox">;
};
export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input {...rest} />
    </>
  );
}
