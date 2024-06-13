<?php
if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    $to = 'office@selidbeatlas.rs';
    $subject = 'Contact';
    $body = "Name: $name\r\n\nSurname: $surname\n\nE-mail: $email\n\nMessage: $message";

// More headers
    $headers = 'From: ' . $name . " " . $surname . ' <' . $email . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $name . " " . $surname . ' <' . $email . '>' . "\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
    $headers .= 'Content-Transfer-Encoding: 8bit' . "\r\n";
    if (mail($to, $subject, $body, $headers)) {
        $result = true;
    }

}
include 'index.html';
?>