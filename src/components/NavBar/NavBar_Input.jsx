const NavBarInputText = (props) => {
  const { text, style } = props;
  return (
    <div>
      <p className={style}>{text}</p>
    </div>
  );
};

export default NavBarInputText;
