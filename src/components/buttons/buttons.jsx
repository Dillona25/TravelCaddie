export const Button = ({ onClick, buttonText, className, variant }) => {
  const primary = `primary-button rounded border-0 py-2 px-4 bg-primary text-white font-helvetica`;
  const secondary = `secondary-button rounded border border-primary px-4 py-2 text-primary font-helvetica bg-white`;

  let variantClass = variant === "secondary" ? secondary : primary;

  if (variant === primary) {
    variantClass = primary;
  } else if (variant === secondary) {
    variantClass = secondary;
  }

  return (
    <button onClick={onClick} className={`${variantClass} ${className}`}>
      <span>{buttonText}</span>
    </button>
  );
};
