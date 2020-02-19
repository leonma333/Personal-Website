<?php

function decrypt($data) {
	$config = include('config.php');
    $privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" . wordwrap($config['private-key'], 64, "\n", true) . "\n-----END PRIVATE KEY-----";
    openssl_private_decrypt(base64_decode($data), $message, $privateKeyPem, OPENSSL_PKCS1_OAEP_PADDING);
    return $message;
}

?>
