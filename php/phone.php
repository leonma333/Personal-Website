<?php

# Get necessary files
require 'vendor/autoload.php';
$config = include('config.php');

# Using Twilio REST API Client
use Twilio\Rest\Client;

# Set response header to json object
header('Content-type: application/json');

# Only send the email if all parameters are satisfied
if (isset($_POST['contact_number'])) {

	# Initialize the Client object
	$client = new Client($config['sid'], $config['token-twilio']);

	// Strat sending text messages
	$success = false;
	$message = null;
	$status_code = 200;
	try {
		# Send to client
		$client->messages->create(
		    $_POST['contact_number'],
		    array(
		        'from' => $config['phone-twilio'],
		        'body' => "(lhm.com)\nThanks for visiting my website. The following are my contact information:\nemail: " . 
		        		  $config['email'] . "\nphone: +15197228665\nFeel free to contact me, and here are my mottos:\n" .
		        		  "1.Write clean and elegant code.\n2.Design with user in mind.\nBy the way, Any time is House time."
		    )
		);

		# Send to myself for reference
		$client->messages->create(
		    $config['phone-mobile'],
		    array(
		        'from' => $config['phone-twilio'],
		        'body' => "(lhm.com)\n" . $_POST['contact_number'] . ' sent text from my website.'
		    )
		);

		# Respond with status code 200 and success true if sms sent successfully
		$success = true;
		$message = 'Text sent';
	} catch (Exception $e) {
		# Respond with status code 400 and success false if sms sent unsuccessfully
		$message = $e->getMessage();
		$status_code = 400;
	}

	# Construct response
	$response = array('success' => $success, 'message' => $message);
	http_response_code($status_code);
	echo json_encode($response);
	return;
}

# The parameters are not satisfied -> return error and response with status code 406
http_response_code(406);
$response = array('success' => false, 'message' => 'Parameter missing');
echo json_encode($response);
return;

?>