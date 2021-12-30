getcountries = () => {

    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", "https://restcountries.com/v3.1/all");
    xmlhttp.send()
    xmlhttp.responseType = "json";
    xmlhttp.onload = () => {
        // find population above 10000000 
        var countries = xmlhttp.response
        var findpop = (valueb) => valueb.population > 10000000
        var funfilter = countries.filter(findpop)
        var findnames = (value) => value.name.common
        var funmap = funfilter.map(findnames)
        console.log(funmap);


// -------------------------------incompleted-----------------------


         // var findlan=(value)=>value.languages
          // var funfilt=countries.map(findlan)
          // console.log(funfilt);
          // var fineng=(value)=>value
          // var funmap=funfilt.filter(fineng)
           // console.log(funmap);

        //    console.log(countries.filter((country)=>{
        //    if(country.name.common!="Antarctica" && country.languages.spa=="Spanish")
        //    return (country.name.common)
        //   }
        //    ));
} 
}
getcountries()




// console.log(countries.filter((country)=>{
//     // if(country.name.common!="Antarctica")
//     //     return country.languages.spa=="Spanish"
//     if(country.name.common!="Antarctica" && country.languages.spa=="Spanish")
//     return (country.name.common)
// }
//       ));



//       for(i=0;i<countries.length;i++){
                    
        // if(countries[i].name.common!="Antarctica"&&countries[i].languages.spa=="Spanish")
        //   console.log(countries[i].name.common)
      