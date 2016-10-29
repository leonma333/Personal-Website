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
          		  if (array_key_exists('optin', $messaging)) {

                    # Send website share
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

                # User message
          	    } else if (array_key_exists('message', $messaging)) {

                    # User attachment message (e.g. sticker, emoji)
                    if (array_key_exists('attachments', $messaging['message'])) {

                        # Send sticker
                        foreach ($messaging['message']['attachments'] as $attachment) {
                            $sticker = array(
                                'http://i19.photobucket.com/albums/b155/akikoprism87/oie_transparent-35-1.png',
                                'http://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png',
                                'http://katloterzo.com/wp-content/uploads/2016/03/Donald-Trump.png'
                                );


                            $message = array(
                                'attachment' => array(
                                    'type' => 'image',
                                    'payload' => array(
                                        'url' => $sticker[rand (0, 2)]
                                        )
                                    )
                                );
                            send_messenger($user_id, $message, $config['token-messenger']);
                        }

                    # User quick reply
                    } else if (array_key_exists('quick_reply', $messaging['message'])) {
                        $payload = $messaging['message']['quick_reply']['payload'];

                        switch($payload) {
                            case 'age_19':
                                $message = array(
                                    'text' => 'What is my favorite color?',
                                    'quick_replies' => array(
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'Pink',
                                            'payload' => 'color_pink'
                                            ),
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'Blue',
                                            'payload' => 'color_blue'
                                            ),
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'Red',
                                            'payload' => 'color_red'
                                            )
                                        )
                                    );
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                            default:
                                $message = array('text' => 'Sorry, you are wrong.');
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                        }

                    # User text message
                    } else {
                        $message = array(
                            'attachment' => array(
                                'type' => 'template',
                                'payload' => array(
                                    'template_type' => 'button',
                                    'text' => 'What do you want to do next?',
                                    'buttons' => array(
                                        array(
                                            'type' => 'web_url',
                                            'url' => 'http://www.lhm.rocks',
                                            'title' => 'See my website'
                                            ),
                                        array(
                                            'type' => 'postback',
                                            'title' => 'Guessing game',
                                            'payload' => 'guessing_game'
                                            ),
                                        array(
                                            'type' => 'phone_number',
                                            'title' => 'Call me',
                                            'payload' => $config['phone-mobile']
                                            )
                                        )
                                )
                            )
                        );
                        send_messenger($user_id, $message, $config['token-messenger']);
                    }

                # Messenger postback
                } else if (array_key_exists('postback', $messaging)) {
                    $postback = $messaging['postback']['payload'];

                    switch ($postback) {
                        case 'guessing_game':
                            $message = array(
                                'text' => 'How old am I?',
                                'quick_replies' => array(
                                    array(
                                        'content_type' => 'text',
                                        'title' => '18',
                                        'payload' => 'age_18'
                                        ),
                                    array(
                                        'content_type' => 'text',
                                        'title' => '19',
                                        'payload' => 'age_19'
                                        ),
                                    array(
                                        'content_type' => 'text',
                                        'title' => '20',
                                        'payload' => 'age_20'
                                        )
                                    )
                                );
                            send_messenger($user_id, $message, $config['token-messenger']);
                            break;
                    }
                }
            }
        }
    }

    return;
}

error_log(print_r($_REQUEST, true));

# Get request from Facebook -> webhook callback verification
echo $_GET['hub_challenge'];

?>