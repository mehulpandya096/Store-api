class CaustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => { 
    console.log("msg:", msg)
  return CaustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CaustomAPIError };
