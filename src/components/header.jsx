import React from "react";

function Header(props) {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const items = inputRef.current.value;
    props.setSearch(items);
    inputRef.current.value = "";
  };

  return (
    <nav>
      <div>logo</div>
      <form ref={formRef} onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button>Find</button>
      </form>
    </nav>
  );
}

export default Header;
