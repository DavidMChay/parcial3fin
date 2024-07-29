$(document).ready(function() {
    $('#fetchUsers').click(function() {
        obtenerUsuarios();
    });

    async function obtenerUsuarios() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            console.log(users);
            displayUsers(users);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    function displayUsers(users) {
        $('#userList').empty();
        users.forEach(user => {
            $('#userList').append(`<li class="list-group-item">${user.name} (${user.email})</li>`);
        });
    }
});
