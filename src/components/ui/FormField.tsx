import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="block w-full rounded-md border-2 border-gray-300 shadow-sm 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                 text-base px-4 py-3 bg-white hover:border-blue-400 transition-colors"
      />
    </div>
  );
};

export default FormField;