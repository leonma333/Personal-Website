<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  	$request_body = file_get_contents('php://input');
  	$request_json = json_decode($request_body, true);
  	error_log(print_r($request_json, true));

    # Include necessary file
    $config = include('config.php');

  	# Function for sending messenger message
  	function send_messenger($recipient_id, $message, $token) {
  		  $ch = curl_init('https://graph.facebook.com/me/messages?access_token=' . $token);

  		  $body = array(
      			'recipient' => array(
      					 'id' => $recipient_id
      				  ),
      			'message' => $message
        		);
        error_log(print_r($body, true));

    		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    		curl_setopt($ch, CURLOPT_POST, true);
    		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    		$response = curl_exec($ch);
        error_log(print_r($response, true));
    		curl_close($ch);
  	}

    # Page incomming message
    if ($request_json['object'] == 'page') {
        foreach ($request_json['entry'] as $entry) {
          	foreach ($entry['messaging'] as $messaging) {
          		  $user_id = $messaging['sender']['id'];

          		  # User opt in
          		  if ($messaging['optin']) {
                    $message = array(
                        'attachment' => array(
                            'type' => 'template',
                            'payload' => array(
                                  'template_type' => 'generic',
                                  'elements' => array(
                                          array(
                                              'title' => 'Thank you for visiting my Website',
                                              'subtitle' => 'Please share it if you enjoy. Cheers!',
                                              'image_url' => 'https://lhm-website.herokuapp.com/assets/image/personal-website.png',
                                              'buttons' => array (
                                                  array('type' => 'element_share')
                                                  )
                                              )
                                      )
                                  )
                            )
                        );
                    send_messenger($user_id, $message, $config['token-messenger']);
                    return;
          	    }
            }
        }
    }
}

error_log(print_r($_REQUEST, true));

# Get request from Facebook -> webhook callback verification
echo $_GET['hub_challenge'];

?>