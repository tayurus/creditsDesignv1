function exchange_ETH(setting) {
    var currensy = '';
    for (index in setting.currensy) {
        var val = setting.currensy[index];
        currensy += val + ',';
    }
    var response = $.ajax({
        type: 'POST',
        url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=' + currensy,
        async: false,
        data: 'data=' + JSON.stringify(setting),
        dataType: 'json',
    }).responseText;
    var ar_currency = JSON.parse(response).ETH;

    var result = {};
    for (index in ar_currency) {
        result[index] = ar_currency[index] * setting.count;
    }
    return result;
}

document.addEventListener("DOMContentLoaded", function(event) {
    $("[data-method='creditsMonitoring']").click(function() {
        let setting = {
            method: $(this).attr("data-method"),
            get: "index"
        }

        $.post("query/index.php", "data=" + JSON.stringify(setting), function(data) {
            let response = JSON.parse(data);

            let ethereumToUSD = exchange_ETH({
                'count': 1,
                currensy: ['USD']
            })['USD'];



            $(".content").html('<div class="creditsMonitoring">\
        \
                <div class="creditsMonitoring-row">\
                    \
                    <div class="creditsMonitoring-row-item">\
                        <div class="creditsMonitoring-item-title">Credits(CS)</div>\
                        <div class="creditsMonitoring-item-csRate">' + (ethereumToUSD / response.credits).toFixed(2) + '</div>\
                    </div>\
                    \
                    <div class="creditsMonitoring-row-item">\
                        <div class="creditsMonitoring-item-title">Credits(CS)</div>\
                        <div class="creditsMonitoring-item-csCount">' + response.credits + '</div>\
                    </div>\
                    \
                    <div class="creditsMonitoring-row-item">\
                        <div class="creditsMonitoring-item-title">Credits(CS)</div>\
                        <div class="creditsMonitoring-item-ethRate">' + ethereumToUSD + '</div>\
                    </div>\
                </div>\
        \
                <img src = "img/graph.png" class="creditsMonitoring-graph">\
        \
        \
                <div class="creditsMonitoring-tables">\
                    \
                    <div class="creditsMonitoring-top60">\
                        <div class="creditsMonitoring-top60-title">Top 10 Tokens for 60 days</div>\
                        <table class="creditsMonitoring-top60-table">\
                        </table>\
                    </div>\
        \
                    \
                    <div class="creditsMonitoring-recent">\
                        <div class="creditsMonitoring-recent-title">Recent transactions</div>\
                        <table class="creditsMonitoring-recent-table">\
                        </table>\
                    </div>\
                </div>\
            </div>');

            let topTokens = response.top.sort(function(a, b) {
                if (a.count < b.count) return 1;
                if (a.count > b.count) return -1;
                return 0;
            });

            topTokens.forEach(function(item, index) {
                $(".creditsMonitoring-top60-table").append(
                    "<tr>\
                        <td>" + index + "</td>\
                        <td>" + item.title + "</td>\
                        <td>" + item.count + "</td>\
                    </tr>")
            })

            response.last_transation.forEach(function(item) {
                $(".creditsMonitoring-recent-table").append(
                    "<tr>\
                    <td>" + item.time + "</td>\
                    <td>from</td>\
                    <td>" + item.from + "</td>\
                    <td>to</td>\
                    <td>" + item.to + "</td>\
                    <td>" + item.credits + "CS</td>\
                </tr>");

            })
        });
    });
});
