// Import necessary modules and functions
import { updateTimes } from './yourFileContainingUpdateTimesFunction';

describe('updateTimes', () => {
  it('should update booking times based on selected date', () => {
    // Mock dispatch function
    const dispatchMock = jest.fn();

    // Call updateTimes function with pre-selected date
    updateTimes(dispatchMock, '2024-02-05'); // Example pre-selected date

    // Expect dispatch to have been called with the correct data
    expect(dispatchMock).toHaveBeenCalledWith(/* assert on the dispatched data including the selected date */);
  });
});
