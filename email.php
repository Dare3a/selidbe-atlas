<?php

require 'PHPMailer/PHPMailerAutoload.php';

if (isset($_POST["name"]) && !empty($_POST["name"]) &&
    isset($_POST['surname']) && !empty($_POST['surname']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']) &&
    isset($_POST['message']) && !empty($_POST['message']) ) {

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $telefon = $_POST['telefon'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->Host = 'mail.darko.ilic83@gmail.com';
        $mail->Port = 465;
        $mail->Username = 'darko.ilic83@gmail.com'; // email
        $mail->Password = 'SelidbeAtlas'; //password
        $mail->IsHTML(TRUE);
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->SMTPSecure = 'ssl';
        $mail->SMTPAuth = true;
        $mail->SMTPDebug  = 0;
        $mail->addReplyTo($email, $name);
        $mail->WordWrap = 50;
        $mail->EmailHost = 'darko.ilic83@gmail.com';

        $mail->From = $email;
        $mail->FromName = $name;
        $mail->addAddress('darko.ilic83@gmail.com');
        $mail->Subject =  'Kontakt forma';
        $mail->Body = "<p>Ime: $name</p>
<p>Prezime: $surname</p>
<p>Email: $email</p>
<p>Broj telefona: $telefon</p>
<p>Poruka: $message</p>";

        $mail->send();

        $response['status'] = true;

        echo json_encode($response);

    } catch (Exception $e) {
        $response['status'] = false;

        echo json_encode($response);    }

} else {
    $response['status'] = false;
    $response['message'] = "Parametar missing";

    echo json_encode($response);
}
?>

