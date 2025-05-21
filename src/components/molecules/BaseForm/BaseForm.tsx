import { useState } from "react";
import { validateRequiredFields } from "../../Utils/validation"; 
import Button from "../../atoms/Button/Button";



type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea";
  placeholder?: string;
};

type BaseFormProps = {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
};

  const BaseForm = ({ fields, onSubmit, buttonText }: BaseFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequiredFields(fields, formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  return (
    <form className="base-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={errors[field.name] ? "error" : ""}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className={errors[field.name] ? "error" : ""}
            />
          )}

          {errors[field.name] && (
            <span className="error-message">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <Button type="submit"  className="submit-button">
        {buttonText}
      </Button>

      
    </form>
  );
};

export default BaseForm;
