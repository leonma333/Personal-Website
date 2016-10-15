<?php

echo $_POST['contact_name'] . "\n" . $_POST['contact_email'] . "\n" . $_POST['contact_msg'];

if (isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_msg'])) {
	$to      = 'leonma333@hotmail.com';
	$subject = 'Testing';
	$message = 'hello';

	$headers   = array();
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: Sender Name <leonma333@gmail.com>";
	$headers[] = "X-Mailer: PHP/".phpversion();

	echo implode("\r\n", $headers);

	if(mail($to, $subject, $message, implode("\r\n", $headers))) {
		echo 'SUCCESS';
	} else {
		echo 'FAILED';
	}
} else {
	echo 'Not Success';
}

?>