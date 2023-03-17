let listPerson = getDataFromLocalStorage();
var inputType = '';

renderTable(listPerson);

// DOM
function getElement(selector) {
    return document.querySelector(selector);
}

function showInputStudent(action, student) {
    inputType = 'Student';

    $('#typeModal').html(action + " Student");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? student.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none d-none'>Input ID again, only containing digits</div>
        <label>Name</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? student.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Input Name again, only containing letters and spaces</div>
        <label>Address</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? student.address : ''}"/>
        <div id='addressError' class='text-danger d-none'>Input address again</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? student.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Input email again</div>
        <label>Math</label>
        <input id='inputMath' class='w-100' value="${action === 'Update' ? student.math : ''}"/>
        <div id='mathError' class='text-danger d-none'>Input mark again, from 0 to 10</div>
        <label>Physics</label>
        <input id='inputPhysics' class='w-100' value="${action === 'Update' ? student.physics : ''}"/>
        <div id='physicsError' class='text-danger d-none'>Input mark again, from 0 to 10</div>
        <label>Chemistry</label>
        <input id='inputChemistry' class='w-100' value="${action === 'Update' ? student.chemistry : ''}"/>
        <div id='chemistryError' class='text-danger d-none'>Input mark again, from 0 to 10</div>
    `)
}
getElement("#addStudent").onclick = () => {
    showInputStudent('Add', null);
}

function showInputEmployee(action, employee) {
    inputType = 'Employee';

    $('#typeModal').html(action + " Employee");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? employee.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none'>Input ID again, only containing digits</div>
        <label>Name</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? employee.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Input Name again, only containing letters and spaces</div>
        <label>Address</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? employee.address : ''}"/>    
        <div id='addressError' class='text-danger d-none'>Input address again</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? employee.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Input email again</div>
        <label>Number of working days</label>
        <input id='inputDays' class='w-100' value="${action === 'Update' ? employee.days : ''}"/>
        <div id='daysError' class='text-danger d-none'>Input working days again</div>
        <label>Salary per day</label>
        <input id='inputSalaryUnit' class='w-100' value="${action === 'Update' ? employee.salaryUnit : ''}"/>
        <div id='salaryError' class='text-danger d-none'>Input salary per day again</div>
    `)
}
getElement("#addEmployee").onclick = () => {
    showInputEmployee('Add', null);
}

function showInputCustomer(action, customer) {
    inputType = 'Customer';

    $('#typeModal').html(action + " Customer");
    $('#inputPerson').html(action);
    $('#inputList').html(`
        <label>ID</label>
        <input id='inputID'class='w-100' value="${action === 'Update' ? customer.id : ''}" ${action === 'Update' ? 'disabled' : ''}/>
        <div id='idError' class='text-danger d-none'>Input ID again, only containing digits</div>
        <label>Name</label>
        <input id='inputName' class='w-100' value="${action === 'Update' ? customer.name : ''}"/>
        <div id='nameError' class='text-danger d-none'>Input Name again, only containing letters and spaces</div>
        <label>Address</label>
        <input id='inputAddress' class='w-100' value="${action === 'Update' ? customer.address : ''}"/>    
        <div id='addressError' class='text-danger d-none'>Input address again</div>
        <label>Email</label>
        <input id='inputEmail' class='w-100' value="${action === 'Update' ? customer.email : ''}"/>
        <div id='emailError' class='text-danger d-none'>Input email again</div>
        <label>Name of company</label>
        <input id='inputNameCompany' class='w-100' value="${action === 'Update' ? customer.nameCompany : ''}"/>
        <div id='nameCompanyError' class='text-danger d-none'>Input name of company again</div>
        <label>Bill</label>
        <input id='inputBill' class='w-100' value="${action === 'Update' ? customer.bill : ''}"/>
        <div id='billError' class='text-danger d-none'>Input bill again</div>
        <label>Feedback</label>
        <br />
        <select id='inputRate' class='w-50'>
            <option valued>Satisfied</option>
            <option value='1' ${(action === 'Update' &&customer.rate === 'Good') ? 'selected' : ''}>Good</option>
            <option value='2' ${(action === 'Update' &&customer.rate === 'Bad') ? 'selected' : ''}>Bad</option>
        </select>
    `)
}
getElement("#addCustomer").onclick = () => {
    showInputCustomer('Add', null);
}

$('#inputPerson').click(function () {
    switch (inputType) {
        case 'Student': {
            handleInputStudent();
        }
            break;
        case 'Employee': {
            handleInputEmployee();
        }
            break;
        case 'Customer': {
            handleInputCustomer();
        }
    }
})

