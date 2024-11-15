import IconButton from "./IconButton";

interface INavigationBarProps {
  title?: string;
  isShowBackButton: boolean;
  isShowCloseButton: boolean;
  isShowTitle: boolean;
  isDark: boolean;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar = ({
  title = "",
  isDark,
  isShowTitle,
  isShowBackButton,
  isShowCloseButton,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[8px]">
        {/* 뒤로가기 버튼 */}
        {isShowBackButton && (
          <IconButton
            iconPath={`/icons/ic_back_left${isDark ? "_white" : ""}.svg`}
            alt="back"
            onClick={onBackButtonClick}
          />
        )}
        {/* 타이틀 */}
        {isShowTitle && (
          <h1 className={`text-2xl ${isDark && "text-white"}`}>{title}</h1>
        )}
      </div>

      {/* 닫기 버튼 */}
      {isShowCloseButton && (
        <IconButton
          iconPath={`/icons/ic_cancel${isDark ? "_white" : ""}.svg`}
          alt="cancle"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
};

export default NavigationBar;
