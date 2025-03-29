function Header({ appName, toggleForm, showForm }) {
  return (
    <header className="header">
      <h1>Welcome to {appName}!</h1>
      <button onClick={toggleForm}>
        {showForm ? "Close Form" : "Add A Task"}
      </button>
    </header>
  );
}

export default Header;
