<?php
$name = $_POST['name'];
$telefon = $_POST['telefon'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$to = "stepan.nekut@volny.cz, stepan.nekut@gmail.com";

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
    <title>Danke</title>
    <style>
        body {
            font-family: Calibri, sans-serif;;
            background-color: #faf8f2;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            letter-spacing: 1px;
        }
        h1 {
            color: #000080;
            font-size: 2.5rem;
        }
        p {
            font-size: 1.2rem;
        }
        span {
            font-weight: bold;
            font-size: 1.5rem;
        }

    </style>
    </head>
    <body>
    <h1>Vielen Dank für Ihre Nachricht!</h1>
    <p>Ich melde mich sobald wie möglich zurück. <br>
    <span>Stepan Nekut</span></p>
    </body>
    </html>
    <?php
    
    } else {
    
    ?><html>
    <head>
    <title>Something went wrong</title>
    <style>
        body {
            font-family: Calibri, sans-serif;;
            background-color: #faf8f2;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            letter-spacing: 1px;
        }
        h1 {
            color: #000080;
            font-size: 2.5rem;
        }
        p {
            font-size: 1.2rem;
        }
        span {
            font-weight: bold;
            font-size: 1.5rem;
        }

    </style>

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

    