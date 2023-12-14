const baseURL = "https://zchexmix.github.io/wdd230/";
const linksURL = "https://zchexmix.github.io/wdd230/scoots/data/prices.json";
const tablediv = document.querySelector("#price-table");
// const myElement = document.getElement
// const spotlight = document.querySelector('#spotlight');

async function getPrices() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    createTable(data);
    // displaySpotlight(data.vehicles);
}
getPrices();




function createTable(data) {

    if (data && data.Vehicle && Array.isArray(data.Vehicle)) {
        console.log(data.Vehicle);
        console.log(data.Vehicle[0].reservations[0].reservation[0].halfday);
        // console.log(data.Vehicle[0].reservations[1].walkin[0].halfday)
        var table = '<table>';
        table += '<thead><tr><th>Name</th><th>Persons</th><th>Half Day (Reservation)</th><th>Full Day (Reservation)</th><th>Half Day (Walk-In)</th><th>Full Day (Walk-In)</th></tr></thead>';
        table += '<tbody>';

        data.Vehicle.forEach(vehicle => {
        table += '<tr>';
        table += '<td>' + vehicle.Name + '</td>';
        table += '<td>' + vehicle.persons + '</td>';
        table += '<td>' + vehicle.reservations[0].reservation[0].halfday + '</td>';
        table += '<td>' + vehicle.reservations[0].reservation[0].fullday + '</td>';
        table += '<td>' + vehicle.reservations[1].walkin[0].halfday + '</td>';
        table += '<td>' + vehicle.reservations[1].walkin[0].fullday + '</td>';
        table += '</tr>';
        });

        table += '</tbody>';
        table += '</table>';

        tablediv.innerHTML = table;
    } else {
        console.error('Invalid data structure. Expected data.Vehicle to be an array.');
      }
}   
