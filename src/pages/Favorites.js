import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritePage() {
    const ctx = useContext(FavoritesContext);
    const content = (ctx.totalFavorites === 0) ?
        <p>You got no favorites. Add some?</p> :
        <MeetupList meetups={ctx.favorites} />

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
    );
}

export default FavoritePage;
