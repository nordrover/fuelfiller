const Input = ({ disabled, type, value, ...otherProps }) =>
  disabled ? (
    <input
      disabled
      value={value}
      type={type ? type : "text"}
      {...otherProps}
    />
  ) : (
    <input defaultValue={value} type={type ? type : "text"} {...otherProps} />
  );

export default Input;
