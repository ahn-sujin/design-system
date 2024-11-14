interface IIconButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  iconPath: string;
  alt: string;
  onClick: () => void;
}

const IconButton = ({ iconPath, alt, ...props }: IIconButtonProps) => {
  return (
    <button {...props}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
