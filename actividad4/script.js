$(document).ready(function() {
    $('#addItem').click(function() {
        addItem();
    });

    function addItem() {
        const itemName = $('#itemName').val().trim();
        if (itemName !== "") {
            const newItem = $('<li class="list-group-item d-flex justify-content-between align-items-center">' + itemName + '<button class="btn btn-danger btn-sm ml-4 removeItem">Eliminar</button></li>');
            $('#itemList').append(newItem);
            newItem.find('.removeItem').click(function() {
                $(this).parent().remove();
            });
            $('#itemName').val('');
        } else {
            alert("Por favor, ingrese un nombre para el ítem.");
        }
    }
});
