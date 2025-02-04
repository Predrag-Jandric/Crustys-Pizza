import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-md text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors disabled:cursor-not-allowed border-2";

  const styles = {
    primary:
      `${base} border-secondary bg-primary hover:bg-primaryHover px-4 py-3 sm:px-6 md:py-4`,
    primarySmall:
      `${base} border-secondary bg-primary hover:bg-primaryHover px-4 py-2 sm:px-5 md:py-2.5 text-xs`,
    secondary:
      `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-4 py-3 sm:px-6 md:py-4`,
    secondarySmall:
      `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-4 py-2 sm:px-5 md:py-2.5 text-xs`,
    round:
      `${base} border-transparent bg-primary hover:bg-primaryHover px-2.5 py-1 sm:px-3.5 md:py-2 text-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;