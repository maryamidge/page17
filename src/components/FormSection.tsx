import React from 'react';

interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, description, children }) => {
  return (
    <section className="self-center w-full max-w-[396px] mt-6">
      <header className="w-full">
        <h2 className="text-[#0A3149] text-base font-[590]">
          {title}
        </h2>
        <p className="text-[#5B7585] text-xs font-normal leading-3 mt-2">
          {description}
        </p>
      </header>
      <div className="items-stretch shadow-[2px_0_20px_0_rgba(24,57,107,0.05)] flex w-full flex-col text-sm mt-4 p-4 rounded-2xl bg-white">
        {children}
      </div>
    </section>
  );
};

export const FormDivider: React.FC = () => {
  return (
    <div className="border bg-[#E6ECE9] self-center min-h-px w-[311px] max-w-full mt-4 border-[rgba(230,236,233,1)] border-solid" />
  );
};
