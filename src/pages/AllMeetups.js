import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

//eslint-disable-next-line
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        fetch(
            'https://react-meet-up-de1ff-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetupData = [];
            for(const each in data) {
                const meetup = {
                    id: each,
                    ...data[each]
                }
                meetupData.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetupData);
        });
    }, [])

    if (isLoading) {
        return <section>
            <h1>All Meetups...Loading</h1>
        </section>
    } else {
        return (
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetups} />
            </section>
        );
    }
}

export default AllMeetupsPage;
