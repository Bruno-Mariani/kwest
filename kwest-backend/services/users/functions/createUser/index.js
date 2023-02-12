module.exports.default = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Totally working!',
            input: event
        })
    };

    return response;
};