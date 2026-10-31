<?php
/**
 * SMTP Configuration Overwrite File (Sample)
 * Copy this file to "smtp_config.php" in the same directory and fill in your password.
 * Do not commit "smtp_config.php" containing your real credentials.
 */

return [
    "smtp_enabled" => true,
    "smtp_host"    => "mail.buildoraprojects.com",
    "smtp_port"    => 587,             // 587 (TLS), 465 (SSL), or 25 (non-secure)
    "smtp_secure"  => "tls",           // "tls", "ssl", or "" (none)
    "smtp_user"    => "no-reply@buildoraprojects.com",
    "smtp_pass"    => "YOUR_NO_REPLY_MAILBOX_PASSWORD_HERE",
    "to_email"     => "info@buildoraprojects.com",
    "from_email"   => "no-reply@buildoraprojects.com",
];
