import { BsBusFront, BsStar, BsStarFill } from "react-icons/bs";
import { AsteroidItemWrapper, AsteroidName, FavoriteButton, SizeLabel, SizeWrapper } from "./AsteroidItem.styled";

export const AsteroidItem = ({ asteroid, isFavorite, onToggleFavorite, onClick, ...props }) => {
    const handleToggleFavorite = (event) => {
        event.stopPropagation();
        onToggleFavorite(asteroid.id);
    };

    const numberOfSchoolBuses = Math.ceil(asteroid.diameter.meters / 9);

    return (
        <AsteroidItemWrapper isHazardous = {asteroid.isHazardous} onClick = {() => onClick(asteroid.id)} {...props}>
            <AsteroidName>Asteroid name: {asteroid.name}</AsteroidName>
            <SizeWrapper>
                <SizeLabel>{`Diameter: ${Math.ceil(asteroid.diameter.kilometers)}km or ${numberOfSchoolBuses} School Buses`}</SizeLabel>
                <BsBusFront />
            </SizeWrapper>
            <FavoriteButton
                onClick={handleToggleFavorite}>
                {isFavorite ? <BsStarFill color = "#ffc107" /> : <BsStar color = {'grey'} />}
            < /FavoriteButton>
        </AsteroidItemWrapper>
    );
};