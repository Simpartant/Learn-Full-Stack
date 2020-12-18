(function ($) {
    $(document).ready(function () {
        $('.group').ready(function(){
            $('.btn').on('mouseover',function(){
                let idBtn = $(this).attr("id");
                let btnA = $('.btn').find('#' + idBtn)
                console.log(btnA)
            }).on('mouseleave', function(){
                let idBtn = $(this).attr("id");
                let btnClass = $(".btn").find("#"+ idBtn);
                btnClass.removeClass('active')
            });
        });
        $(window).on('load', function(){
            $(".loader-wrapper").fadeOut("slow")
        })
    
    })
    
})(jQuery);
e2