exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi from $env stage Lambda!'),

    };
    return response;
};
