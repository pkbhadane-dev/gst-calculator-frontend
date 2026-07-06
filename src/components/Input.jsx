export const Input = ({ label, text = "text", ...props }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-3 font-serif">
      <label htmlFor="businessName">{label}</label>
      <input type={text} {...props} className="px-2 py-1 rounded-sm focus:outline-none" />
    </div>
  );
};
