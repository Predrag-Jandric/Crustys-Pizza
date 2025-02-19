import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full text-sm font-medium capitalize tracking-wide text-stone-800 transition-colors disabled:cursor-not-allowed border-2";

  const styles = {
    primary: `${base} border-secondary bg-primary 
    hover:bg-primaryHover px-5 py-3.5`,
    primarySmall: `${base} border-secondary bg-primary 
    hover:bg-primaryHover px-3 sm:px-5 py-1.5 sm:py-2 text-xs`,
    secondary: `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-5 py-3`,
    secondarySmall: `${base} border-secondaryHover bg-secondary hover:bg-secondaryHover px-5 py-2 text-xs`,
    round: `${base} border-transparent bg-primary hover:bg-primaryHover
        size-8 sm:size-9 text-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
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
