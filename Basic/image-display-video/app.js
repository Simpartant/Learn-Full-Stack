(function($) {
    $(document).ready(function () {

        // $('#promotion-instagram').ready(function() {
        //     let a = [];
        //     let videoContainer = $('.video-item > .img-responsive');
        //     // videoContainer.forEach(e => {
        //     //     console.log(e)
        //     // });
        //     // $.each(videoContainer, function(k, v){
        //     //     console.log(k + v)
        //     // })
        //     // $(videoContainer).each(function(){
        //     //     a.push($(this).attr('id'))
        //     //     console.log(a)
        //     // })
        //     // console.log(videoContainer);
        //     $('.img-responsive').on('click', function (){
        //         let imgValue = $(this);
        //         let videoValue = $(this).closest('.video-item').find('.video-responsive');
        //     //    console.log(imgId + videoid); 
        //        if(imgValue.attr('id') === videoValue.data('video')){
        //         imgValue.attr('style','display: none');
        //         videoValue.attr('style','display: block');
        //        }
        //     })
        // })
          
        $('.img-responsive').on('click', function (){
            let imgValue = $(this);
            let videoValue = $(this).closest('.card-item').find('.video-responsive');
           console.log(imgValue.data('img') + videoValue.data('video')); 
           if(imgValue.data('img') === videoValue.data('video')){
            imgValue.attr('style','display: none');
            videoValue.attr('style','display: block');
           }
        })



    });
})(jQuery);