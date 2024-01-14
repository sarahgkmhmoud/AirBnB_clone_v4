$(document).ready(function(){
$('input.checkbox').change(function(){
    var ameinty_dict = {};
    if ($(this).checked()){
        ameinty_dict[$(this).data('id')] == $(this).data('name')
    } else {
        delete ameinty_dict[$(this).data('id')] 
    }
    let lst = object.values(ameinty_dict);
    if (lst.length > 0){
    $('div.amenities > h4').text(lst).join(',');
    } else {
        $('div.amenities > h4').html('&nbsp;');
    }
})
});