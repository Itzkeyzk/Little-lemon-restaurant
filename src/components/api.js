// api.js

const availableTimesData = {
  '2024-02-03': ['17:00', '18:00', '19:00'],
  '2024-02-04': ['18:00', '19:00', '20:00'],
  '2024-02-05': ['19:00', '20:00', '21:00'],
};

export const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    try {
      const dateString = date.toISOString().split('T')[0]; // Get date in format 'YYYY-MM-DD'
      const availableTimes = availableTimesData[dateString] || []; // Get available times for the date
      resolve(availableTimes);
    } catch (error) {
      reject(error);
    }
  });
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
