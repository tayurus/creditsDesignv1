<!DOCTYPE html>
<html lang="eng"

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Credits</title>
    <link rel="icon" href="img/favicon.png" type="image/x-icon" />
    <!-- JS-Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- CUSTOM JS -->
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <header>

        <div class="header-top">
            <div class='logo'>
                <img src='img/logo.png'> CREDITS
            </div>

            <div class="menuBox">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div class="header-search">
            <input type="text" name="search" placeholder="Search by Address / Txhash / Token">
            <button>Go!</button>
        </div>

        <nav class="header-menu">
            <!-- Monitor -->
            <div class="menu-item active">
                <div class="menu-item-icon monitorI"></div>
                <div data-method="creditsMonitoring" class="menu-item-text">Credits Monitor</div>
            </div>

            <!-- Account -->
            <div class="menu-item hasSubmenu">
                <div class="menu-item-icon accountI"></div>
                <div class="menu-item-text">Account</div>
            </div>
            <div class="submenu">
                <div class="submenu-item">All Accounts</div>
                <div data-method="contractAccounts" class="submenu-item">Contract Accounts</div>
                <div class="submenu-item">Verified Contract</div>
            </div>

            <!-- Token -->
            <div class="menu-item hasSubmenu">
                <div class="menu-item-icon tokenI"></div>
                <div class="menu-item-text">Token</div>
            </div>
            <div class="submenu">
                <div class="submenu-item">Token submenu item</div>
            </div>

            <!-- New Wallet -->
            <div class="menu-item">
                <div class="menu-item-icon newWalletI"></div>
                <div data-method="newWallet" class="menu-item-text">New Wallet</div>
            </div>

            <!-- Send Tokens -->
            <div class="menu-item">
                <div class="menu-item-icon sendTokensI"></div>
                <div data-method="sendToken" class="menu-item-text">Send Tokens</div>
            </div>

            <!-- Contracts -->
            <div class="menu-item hasSubmenu">
                <div class="menu-item-icon contractsI"></div>
                <div class="menu-item-text">Contracts</div>
            </div>
            <div class="submenu">
                <div class="submenu-item">Contracts submenu item</div>
            </div>

            <!-- View Wallet Info -->
            <div class="menu-item">
                <div class="menu-item-icon viewWalletInfoI"></div>
                <div data-method="viewWalletInfo" class="menu-item-text">View Wallet Info</div>
            </div>

        </nav>

        <select class="header-langSelect" name="language">
            <option value="eng">English (US)</option>
        </select>

    </header>

    <div class="content">

    </div>

</body>

</html>
