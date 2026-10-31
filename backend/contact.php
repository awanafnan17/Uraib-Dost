<?php
/**
 * Buildora Projects - Contact Form Backend Handler
 * Handles JSON form submissions, parses details, and routes them via authenticated SMTP
 * (with fallback to local mail() if SMTP credentials are not configured or connection fails).
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// -------------------------------------------------------------
// 1. SMTP & Mail Configuration
// -------------------------------------------------------------
// You can edit these values directly, or create a file named "smtp_config.php"
// in the same directory to overwrite them securely.
$config = [
    "smtp_enabled" => true,
    "smtp_host"    => "mail.buildoraprojects.com",
    "smtp_port"    => 587, // 587 for STARTTLS, 465 for SMTPS, 25 for non-secure
    "smtp_secure"  => "tls", // "tls", "ssl", or "" (none)
    "smtp_user"    => "no-reply@buildoraprojects.com",
    "smtp_pass"    => "REPLACE_WITH_NO_REPLY_MAILBOX_PASSWORD",
    "to_email"     => "info@buildoraprojects.com",
    "from_email"   => "no-reply@buildoraprojects.com",
    "from_name"    => "Buildora Inquiry System"
];

// Load external config if exists (to avoid exposing password in Git repositories)
if (file_exists(__DIR__ . "/smtp_config.php")) {
    $externalConfig = include(__DIR__ . "/smtp_config.php");
    if (is_array($externalConfig)) {
        $config = array_merge($config, $externalConfig);
    }
}

// -------------------------------------------------------------
// 2. Parse and Validate Request
// -------------------------------------------------------------
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!$input) {
    $input = $_POST;
}

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON input"]);
    exit;
}

$name = isset($input['name']) ? trim(strip_tags($input['name'])) : '';
$email = isset($input['email']) ? trim(filter_var($input['email'], FILTER_VALIDATE_EMAIL)) : '';
$phone = isset($input['phone']) ? trim(strip_tags($input['phone'])) : '';
$projectType = isset($input['projectType']) ? trim(strip_tags($input['projectType'])) : 'General Inquiry';
$city = isset($input['city']) ? trim(strip_tags($input['city'])) : '';
$message = isset($input['message']) ? trim(strip_tags($input['message'])) : '';
$source = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'Direct link';
$date = date("Y-m-d H:i:s");

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Required fields (Name, Email, Message) are missing or invalid."]);
    exit;
}

// -------------------------------------------------------------
// 3. Build Email Template
// -------------------------------------------------------------
$subject = "New Buildora Website Inquiry";

$emailBody = "
<html>
<head>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
    .header { background: #0D0D0D; color: #FFFFFF; padding: 15px; text-align: center; border-radius: 6px 6px 0 0; }
    .header h2 { margin: 0; font-weight: 300; letter-spacing: 0.1em; }
    .field { margin-bottom: 12px; border-bottom: 1px solid #f9f9f9; padding-bottom: 8px; }
    .field-name { font-weight: bold; color: #555; text-transform: uppercase; font-size: 11px; tracking: 0.05em; }
    .field-value { margin-top: 4px; font-size: 14px; }
    .message-box { background: #fdfdfd; border-left: 3px solid #666; padding: 12px; margin-top: 15px; font-style: italic; }
    .footer { font-size: 11px; color: #888; text-align: center; margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>BUILDORA INQUIRY</h2>
    </div>
    <div style='padding: 20px 0;'>
      <div class='field'>
        <div class='field-name'>Visitor Name</div>
        <div class='field-value'>" . htmlspecialchars($name) . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>Email Address</div>
        <div class='field-value'>" . htmlspecialchars($email) . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>Phone Number</div>
        <div class='field-value'>" . htmlspecialchars($phone ?: 'Not provided') . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>Selected Service / Project Type</div>
        <div class='field-value'>" . htmlspecialchars($projectType) . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>City</div>
        <div class='field-value'>" . htmlspecialchars($city ?: 'Not provided') . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>Submission Date/Time</div>
        <div class='field-value'>" . htmlspecialchars($date) . "</div>
      </div>
      <div class='field'>
        <div class='field-name'>Source Page URL</div>
        <div class='field-value'>" . htmlspecialchars($source) . "</div>
      </div>
      
      <div class='field' style='border: none;'>
        <div class='field-name'>Message / Project Details</div>
        <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
      </div>
    </div>
    <div class='footer'>
      This inquiry was sent automatically from the Buildora website contact form.
    </div>
  </div>
</body>
</html>
";

// -------------------------------------------------------------
// 4. Send Email
// -------------------------------------------------------------
$sent = false;
$errorMsg = "";

if ($config["smtp_enabled"] && $config["smtp_pass"] !== "REPLACE_WITH_NO_REPLY_MAILBOX_PASSWORD") {
    // Attempt sending via Authenticated SMTP client
    try {
        $sent = send_smtp(
            $config["smtp_host"],
            $config["smtp_port"],
            $config["smtp_secure"],
            $config["smtp_user"],
            $config["smtp_pass"],
            $config["to_email"],
            $config["from_email"],
            $config["from_name"],
            $email, // Reply-To visitor email
            $subject,
            $emailBody
        );
    } catch (Exception $e) {
        $errorMsg = "SMTP Exception: " . $e->getMessage();
    }
}

if (!$sent) {
    // Fallback to local PHP mail()
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $config["from_name"] . " <" . $config["from_email"] . ">\r\n";
    $headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    $sent = @mail($config["to_email"], $subject, $emailBody, $headers);
    if (!$sent) {
        $errorMsg = $errorMsg ?: "Local php mail() returned false.";
    }
}

// -------------------------------------------------------------
// 5. Return Response
// -------------------------------------------------------------
if ($sent) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Thank you. Your inquiry has been received."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Mail delivery failed.", "details" => $errorMsg]);
}

// -------------------------------------------------------------
// Helper: Raw Socket SMTP Client (No dependencies)
// -------------------------------------------------------------
function send_smtp($host, $port, $secure, $user, $pass, $to, $from, $from_name, $reply_to, $subject, $body) {
    $timeout = 10;
    
    // Choose protocol prefix
    $protocol = "";
    if (strtolower($secure) === "ssl") {
        $protocol = "ssl://";
    }
    
    $socket = fsockopen($protocol . $host, $port, $errno, $errstr, $timeout);
    if (!$socket) {
        throw new Exception("Could not connect to SMTP server: $errstr ($errno)");
    }
    
    read_server($socket); // read banner
    
    // Talk to server
    send_cmd($socket, "EHLO " . $_SERVER['SERVER_NAME']);
    
    // If using TLS, upgrade socket connection
    if (strtolower($secure) === "tls") {
        send_cmd($socket, "STARTTLS");
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_ANY_CLIENT)) {
            throw new Exception("STARTTLS handshake failed.");
        }
        // Send EHLO again after upgrading to TLS
        send_cmd($socket, "EHLO " . $_SERVER['SERVER_NAME']);
    }
    
    // Authenticate
    send_cmd($socket, "AUTH LOGIN");
    send_cmd($socket, base64_encode($user));
    send_cmd($socket, base64_encode($pass));
    
    // Mail envelope
    send_cmd($socket, "MAIL FROM:<" . $from . ">");
    send_cmd($socket, "RCPT TO:<" . $to . ">");
    
    // Send data
    send_cmd($socket, "DATA");
    
    // Construct MIME headers and body
    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "Subject: " . $subject,
        "From: " . $from_name . " <" . $from . ">",
        "To: <" . $to . ">",
        "Reply-To: <" . $reply_to . ">",
        "Date: " . date("r"),
        "Message-ID: <" . md5(uniqid()) . "@" . $host . ">",
        "X-Mailer: Buildora SMTP Client"
    ];
    
    $data = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    send_cmd($socket, $data);
    
    send_cmd($socket, "QUIT");
    fclose($socket);
    return true;
}

function read_server($socket) {
    $data = "";
    while ($str = fgets($socket, 515)) {
        $data .= $str;
        if (substr($str, 3, 1) === " ") {
            break;
        }
    }
    return $data;
}

function send_cmd($socket, $cmd) {
    fwrite($socket, $cmd . "\r\n");
    $resp = read_server($socket);
    $code = substr($resp, 0, 3);
    
    // Normal positive responses are 200, 220, 221, 235, 250, 334, 354
    if (!in_array($code, ["200", "220", "221", "235", "250", "334", "354"])) {
        throw new Exception("SMTP Error: Command '$cmd' failed with server response: $resp");
    }
    return $resp;
}
