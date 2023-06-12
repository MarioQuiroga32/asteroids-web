export const fetchFavoriteAsteroids = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/asteroids/favorites`);
        if (!response.ok) {
            throw new Error('Failed to fetch asteroids');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch asteroids');
    }
};