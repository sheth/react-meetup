import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';


function NewMeetupPage() {
    const history = useHistory();
    function saveNewMeetupData(meetupData) {
        //console.log(meetupData);
        //https://react-meet-up-de1ff-default-rtdb.firebaseio.com/
        fetch(
            'https://react-meet-up-de1ff-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        })
    }

    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm addNewMeetupData={saveNewMeetupData}/>
        </section>
    );
}

export default NewMeetupPage;
