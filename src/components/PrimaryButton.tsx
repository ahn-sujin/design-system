type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: string;
  isDisabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

const PrimaryButton = ({
  theme,
  children,
  isDisabled,
  onClick,
}: IPrimaryButtonProps) => {
  return (
    <button
      className={`w-full h-[59px] rounded-primary-button ${color[theme]} ${disabled}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
