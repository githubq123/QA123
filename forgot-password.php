<?php
include 'index.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // For simplicity, this example just echoes the email.
    // In real applications, you'd send a password reset link to the user's email.
    echo "Password reset link sent to: " . $email;

    // Normally, you would use a mail function to send a reset link.
    // e.g., mail($email, "Password Reset", "Click here to reset your password...");
}
?>
