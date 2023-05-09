// Get table and table body from html document
const table = document.querySelector("table");
const tableBody = table.querySelector("tbody");

// Get add row button
const addRowBtn = document.getElementsByClassName("btn-primary");

// Create event for button on "click"
addRowBtn[0].addEventListener("click", function() {
    const newRow = document.createElement("tr");

    // Add necessary html doc
    newRow.innerHTML = `
        <th scope="row">${tableBody.children.length}</th>
        <td><input type="text" class="form-control" placeholder="Enter ID"></td>
        <td><input id="price-${tableBody.children.length}" type="number" class="form-control" placeholder="Enter Price"></td>
        <td>
          <select id="city-${tableBody.children.length}" class="form-select">
            <option selected>Select City</option>
            <option value="1">Kyiv</option>
            <option value="2">Lviv</option>
            <option value="3">Odesa</option>
          </select>
        </td>
        <td>
          <select id="type-${tableBody.children.length}" class="form-select">
            <option selected>Select Type</option>
            <option value="1">Apartment</option>
            <option value="2">House</option>
            <option value="3">Land</option>
          </select>
        </td>
        <td>
          <button type="button" class="btn btn-success">Copy</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
    `;

    // Add new row to the table
    tableBody.appendChild(newRow);
});

// Add event listener for Enter Price All field
const setPriceInputAll = document.getElementById("setPriceAll");
setPriceInputAll.addEventListener('change', setAllPrices);

// Add event listener for Enter City All field
const setCityInputAll = document.getElementById("setCityAll");
setCityInputAll.addEventListener('change', setAllCities);

// Add event listener for Enter Type All field
const setTypeInputAll = document.getElementById("setTypeAll");
setTypeInputAll.addEventListener('change', setAllTypes);

function setAllPrices() {
    if (setPriceInputAll.value !== '') {
        const newPrice = parseInt(setPriceInputAll.value);

        const confirmed = confirm('Are you sure you want to change all prices?');
        if (confirmed) {
            const rows = tableBody.querySelectorAll('tr');
            for (let i = 0; i < tableBody.children.length; i++) {
                const eachPrice = rows[i].querySelector(`#price-${i}`);
                if (eachPrice) {
                    eachPrice.value = newPrice;
                }
            }
        }
        setPriceInputAll.value = 'Enter Price All';
    }
}

function setAllCities() {
        const newCity = setCityInputAll.value;
        const confirmed = confirm('Are you sure you want to change all cities?');
        if (confirmed) {
            const rows = tableBody.querySelectorAll('tr');
            for (let i = 0; i < tableBody.children.length; i++) {
                const eachCity = rows[i].querySelector(`#city-${i}`);
                if (eachCity) {
                    eachCity.value = newCity;
                }
            }
        }
        setCityInputAll.value = 'Select City All';
}

function setAllTypes() {
        const newType = setTypeInputAll.value;
        const confirmed = confirm('Are you sure you want to change all types?');
        if (confirmed) {
            const rows = tableBody.querySelectorAll('tr');
            for (let i = 0; i < tableBody.children.length; i++) {
                const eachType = rows[i].querySelector(`#type-${i}`);
                if (eachType) {
                    eachType.value = newType;
                }
            }
        }
        setTypeInputAll.value = 'Select Type All';
}




