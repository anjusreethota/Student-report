//import logo from './logo.svg';
import './App.css';

import * as React from "react";

function App(props) {
  return (
    <div className="backdrop-blur-[2px] flex w-full flex-col justify-center items-stretch px-16 py-12 rounded-none max-md:max-w-full max-md:px-5">
      <div className="backdrop-blur-[2px] bg-gray-900 mt-14 mb-11 mx-9 pl-20 rounded-3xl max-md:max-w-full max-md:mr-2.5 max-md:my-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-40 max-md:mt-10">
              <img
                loading="lazy"
                alt="imgage-1"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa7110a3eb0e4db887a7d4a9f1570473410dbdaf9b2154d0c6f2bac0da075bd6?apiKey=0e33f994f2a6420186ff255a589ad5e1&"
                className="aspect-[0.97] object-contain object-center w-full fill-[linear-gradient(180deg,#FFF_0%,#BDE2F2_100%)] overflow-hidden self-stretch"
              />
              <div className="text-white text-4xl font-bold self-center whitespace-nowrap mt-6">
                Full Name
              </div>
              <div className="text-white text-3xl font-light self-center mt-9">
                Reg no.
              </div>
              <div className="text-white text-3xl font-light self-center whitespace-nowrap mt-3">
                Phone number
              </div>
              <div className="text-white text-3xl font-light self-center whitespace-nowrap mt-4">
                email
              </div>
              <div className="text-white text-3xl font-light self-center whitespace-nowrap mt-4">
                Branch
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
            <div className="backdrop-blur-[2px] bg-sky-200 flex grow flex-col justify-center items-center w-full px-16 py-12 rounded-none max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex-col overflow-hidden relative flex min-h-[859px] w-[981px] max-w-full mb-5 pb-7">
                <img
                  loading="lazy"
                  alt='imge'
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd8abc1ef3e6203aa8a5115f5c6f3c4a2cdb7924985d1dc587fcf368762f3d42?apiKey=0e33f994f2a6420186ff255a589ad5e1&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative text-black text-5xl font-bold self-center z-[1] whitespace-nowrap -mt-3.5 max-md:text-4xl">
                  SRIP Profiling Report
                </div>
                <div className="relative shadow-sm bg-white bg-opacity-30 self-stretch mt-12 pl-3 pr-16 py-8 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:pr-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                      <div className="relative flex grow justify-between gap-5 items-end max-md:mt-10">
                        <div className="flex grow basis-[0%] flex-col items-stretch mt-20 max-md:mt-10">
                          <div className="text-black text-opacity-80 text-2xl whitespace-nowrap">
                            Section Score
                          </div>
                          <div className="text-black text-opacity-80 text-2xl whitespace-nowrap mt-11 max-md:mt-10">
                            Batch Average
                          </div>
                        </div>
                        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                          <div className="text-black text-4xl whitespace-nowrap">
                            Aptitude (%)
                          </div>
                          <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-10">
                            XY
                          </div>
                          <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-11 max-md:mt-10">
                            YZ
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="relative grow max-md:max-w-full max-md:mt-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="relative flex grow flex-col items-stretch max-md:mt-10">
                              <div className="text-black text-4xl whitespace-nowrap">
                                English (%)
                              </div>
                              <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-10">
                                XY
                              </div>
                              <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-11 max-md:mt-10">
                                YZ
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="relative flex grow flex-col items-stretch max-md:mt-10">
                              <div className="text-black text-4xl whitespace-nowrap">
                                Technical (%)
                              </div>
                              <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-10">
                                XY
                              </div>
                              <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-11 max-md:mt-10">
                                YZ
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
                      <div className="shadow-sm bg-white bg-opacity-30 relative flex grow flex-col items-stretch w-full px-14 py-12 rounded-3xl max-md:mt-9 max-md:px-5">
                        <div className="text-black text-4xl whitespace-nowrap">
                          Total score
                        </div>
                        <div className="text-black text-5xl font-bold self-center whitespace-nowrap mt-8 mb-3.5 max-md:text-4xl">
                          XY.ZX
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="shadow-sm bg-white bg-opacity-30 relative flex grow flex-col items-stretch w-full pl-7 pr-10 py-12 rounded-3xl max-md:mt-9 max-md:px-5">
                        <div className="text-black text-4xl whitespace-nowrap">
                          Current Band
                        </div>
                        <div className="text-black text-5xl font-bold self-center whitespace-nowrap mt-8 mb-3.5 max-md:text-4xl">
                          C
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                      <div className="shadow-sm bg-white bg-opacity-30 relative flex grow flex-col items-stretch w-full pl-9 pr-7 py-12 rounded-3xl max-md:mt-9 max-md:px-5">
                        <div className="text-black text-center text-4xl">
                          Best Possible Band
                        </div>
                        <div className="text-black text-5xl font-bold self-center whitespace-nowrap mt-8 mb-3.5 max-md:text-4xl">
                          A
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shadow-sm bg-white bg-opacity-30 self-stretch flex flex-col items-center mt-16 pl-10 pr-16 py-12 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="text-black text-center text-4xl w-[287px]">
                    Comments
                  </div>
                  <div className="text-black text-opacity-80 text-2xl self-stretch mt-9 mb-7 max-md:max-w-full">
                    If you improve English score by x and Technical score by 9
                    then you can achieve Band-Y
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
