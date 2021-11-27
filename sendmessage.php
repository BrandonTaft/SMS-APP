<?php 
 
// Update the path below to your autoload.php, 
// see https://getcomposer.org/doc/01-basic-usage.md 
require_once '/path/to/vendor/autoload.php'; 
 
use Twilio\Rest\Client; 
 
$sid    = "ACbe4024aee11782a501d5eb49459594f2"; 
$token  = "[AuthToken]"; 
$twilio = new Client($sid, $token); 
 
$message = $twilio->messages 
                  ->create("+17706346786", // to 
                           array(  
                               "messagingServiceSid" => "MGdfed4751deba59947b1822e2bdeb242b",      
                               "body" => "hey" 
                           ) 
                  ); 
 
print($message->sid);