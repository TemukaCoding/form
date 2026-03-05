interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, type = "text", name, value, onChange }: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;