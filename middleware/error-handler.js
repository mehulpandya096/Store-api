const { CaustomAPIError } = require("../errors/coustom-Errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err)
  return res.status(500).json({ msg: "Somthing want wrong please try agin" });
}; 

// const errorHandlerMiddleware = (err, req, res, next) => {
//   if (err instanceof CaustomAPIError) {
//     return res.status(err.statusCode).json({ msg: err.message });
//   }
//   return res.status().json({ msg: "Somthing want wrong please try agin" });
// };


module.exports = errorHandlerMiddleware;
