<?php

# set response header to json object
header('Content-type: application/json');

# only send the email if all parameters are satisfied
if (isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_msg'])) {
	$to      = 'leonma333@hotmail.com';
	$subject = 'Testing';
	$message = 'hello';

	$headers   = array();
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: leonma333@gmail.com";
	$headers[] = "X-Mailer: PHP/".phpversion();

	if(mail($to, $subject, $message, implode("\r\n", $headers))) {
		$response = array('success' => true, 'message' => 'Email sent');
		http_response_code(200);
		echo json_encode($response);
		return;
	}

	$response = array('success' => false, 'message' => 'Error occurs while sending message');
	http_response_code(400);
	echo json_encode($response);
	return;
} 

# the parameters are not satisfied -> return error
http_response_code(406);
$response = array('success' => false, 'message' => 'Parameter missing');
echo json_encode($response);
return;

?>