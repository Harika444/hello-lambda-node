exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hi prod some another change Lambda!'),

    }; 
    return response;
};
