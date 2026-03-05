interface TextAreaProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, name, value, onChange }: TextAreaProps) => {
  return (
    <textarea
      className="textarea"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={5}
    />
  );
};

export default TextArea;