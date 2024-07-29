$(document).ready(function() {
    let persons = [];

    $('#addPerson').click(function() {
        let name = $('#name').val();
        let age = $('#age').val();

        if (name && age) {
            let person = {
                name: name,
                age: parseInt(age)
            };
            persons.push(person);
            displayPersons();
            $('#personForm')[0].reset();
        }
    });

    $('#filterAdults').click(function() {
        let adults = filtrarMayoresDeEdad(persons);
        displayAdults(adults);
    });

    function displayPersons() {
        $('#personList').empty();
        persons.forEach(function(person, index) {
            $('#personList').append(`<li class="list-group-item">${person.name}, ${person.age} años</li>`);
        });
    }

    function displayAdults(adults) {
        $('#adultList').empty();
        adults.forEach(function(person, index) {
            $('#adultList').append(`<li class="list-group-item">${person.name}, ${person.age} años</li>`);
        });
    }

    function filtrarMayoresDeEdad(persons) {
        return persons.filter(person => person.age >= 18);
    }
});
