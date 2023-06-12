export const fetchAsteroidById = async (asteroidId) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/asteroids/details/${asteroidId}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch asteroid details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch asteroid details');
    }
};