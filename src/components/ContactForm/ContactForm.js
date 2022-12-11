import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_v95lr5q";
const TEMPLATE_ID = "template_q9k0fbf";
const USER_ID = "0TkvUICuDXExc5hqL";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div>
            <h2 className='text-white text-3xl font-bold mb-5'>Contact Me</h2>
            <Form onSubmit={handleOnSubmit} className='flex flex-col w-2/5  mx-auto glass px-3'>
                <input type="text" icon='mail' label='Email' name='user_email' placeholder='Email…' className="input input-bordered w-full mb-2" />
                <input type="text" icon='mail' label='Name' name='user_name' placeholder='Name…' className="input input-bordered w-full mb-2" />
                <textarea id='form-textarea-control-opinion' type="text" icon='mail' label='Name' name='user_message' placeholder='Message…' className="textarea w-full mb-2"
                ></textarea>
                <Button className='btn btn-outline w-1/2 mx-auto mt-5' type='submit' color='green'>Submit</Button>
            </Form>
        </div>
    );
};

export default ContactForm;