<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	return;
}

# Get request from Facebook -> webhook callback verification
echo $_GET['hub.challenge'];

?>