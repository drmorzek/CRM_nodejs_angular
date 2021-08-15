module.exports =  (res, error) => {
    res.status(500).json({
        error: true,
      success: false,
      message: error.message ? error.message : error.toString()
    })
  }