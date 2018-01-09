/*
Contents:
    1. Variables
    2. Functions
    3. Event listeners
    4. Logic (function's call)
    Made by Yurii Tatarintsev - tayurus@gmail.com
*/

document.addEventListener("DOMContentLoaded", function(event) {



    $("[data-method=contractAccounts]").click(function(){
        let setting = {
            method : $(this).attr("data-method"),
            get: "contract"
        }

        $.post("query/index.php", "data=" + JSON.stringify(setting), function(data) {

            let response = JSON.parse(data);

            $(".content").html('<div class="contractAccounts">\
        \
                <div class="contractAccounts-tabs">\
                    <div class="contractAccounts-tabs-item active">Transaction</div>\
                    <div class="contractAccounts-tabs-item">Token Transfer</div>\
                    <div class="contractAccounts-tabs-item">Contract Source</div>\
                    <div class="contractAccounts-tabs-item">Read Smart Contract</div>\
                </div>\
        \
                <div class="contractAccounts-info">\
        \
                    <div class="contractAccounts-info-addresses">\
                        <img src="img/contract.png" alt="">\
                        <div class="contractAccounts-addresses-wrapper">\
        \
                            <div class="contractAccounts-address">\
                                <div class="contractAccounts-address-title">Contract address</div>\
                                <div class="contractAccounts-address-text">'+response.Contract_address+'</div>\
                            </div>\
        \
                            <div class="contractAccounts-creator">\
                                <div class="contractAccounts-creator-title">Contract creator</div>\
                                <a href="#" class="contractAccounts-creator-text">'+response.Contract_creator+'</a>\
                            </div>\
        \
                        </div>\
        \
                    </div>\
        \
                    <div class="contractAccounts-info-balances">\
                        <div class="contractAccounts-balances-eth">\
                            <div class="contractAccounts-eth-title">ETH Balance:</div>\
                            <div class="contractAccounts-eth-value">'+response.ETH_Balance+' Ether</div>\
                        </div>\
        \
                        <div class="contractAccounts-balances-cs">\
                            <div class="contractAccounts-cs-title">CS Balance:</div>\
                            <div class="contractAccounts-cs-value">'+response.CS_Balance+' Credits</div>\
                        </div>\
                    </div>\
        \
        \
        \
                </div>\
        \
                <div class="contractAccounts-transactions">\
        \
                    <div class="contractAccounts-transactions-top">\
                        <div class="contractAccounts-top-title">Transactions</div>\
                        <div class="contractAccounts-top-noOf">\
                            <div class="contractAccounts-noOf-title">No Of Transactions:</div>\
                            <div class="contractAccounts-noOf-value">'+response.txns+' txns</div>\
                        </div>\
                    </div>\
        \
                    <div class="contractAccounts-pagination">\
                        <button class="contractAccounts-pagination-first">First</button>\
                        <button class="contractAccounts-pagination-prev">Prev</button>\
                        <div class="contractAccounts-pagination-current">\
                            Page <span class="contractAccounts-current-value">1</span> of <span class="contractAccounts-current-total">5</span>\
                        </div>\
                        <button class="contractAccounts-pagination-next">Next</button>\
                        <button class="contractAccounts-pagination-last">Last</button>\
                    </div>\
        \
                    <table class="contractAccounts-table">\
                        <tr>\
                            <th>TxHash</th>\
                            <th>From</th>\
                            <th>To</th>\
                            <th>Age</th>\
                            <th>Value</th>\
                            <th>Fee</th>\
                            <th>Status</th>\
                        </tr>\
        \
                    </table>\
                </div>\
        \
            </div>');

            let setting = {
                method : "transaction",
                get: "transaction"
            }
            $.post("query/index.php", "data=" + JSON.stringify(setting), function(data) {
                response = JSON.parse(data);
                // $(".contractAccounts-table tr").remove();
                response.forEach(function(item){
                    let status = item.status == 0 ? "<span style='color:green'>Success</span>" : "<span style='color:red'>Failed</span>"
                    $(".contractAccounts-table").append('<tr>\
                        <td><a href="#">'+item.hash.slice(0,8)+'...</a></td>\
                        <td><a href="#">'+item.from.slice(0,8)+'...</a></td>\
                        <td><a href="#">'+item.to.slice(0,8)+'...</a></td>\
                        <td>'+item.age+'</td>\
                        <td>'+item.value+' Credits</td>\
                        <td>'+item.fee * 0.00001+'</td>\
                        <td>'+status+'</td>\
                    </tr>');
                })
            });

            /* !!!!!!!!! Variables !!!!!!!!*/
            let currPaginationIndex = 1;
            let totalPagesCount = 3;

            /* !!!!!!!!!!! Functions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

            /*PAGINATION function*/
            function initializePagination() {
                //предыдущую отключить
                $(".contractAccounts-pagination-prev").addClass("disabledPaginationBtn");
                //первую отключить
                $(".contractAccounts-pagination-first").addClass("disabledPaginationBtn");
                if (totalPagesCount === 1) {
                    $(".contractAccounts-pagination-next").addClass("disabledPaginationBtn");
                    $(".contractAccounts-pagination-last").addClass("disabledPaginationBtn");
                }

                $(".contractAccounts-current-total").text(totalPagesCount);
            }

            /* !!!!!!!!!! Event Listeners !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

            //cliking on tab-item
            $(".contractAccounts-tabs-item").click(function() {
                $(".contractAccounts-tabs-item").removeClass("active");
                $(this).addClass("active");
            })




            // first
            $(".contractAccounts-pagination-first").click(function() {
                // индекс = 0
                currPaginationIndex = 1;
                // предыдущая = отключить
                $(".contractAccounts-pagination-prev").addClass("disabledPaginationBtn");
                //первую отключить
                $(".contractAccounts-pagination-first").addClass("disabledPaginationBtn");
                // если страниц > 0
                if (totalPagesCount > 0) {
                    //   следующая = включить
                    $(".contractAccounts-pagination-next").removeClass("disabledPaginationBtn");
                    //    последняя = включить
                    $(".contractAccounts-pagination-last").removeClass("disabledPaginationBtn");

                    $(".contractAccounts-current-value").text(currPaginationIndex);
                }



            });

            // prev
            $(".contractAccounts-pagination-prev").click(function() {
                //если не выключена
                if ($(this).hasClass("disabledPaginationBtn") == false) {
                    //индекс =  индекс - 1
                    currPaginationIndex = currPaginationIndex - 1;
                    //если индекс = 0
                    if (currPaginationIndex === 1) {
                        //эту отключить
                        $(this).addClass("disabledPaginationBtn");
                        //отключить первую
                        $(".contractAccounts-pagination-first").addClass("disabledPaginationBtn");
                    }
                    // следующая = включить
                    $(".contractAccounts-pagination-next").removeClass("disabledPaginationBtn");
                    // последняя = включить
                    $(".contractAccounts-pagination-last").removeClass("disabledPaginationBtn");

                    $(".contractAccounts-current-value").text(currPaginationIndex);
                }



            });

            //next
            $(".contractAccounts-pagination-next").click(function() {
                //если не выключена
                if ($(this).hasClass("disabledPaginationBtn") == false) {
                    //индекс = индекс + 1
                    currPaginationIndex = currPaginationIndex + 1;
                    $(".contractAccounts-current-value").text(currPaginationIndex);
                    //если индекс = общему числу
                    if (currPaginationIndex === totalPagesCount) {
                        //эту отключить
                        $(this).addClass("disabledPaginationBtn");

                        //последнюю выключить
                        $(".contractAccounts-pagination-last").addClass("disabledPaginationBtn");
                    }

                    //первую включить
                    $(".contractAccounts-pagination-first").removeClass("disabledPaginationBtn");
                    $(".contractAccounts-pagination-prev").removeClass("disabledPaginationBtn");

                }
            });


            // last
            $(".contractAccounts-pagination-last").click(function() {
                //эту отключить
                $(".contractAccounts-pagination-last").addClass("disabledPaginationBtn");
                currPaginationIndex = totalPagesCount;
                //   предыдущую включить
                $(".contractAccounts-pagination-prev").removeClass("disabledPaginationBtn");
                //   следующую выключить
                $(".contractAccounts-pagination-next").addClass("disabledPaginationBtn");
                //    первую включить
                $(".contractAccounts-pagination-first").removeClass("disabledPaginationBtn");

                $(".contractAccounts-current-value").text(currPaginationIndex);
            });

            /*LOGIC Function's call!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
            initializePagination();
        })
        })







});
