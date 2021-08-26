import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => { },
    removeFavorite: (meetupId) => { },
    isFavorite: (meetupId) => { }

});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const myContext = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }

    function addFavoriteHandler(meetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(meetup);
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((each) => each.id !== meetupId)
        })
    }

    function isFavoriteHandler(meetupId) {
        return userFavorites.some((each) => each.id === meetupId);
    }


    return <FavoritesContext.Provider value={myContext}>{props.children}</FavoritesContext.Provider>

}

export default FavoritesContext;