const weather = require("weather-js")

// const options = {
//     search : "Munich, Germany",
//     degreeType : "C"
// }

// weather.find(options, (error, result) => {
//     if(error){
//         console.log('Something went wrong')
//         return;
//     }

//     console.log(results);
// }
// );
//[ 'chd' ]   chd
//'San Francisco, Nicaragua' --> location2
// Chandigarh, India
const inputArgsFromCLI = process.argv;
console.log(inputArgsFromCLI)
const location2 = process.argv.slice(2).join(" ")

weather.find({search: location2, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
    //console.log('jajaj')
    //console.log(result)
    console.log('Entered Location is : '+ location2)
    

  });

  