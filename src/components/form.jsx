import React from "react";
import Modal from 'react-modal';

import { useForm } from 'react-hook-form';

import emailjs from 'emailjs-com';

Modal.setAppElement('#modal-root');

export default function Form() {

    const { register, handleSubmit, formState: { errors },} = useForm();

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onSubmit = (data, e) => {

        console.log(data);

        const templateParams = {
            user_name: data.user_name,
            message: data.message,
            user_email: data.user_email
        };
        
        emailjs.send('service_bwri6os','template_v1isy6f', templateParams, 'user_tAEHax1kwV3nZouwonIFi')
        .then((response) => {
            e.target.reset(); // reset after form submit
            console.log('SUCCESS!', response.status, response.text);
            openModal();
        }, (err) => {
            console.log('FAILED...', err);
        });
    }

    return (
        <div>
            <h3 className="text-2xl lg:text-4xl font-poppins font-bold mb-6">Contact Gaz</h3>
            <p className="mb-4">Send me a message and I'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input {...register('user_name', { required: true })} placeholder="Name:" className="border bg-gray-100 py-3 px-6 rounded-lg mb-4" />
                {errors.user_name && <p className="text-red-400 text-sm mb-2">Name is required.</p>}
                <input {...register('user_email', { 
                    required: true, 
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    }, 
                })} placeholder="Email:" className="border bg-gray-100 py-3 px-6 rounded-lg mb-4"/>
                {errors.user_email && <p className="text-red-400 text-sm mb-2">Please enter a valid email.</p>}
                <textarea rows="5" {...register('message', { required: true })} placeholder="Message:" className="border bg-gray-100 py-3 px-6 rounded-lg mb-4"/>
                {errors.message && <p className="text-red-400 text-sm mb-2">Please enter a message.</p>}
                <input type="submit" className="bg-blue-400 cursor-pointer rounded py-3 px-6 text-white font-bold"/>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="message sent"
            >   
                <div className="relative pt-4">
                    <h2 className="text-2xl font-poppins font-bold mb-2">Thankyou!</h2>
                    <p className="text-base">Your message was sent successfully</p>
                    <button onClick={closeModal}><img src="images/icon-close.svg" className="absolute top-0 right-0 w-4 h-4" alt="close icon"/></button>
                </div>
            </Modal>
        </div>
    );
}
