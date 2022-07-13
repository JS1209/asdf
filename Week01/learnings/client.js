const axios = require(`axios`);

const getChar = async (id) => {
    const char = await axios.get(`http://localhost:4000/${id}`);
    console.log(char);
};
getChar(78);