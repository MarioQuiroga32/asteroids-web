import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { fetchAsteroidById } from "../../utils/api/fetchAsteroidById";

export const AsteroidDetail = () => {
    const { id } = useParams();
    const { data: asteroid, isLoading, error } = useQuery(['asteroid', id], () => fetchAsteroidById(id));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2 data-cy={'asteroid-detail-name'}>{asteroid.name}</h2>
            <p>Diameter: {Math.ceil(asteroid.diameter.kilometers)} km</p>
            <p>Hazardous: {asteroid.hazardous ? 'Yes' : 'No'}</p>
            <p>First seen on {asteroid.firstObservationDate}</p>
            <p>Last seen on {asteroid.lastObservationDate}</p>
        </div>
    );
};