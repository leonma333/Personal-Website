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
	$validation_code = 0;
	$status_code = 200;
	try {
		# Send to client
		$client->messages->create(
			$_POST['contact_number'],
			array(
			    'from' => $config['phone-twilio'],
			    'body' => "(lhm.rocks)\nThanks for visiting my website. The following are my contact information:\nemail: " . $config['hotmail'] . "\nphone: " . $config['phone-mobile'] . "\nFeel free to contact me, and here are my words for you:\n" . "1.Write clean and elegant code.\n2.Design with user in mind.\nBy the way, Any time is House time."
			)
		);

		# Send to myself for reference
		$client->messages->create(
			$config['phone-mobile'],
			array(
			    'from' => $config['phone-twilio'],
			    'body' => "(lhm.rocks)\n" . $_POST['contact_number'] . ' sent text from my website.'
			)
		);

		# Respond with status code 200 and success true if sms sent successfully
		$success = true;
		$message = 'Text sent';
	} catch (Exception $e) {
		if ($e->getCode() == 21608) {
			# Verifiy the number to Twilio
			$validationRequest = $client->validationRequests->create(
				$_POST['contact_number'],
				array("friendlyName" => "Visitor's number from lhm.rocks")
			);

			# Response with status code 401 and sucess false if phone number is not yet been verified
			$message = 'Please enter the validation code "' . $validationRequest->validationCode . '" to the incoming call in order to verify the phone number. Only the number is verified, I am able to send you the message. Thank you for your cooperation.';
			$status_code = 401;
			$validation_code = $validationRequest->validationCode;
		} else {
			# Respond with status code 400 and success false if sms sent unsuccessfully
			$message = $e->getMessage();
			$status_code = 400;
		}
	}

	# Construct response
	$response = array('success' => $success, 'message' => $message);
	if ($validation_code != 0) $response['validation_code'] = $validation_code;
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