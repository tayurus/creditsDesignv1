<?php

    require_once('../php/function.php');
    if (empty($_POST['data'])) {
        echo "function.php not found!";
        die(false);
    }

    try {
        $data = json_decode($_POST['data']);
    } catch (Exaptions $e) {
        echo "can not decode data from client!";
        die(false);
    }

    $class = $data->method;

    if (!file_exists('../classes/'.$class.'.class.php')) {
        echo "can not find class-file.php";
        die(false);
    }

    $method = $data->get;

    $has = require_once('../classes/'.$class.'.class.php');
    $obj = new $class();



    if (method_exists($obj, $method)) {
        $array = $obj->$method();
    } else {
        echo "can not find method!";
        die(false);

    }
    echo(json_encode($array));
