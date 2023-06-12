export const fetchAsteroids = async ({startDate, endDate}) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/asteroids${startDate && endDate ? `?startDate=${startDate}&endDate=${endDate}` : ''}`);
        if (!response.ok) {
            throw new Error('Failed to fetch asteroids');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch asteroids');
    }
};