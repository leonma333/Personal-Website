<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$requestBody = file_get_contents('php://input');
	$requestJson = json_decode($requestBody, true);
	error_log(print_r($requestJson, true));

	return;
}

error_log(print_r($_REQUEST, true));

# Get request from Facebook -> webhook callback verification
echo $_GET['hub_challenge'];

?>