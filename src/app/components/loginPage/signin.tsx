"use client";

import React from "react";
import Image from "next/image";
import { MdLock, MdMail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const router = useRouter();
  const backToAccount = () => {
    router.push("/account");
  };

  return (
    <div className="mt-20 font-sahel">
      <span
        className="mx-3 bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden"
        onClick={backToAccount}
      >
        <GrFormNext className="w-8 h-8 text-greenlogIn cursor-pointer translate-x-px" />
      </span>
      <div>
        <Image
          width={150}
          height={150}
          src="/sideimgVI.png"
          alt="Full Screen Image"
          className="-z-20 absolute left-0 sm:w-40 sm:h-40"
          priority={true} // Optional: Loads the image with high priority
        />
        <div className="flex flex-col mx-2 container md:max-w-[60vw] xl:max-w-[50vw] sm:mx-auto items-center">
          <div className="text-greenlogIn text-2xl mt-10 font-sahel pl-16 sm:pl-0">
            ثبت نام
          </div>
          <p className="text-greenlogIn text-opacity-65 mt-3 text-sm font-sahel pl-16 sm:pl-0">
            حساب جدید بسازید
          </p>
          <form className="font-yekan w-full px-6">
            <div className="w-full relative mt-20">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity md:h-[40px]"
                placeholder="نام کاربری"
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <IoPerson className="text-greenlogIn" />
              </div>
            </div>
            <div className="w-full relative mt-3">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity	md:h-[40px]"
                placeholder="ایمیل"
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <MdMail className="text-greenlogIn" />
              </div>
            </div>
            <div className="w-full relative mt-3">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg  active:outline-greenlogIn focus:outline-greenlogIn md:h-[40px]"
                placeholder="کلمه عبور"
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <MdLock className="text-greenlogIn" />
              </div>
            </div>
            <div className="flex flex-col w-full px-6 mt-3 md:mt-6">
              <button className="w-full bg-greenlogIn text-white py-2 rounded-3xl font-yekan md:h-[40px]">
                ثبت نام
              </button>
            </div>
            <div className="flex justify-between mt-2 md:mt-5">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-green bg-greenlogIn rounded-full accent-greenlogIn"
                />
                <label
                  htmlFor="rememberMe"
                  className="ms-2 font-medium text-xs text-greenlogIn"
                >
                  مرا بخاطر بسپار
                </label>
              </div>
              <p className="text-xs text-greenlogIn font-bold">فراموشی رمز؟</p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mt-6 flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40%" // Adjust width to make the lines shorter
          height="2"
          viewBox="0 0 100 2"
          className="mx-auto"
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>

        <p className="text-xs mx-2 font-extrabold font-yekan">یا ادامه با</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40%" // Same width as the first line
          height="2"
          viewBox="0 0 100 2"
          className="mx-auto"
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className="flex justify-center mt-5">
        <span className="w-10 h-10 flex items-center justify-center border border-black rounded-full border-opacity-15">
          <FcGoogle className="w-6 h-6" />
        </span>
      </div>
      <p className="text-sm font-light text-center mt-4 text-black text-opacity-80 font-yekan">
        قبلا ثبت نام کرده اید؟
        <a
          href="/account/signin"
          className="text-greenlogIn font-extrabold hover:underline mx-1"
        >
          ورود
        </a>
      </p>
    </div>
  );
};

export default SignInPage;
