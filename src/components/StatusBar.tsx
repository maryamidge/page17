import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F1EC]">
      <div className="flex w-full items-center overflow-hidden justify-center pl-2.5 pr-2">
        <div className="self-stretch flex items-center overflow-hidden text-lg text-black font-[590] whitespace-nowrap text-center tracking-[-0.44px] leading-none justify-center flex-1 shrink basis-[0%] my-auto pt-[18px] pb-[13px]">
          <div className="self-stretch flex flex-col my-auto">
            <div className="text-black">1:47</div>
          </div>
        </div>
        <div className="self-stretch w-[126px] my-auto pt-[11px] pb-1.5">
          <div className="flex min-h-[37px] max-w-full w-[126px] bg-black rounded-[100px]" />
        </div>
        <div className="self-stretch flex items-center overflow-hidden justify-center flex-1 shrink basis-[0%] my-auto pt-[18px] pb-[13px]">
          <div className="self-stretch flex gap-[3px] my-auto">
            <div className="w-[27px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/400c4b5765814e514de4b2cb3e9f28dec29f72ce?placeholderIfAbsent=true"
                className="aspect-[1.17] object-contain w-[27px]"
                alt="Cellular signal"
              />
            </div>
            <div className="w-[23px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/17c6530cb64950428ce60ef07781f742259c678f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px]"
                alt="WiFi signal"
              />
            </div>
            <div className="w-9">
              <img
                src="https://api.builder.io/api/v1/image/assets/47f0c1c46367453ead2af9745b22e2c0/5191d125d796736c41e4a6424bc39bc907a77b64?placeholderIfAbsent=true"
                className="aspect-[1.56] object-contain w-9"
                alt="Battery level"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
