<?php

$sURL = "http://textbelt.com/text"; // The POST URL
$sPD = "number=5197228665&message=hello"; // The POST Data
$aHTTP = array(
  'http' => // The wrapper to be used
    array(
    'method'  => 'POST', // Request Method
    // Request Headers Below
    'content' => $sPD
  )
);
$context = stream_context_create($aHTTP);
$contents = file_get_contents($sURL, false, $context);

echo $contents;

?>