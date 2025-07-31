import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { CreateProfileForm } from '@/components/CreateProfileForm';

const Index = () => {
  return (
    <main className="flex w-[428px] h-[932px] flex-col overflow-y-auto bg-[#F8F1EC] mx-auto">
      <StatusBar />
      
      <header className="relative flex items-center min-h-11 bg-[#F8F1EC] px-4 w-full">
        <div className="absolute left-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#0A3149" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/4a4ac837597a4c8bddf61876df444c8d4d6c26be?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10"
            alt="Profile avatar"
          />
        </div>
      </header>

      <CreateProfileForm />

      <footer className="w-full mt-[34px] flex justify-center">
        <div className="backdrop-blur-2xl flex min-h-[5px] w-[154px] bg-black rounded-[100px]" />
      </footer>
    </main>
  );
};

export default Index;
