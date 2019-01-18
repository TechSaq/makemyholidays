$(document).ready(function (){
    var price = 0;
    
   $.ajax('data.json',{
         dataType: 'json',
         contentType: 'application/json',
         cache: false,
    })
       .always(function (response){
        console.log(response);
        var html;
        $.each(response,function (index, element){
            html = '<div class="card">';
            html += '<div class="image">';
            html +=        '<img src="' +element.image+ '" alt="destination image">';
            html +=    '</div>';
            html +=    '<h3 id="destination-title">'+element.destinationTitle+'</h3>';
            html +=    '<div class="info">';
            html +=        '<p>'+element.info+'</p>';
            html +=    '</div>';
            html +=    '<div class="price" value="'+element.price+'"> $ ';
            html +=        '<b>'+element.price+'</b>';
            html +=    '</div>';
            html +=    '<button class="add-to-cart">Add to Cart</button>';
            html +=    '<div class="info-link-div">';
            html +=        '<a class="info-link" href="#">More Info</a>';
            html +=   '</div>';
            html +=    '<div class="more-info">'
            html +=        element.moreInfo;
            html +=    '</div>';
            html += '</div>';
            $('#container').append(html);
        })
    }).fail(function (){
       alert("Problem in loading page...");
   });
    
    $('#container').on('click','.add-to-cart', function (){
        price += parseInt($(this).closest('.card').find('.price').attr('value'));
        
        $('#total-price').empty().append('Total Price : $'+price);
    });
    
    
    $('#container').on('click','.info-link',function (event) {
        event.preventDefault();
        $(this).closest('.card').find('.more-info').slideToggle('slow');
    });
    
});