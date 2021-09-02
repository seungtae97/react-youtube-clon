import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onSearch }) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const items = inputRef.current.value;
    onSearch(items);
    inputRef.current.value = "";
  };

  return (
    <header className={styles.header}>
      <div>logo</div>
      <form ref={formRef} onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button>Find</button>
      </form>
    </header>
  );
});
export default Header;
