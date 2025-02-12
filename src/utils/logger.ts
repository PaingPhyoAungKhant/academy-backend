// Define the types for the logging functions
type LogFunction = (...params: unknown[]) => void;

// Implement the info function
const info: LogFunction = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

// Implement the error function
const error: LogFunction = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params);
  }
};

// Export the logger object
export const logger = { info, error };
