function displayData(data) {
  // Your code here to display data on the page
  for (i = 0; i < 20; i++) {
      info = document.getElementById("content");
      data2 = data.filter(e => e.Postcode)
      data2.sort((a, b) => a.Postcode.localeCompare(b.Postcode));
      // innerHTML way of doing it
      info.innerHTML += `
      <h4>${data2[i].Name}</h4>
      <p>&nbsp&nbsp${data2[i].Address1}</p>
      <p>&nbsp&nbsp${data2[i].Town} <span>${data2[i].Postcode}</span></p> 
      `
      // textContent way of doing it
      // nametag = document.createElement("h4")
      // nametag.textContent = data[i].Name
      // addresstag = document.createElement("p")
      // addresstag.textContent = data[i].Address1
      // towntag = document.createElement("p")
      // towntag.textContent = data[i].Town
      // postcodetag = document.createElement("span")
      // postcodetag.textContent = data[i].Postcode

      // info.appendChild(nametag)
      // info.appendChild(addresstag)
      // info.appendChild(towntag)
      // towntag.appendChild(postcodetag)
  }
 
}
function arrangeDataByPostcode(data) {
  // You can use this function to implement the bonus challenge  
  postcode = [];     
  data1 = data.filter(e => e.Postcode).sort((a, b) => a.Postcode.localeCompare(b.Postcode));
  data1.forEach(e => postcode.push(e.Postcode))
  postcode = [...new Set(postcode)]

  let bonusDataObject = Object.create({});
  let postcodeData = [];
  postcode.forEach(element => {
      postcodeData.push(data.filter(e1 => e1.Postcode === element))
      });
  return postcodeData
}

function displayDataByPostcode(data) {
  // You can use this function to implement the bonus challenge
  postcodeData = arrangeDataByPostcode(data);
  for (i = 0; i < 10; i++) {
      info = document.getElementById("content");
      info.innerHTML += `<h4>${postcodeData[i][0].Postcode}</h4>`            
      for (j = 0; j < 3; j++) {
          info.innerHTML += `
          <p>${postcodeData[i][j].Name}</p>
          <p>&nbsp&nbsp${postcodeData[i][j].Address1}</p>
          <p>&nbsp&nbsp${postcodeData[i][j].Town}</p> 
          `
      }
  }
}

Papa.parse("https://data.gov.au/data/dataset/553b3049-2b8b-46a2-95e6-640d7986a8c1/resource/34076296-6692-4e30-b627-67b7c4eb1027/download/toiletmapexport_200702_111356.csv", {
  download: true,
  header: true,
  complete: function (results) {
      // To see the data that a public toilet has in this API, 
      // check the browser console!
      // console.log(results.data[1]);
  
      // implement your solution in the displayData function
      displayData(results.data);

      // bonus
      displayDataByPostcode(results.data);
    
  }
});