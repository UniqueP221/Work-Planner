$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var value=$(this)
        .siblings('.description')
        .val();
        var time=$(this)
        .parent()
        .attr('id');

        localStorage.setItem(time,value);


    });
    function updateTime(){
        var currentBlock=moment().hours();
        $('.time-block').each(function(){
            var blockTime = parseInt(
                $(this)
                .attr('id')
                .split('-')[1]
            );

         if(blockTime < currentBlock){
            $(this).addClass('past');

         } else if(blockTime === currentBlock){
            $(this).removeClass('past');
            $(this).addClass('present');
         } else{
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
         }  
        });
    }
    updateTime();



    $('#hour-9 .description').val(localStorage.getItem('hour-9'));

})
