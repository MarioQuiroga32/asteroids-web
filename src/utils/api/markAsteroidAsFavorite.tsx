export const markAsteroidAsFavorite = async (asteroidId) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/asteroids/favorites/${asteroidId}`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to mark asteroid as favorite');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Failed to mark asteroid as favorite');
    }
};