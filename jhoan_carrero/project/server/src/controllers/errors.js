module.exports.notFound = (req, res) => res.status(404).json({
  errors: [
    {
      message: 'Not Found',
    },
  ],
});

module.exports.serverError = (error, request, response) => {
  console.log(error);
  return response.status(500).json({
    errors: [
      {
        message: error.message,
      },
    ],
  });
};
