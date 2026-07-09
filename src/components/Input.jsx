export const Input = ({ label, htmlFor, text = "text", ...props }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-3 font-serif">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={text} {...props} className="px-2 py-1 rounded-sm focus:outline-none" />
    </div>
  );
};
