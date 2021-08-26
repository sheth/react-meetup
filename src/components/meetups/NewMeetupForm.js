import * as React from 'react';
import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const MeetupData = {
            title:titleInputRef.current.value,
            image:imageInputRef.current.value,
            address:addressInputRef.current.value,
            description:descriptionInputRef.current.value
        };
        props.addNewMeetupData(MeetupData);
    }
    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input id='title' type='text' required ref={titleInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image </label>
                    <input id='image' type='url' required ref={imageInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'> Meetup Address</label>
                    <input id='address' type='text' required ref={addressInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' row='5' required ref={descriptionInputRef} />
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
