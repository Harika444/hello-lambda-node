exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi prod some change Lambda!'),

    };
    return response;
};
