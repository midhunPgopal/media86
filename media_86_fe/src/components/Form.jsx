import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../axios/axiosInstance';
import { toast } from 'react-toastify';

const Form = ({ setForm, defaultValue = null, getAllMessage, setItem }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValue && {
            name: defaultValue.name,
            message: defaultValue.message
        }
    });

    useEffect(() => {
        console.log(defaultValue);
    }, [defaultValue])

    const notify = (message) => toast.success(message);
    const notifyErr = (message) => toast.error(message);

    //to create a new message
    const onSubmit = (data) => {
        axiosInstance.post('/create', data).then(response => {
            if (response.data.error) {
                notifyErr(response.data.message)
            } else {
                notify('Message added')
                getAllMessage()
                setForm(false)
            }
        }).catch(err => console.log(err))
    };

    //to update a message
    const onUpdate = (data) => {
        data.id = defaultValue?.id
        axiosInstance.put('/update', data).then(response => {
            if (response.data.error) {
                notifyErr(response.data.message)
            } else {
                notify('Message updated')
                getAllMessage()
                setItem()
            }
        }).catch(err => console.log(err))
    };

    return (
        <div className="popup">
            <span className="close_button" onClick={() => setForm(false)}>x</span>

            <form className='form_container' onSubmit={handleSubmit(defaultValue ? onUpdate : onSubmit)}>
                <div className="form_body">
                    <div className="form_group">
                        <input type="text"
                            name='name'
                            className={errors && errors?.name && 'error'}
                            placeholder="Enter your full name please."
                            {...register("name", { required: true, minLength: 3, maxLength: 50 })}
                            required />
                        <span>{errors && errors?.name && 'Character limit 3 to 50'}</span>
                    </div>

                    <div className="form_group">
                        <textarea type="text"
                            name='message'
                            className={errors && errors?.message && 'error'}
                            placeholder="Share Your Thoughts Here.."
                            {...register("message", { required: true, maxLength: 1000, minLength: 5 })}
                            required />

                        <span>{errors && errors?.message && 'Character limit 5 to 1000'}</span>
                    </div>
                    <div className='form_wrapper'>
                        <button type="submit">{defaultValue ? 'Update' : 'Create'}</button>
                        <button type="button" onClick={() => {
                            setForm(false)
                            setItem()
                        }}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form