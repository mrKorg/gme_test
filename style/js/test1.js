jQuery(document).ready(function($) {
    
    "use strict";

    // Loader
    $('#page-preloader').fadeOut('slow');
    $('#page-preloader .spinner').fadeOut('slow');


    // License items
    var jsonObj = $.getJSON( "license.json"),
        form_items = $("#form_items"),
        license;
    jsonObj.then(function (data) {
        license = data.license;
        // Write items
        for(var i in license){
            var item = '<p class="form_item">'+
                '<label data-price="'+license[i].price+'">'+
                '<input type="radio" name="license" value="'+license[i].name+'">'+
                '<span class="form_item_name">'+license[i].name+'</span>'+
                '<span class="form_item_price">$'+license[i].price+' per license</span>'+
                '</label>'+
                '</p>';
            $("#form_items").append(item);
        }
        // Form styler
        $("select, input").styler();
        // Checked label
        $("#form_items label").on("click", function () {
            var inputCheck = $(this).find(".jq-radio").hasClass("checked");
            $(".form_result").show(200);
            $(".form_total").show(200);
            $(".form_btn .button").removeAttr("disabled");
            if (inputCheck == true) {
                $("#form_items label").removeClass("checked");
                $(this).addClass("checked");
                $("#form_result").text($(this).find(".form_item_name").text());
                var price = $(this).data("price"),
                    num = $(".form_select .jq-selectbox__select-text").text(),
                    totalPrice = price * num;
                $("#price").text(totalPrice);
            }
        });
        // Select number
        $(".form_select .jq-selectbox__dropdown li").on("click", function () {
            var price = $("#form_items label.checked").data("price"),
                num = $(this).text(),
                totalPrice = price * num;
            $("#price").text(totalPrice);
        });
    });


});




