export const getTasks = async (token) => {
    try {
      const response = await fetch('http://localhost:5005/api/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  