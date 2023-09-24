function Button(
  // props: React.ButtonHTMLAttributes<HTMLButtonElement>,
  {
    title,
    textColor,
    background,
    px,
  }: { textColor?: string; title: string; background?: string; px?: string }
) {
  return (
    <>
      <button
        // {...props}
        type="button"
        className={`${textColor ? textColor : "text-white"} ${
          background ? `${background} border border-gray-300` : "bg-primary"
        } ${
          px ? px : "px-8"
        } rounded hover:brightness-90 transition-all text-xs  py-3 focus:outline-none`}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
