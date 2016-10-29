<?php

# get necessary files
require 'phpmailer/PHPMailerAutoload.php';
$config = include('config.php');

# set response header to json object
header('Content-type: application/json');

# only send the email if all parameters are satisfied
if (isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_msg'])) {

	# Initialize PHPMailer
	$mail = new PHPMailer(true);

	# email set up
	$mail->isSMTP();                                
	$mail->Host = 'smtp.live.com';  
	$mail->SMTPAuth = true;                              
	$mail->Username = $config['email'];               
	$mail->Password = $config['email-password'];                          
	$mail->SMTPSecure = 'tls';                            
	$mail->Port = 587;                                    

	$mail->setFrom($config['email']);
	$mail->addAddress($config['email'], 'Liang-Husan Ma');  
	$mail->addCC($_POST['contact_email'], $_POST['contact_name']);  
	$mail->isHTML(true);                                  

	$mail->Subject = $_POST['contact_name'] . ' sent Liang-Husan Ma an email via Liang-Hsuan\'s website.';
	$mail->Body = '<b>Sender email is:</b> ' . $_POST['contact_email'] . '<br/><br/><b>The message is:</b><br/>' . $_POST['contact_msg'] .
				  '<br/><br/>Thank you for visiting my website. Here are my words for you:<br/><ol><li>Write clean and elegant code.</li>' .
				  '<li>Design with user in mind</li><li><strong>Any time is House time.</strong></li></ol><br/><img src="https://lhm-website.herokuapp.com/favicon-96x96.png">';

	# start sending email
	$success = false;
	$message = null;
	$status_code = 200;
	try {
	    $mail->send();

	    # respond with status code 200 and success true if email sent successfully
	    $success = true;
	    $message = 'Email sent';
	} catch (Exception $e) {
		# respond with status code 400 and success false if email sent unsuccessfully
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