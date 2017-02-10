<?php
      
      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);

      $_POST['name'] = "Rob";
      $_POST['email'] = "rob@digitalcrafts.com";
      $body = "Hi, from Tristan";

      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $body = $_POST['message'];
      $mail->AddReplyTo($_POST['email'],$_POST['name']);
      $mail->SetFrom('hello@tristanlobaugh.com');
      $mail->AddAddress("ttrader_atl@yahoo.com", "Tristan Lobaugh");
      $mail->Subject    = "Message from TristanLobaugh.com";
      $mail->MsgHTML("Message From: " . $_POST['name'] . "  | Email: " . $_POST['email'] . " | "  . $body);

      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      echo "Message sent!";
      }
      exit;
      header('location: /#contact');

?>