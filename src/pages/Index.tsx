import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { CreateProfileForm } from '@/components/CreateProfileForm';

const Index = () => {
  return (
    <main className="flex w-[428px] h-[932px] flex-col overflow-y-auto items-center bg-[#F8F1EC] mx-auto">
      <StatusBar />
      
      <header className="items-center justify-center relative flex min-h-11 gap-4 bg-[#F8F1EC] px-4 w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/4a4ac837597a4c8bddf61876df444c8d4d6c26be?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-10 z-0 shrink-0 my-auto"
          alt="Profile avatar"
        />
      </header>

      <CreateProfileForm />

      <footer className="w-full mt-[34px] flex justify-center">
        <div className="backdrop-blur-2xl flex min-h-[5px] w-[154px] bg-black rounded-[100px]" />
      </footer>
    </main>
  );
};

export default Index;
