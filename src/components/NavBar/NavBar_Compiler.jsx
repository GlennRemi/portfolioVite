function NavBar({ children }) {
  return (
    <div>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
}

export default NavBar;
