document.addEventListener("DOMContentLoaded", function(event) {

    $("[data-method='sendToken']").click(function() {
        $(".content").html('<div class="send">\
\
            <div class="send-title">Send Either & Tokens</div>\
\
            <div class="send-coin-wrapper">\
                <label for="send-coin-select">Select coin</label>\
                <select id="send-coin-select">\
                    <option value="eth">ETH = 0.0143</option>\
                </select>\
            </div>\
\
            <div class="send-address-wrapper">\
                <label for="send-address">To address</label>\
                <input type="text" id="send-address" placeholder="0x632654e32igyu4239647r23gr02873">\
            </div>\
\
            <div class="send-amount-wrapper">\
                <label for="send-amount">Amount to send</label>\
                <input type="text" id="send-amount" placeholder="100">\
            </div>\
\
            <button class="send-btn">Generate Transaction</button>\
\
        </div>')
    })

});
