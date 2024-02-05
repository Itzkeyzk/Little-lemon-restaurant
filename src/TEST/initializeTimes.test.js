// Import necessary modules and functions
import { initializeTimes } from './yourFileContainingInitializeTimesFunction';
import { fetchAPI } from './yourFileContainingFetchAPIFunction'; // Assuming fetchAPI is exported from a separate file

// Mock the fetchAPI function to return a non-empty array of available booking times
jest.mock('./yourFileContainingFetchAPIFunction', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['09:00', '10:00', '11:00'])) // Example response
}));

describe('initializeTimes', () => {
  it('should initialize booking times with data from fetchAPI', async () => {
    // Call initializeTimes function
    await initializeTimes();

    // Expect fetchAPI to have been called
    expect(fetchAPI).toHaveBeenCalled();

    // Expect booking times to be updated with the response from fetchAPI
    expect(/* assert on your booking times state */).toEqual(['09:00', '10:00', '11:00']);
  });
});
