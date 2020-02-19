<?php

# Get necessary files
require 'phpmailer/PHPMailerAutoload.php';
require 'rsa.php';
$config = include('config.php');

# Set response header to json object
header('Content-type: application/json');

# Only send the email if all parameters are satisfied
if (isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_msg']) &&
    strpos($_SERVER['HTTP_ORIGIN'], 'lhm.rocks') !== false) {

    $contact_name = decrypt($_POST['contact_name']);
    $contact_email = decrypt($_POST['contact_email']);
    $contact_msg = decrypt($_POST['contact_msg']);

    # Initialize PHPMailer
    $mail = new PHPMailer(true);

    # Email set up
    $mail->isSMTP();
    $mail->Host = 'smtp.zoho.com';
    $mail->SMTPAuth = true;
    $mail->Username = $config['zoho'];
    $mail->Password = $config['email-password'];
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($config['zoho']);
    $mail->addAddress($config['hotmail'], 'Liang-Husan Ma');
    $mail->addCC($contact_email, $contact_name);
    $mail->isHTML(true);

    $mail->Subject = $contact_name . ' sent Liang-Husan Ma an email via Liang-Hsuan\'s website.';
    $mail->Body = '<b>Sender email is:</b> ' . $contact_email . '<br/><br/><b>The message is:</b><br/>' . $contact_msg .
                  '<br/><br/>Thank you for visiting my website. Here are my words for you:<br/><ol><li>Be a constant learner.</li>' .
                  '<li>Write clean and strong code</li><li><strong>Any time is House time.</strong></li></ol><br/><img src="https://lhm-website.herokuapp.com/assets/image/favicon-96x96.png">';

    # Start sending email
    $success = false;
    $message = null;
    $status_code = 200;
    try {
        $mail->send();

        # Respond with status code 200 and success true if email sent successfully
        $success = true;
        $message = 'Email sent';
    } catch (Exception $e) {
        # Respond with status code 400 and success false if email sent unsuccessfully
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
