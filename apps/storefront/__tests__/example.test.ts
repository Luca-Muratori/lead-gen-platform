// A simple math test to verify the engine is running
describe('Sanity Check', () => {
  it('should add 1 + 1 correctly', () => {
    // why: If this fails, our testing environment is broken
    expect(1 + 1).toBe(2);
  });
});