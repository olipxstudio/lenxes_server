

const clientError = (res, err) => {
    return res.status(500).json({
      success: false,
      message: err,
    });
};


//   export default serverError;
module.exports = {
    clientError,
};