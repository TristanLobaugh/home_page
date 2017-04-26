<?php
      
      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);

      $url = 'https://www.google.com/recaptcha/api/siteverify';
      $privatekey = "--- Key ---";
      $response = file_get_contents($url."?secret=".$privatekey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);
      $data = json_decode($response);

      if(isset($data->success) AND $data->success==true){
            require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
            $mail = new PHPMailer(); // defaults to using php "mail()"
            $body = $_POST['message'];
            $mail->AddReplyTo($_POST['email'],$_POST['name']);
            $mail->SetFrom('hello@tristanlobaugh.com');
            $mail->AddAddress("ttrader_atl@yahoo.com", "Tristan Lobaugh");
            $mail->Subject    = "Message from TristanLobaugh.com";
            $mail->MsgHTML("Message From: " . $_POST['name'] . "  | Email: " . $_POST['email'] . " | Phone: " . $_POST['phone'] . " | "  . $body);

            if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
            } else {
            echo "Message sent!";
            }
            header('location: /#contact?CaptchaPass=True');
      }else{
            header('location: /#contact?CaptchaFail=True');
      }

?>