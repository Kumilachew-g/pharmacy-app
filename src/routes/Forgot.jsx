import React from 'react';
import '../index.css';
import logo from '../assets/logo.svg';
import illustration from '../assets/forgot.svg';

const Forgot = () => {
  return (
    <div className='lg:flex'>
      <div className='lg:w-1/2 xl:max-w-screen-sm'>
        <div className='h-screen flex'>
          <div className='w-full max-w-md m-auto bg-white py-5 px-10'>
            <h1 className='text-4xl font-medium mt-4 antialiased mb-3 text-left'>
              Forgot your Password?
            </h1>
            <div className='w-full max-w-md m-auto'>
              <h1 className='text-base text-subtle antialiased text-left mb-5'>
                Don’t worry, we are here to help you out. Enter your Email
                address below and we will mail you the instructions to reset
                your password.
              </h1>
            </div>
            <form>
              <div>
                <label htmlFor='email' className='text-sm font-medium'>
                  E-mail
                </label>
                <input
                  type='email'
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id='email'
                  placeholder='johndoe@gmail.com'
                />
              </div>
              <div className='grid grid-flow-col gap-x-10 auto-cols-max mt-4 justify-between'>
                <div className='flex justify-center items-center'>
                  <button
                    className={`bg-primary py-3 px-10 text-sm text-white rounded border focus:outline-none`}
                  >
                    Send Email
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className={`py-3 px-14 text-sm text-primary rounded border focus:outline-none`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 xl:max-w-screen-sm bg-purple-200 ml-10'>
        <div className='grid grid-rows-2'>
          <div className='items-center py-5 px-10'>
            <img
              src={logo}
              alt=''
              className='ml-auto object-scale-down h-7'
            ></img>
          </div>
          <div className='h-20 p-7 mt-3'>
            <img
              src={illustration}
              alt=''
              className='ml-auto mr-auto object-fit'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
