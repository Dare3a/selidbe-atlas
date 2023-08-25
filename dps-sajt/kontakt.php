<?php
if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $razlog = $_POST['razlog'];
    $message = $_POST['message'];


    $to = 'darko.ilic83@gmail.com';
    $subject = 'Contact form';
    $body = "Ime: $name\r\n\nE-mail: $email\n\nRazlog: $razlog\n\nPoruka: $message";

// More headers
    $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
    if (mail($to, $subject, $body, $headers)) {
        $result = true;
    }

}
include 'index.html';
?>
