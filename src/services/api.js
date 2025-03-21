export const classifyTask = async (taskData) => {
    try {
      const response = await fetch('https://magicloops.dev/api/loop/798de182-1517-4815-ae7f-952796610ac9/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la clasificación de la tarea');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error en la API:', error);
      throw error;
    }
  };
  