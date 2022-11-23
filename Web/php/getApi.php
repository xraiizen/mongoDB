<?php
    function get_api($option)
    {
        $url = 'http://localhost:3000/'.$option;
        $json_data = file_get_contents($url);
        $response_data = json_decode($json_data);
        return $response_data;
    }
?>