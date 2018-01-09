<?php
    function GetRandString($length = 20)
    {
        $lower = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $chars_length = strlen($lower) - 1;
        $string = '';
        for ($i = 0; $i < $length; $i++) {
            $string .= $lower{rand(0, $chars_length)};
        }
        return $string;
    }

    function get_USD()
    {
        return json_decode(file_get_contents('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'))->USD;
    }

    function exchange_ETH($array)
    {
        if (empty($array)) {
            return false;
        }
        $currency = '';
        foreach ($array as $key => $val) {
            $currency .= $key.',';
        }

        $result = file_get_contents('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms='.$currency);
        var_dump($result);
    }

    function check_string($str)
    {
        if (empty($str)) {
            return false;
        }
        return $str;
    }
