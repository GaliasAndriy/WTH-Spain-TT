$(document).ready(function() {
    $('.type-select .city-select').select2();
    function loadCities(lastSelect) {
        $.getJSON('city.json', function(cities) {
            $.each(cities, function(id, name) {
                lastSelect.append($('<option>', {
                    value: id,
                    text: name
                }));
            });
        });
    }
    loadCities($('.city-select:last'));
    $('#addRowBtn').on('click', function() {
        loadCities();
    });

    function loadTypes(lastType) {
        $.getJSON('type.json', function(type) {
            $.each(type, function(id, name) {
                lastType.append($('<option>', {
                    value: id,
                    text: name
                }));
            });
        });
    }
    loadTypes($('.type-select:last'));
    $('#addRowBtn').on('click', function() {
        loadTypes();
    });
});
