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
});
