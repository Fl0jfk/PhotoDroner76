'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact () {
    const { register, handleSubmit } = useForm<FormData>();
    function onSubmit(data: FormData) {
        sendEmail(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='sm:absolute sm:bottom-[15vh]'>
            <div className='mb-5'>
                <label htmlFor='name' className='mb-3 block text-base font-medium'>
                Full Name
                </label>
                <input
                type='text'
                placeholder='Full Name'
                className='w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md'
                {...register('name', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='mb-3 block text-base font-medium'>
                Email Address
                </label>
                <input
                type='email'
                placeholder='example@domain.com'
                className='w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md'
                {...register('email', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='message' className='mb-3 block text-base font-medium'>
                Message
                </label>
                <textarea
                rows={4}
                placeholder='Type your message'
                className='w-full resize-none rounded-xl border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md'
                {...register('message', { required: true })}
                ></textarea>
            </div>
            <div>
                <button className='hover:shadow-form rounded-full border-[1px] border-[#ffffff8f] font-thin py-3 px-8 text-base uppercase  text-white outline-none transition duration-300 ease-in-out hover:bg-white hover:text-black'>
                Submit
                </button>
            </div>
        </form>
    );
};

export default Contact;