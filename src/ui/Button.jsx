import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick, icon }) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-medium capitalize tracking-wide text-stone-800 transition-colors border-2";

  const styles = {
    primary: `${base} border-secondary bg-primary hover:bg-primaryHover px-5 py-3.5`,
    primarySmall: `${base} border-secondary bg-primary hover:bg-primaryHover px-4 py-2`,
    secondary: `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-5 py-3`,
    secondarySmall: `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-4 py-2`,
    round: `${base} border-transparent bg-primary hover:bg-primaryHover size-8 sm:size-9`,
  };

  const disabledClasses = disabled ? "opacity-40 cursor-not-allowed" : "";

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (to)
    return (
      <Link to={to} className={`${styles[type]} ${disabledClasses}`}>
        {content}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[type]} ${disabledClasses}`}
    >
      {content}
    </button>
  );
}

export default Button;
