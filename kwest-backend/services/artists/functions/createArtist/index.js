module.exports.default = async (event) => {
    const response = {
        statusCode: 200,
        message: "Wow, it worked pretty well!",
        event: event
    };

    return response;
}