import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { CreateProfileForm } from '@/components/CreateProfileForm';

const Index = () => {
  return (
    <main className="flex max-w-[480px] w-full flex-col overflow-hidden items-stretch bg-[#F8F1EC] mx-auto min-h-screen">
      <StatusBar />
      
      <header className="items-start relative flex min-h-11 gap-4 bg-[#F8F1EC] px-4">
        <div className="absolute z-0 translate-x-[0%] -translate-y-2/4 w-5 left-5 top-2/4">
          <div className="flex min-h-11 w-5" />
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/4a4ac837597a4c8bddf61876df444c8d4d6c26be?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-10 z-0 shrink-0 my-auto"
          alt="Profile avatar"
        />
      </header>

      <CreateProfileForm />

      <footer className="w-full mt-[34px]">
        <div className="w-full">
          <div className="items-center flex min-h-[34px] w-[430px] flex-col overflow-hidden pb-2">
            <div className="backdrop-blur-2xl flex min-h-[5px] w-[154px] max-w-full bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
