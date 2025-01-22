//error middle ware // NEXT Function
const errorMiddleware = (req, res, next) => {
  console.log(err);
  res.status(500).send({
    success: false,
    message: "somthing Went Wrong",
    err,
  });
};

module.exports = errorMiddleware;