// Handle when clicking addNewPerson button
function handleInputStudent() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let math = $('#inputMath').val();
    let physics = $('#inputPhysics').val();
    let chemistry = $('#inputChemistry').val();

    let student = new Student(name, address, id, email, math, physics, chemistry);
    if (validateStudent(student)) {
        let index = listPerson.findIndex(person => person.id === student.id);
        if (index === -1) {
            listPerson.push(student);
        } else {
            listPerson[index] = student;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

function handleInputEmployee() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let days = $('#inputDays').val();
    let salaryUnit = $('#inputSalaryUnit').val();

    let employee = new Employee(name, address, id, email, days, salaryUnit);
    if (validateEmployee(employee)) {
        let index = listPerson.findIndex(person => person.id === employee.id);
        if (index === -1) {
            listPerson.push(employee);
        } else {
            listPerson[index] = employee;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

function handleInputCustomer() {
    let id = $('#inputID').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let email = $('#inputEmail').val();
    let nameCompany = $('#inputNameCompany').val();
    let bill = $('#inputBill').val();
    let rate = $('#inputRate').val();
    switch (rate) {
        case '1': {
            rate = 'Good';
        }
            break;
        case '2': {
            rate = 'Bad';
        }
            break;
        default: {
            rate = 'Satisfied';
        }
    }

    let customer = new Customer(name, address, id, email, nameCompany, bill, rate);
    if (validateCustomer(customer)) {
        let index = listPerson.findIndex(person => person.id === customer.id);
        if (index === -1) {
            listPerson.push(customer);
        } else {
            listPerson[index] = customer;
        }
        //reset form
        getElement('#inputList').querySelectorAll('div').forEach((element) => {
            element.classList.add('d-none');
        })
        getElement('#inputList').querySelectorAll('input').forEach((element) => {
            element.value = '';
        })

        saveToLocalStorage();
        // renderTable(listPerson);
        sortListPerson();
    }
}

// Validation

//check general information
function validateGeneralInformation(person) {
    let isValidated = true;
    //check ID
    if (!/^\d+$/.test(person.id)) {
        getElement('#idError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#idError').classList.add('d-none');
    }
    //check name
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(person.name)) {
        getElement('#nameError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#nameError').classList.add('d-none');
    }
    //check address
    if (!person.address) {
        getElement('#addressError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#addressError').classList.add('d-none');
    }
    //check mail 
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(person.email)) {
        getElement('#emailError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#emailError').classList.add('d-none');
    }

    return isValidated;
}

function validateStudent(student) {
    let isValidated = true;

    if (!validateGeneralInformation(student))
        isValidated = false;

    //check marks
    if (!/^\d+$/.test(student.math) || (student.math.length > 1 && +student.math > 10)) {
        getElement('#mathError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#mathError').classList.add('d-none');
    }
    if (!/^\d+$/.test(student.physics) || (student.physics.length > 1 && +student.physics > 10)) {
        getElement('#physicsError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#physicsError').classList.add('d-none');
    }
    if (!/^\d+$/.test(student.chemistry) || (student.chemistry.length > 1 && +student.chemistry > 10)) {
        getElement('#chemistryError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#chemistryError').classList.add('d-none');
    }

    return isValidated;
}

function validateEmployee(employee) {
    let isValidated = true;

    if (!validateGeneralInformation(employee))
        isValidated = false;

    //check no. of working days
    if (!/^\d+$/.test(employee.days)) {
        getElement('#daysError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#daysError').classList.add('d-none');
    }
    //check salary per day
    if (!/^\d+$/.test(employee.salaryUnit)) {
        getElement('#salaryError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#salaryError').classList.add('d-none');
    }

    return isValidated;
}

function validateCustomer(customer) {
    let isValidated = true;

    if (!validateGeneralInformation(customer))
        isValidated = false;

    //check name of company
    if (!customer.nameCompany) {
        getElement('#nameCompanyError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#nameCompanyError').classList.add('d-none');
    }
    //check bill
    if (!/^\d+$/.test(customer.bill)) {
        getElement('#billError').classList.remove('d-none');
        isValidated = false;
    } else {
        getElement('#billError').classList.add('d-none');
    }

    return isValidated;
}

// render table
function renderTable(listPerson) {
    let html = listPerson.reduce((result, person) => {
        return result += `
            <tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.address}</td>
                <td>${person.email}</td>
                <td>${person.constructor.name}</td>        
                <td>
                    <button class='btn btn-primary' onclick="showDetails('${person.id}')" data-bs-toggle="modal" data-bs-target="#detailsModal">Show details</button>
                    <button class='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#inputPersonModal" onclick="editPerson('${person.id}')">Edit</button>
                    <button class='btn btn-danger' onclick="removePerson('${person.id}')">Remove</button>
                </td>
            </tr>
        `
    }, '')

    getElement('#tableList').innerHTML = html;
}

//show details of person
function showDetails(personID) {
    let person = listPerson.find(person => person.id === personID);

    getElement('#detailsTitle').innerHTML = person.constructor.name;

    let html = `
        <label class='fw-bold'>ID: </label>
        <span>${person.id}</span>
        <br>
        <label class='fw-bold'>Name: </label>
        <span>${person.name}</span>
        <br>
        <label class='fw-bold'>Address: </label>
        <span>${person.address}</span>
        <br>
        <label class='fw-bold'>Email: </label>
        <span>${person.email}</span>
        <br>
    `;

    switch (person.constructor.name) {
        case 'Student': {
            html += `
                <label class='fw-bold'>Math: </label>
                <span>${person.math}</span>
                <br>
                <label class='fw-bold'>Physics: </label>
                <span>${person.physics}</span>
                <br>
                <label class='fw-bold'>Chemistry: </label>
                <span>${person.chemistry}</span>
                <br>
                <label class='fw-bold'>Average score: </label>
                <span class='fst-italic'>${person.calcAverageScore()}</span>
            `
        }
            break;
        case 'Employee': {
            html += `
                <label class='fw-bold'>Working days: </label>
                <span>${person.days}</span>
                <br>
                <label class='fw-bold'>Salary per day: </label>
                <span>$${person.salaryUnit.toLocaleString()}</span>
                <br>
                <label class='fw-bold'>Total salary: </label>
                <span class='fst-italic'>$${person.calcSalary().toLocaleString()}</span>
            `
        }
            break;
        case 'Customer': {
            html += `
                <label class='fw-bold'>Bill: </label>
                <span>$${person.bill.toLocaleString()}</span>
                <br>
                <label class='fw-bold'>Feedback: </label>
                <span>${person.rate}</span>
            `
        }
    }

    getElement('#detailsBody').innerHTML = html;
}

//remove person
function removePerson(personID) {
    let index = listPerson.findIndex(person => person.id === personID);
    listPerson.splice(index, 1);

    saveToLocalStorage();
    // renderTable(listPerson);
    sortListPerson();
}

//edit person
function editPerson(personID) {
    let person = listPerson.find(person => person.id === personID);

    switch (person.constructor.name) {
        case 'Student': {
            showInputStudent('Update', person);
        }
            break;
        case 'Employee': {
            showInputEmployee('Update', person);
        }
            break;
        case 'Customer': {
            showInputCustomer('Update', person);
        }
            break;
    }
}

// sort listPerson
getElement('#typePerson').onchange = sortListPerson;
getElement('#sortType').onchange = sortListPerson;
function sortListPerson() {
    //get type of person to sort
    let typePerson = getElement('#typePerson').value;
    let tempList;
    switch (typePerson) {
        case '1': {
            tempList = listPerson.filter(person => person.constructor.name === 'Student');
        }
            break;
        case '2': {
            tempList = listPerson.filter(person => person.constructor.name === 'Employee');
        }
            break;
        case '3': {
            tempList = listPerson.filter(person => person.constructor.name === 'Customer');
        }
            break;
        default: {
            tempList = [...listPerson];
        }
    }
    //get type of sort
    let typeSort = getElement('#sortType').value;
    switch(typeSort) {
        case '1': {
            tempList.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }) 
        }
            break;
        default: {}
    }
    renderTable(tempList);
}

// Save to local storage
function saveToLocalStorage() {
    //create temp list to add type attribute to each element
    const tempList = [...listPerson];
    tempList.forEach((item) => {
        item['type'] = item.constructor.name;
    })

    const json = JSON.stringify(tempList);

    localStorage.setItem('listPerson', json);
}

function getDataFromLocalStorage() {
    const json = localStorage.getItem('listPerson');
    if (!json) return [];

    let data = JSON.parse(json);
    for (let i = 0; i < data.length; i++) {
        let person = { ...data[i] };
        switch (person.type) {
            case 'Student': {
                person = new Student(person.name, person.address, person.id, person.email, person.math, person.physics, person.chemistry);
            }
                break;
            case 'Employee': {
                person = new Employee(person.name, person.address, person.id, person.email, person.days, person.salaryUnit);
            }
                break;
            case 'Customer': {
                person = new Customer(person.name, person.address, person.id, person.email, person.nameCompany, person.bill, person.rate);
            }
                break;
        }
        data[i] = person;
    }

    return data;
  }