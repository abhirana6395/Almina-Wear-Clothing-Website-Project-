const Button = ({ children, variant = "dark", ...props }) => {
    const base =
  "min-h-[44px] px-6 py-3 rounded-full font-medium transition-all duration-300";


  const styles = {
    dark: "bg-black text-white hover:bg-pink-600",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
