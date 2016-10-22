<?php

# get necessary files
require 'vendor/autoload.php';
$config = include('config.php');

# set response header to json object
header('Content-type: application/json');

# only send the email if all parameters are satisfied
if (isset($_POST['contact_number'])) {

	# using Twilio REST API Client and initialize the Object
	use Twilio\Rest\Client;
	$client = new Client($config['sid'], $config['token']);

	// strat sending text messages
	$success = false;
	$message = null;
	$status_code = 200;
	try {
		$client->messages->create(
		    '+15197228665',
		    array(
		        'from' => $config['phone'],
		        'body' => 'Hey Testing'
		    )
		);

		# respond with status code 200 and success true if sms sent successfully
		$success = true;
		$message = 'Text sent';
	} catch (Exception $e) {
		# respond with status code 400 and success false if sms sent unsuccessfully
		$message = $e->getMessage();
		$status_code = 400;
	}

	# construct response
	$response = array('success' => $success, 'message' => $message);
	http_response_code($status_code);
	echo json_encode($response);
	return;
}

# the parameters are not satisfied -> return error and response with status code 406
http_response_code(406);
$response = array('success' => false, 'message' => 'Parameter missing');
echo json_encode($response);
return;

?>