import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormSection, FormDivider } from './FormSection';
import { FormField, TextInput, SelectInput, DateInput, TextAreaInput } from './FormField';

interface ProfileFormData {
  name: string;
  gender: string;
  birthdate: string;
  location: string;
  workFields: string;
  skills: string;
  startupIdea: string;
}

export const CreateProfileForm: React.FC = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: 'Simon Smith',
      gender: '',
      birthdate: '06/06/1985',
      location: 'Estonia',
      workFields: '',
      skills: '',
      startupIdea: 'An AI-powered tool that connects founders with mentors and investors.'
    }
  });

  const [formData, setFormData] = useState<ProfileFormData>({
    name: 'Simon Smith',
    gender: '',
    birthdate: '06/06/1985',
    location: 'Estonia',
    workFields: '',
    skills: '',
    startupIdea: 'An AI-powered tool that connects founders with mentors and investors.'
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  const updateField = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValue(field, value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <FormSection
        title="Personal Details"
        description="Help us understand who you are so we can personalize your experience."
      >
        <FormField title="1. What's your name?">
          <TextInput
            value={formData.name}
            onChange={(value) => updateField('name', value)}
            placeholder="Enter your name"
          />
        </FormField>

        <FormDivider />

        <FormField title="2. How do you identify?">
          <SelectInput
            value={formData.gender}
            onChange={(value) => updateField('gender', value)}
            placeholder="Gender"
            options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
          />
        </FormField>

        <FormDivider />

        <FormField title="3. What's your birthdate?">
          <DateInput
            value={formData.birthdate}
            onChange={(value) => updateField('birthdate', value)}
            placeholder="MM/DD/YYYY"
          />
        </FormField>

        <FormDivider />

        <FormField title="4. Where are you based?">
          <SelectInput
            value={formData.location}
            onChange={(value) => updateField('location', value)}
            placeholder="Select location"
            options={['Estonia', 'United States', 'United Kingdom', 'Canada', 'Germany', 'Other']}
          />
        </FormField>
      </FormSection>

      <FormSection
        title="Experience & Background"
        description="Tell us what you've done and what you're good at — this helps us connect you with the right people."
      >
        <FormField title="5. What fields have you worked in?">
          <SelectInput
            value={formData.workFields}
            onChange={(value) => updateField('workFields', value)}
            placeholder="Select"
            options={['Technology', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Design', 'Other']}
          />
        </FormField>

        <FormDivider />

        <FormField title="6. What skills do you have?">
          <SelectInput
            value={formData.skills}
            onChange={(value) => updateField('skills', value)}
            placeholder="Select"
            options={['Programming', 'Design', 'Marketing', 'Sales', 'Management', 'Analytics', 'Other']}
          />
        </FormField>

        <FormDivider />

        <FormField 
          title="7. What's your startup idea about?"
          description="Write a short description to help others understand your concept"
        >
          <TextAreaInput
            value={formData.startupIdea}
            onChange={(value) => updateField('startupIdea', value)}
            placeholder="Describe your startup idea..."
          />
        </FormField>
      </FormSection>

      <div className="justify-center items-stretch flex w-full flex-col bg-[#F8F1EC] mt-[34px]">
        <button
          type="submit"
          className="bg-[rgba(181,69,61,1)] shadow-[0px_4px_4px_rgba(190,92,85,0.42)] self-center flex min-h-12 w-full max-w-[396px] items-center gap-2 text-base text-[rgba(248,241,236,1)] font-semibold text-center uppercase justify-center pl-[130px] pr-[129px] py-3 rounded-lg hover:bg-[rgba(171,59,51,1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(181,69,61,0.5)] focus:ring-offset-2"
        >
          <span className="self-stretch my-auto">See My Matches</span>
        </button>
      </div>
    </form>
  );
};
