import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { AsteroidItem } from "../AsteroidItem/AsteroidItem";
import { AsteroidListWrapper } from "./AsteroidList.styled";
import { fetchAsteroids } from "../../utils/api/fetchAsteroids";
import { fetchFavoriteAsteroids } from "../../utils/api/fetchFavoriteAsteroids";
import { markAsteroidAsFavorite } from "../../utils/api/markAsteroidAsFavorite";


const isFavorite = (favoriteAsteroids, asteroidId) => favoriteAsteroids?.some((asteroid) => asteroid.id === asteroidId);

export const AsteroidList = ({ startDate, endDate, searchTerm, orderBy }) => {
    let navigate = useNavigate();

    const { data: asteroids, isLoading, error, refetch } = useQuery(
        ['asteroids', startDate, endDate],
        () => fetchAsteroids({ startDate, endDate }),
        {
        retry: false,
        });

    const { data: favoriteAsteroids, refetch: refetchFavorites, isSuccess } = useQuery(
        'favoriteAsteroids',
        fetchFavoriteAsteroids,
        {
            retry: false,
        }
    );

    const handleToggleFavorite = (asteroidId) => {
        mutate(asteroidId);
        setTimeout(() => {
            isSuccess && refetchFavorites()
        }, 500);
    };

    const handleAsteroidClick = (asteroidId) => navigate(`/asteroids/${asteroidId}`);

    const { mutate } = useMutation(markAsteroidAsFavorite);

    useEffect(() => {
        if (!startDate || !endDate) return;
        refetch();
    }, [startDate, endDate]);

    const filterBySearchTerm = (asteroid) => asteroid.name.toLowerCase().includes(searchTerm.toLowerCase());

    const order = (a, b) => {
        switch (orderBy) {
            case 'distance':
                return a.distanceFromEarth - b.distanceFromEarth;
            case 'diameter':
                return b.diameter.kilometers - a.diameter.kilometers;
            case 'name':
                return b.name.localeCompare(a.name);
            default:
                return asteroids;
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <AsteroidListWrapper>
            {asteroids.filter(filterBySearchTerm).sort(order).map((asteroid) => (
                <AsteroidItem
                    data-cy="asteroid-item"
                    key={asteroid.id}
                    asteroid={asteroid}
                    isFavorite={isFavorite(favoriteAsteroids, asteroid.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onClick={handleAsteroidClick}
                />
            ))}
        </AsteroidListWrapper>
    );
};
