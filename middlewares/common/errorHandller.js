const createError = require("http-errors");

// 404 Not Found Handler 
function notFoundHandler(req, res, next) {
    next(createError(404, "Your requested content was not found!"));
}

// Default Error Handler (Must Have 4 Parameters)
function errorHandler(err, req, res, next) {
    res.status(err.status || 500);

    // If using an API, send JSON instead
    if (req.accepts("json")) {
        return res.json({
            message: err.message || "Internal Server Error",
        });
    }

    // Render an error page (for web apps)
    res.render("error", {
        title: "Error Page",
        message: err.message || "Something went wrong!",
    });
}

module.exports = {
    notFoundHandler,
    errorHandler, // ✅ Fixed function name (was "erroHandler")
};
