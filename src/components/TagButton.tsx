interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TagButton = ({ children, isChecked, onClick }: ITagButtonProps) => {
  const checkedStyle = isChecked
    ? "bg-white text-primary"
    : "bg-white-opacity text-white";

  return (
    <button
      className={`h-[33px] px-[10px] text-sm font-medium rounded-tag-button border border-white ${checkedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
