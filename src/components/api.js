// api.js
const availableTimesData = {
  '2024-02-03': ['17:00', '18:00', '19:00'],
  '2024-02-04': ['18:00', '19:00', '20:00'],
  '2024-02-05': ['19:00', '20:00', '21:00'],
};

export const fetchAPI = async (date) => {
  try {
    const dateString = date.split('T')[0]; // Get date in format 'YYYY-MM-DD'
    const availableTimes = availableTimesData[dateString] || []; // Get available times for the date
    return availableTimes;
  } catch (error) {
    throw new Error('Error fetching available times:', error.message);
  }
};

export const submitAPI = (formData) => {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      // Simulate successful submission (always resolves)
      resolve(true);
    }, 500);
  });
};