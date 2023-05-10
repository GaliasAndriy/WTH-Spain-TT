$(document).ready(function() {
    $('.btn-secondary').on('click', function() {
        var idValues = $('.id-input-field').map(function() {
            return $(this).val();
        }).get();
        console.log(idValues);

        if (new Set(idValues).size !== idValues.length) {
            alert('ID values must be unique');
            return;
        } else if (idValues.some(value => value === '')) {
            alert('Emtpy ID value in a table');
            return;
        } else {
            $.ajax({
                type: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: $('#form-table').serialize(),
                success: function(response) {
                    $('.id-input-field').val('');
                    alert('Data saved successfully');
                },
                error: function(xhr, status, error) {
                    alert('Error saving data: ' + error);
                }
            });
        }
    });
});