const contactForm = document.querySelector('.contact-form');

let email = document.getElementById('email');
let birth_date = document.getElementById('birth_date');
let sex = document.getElementById('sex');
let namee = document.getElementById('name');
let date = document.getElementById('date');
let id_number = document.getElementById('id_number');
let infect_covid = document.getElementById('infect_covid');
let infect_date = document.getElementById('infect_date');
let treatment_place = document.getElementById('treatment_place');
let oxygen_treatment = document.getElementById('oxygen_treatment');
let ICU_treatment = document.getElementById('ICU_treatment');
let discharged_date = document.getElementById('discharged_date');
let revisit = document.getElementById('revisit');
let revisit_division = document.getElementById('revisit_division');
let deal_with = document.getElementById('deal_with');

let save = document.getElementById('save');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        email: email.value,
        birth_date: birth_date.value,
        sex: sex.value,
        name: namee.value,
        date: date.value,
        id_number: id_number.value,
        infect_covid: infect_covid.value,
        infect_date: infect_date.value,
        treatment_place: treatment_place.value,
        oxygen_treatment: oxygen_treatment.value,
        ICU_treatment: ICU_treatment.value,
        discharged_date: discharged_date.value,
        revisit: revisit.value,
        revisit_division: revisit_division.value,
        deal_with: deal_with.value



    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:567/create');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent');
            email.value = '';
            sex.value = '';
            namee.value = '';
            date.value = '';
            id_number.value = '';
            infect_covid.value = '';
            infect_date.value = '';
            treatment_place.value = '';
            oxygen_treatment.value = '';
            ICU_treatment.value = '';
            discharged_date.value = '';
            revisit.value = '';
            revisit_division.value = '';
            deal_with.value = '';


        } else {
            alert('something wrong')
        }
    }

    xhr.send(JSON.stringify(formData))

})