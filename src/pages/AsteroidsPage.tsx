import SearchBar from "../components/SearchBar/SearchBar";
import { AsteroidList } from "../components/AsteroidList/AsteroidList";

export const AsteroidsPage = ({ handleOrderBy, handleDateChange, setSearchTerm, handleAsteroidClick, startDate, endDate, searchTerm, orderBy }) => {
    return (
        <>
            <h1>Asteroid Tracker</h1>
            <SearchBar onOrderChange={handleOrderBy} handleDateChange={handleDateChange} onSearchTermChanged={setSearchTerm}/>
            <AsteroidList
                onAsteroidClick={handleAsteroidClick}
                startDate={startDate}
                endDate={endDate}
                searchTerm={searchTerm}
                orderBy={orderBy}
            />
        </>
)
};