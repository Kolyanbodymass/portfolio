<?php

/* https://api.telegram.org/bot1329784888:AAH1QjLOV-w5qkj3iuJc1kN9VJAExKRj1IQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$token = "1329784888:AAH1QjLOV-w5qkj3iuJc1kN9VJAExKRj1IQ";
$chat_id = "-355624147";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email' => $email,
  'Сообщение: ' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return false;
} else {
  return true;
}
?>