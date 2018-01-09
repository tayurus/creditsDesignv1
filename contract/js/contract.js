function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded", function(event) {
    $(".contract").height($(".deploy").height());

    $(".contract-interact-access").click(function() {
        if (!$("#address").val() || !$("#contract").val() || !isJsonString($("#json").val()))
            alert("Check input data!");
        else {
            $("#readWrite").empty();
            let json = JSON.parse($("#json").val());
            // console.log(json);
            for (key in json) {
                $("#readWrite").append("<option value=" + key + ">" + key + " - " + json[key] + "</option>");
            }

        }
    })

    $(window).resize(function() {
        $(".contract").height($(".deploy").height() + 1);
    })

    $(".toDeploy").click(function() {
        $(".contract").height($(".deploy").height() + 1);
        $(".contract-interact").animate({
            "margin-left": "-960px"
        }, 500);
        $(".deploy").animate({
            "margin-left": "0px"
        }, 500);
    });

    $(".toInteract").click(function() {
        $(".deploy").animate({
            "margin-left": "960px"
        }, 500);
        $(".contract-interact").animate({
            "margin-left": "0px"
        }, 500);
    });


});
