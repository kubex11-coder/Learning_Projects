<?php
$name = $_POST['name'];
$telefon = $_POST['telefon'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$to = "stepan.nekut@volny.cz";

$final_message = "Obdržel jste zprávu od uživatele $name \n".
"S telefonním číslem: $telefon \n".
"Text zprávy: $message \n".

// function filter_email_header($form_field) {  
//     return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
//     }

// $email_address  = filter_email_header($email_address);

$headers = "From: $email_address";
$sent = mail($to, 'Zpráva z formuláře - Stepannekut.eu', $final_message, $headers);

#Thank user or notify them of a problem
if ($sent) {

    ?><html>
    <head>
    <title>Děkujeme za zprávu</title>
    <style>
        body {
        text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    </style>
    </head>
    <body>
    <h1>Děkuji za Vaši zprávu!</h1>
    <p>Ozvu se Vám co nejdříve. <br>
    Štěpán Nekut</p>
    </body>
    </html>
    <?php
    
    } else {
    
    ?><html>
    <head>
    <title>Something went wrong</title>
    <style>
        body {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    </style>
    </head>
    <body>
    <h1>Something went wrong</h1>
    <p>We could not send your feedback. Please try again.</p>
    </body>
    </html>
    <?php
    }
    ?>

    