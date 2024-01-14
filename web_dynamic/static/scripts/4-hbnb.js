$(document).ready(function(){
    let ameinty_dict = {};
    $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked){
        ameinty_dict[$(this).data('id')] = $(this).data('name');
    } else {
        delete ameinty_dict[$(this).data('id')];
    }
    let lst = Object.values(ameinty_dict);
    if (lst.length > 0){
        $('div.amenities > h4').text(Object.values(ameinty_dict).join(', '));
    } else {
        $('div.amenities > h4').html('&nbsp;');
    }
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus){
    if (textStatus === 'success'){    
    if (data.status === 'OK'){
            $('div#api_status').addClass('available');
        } else {
            delete $('div#api_status').removeClass('available');
        }
    }
    });
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/', 
        contentType: 'application/json',
        dataType: 'json',
        data: '{}',
        success: function(data){
            for (let i = 0; i < data.length; i++) {
                let place = data[i];
                $('.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
              }
        }
        });
        $('.filters > button').click(function () {
            $('.places > article').remove();
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/', 
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({'Amenities': Object.keys(ameinty_dict)}),
            success: function(data){
                for (let i = 0; i < data.length; i++) {
                    let place = data[i];
                    $('.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
                  }
            }
        });
    });
});
