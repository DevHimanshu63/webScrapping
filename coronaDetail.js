const request= require("request");
const  Cheerio  = require("cheerio");

request("https://www.worldometers.info/coronavirus/",cb)

function cb(err,res,body){
if(err){
    console.error("eroor",err);
}
else{
    handlehtml(body);
}
}

function handlehtml(html){

    let selecTool=Cheerio.load(html);
      
    let coronaStats=selecTool(".maincounter-number")
    // console.log(coronaStats.text());

    let totalCases=selecTool(coronaStats[0]).text();
    console.log("Total Cases -->" ,totalCases);

    let totalDeaths=selecTool(coronaStats[1]).text();
    console.log("Total Deaths -->" ,totalDeaths);

    let totalRecoveredCases=selecTool(coronaStats[2]).text();
    console.log("Total Recovered Cases-->" ,totalRecoveredCases);

}