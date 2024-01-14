function getData(){
    console.log("2. Returning instantly available data.");
    return [{author: "Ta-Nehisi Coates"}, {author: "Cathy Park Hong"}];
  }

  function main(){
    console.log("1. Starting Script");
    const data = getData();
    console.log(`3. Data is currently ${JSON.stringify(data)}`);
    console.log("4. Script Ended");
  }

  main();