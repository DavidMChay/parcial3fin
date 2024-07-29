$(document).ready(function() {
    let objects = [
        { nombre: "Objeto1", valor: 60 },
        { nombre: "Objeto2", valor: 30 },
        { nombre: "Objeto3", valor: 20 },
        { nombre: "Objeto4", valor: 50 },
        { nombre: "Objeto5", valor: 10 },
        { nombre: "Objeto6", valor: 40 }
    ];

    displayObjects(objects);

    $('#sortItems').click(function() {
        const property = $('#property').val().trim();
        if (property) {
            const sortedObjects = ordenarPorPropiedad(objects, property);
            displayObjects(sortedObjects);
        } else {
            alert("Por favor, ingrese una propiedad para ordenar.");
        }
    });

    function displayObjects(objects) {
        $('#objectList').empty();
        objects.forEach(obj => {
            $('#objectList').append(`<li class="list-group-item">Nombre: ${obj.nombre}, Valor: ${obj.valor}</li>`);
        });
    }

    function ordenarPorPropiedad(arr, prop) {
        return arr.slice().sort((a, b) => {
            if (a[prop] < b[prop]) return -1;
            if (a[prop] > b[prop]) return 1;
            return 0;
        });
    }
});
