interface IIconButtonProps {
  iconPath: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconPath, alt, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
