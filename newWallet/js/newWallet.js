function random_string(count = 64) {
    var text = "";

    var possible = "123456789abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

document.addEventListener("DOMContentLoaded", function() {

    $("[data-method='newWallet']").click(function(){
        $(".content").html('<div class="newWallet">\
    		<h1>Create New Wallet</h1>\
    		<h2 class="newWallet-enter">Enter a password</h2>\
            <div class="newWallet-wrapper">\
                <input name="newWallet-password" type="text" placeholder="Password">\
                <button class="newWallet-createBtn">Create New Wallet</button>\
            </div>\
        </div>');

        $(".newWallet-createBtn").click(function() {
            if ($("[name='newWallet-password']").val() === "") {
                alert("Enter the password!");
                $("[name='newWallet-password']").css({
                    "border": "2px solid tomato"
                });
            } else {
                var USER_KEY = random_string();
                $(".newWallet-wrapper").after("<br><div class='newWallet-userKey'>Your key is <b>" + USER_KEY + "</b></div>");

                $('.newWallet-userKey').after('<button class="newWallet-downloadKey">Скачать ключ</button>\
                   <h3 class="newWallet-attention">You should download your key before go to next step!</h3>')
                //и сразу повесить обработчик для нажатия на данную кнопку
                $('.newWallet-downloadKey').click(function() {
                    var content = USER_KEY;
                    var filename = "key.txt";
                    var blob = new Blob([content], {
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs(blob, filename);

                    //выплевываем верстку для создания кошелька
                    $('.newWallet-attention').after(
                        '<div class="openWallet">\
                           <h2>Create Wallet</h2>\
                           <div class="hint">Paste/Type Your Private Key</div>\
                           <input type="text" name="newWallet-key" value="' + USER_KEY + '" placeholder=" key">\
                           <button class="openWallet-unlockBtn">Create</button>\
                       </div>')
                })
            }
        })
    })




});
