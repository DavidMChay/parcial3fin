$(document).ready(function() {
    let numbers = [];

    $('#addNumber').click(function() {
        let number = $('#number').val();

        if (number) {
            numbers.push(parseInt(number));
            displayNumbers();
            $('#numberForm')[0].reset();
        }
    });

    $('#transformFilter').click(function() {
        let result = transformarYFiltrar(numbers);
        displayResults(result);
    });

    function displayNumbers() {
        $('#numberList').empty();
        numbers.forEach(function(number, index) {
            $('#numberList').append(`<li class="list-group-item">${number}</li>`);
        });
    }

    function displayResults(result) {
        $('#resultList').empty();
        result.forEach(function(number, index) {
            $('#resultList').append(`<li class="list-group-item">${number}</li>`);
        });
    }

    function transformarYFiltrar(numbers) {
        return numbers.map(num => num * num).filter(square => square > 20);
    }
});
