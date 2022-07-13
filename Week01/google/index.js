const axios = require('axios');

const getGoogle = async() => {
    try {
        const response = await axios.get('google.com');
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}
getGoogle()




// const getGoogle = async() => {
//     try {
//         const response = await axios.get(`yahoo.com`);
//         console.log("response test:", response.data);
//     } catch (error) {
//         console.log("Error:", error.message)
//     }
// };
// getGoogle()

// const axios = require('axios')

// const getYahoo = async () => {
//   try {
//     const response = await axios.get('yahoo.com')

//     console.log('response test:', response.data)
//   } catch (error) {
//     console.log('error test:', error.message)
//   }
// }
// getYahoo();