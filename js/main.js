

document.querySelectorAll("iframe").forEach(function (el){
    el.height = el.offsetWidth*(735/1809);
})

jQuery(document).ready(function($) {
    $(".click-row").click(function() {
        // alert($(this).attr("data-href"));
        window.location = $(this).attr("data-href");
    });
});