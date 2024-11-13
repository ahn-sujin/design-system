interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
