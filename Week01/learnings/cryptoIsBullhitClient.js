const axios = require(`axios`);

const variable = "john3:16";

const app = async () => {
    const complete = await axios.get(`https://bible-api.com/${variable}`);
    console.log(complete);
};
app()