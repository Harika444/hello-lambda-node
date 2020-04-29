exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi from some other change check stage Lambda!'),

    };
    return response;
};
