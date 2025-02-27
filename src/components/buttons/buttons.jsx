export const Buttons = ({ onClick, buttonText, className, variant }) => {
  const primary = `rounded border-0 py-2 px-3 bg-primary text-white font-helvetica`;
  const secondary = `rounded border border-primary px-3 py-2 text-primary font-helvetica bg-white`;

  let variantClass = variant === "secondary" ? secondary : primary;

  if ((variant = primary)) {
    variantClass = primary;
  } else if ((variant = secondary)) {
    variantClass = secondary;
  }

  return (
    <button onClick={onClick} className={`${variantClass} ${className}`}>
      {buttonText}
    </button>
  );
};
