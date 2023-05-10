// Get table and table body from html document
const table = document.querySelector("table");
const tableBody = table.querySelector("tbody");

// Get addRow button
const addRowBtn = document.getElementsByClassName("btn-primary");
addRowBtn[0].addEventListener("click", addRow);

function addRow() {
    const newRow = document.createElement("tr");
    // Add necessary html doc
    newRow.innerHTML = `
        <th scope="row">${tableBody.children.length}</th>
        <td><input type="text" class="form-control id-input-field" placeholder="Enter ID"></td>
        <td><input id="price-${tableBody.children.length}" type="number" class="form-control" placeholder="Enter Price"></td>
        <td>
          <select id="city-${tableBody.children.length}" class="form-select city-select">
            <option selected>Select City All</option>
            <option value="AL">Alabama</option>
            <option value="WY">Wyoming</option>
          </select>
        </td>
        <td>
          <select id="type-${tableBody.children.length}" class="form-select type-select">
            <option selected>Select Type All</option>
             <option value="AP">Apartment</option>
             <option value="HS">House</option>
          </select>
        </td>
        <td>
          <button type="button" class="btn btn-success">Copy</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
    `;

    // Add new row to the table
    tableBody.appendChild(newRow);
}

// Add event listener for Enter Price All field
const setPriceInputAll = document.getElementById("setPriceAll");
setPriceInputAll.addEventListener('change', setAllPrices);

// Add event listener for Enter City All field
const setCityInputAll = document.getElementById("setCityAll");
setCityInputAll.addEventListener('change', setAllCities);

// Add event listener for Enter Type All field
const setTypeInputAll = document.getElementById("setTypeAll");
setTypeInputAll.addEventListener('change', setAllTypes);

// Set All functions
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

tableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
        deleteRow();
    }
});
function deleteRow() {
    const currentRow = event.target.parentNode.parentNode;

    tableBody.removeChild(currentRow);
    const rows = tableBody.querySelectorAll('tr');
    for (let i = 1; i < rows.length; i++) {
        const indexCell = rows[i].querySelector('th');
        indexCell.textContent = i;
    }
}

tableBody.addEventListener("click", function (event) {
   if (event.target.classList.contains("btn-success")) {
       copyRow();
   }
});
function copyRow() {
    const currentRow = event.target.parentNode.parentNode;
    // clone parentNode
    const newRow = currentRow.cloneNode(true);
    // Get last child index + 1
    const newIndex = parseInt(tableBody.lastElementChild.firstElementChild.textContent) + 1;
    newRow.firstElementChild.textContent = newIndex;

    // Clear id
    const clearIdInput = newRow.querySelector('.id-input-field');
    if (clearIdInput) {
        clearIdInput.value = '';
    }
    // Copy options for select
    const originalCitySelect = currentRow.querySelector('.city-select');
    const newCitySelect = newRow.querySelector('.city-select');
    newCitySelect.selectedIndex = originalCitySelect.selectedIndex;

    const originalTypeSelect = currentRow.querySelector('.type-select');
    const newTypeSelect = newRow.querySelector('.type-select');
    newTypeSelect.selectedIndex = originalTypeSelect.selectedIndex;

    tableBody.appendChild(newRow);
}




