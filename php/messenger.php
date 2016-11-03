<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  	$request_body = file_get_contents('php://input');
  	$request_json = json_decode($request_body, true);

    # Include necessary file
    $config = include('config.php');

  	# Function for sending messenger message
  	function send_messenger($recipient_id, $message, $token) {
  		$ch = curl_init('https://graph.facebook.com/me/messages?access_token=' . $token);

  		$body = array(
      		'recipient' => array( 'id' => $recipient_id ),
      		'message' => $message
        	);

    	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    	curl_setopt($ch, CURLOPT_POST, true);
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    	$response = curl_exec($ch);
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
                                              'subtitle' => 'Please share it if you enjoy. Cheers! (www.lhm.rocks)',
                                              'image_url' => 'https://lhm-website.herokuapp.com/assets/image/personal-website.png',
                                              'buttons' => array ( array('type' => 'element_share') )
                                              )
                                      )
                                  )
                            )
                        );
                    send_messenger($user_id, $message, $config['token-messenger']);

                # User message
          	    } else if (array_key_exists('message', $messaging)) {

                    # User attachment message (e.g. sticker, emoji, location)
                    if (array_key_exists('attachments', $messaging['message'])) {

                        foreach ($messaging['message']['attachments'] as $attachment) {

                            # Location attachment
                            if ($attachment['type'] == 'location') {
                                $lat = $attachment['payload']['coordinates']['lat'];
                                $long = $attachment['payload']['coordinates']['long'];
                                $message = null;

                                if ($lat > 43.3 && $lat < 44.3 && $long > -80 && $long < -79)
                                    $message = array('text' => 'Oh my god! You know me so well. Yes, I am in Toronto right now. Come and visit me :)');
                                else
                                    $message = array('text' => 'Unfortunately, you are wrong, I am not here.');
                                send_messenger($user_id, $message, $config['token-messenger']);
                                continue;
                            }

                            $sticker = array(
                                'http://i19.photobucket.com/albums/b155/akikoprism87/oie_transparent-35-1.png',
                                'http://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png',
                                'http://katloterzo.com/wp-content/uploads/2016/03/Donald-Trump.png'
                                );

                            $message = array(
                                'attachment' => array(
                                    'type' => 'image',
                                    'payload' => array( 'url' => $sticker[rand (0, 2)] )
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
                            case 'color_pink':
                                $message = array(
                                    'text' => 'Who am I?',
                                    'quick_replies' => array(
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'DJ',
                                            'payload' => 'i_am_dj'
                                            ),
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'Designer',
                                            'payload' => 'i_am_designer'
                                            ),
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'Developer',
                                            'payload' => 'i_am_developer'
                                            ),
                                        array(
                                            'content_type' => 'text',
                                            'title' => 'All of them',
                                            'payload' => 'i_am_all'
                                            )
                                        )
                                    );
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                            case 'i_am_all':
                                $message = array(
                                    'text' => 'Where am I?',
                                    'quick_replies' => array( array('content_type' => 'location') )
                                    );
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                            default:
                                $message = array('text' => 'Sorry, you are wrong. Seems like you don\'t know me too well :(');
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                        }

                    # User text message
                    } else if (array_key_exists('text', $messaging['message'])) {
                        switch (strtolower(trim($messaging['message']['text']))) {
                            case 'game':
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
                            case 'resume':
                                $message = array(
                                    'attachment' => array(
                                        'type' => 'file',
                                        'payload' => array('url' => 'https://lhm-website.herokuapp.com/assets/resume.pdf')
                                        )
                                    );
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                            case 'help':
                                $message = array('text' => 'Enter \'game\' to play guessing game. Enter \'resume\' to see my resume. ' .
                                                           'Enter \'help\' to see list of commands, which you are looking at right now :D');
                                send_messenger($user_id, $message, $config['token-messenger']);
                                break;
                            default:
                                $message = array(
                                    'attachment' => array(
                                        'type' => 'template',
                                        'payload' => array(
                                            'template_type' => 'button',
                                            'text' => 'What do you want to do next?',
                                            'buttons' => array(
                                                array(
                                                    'type' => 'postback',
                                                    'title' => 'Guessing game',
                                                    'payload' => 'guessing_game'
                                                    ),
                                                array(
                                                    'type' => 'postback',
                                                    'title' => 'See my resume',
                                                    'payload' => 'resume'
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
                                break;
                        }
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
                        case 'resume':
                            $message = array(
                                'attachment' => array(
                                    'type' => 'file',
                                    'payload' => array('url' => 'https://lhm-website.herokuapp.com/assets/resume.pdf')
                                    )
                                );
                            send_messenger($user_id, $message, $config['token-messenger']);
                            break;
                        case 'help':
                            $message = array('text' => 'Enter \'game\' to play guessing game. Enter \'resume\' to see my resume. ' .
                                                       'Enter \'help\' to see list of commands, which you are looking at right now :D');
                            send_messenger($user_id, $message, $config['token-messenger']);
                            break;
                        case 'get_started':
                            # Send website share
                            $message = array(
                                'attachment' => array(
                                    'type' => 'template',
                                    'payload' => array(
                                          'template_type' => 'generic',
                                          'elements' => array(
                                                  array(
                                                      'title' => 'Thank you for Opt in',
                                                      'subtitle' => 'Come and visit my website and share it if you enjoy. Cheers! (www.lhm.rocks)',
                                                      'image_url' => 'https://lhm-website.herokuapp.com/assets/image/personal-website.png',
                                                      'buttons' => array ( 
                                                            array('type' => 'element_share'), 
                                                            array(
                                                                'type' => 'web_url',
                                                                'url' => 'http://lhm.rocks',
                                                                'title' => 'See my website'
                                                                )
                                                            )   
                                                      )
                                              )
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

# Get request from Facebook -> webhook callback verification
echo $_GET['hub_challenge'];

?>