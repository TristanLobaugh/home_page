<?php

      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $body = $_POST['message'];
      $mail->AddReplyTo($_POST['email'],$_POST['name']);
      $mail->SetFrom($_POST['email'],$_POST['name']);
      $mail->AddAddress("ttrader_atl@yahoo.com", "Tristan Lobaugh");
      $mail->Subject    = "Message from TristanLobaugh.com";
      $mail->MsgHTML("Message: " . $body);

      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      echo "Message sent!";
      }

?>