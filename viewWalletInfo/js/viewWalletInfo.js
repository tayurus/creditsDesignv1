function CT_to_ETH(cs = undefined) {
    if (cs == undefined)
        return false;
    return cs / 5000;
}

document.addEventListener("DOMContentLoaded", function(event) {

    /* !!!!!!!!!! Event Listeners !!!!!!!!! */

    $("[data-method='viewWalletInfo'").click(function() {
        let setting = {
            method: $(this).attr("data-method"),
            get: "index"
        }
        console.log(setting);

        $.post("query/index.php", "data=" + JSON.stringify(setting), function(data) {
            let response = JSON.parse(data);
            $(".content").html('<div class="viewWalletInfo">\
        \
                <div class="viewWalletInfo-top">\
                    <div class="viewWalletInfo-top-wrapper">\
                        <div class="viewWalletInfo-address-wrapper">\
                            <div class="viewWalletInfo-address-title">Your Address</div>\
                            <div class="viewWalletInfo-address-text">'+response.address+'</div>\
                        </div>\
                        <div class="viewWalletInfo-key-wrapper">\
                            <div class="viewWalletInfo-key-title">Private Key</div>\
                            <div class="viewWalletInfo-key-text">'+response.key+'</div>\
                            <img class="viewWalletInfo-hideKey"src="img/hide.png" alt="Hide key">\
                        </div>\
                    </div>\
        \
                    <img src="img/user.png" alt="">\
                </div>\
        \
                <div class="viewWalletInfo-windows">\
                    <div class="viewWalletInfo-windows-wrapper">\
        \
                        <div class="viewWalletInfo-windows-balance">\
                            <div class="viewWalletInfo-balance-title">Account Balance</div>\
                            <div class="viewWalletInfo-balance-eth">'+CT_to_ETH(response.credits)+' ETH</div>\
                            <div class="viewWalletInfo-balance-cs">'+response.credits+' CS</div>\
                        </div>\
        \
                        <div class="viewWalletInfo-windows-buy">\
                            <div class="viewWalletInfo-buy-title">Buy Credits with ETH</div>\
                            <button>Buy</button>\
                        </div>\
        \
                    </div>\
        \
                    <div class="viewWalletInfo-windows-token">\
                        <div class="viewWalletInfo-token-title">Token Balances</div>\
                        <div class="viewWalletInfo-token-add">+ Add custom token</div>\
                        <div class="viewWalletInfo-token-list">\
                            <div class="viewWalletInfo-list-item">1500 ETH</div>\
                            <div class="viewWalletInfo-list-item">0.9543 ABC </div>\
                            <div class="viewWalletInfo-list-item">150.50054354 ACC </div>\
                            <div class="viewWalletInfo-list-item">1500 ACA</div>\
                            <div class="viewWalletInfo-list-item">0.9543 BBC </div>\
                            <div class="viewWalletInfo-list-item">4354 BTC </div>\
                        </div>\
        \
                        <div class="viewWalletInfo-token-showAll">Show all token</div>\
                    </div>\
                </div>\
        \
            </div>')

            $(".viewWalletInfo-hideKey").click(function() {
                if ($(this).attr("src").indexOf("hide.png") != -1) {
                    $(this).attr("src", "img/show.png");
                    $(this).prev().css("background", "#000")
                } else {
                    $(this).attr("src", "img/hide.png");
                    $(this).prev().css("background", "#fff")
                }

            })

        });
    })


});

/* !!!!! CSS-changing functions !!!!!*/
