import React from 'react';

interface FormFieldProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ title, description, children }) => {
  return (
    <div className="w-full">
      <div className="flex min-h-9 w-full flex-col text-[#0A3149] font-[590] tracking-[-0.45px] leading-9">
        <div className="flex min-h-9 w-full">
          <div className="text-[#0A3149] flex-1 shrink basis-[0%]">
            {title}
          </div>
        </div>
        {description && (
          <div className="min-h-4 w-full text-xs text-[#5B7585] font-normal leading-none">
            <div className="flex min-h-4 w-full">
              <div className="text-[#5B7585] w-full">
                {description}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3">
        {children}
      </div>
    </div>
  );
};

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, className = "" }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`items-center border bg-white flex min-h-12 w-full gap-4 text-[#CACBCC] font-normal leading-6 p-4 rounded-lg border-solid border-[#F5E7E6] focus:outline-none focus:ring-2 focus:ring-[#0A3149] focus:border-transparent ${className}`}
    />
  );
};

interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options?: string[];
  className?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({ value, onChange, placeholder, options = [], className = "" }) => {
  return (
    <div className={`items-center border bg-white flex min-h-12 w-full gap-4 text-[#CACBCC] font-normal whitespace-nowrap leading-6 p-4 rounded-lg border-solid border-[#F5E7E6] cursor-pointer hover:border-[#0A3149] transition-colors ${className}`}>
      <div className="text-[#CACBCC] self-stretch flex-1 shrink basis-[0%] my-auto">
        {value || placeholder}
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/92eda8c6439272ad4463f77a7c6b91b2fea50175?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        alt="Dropdown arrow"
      />
    </div>
  );
};

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const DateInput: React.FC<DateInputProps> = ({ value, onChange, placeholder, className = "" }) => {
  return (
    <div className={`items-center border bg-white flex min-h-12 w-full gap-4 text-[#CACBCC] font-normal whitespace-nowrap leading-6 p-4 rounded-lg border-solid border-[#F5E7E6] ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/2cd4bd4e15ad815ebeed6d17ef2a9eb9d80851f1?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        alt="Calendar icon"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-[#CACBCC] self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/92eda8c6439272ad4463f77a7c6b91b2fea50175?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        alt="Dropdown arrow"
      />
    </div>
  );
};

interface TextAreaInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder, className = "" }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className={`border bg-white flex min-h-[131px] w-full gap-4 text-sm text-[#CACBCC] font-normal leading-6 p-4 rounded-lg border-solid border-[#F5E7E6] resize-none focus:outline-none focus:ring-2 focus:ring-[#0A3149] focus:border-transparent ${className}`}
    />
  );
};
