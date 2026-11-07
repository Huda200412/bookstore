function Button({ text, onClick, css }) {

  return (

    <button
      className={css}
      onClick={onClick}
    >
      {text}
    </button>

  );

}

export default Button;