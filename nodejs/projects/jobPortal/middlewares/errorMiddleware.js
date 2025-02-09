const errorMiddleware = (err, req, res, next) => {
  console.log(err); // Log the actual error

  const defaultErrors = {
    statusCode: 500,
    message: err.message || "Something went wrong",
  };

  // Missing field error
  if (err.name === "ValidationError") {
    defaultErrors.statusCode = 400;
    defaultErrors.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  // Duplicate key error (MongoDB)
  if (err.code && err.code === 11000) {
    defaultErrors.statusCode = 400;
    defaultErrors.message = `${Object.keys(
      err.keyValue
    )} field has to be unique`;
  }

  res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });
};

module.exports = errorMiddleware;

// //error middle ware // NEXT Function
// const errorMiddleware = (req, res, next) => {
//   console.log(error);
//   const defaultErrors = {
//     statusCode: 500,
//     message: error,
//   };

//   // res.status(500).send({
//   //   success: false,
//   //   message: "something Went Wrong",
//   //   err,
//   // });

//   //missing filed error
//   if (error.name === "validationError") {
//     defaultErrors.statusCode = 400;
//     defaultErrors.message = Object.values(error.errors)
//       .map((item) => item.message)
//       .join(",");
//   }

//   //duplicate error
//   if (error.code && error.code === 11000) {
//     defaultErrors.statusCode = 400;
//     defaultErrors.message = `${Object.keys(
//       error.keyValue
//     )} field has to be unique`;
//   }
//   res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });
// };

// module.exports = errorMiddleware;
