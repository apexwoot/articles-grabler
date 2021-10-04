"use strict";

const axios = require('axios')

module.exports.hello = async () => {
    const { data } = await axios.get('https://api.trades.org/articles')
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(data.map(({ id, title }) => ({ id, title }))),

    }
};
