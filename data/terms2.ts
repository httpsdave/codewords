import { Term } from "./terms";

export const securityTerms: Term[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Security",
    definition: "The practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, and damage. It encompasses technologies, processes, and practices designed to defend computers, networks, and data from attack.",
    example: "Implementing firewalls, encryption, multi-factor authentication, and security monitoring to protect an organization's digital assets.",
    relatedTerms: ["encryption", "firewall", "authentication", "vulnerability"]
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    category: "Security",
    definition: "A simulated cyber attack against a computer system to check for exploitable vulnerabilities. It involves actively probing systems to find security weaknesses before malicious actors can exploit them.",
    example: "A security team attempts to hack into the company's network using the same tools and techniques as real attackers to identify security gaps.",
    relatedTerms: ["vulnerability", "security-audit", "ethical-hacking", "exploit"]
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    category: "Security",
    definition: "The practice of intentionally probing systems and networks for security vulnerabilities with permission from the owner. Ethical hackers use the same techniques as malicious hackers but for defensive purposes.",
    example: "A certified ethical hacker (CEH) is hired to test a company's security infrastructure and provide recommendations for improvements.",
    relatedTerms: ["penetration-testing", "vulnerability", "security-audit", "white-hat"]
  },
  {
    id: "white-hat-hacker",
    title: "White Hat Hacker",
    category: "Security",
    definition: "A security professional who uses their hacking skills for defensive purposes, working to identify and fix security vulnerabilities. They operate with permission and follow ethical guidelines.",
    example: "White hat hackers participate in bug bounty programs to help companies discover security flaws in their applications.",
    relatedTerms: ["ethical-hacking", "black-hat-hacker", "penetration-testing", "security"]
  },
  {
    id: "black-hat-hacker",
    title: "Black Hat Hacker",
    category: "Security",
    definition: "A malicious hacker who exploits security vulnerabilities for personal gain, causing harm, or engaging in illegal activities. They break into systems without authorization.",
    example: "Black hat hackers steal credit card information from e-commerce databases or deploy ransomware for financial gain.",
    relatedTerms: ["white-hat-hacker", "cybercrime", "malware", "hacking"]
  },
  {
    id: "gray-hat-hacker",
    title: "Gray Hat Hacker",
    category: "Security",
    definition: "A hacker who operates between ethical and malicious hacking. They may find vulnerabilities without permission but don't exploit them for personal gain, often disclosing them to the owner.",
    example: "A gray hat hacker discovers a vulnerability in a website, reports it to the company without asking for permission first, and requests a reward.",
    relatedTerms: ["white-hat-hacker", "black-hat-hacker", "vulnerability-disclosure"]
  },
  {
    id: "vulnerability",
    title: "Vulnerability",
    category: "Security",
    definition: "A weakness or flaw in a system, application, or network that can be exploited by attackers to gain unauthorized access or cause harm. Vulnerabilities can exist in software, hardware, or processes.",
    example: "SQL injection, buffer overflow, and unpatched software are common vulnerabilities that attackers can exploit.",
    relatedTerms: ["exploit", "patch", "cve", "security"]
  },
  {
    id: "exploit",
    title: "Exploit",
    category: "Security",
    definition: "A piece of code, technique, or sequence of commands that takes advantage of a vulnerability to cause unintended behavior or gain unauthorized access to a system.",
    example: "An exploit might leverage a buffer overflow vulnerability to execute arbitrary code with elevated privileges.",
    relatedTerms: ["vulnerability", "zero-day", "payload", "attack-vector"]
  },
  {
    id: "zero-day",
    title: "Zero-Day Vulnerability",
    category: "Security",
    definition: "A software vulnerability that is unknown to the vendor or has no available patch. The term 'zero-day' refers to the fact that developers have zero days to fix it before it can be exploited.",
    example: "Attackers discover and exploit a zero-day vulnerability in a popular browser before the vendor becomes aware of the issue.",
    relatedTerms: ["vulnerability", "exploit", "patch", "cve"]
  },
  {
    id: "cve",
    title: "CVE (Common Vulnerabilities and Exposures)",
    category: "Security",
    definition: "A standardized identifier for publicly known cybersecurity vulnerabilities. CVE IDs provide a common naming scheme for security issues, making it easier to share information across different tools and databases.",
    example: "CVE-2021-44228 is the identifier for the Log4Shell vulnerability that affected Java applications worldwide.",
    relatedTerms: ["vulnerability", "nvd", "security", "patch"]
  },
  {
    id: "patch",
    title: "Security Patch",
    category: "Security",
    definition: "A software update designed to fix security vulnerabilities, bugs, or improve functionality. Patches are critical for maintaining system security and should be applied promptly.",
    example: "Microsoft releases security patches on 'Patch Tuesday' each month to address vulnerabilities in Windows and other products.",
    relatedTerms: ["vulnerability", "update", "hotfix", "security"]
  },
  {
    id: "firewall",
    title: "Firewall",
    category: "Security",
    definition: "A network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between trusted and untrusted networks.",
    example: "A corporate firewall blocks unauthorized access from the internet while allowing employees to access approved external resources.",
    relatedTerms: ["network-security", "packet-filtering", "dmz", "security"]
  },
  {
    id: "ids",
    title: "IDS (Intrusion Detection System)",
    category: "Security",
    definition: "A security tool that monitors network traffic and system activities for malicious activities or policy violations. It alerts administrators when suspicious behavior is detected.",
    example: "An IDS detects unusual network traffic patterns that may indicate a DDoS attack and sends an alert to the security team.",
    relatedTerms: ["ips", "firewall", "siem", "network-security"]
  },
  {
    id: "ips",
    title: "IPS (Intrusion Prevention System)",
    category: "Security",
    definition: "A network security tool that continuously monitors network traffic to detect and prevent vulnerability exploits. Unlike IDS, it can actively block or reject malicious traffic.",
    example: "An IPS automatically drops packets from an IP address that is attempting SQL injection attacks.",
    relatedTerms: ["ids", "firewall", "network-security", "threat-prevention"]
  },
  {
    id: "siem",
    title: "SIEM (Security Information and Event Management)",
    category: "Security",
    definition: "A solution that provides real-time analysis of security alerts generated by applications and network hardware. It combines security information management (SIM) and security event management (SEM) into one system.",
    example: "A SIEM system aggregates logs from firewalls, servers, and applications to detect coordinated attacks across the network.",
    relatedTerms: ["log-analysis", "security-monitoring", "incident-response", "threat-detection"]
  },
  {
    id: "malware",
    title: "Malware",
    category: "Security",
    definition: "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems. It includes viruses, worms, trojans, ransomware, spyware, and adware.",
    example: "Common malware includes ransomware that encrypts files and demands payment, or trojans that appear legitimate but contain hidden malicious code.",
    relatedTerms: ["virus", "trojan", "ransomware", "spyware"]
  },
  {
    id: "virus",
    title: "Computer Virus",
    category: "Security",
    definition: "A type of malware that attaches itself to legitimate programs or files and spreads when the infected file is executed. Viruses can replicate themselves and spread to other systems.",
    example: "The ILOVEYOU virus spread through email attachments in 2000, affecting millions of computers worldwide.",
    relatedTerms: ["malware", "worm", "trojan", "antivirus"]
  },
  {
    id: "worm",
    title: "Computer Worm",
    category: "Security",
    definition: "A self-replicating malware that spreads across networks without requiring human interaction or host files. Worms exploit network vulnerabilities to propagate automatically.",
    example: "The WannaCry worm exploited Windows vulnerabilities to spread rapidly across networks and deploy ransomware.",
    relatedTerms: ["malware", "virus", "ransomware", "network-attack"]
  },
  {
    id: "trojan",
    title: "Trojan Horse",
    category: "Security",
    definition: "Malware disguised as legitimate software that tricks users into installing it. Once activated, it can perform malicious activities like stealing data, creating backdoors, or downloading additional malware.",
    example: "A trojan might appear as a useful utility program but secretly logs keystrokes to steal passwords and credit card information.",
    relatedTerms: ["malware", "backdoor", "remote-access-trojan", "social-engineering"]
  },
  {
    id: "ransomware",
    title: "Ransomware",
    category: "Security",
    definition: "Malware that encrypts a victim's files or locks their system, demanding payment (usually in cryptocurrency) to restore access. It's one of the most dangerous and costly cyber threats.",
    example: "The Colonial Pipeline ransomware attack in 2021 disrupted fuel supply across the US East Coast and resulted in a $4.4 million ransom payment.",
    relatedTerms: ["malware", "encryption", "cybercrime", "backup"]
  },
  {
    id: "spyware",
    title: "Spyware",
    category: "Security",
    definition: "Malware that secretly monitors and collects information about a user's activities without their knowledge. It can track browsing habits, steal credentials, or record keystrokes.",
    example: "Spyware installed on a computer logs all usernames and passwords entered, sending the data to attackers.",
    relatedTerms: ["malware", "keylogger", "adware", "privacy"]
  },
  {
    id: "keylogger",
    title: "Keylogger",
    category: "Security",
    definition: "Software or hardware that records every keystroke made on a computer, often used to steal passwords, credit card numbers, and other sensitive information.",
    example: "Attackers install a keylogger on a public computer to capture login credentials from unsuspecting users.",
    relatedTerms: ["spyware", "malware", "credential-theft", "monitoring"]
  },
  {
    id: "adware",
    title: "Adware",
    category: "Security",
    definition: "Software that automatically displays or downloads advertising material when a user is online. While not always malicious, it can compromise privacy and system performance.",
    example: "Free software bundled with adware that displays pop-up advertisements and tracks browsing behavior.",
    relatedTerms: ["spyware", "malware", "pup", "browser-hijacker"]
  },
  {
    id: "rootkit",
    title: "Rootkit",
    category: "Security",
    definition: "A collection of malicious software tools that enable unauthorized access to a computer while hiding its presence. Rootkits can modify the operating system to conceal malicious processes.",
    example: "A rootkit hides malware processes from antivirus software and system monitoring tools, making detection extremely difficult.",
    relatedTerms: ["malware", "stealth", "kernel-mode", "backdoor"]
  },
  {
    id: "backdoor",
    title: "Backdoor",
    category: "Security",
    definition: "A hidden method of bypassing normal authentication or security controls to access a system. Backdoors can be intentionally built into software or installed by malware.",
    example: "Attackers install a backdoor after compromising a system, allowing them to regain access even if the initial vulnerability is patched.",
    relatedTerms: ["trojan", "remote-access", "unauthorized-access", "security"]
  },
  {
    id: "botnet",
    title: "Botnet",
    category: "Security",
    definition: "A network of compromised computers (bots or zombies) controlled by an attacker. Botnets are used to launch coordinated attacks, send spam, or mine cryptocurrency.",
    example: "The Mirai botnet infected IoT devices to launch massive DDoS attacks against major websites in 2016.",
    relatedTerms: ["ddos", "malware", "command-and-control", "zombie"]
  },
  {
    id: "ddos",
    title: "DDoS (Distributed Denial of Service)",
    category: "Security",
    definition: "A cyber attack that overwhelms a target system, server, or network with a flood of traffic from multiple sources, making it unavailable to legitimate users.",
    example: "Attackers use a botnet to flood a website with millions of requests, causing it to crash and become inaccessible.",
    relatedTerms: ["dos", "botnet", "cyber-attack", "traffic-flood"]
  },
  {
    id: "dos",
    title: "DoS (Denial of Service)",
    category: "Security",
    definition: "A cyber attack that attempts to make a system or network resource unavailable by overwhelming it with requests from a single source. Unlike DDoS, it originates from one location.",
    example: "An attacker sends a large volume of packets to a server, consuming all available bandwidth and preventing legitimate access.",
    relatedTerms: ["ddos", "cyber-attack", "availability", "attack"]
  },
  {
    id: "man-in-the-middle",
    title: "Man-in-the-Middle (MitM) Attack",
    category: "Security",
    definition: "A cyber attack where an attacker secretly intercepts and potentially alters communication between two parties who believe they are directly communicating with each other.",
    example: "On an unsecured Wi-Fi network, an attacker intercepts traffic between a user and a banking website to steal login credentials.",
    relatedTerms: ["eavesdropping", "session-hijacking", "ssl-stripping", "network-attack"]
  },
  {
    id: "session-hijacking",
    title: "Session Hijacking",
    category: "Security",
    definition: "An attack where an attacker takes over a valid user session by stealing or predicting the session token. This allows unauthorized access to the user's account without needing credentials.",
    example: "An attacker captures a session cookie over an unencrypted connection and uses it to impersonate the victim on a website.",
    relatedTerms: ["man-in-the-middle", "cookie-theft", "xss", "csrf"]
  },
  {
    id: "sql-injection",
    title: "SQL Injection",
    category: "Security",
    definition: "A code injection attack that exploits security vulnerabilities in an application's database layer. Attackers insert malicious SQL code into input fields to manipulate database queries.",
    example: "Entering ' OR '1'='1' -- in a login form to bypass authentication by manipulating the SQL query.",
    relatedTerms: ["injection-attack", "database", "web-vulnerability", "owasp"]
  },
  {
    id: "xss",
    title: "XSS (Cross-Site Scripting)",
    category: "Security",
    definition: "A web security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. The browser executes the script, potentially stealing data or hijacking sessions.",
    example: "An attacker posts a comment containing JavaScript that steals cookies when other users view the comment.",
    relatedTerms: ["injection-attack", "web-vulnerability", "csrf", "dom"]
  },
  {
    id: "csrf",
    title: "CSRF (Cross-Site Request Forgery)",
    category: "Security",
    definition: "An attack that forces an authenticated user to execute unwanted actions on a web application. The attacker tricks the user's browser into sending malicious requests using the user's credentials.",
    example: "A malicious email contains a hidden image tag that triggers a bank transfer when opened by a logged-in user.",
    relatedTerms: ["xss", "web-vulnerability", "session-attack", "token"]
  },
  {
    id: "injection-attack",
    title: "Injection Attack",
    category: "Security",
    definition: "A class of attacks where untrusted data is sent to an interpreter as part of a command or query. This can trick the interpreter into executing unintended commands or accessing unauthorized data.",
    example: "SQL injection, command injection, LDAP injection, and XML injection are different types of injection attacks.",
    relatedTerms: ["sql-injection", "xss", "command-injection", "owasp"]
  },
  {
    id: "command-injection",
    title: "Command Injection",
    category: "Security",
    definition: "An attack that executes arbitrary commands on the host operating system via a vulnerable application. It exploits insufficient input validation.",
    example: "An attacker enters ; rm -rf / into a web form that executes system commands, potentially deleting critical files.",
    relatedTerms: ["injection-attack", "os-command", "shell-injection", "rce"]
  },
  {
    id: "rce",
    title: "RCE (Remote Code Execution)",
    category: "Security",
    definition: "A vulnerability that allows an attacker to execute arbitrary code on a target system remotely. It's one of the most critical security vulnerabilities.",
    example: "The Log4Shell vulnerability allowed attackers to execute arbitrary code on servers running vulnerable Log4j versions.",
    relatedTerms: ["exploit", "vulnerability", "command-injection", "arbitrary-code"]
  },
  {
    id: "buffer-overflow",
    title: "Buffer Overflow",
    category: "Security",
    definition: "A vulnerability that occurs when a program writes more data to a buffer than it can hold, potentially overwriting adjacent memory and allowing execution of malicious code.",
    example: "An attacker sends input longer than expected to a C program, overwriting the return address to redirect execution to malicious code.",
    relatedTerms: ["memory-corruption", "stack-overflow", "heap-overflow", "exploit"]
  },
  {
    id: "privilege-escalation",
    title: "Privilege Escalation",
    category: "Security",
    definition: "An attack technique that exploits a bug, design flaw, or configuration oversight to gain elevated access to resources that should be protected from an application or user.",
    example: "A regular user exploits a vulnerability to gain administrator or root access to the system.",
    relatedTerms: ["authorization", "access-control", "vertical-escalation", "horizontal-escalation"]
  },
  {
    id: "brute-force-attack",
    title: "Brute Force Attack",
    category: "Security",
    definition: "A trial-and-error method used to crack passwords, encryption keys, or login credentials by systematically trying all possible combinations until the correct one is found.",
    example: "An attacker uses automated software to try thousands of password combinations per second against a login page.",
    relatedTerms: ["password-cracking", "dictionary-attack", "rainbow-table", "rate-limiting"]
  },
  {
    id: "dictionary-attack",
    title: "Dictionary Attack",
    category: "Security",
    definition: "A type of brute force attack that uses a predefined list of common words, phrases, and previously leaked passwords rather than trying all possible combinations.",
    example: "Using a list of the most common passwords like 'password123', 'qwerty', '123456' to attempt login.",
    relatedTerms: ["brute-force-attack", "password-cracking", "credential-stuffing", "wordlist"]
  },
  {
    id: "rainbow-table",
    title: "Rainbow Table",
    category: "Security",
    definition: "A precomputed table of hash values for common passwords used to crack password hashes quickly. Rainbow tables trade computation time for storage space.",
    example: "Attackers use rainbow tables to quickly reverse hash values from a stolen password database without recalculating hashes.",
    relatedTerms: ["hash", "password-cracking", "salt", "brute-force-attack"]
  },
  {
    id: "salt",
    title: "Salt (Cryptography)",
    category: "Security",
    definition: "Random data added to passwords before hashing to ensure the same password produces different hashes. This defends against rainbow table attacks and makes password cracking more difficult.",
    example: "Instead of hashing just 'password123', the system hashes 'password123' + random_salt, making each hash unique.",
    relatedTerms: ["hash", "password-storage", "rainbow-table", "bcrypt"]
  },
  {
    id: "hash",
    title: "Hash Function",
    category: "Security",
    definition: "A mathematical algorithm that converts input data of any size into a fixed-size string of characters. Cryptographic hash functions are designed to be one-way and collision-resistant.",
    example: "SHA-256 hashes produce a 64-character hexadecimal string regardless of input size: 'hello' → '2cf24dba5fb0a30e...'",
    relatedTerms: ["encryption", "sha", "md5", "salt"]
  },
  {
    id: "sha",
    title: "SHA (Secure Hash Algorithm)",
    category: "Security",
    definition: "A family of cryptographic hash functions designed by the NSA. Common versions include SHA-1 (deprecated), SHA-256, and SHA-512, used for data integrity verification.",
    example: "File downloads often include SHA-256 checksums so users can verify the file hasn't been tampered with.",
    relatedTerms: ["hash", "md5", "checksum", "integrity"]
  },
  {
    id: "md5",
    title: "MD5 (Message Digest Algorithm 5)",
    category: "Security",
    definition: "A widely used cryptographic hash function that produces a 128-bit hash value. Now considered cryptographically broken and unsuitable for security purposes.",
    example: "MD5 was once commonly used for password storage but has been replaced by more secure algorithms like bcrypt due to collision vulnerabilities.",
    relatedTerms: ["hash", "sha", "collision", "checksum"]
  },
  {
    id: "bcrypt",
    title: "bcrypt",
    category: "Security",
    definition: "A password hashing function designed to be slow and computationally expensive, making brute-force attacks impractical. It automatically handles salting and allows adjustable work factors.",
    example: "Modern web applications use bcrypt to securely store user passwords with built-in salt and configurable difficulty.",
    relatedTerms: ["hash", "salt", "password-storage", "scrypt"]
  },
  {
    id: "encryption",
    title: "Encryption",
    category: "Security",
    definition: "The process of converting readable data (plaintext) into an unreadable format (ciphertext) using an algorithm and key. Only authorized parties with the decryption key can read the data.",
    example: "HTTPS encrypts web traffic so that intercepted data appears as random characters instead of readable text.",
    relatedTerms: ["decryption", "cipher", "aes", "rsa"]
  },
  {
    id: "decryption",
    title: "Decryption",
    category: "Security",
    definition: "The process of converting encrypted data (ciphertext) back into its original readable format (plaintext) using a decryption key.",
    example: "A recipient uses their private key to decrypt an encrypted email message.",
    relatedTerms: ["encryption", "cipher", "key", "plaintext"]
  },
  {
    id: "symmetric-encryption",
    title: "Symmetric Encryption",
    category: "Security",
    definition: "An encryption method that uses the same key for both encryption and decryption. It's faster than asymmetric encryption but requires secure key distribution.",
    example: "AES (Advanced Encryption Standard) is a symmetric algorithm used to encrypt files, where the same password encrypts and decrypts the data.",
    relatedTerms: ["aes", "des", "asymmetric-encryption", "key"]
  },
  {
    id: "asymmetric-encryption",
    title: "Asymmetric Encryption",
    category: "Security",
    definition: "An encryption method that uses a pair of keys: a public key for encryption and a private key for decryption. Also known as public-key cryptography.",
    example: "RSA encryption allows anyone to encrypt a message with your public key, but only you can decrypt it with your private key.",
    relatedTerms: ["rsa", "public-key", "private-key", "symmetric-encryption"]
  },
  {
    id: "aes",
    title: "AES (Advanced Encryption Standard)",
    category: "Security",
    definition: "A symmetric encryption algorithm adopted as a US federal standard in 2001. It's widely used for securing sensitive data and is considered highly secure with key sizes of 128, 192, or 256 bits.",
    example: "AES-256 is used to encrypt files, databases, and network communications in many enterprise applications.",
    relatedTerms: ["symmetric-encryption", "encryption", "cipher", "des"]
  },
  {
    id: "rsa",
    title: "RSA (Rivest-Shamir-Adleman)",
    category: "Security",
    definition: "A widely used asymmetric encryption algorithm based on the mathematical difficulty of factoring large prime numbers. Used for secure data transmission and digital signatures.",
    example: "SSL/TLS certificates use RSA for key exchange during HTTPS connections.",
    relatedTerms: ["asymmetric-encryption", "public-key", "digital-signature", "ssl"]
  },
  {
    id: "public-key",
    title: "Public Key",
    category: "Security",
    definition: "In asymmetric cryptography, the key that can be freely shared and is used to encrypt data or verify digital signatures. Data encrypted with a public key can only be decrypted with the corresponding private key.",
    example: "You share your public PGP key so others can send you encrypted emails that only you can decrypt.",
    relatedTerms: ["private-key", "asymmetric-encryption", "rsa", "pki"]
  },
  {
    id: "private-key",
    title: "Private Key",
    category: "Security",
    definition: "In asymmetric cryptography, the secret key that must be kept confidential and is used to decrypt data or create digital signatures. Compromise of a private key compromises security.",
    example: "Your private SSH key allows you to authenticate to servers; it should never be shared or stored unencrypted.",
    relatedTerms: ["public-key", "asymmetric-encryption", "key-management", "security"]
  },
  {
    id: "digital-signature",
    title: "Digital Signature",
    category: "Security",
    definition: "A cryptographic technique that provides authentication, integrity, and non-repudiation. The sender signs data with their private key; recipients verify it with the sender's public key.",
    example: "Software downloads include digital signatures to verify they haven't been tampered with and come from the legitimate publisher.",
    relatedTerms: ["public-key", "private-key", "authentication", "integrity"]
  },
  {
    id: "pki",
    title: "PKI (Public Key Infrastructure)",
    category: "Security",
    definition: "A framework of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption.",
    example: "Web browsers use PKI to verify SSL/TLS certificates issued by trusted certificate authorities.",
    relatedTerms: ["certificate-authority", "digital-certificate", "public-key", "ssl"]
  },
  {
    id: "certificate-authority",
    title: "Certificate Authority (CA)",
    category: "Security",
    definition: "A trusted entity that issues digital certificates to verify the identity of certificate holders. CAs are central to PKI and enable secure communications on the internet.",
    example: "Let's Encrypt is a CA that provides free SSL/TLS certificates for websites.",
    relatedTerms: ["pki", "digital-certificate", "ssl", "trust-chain"]
  },
  {
    id: "digital-certificate",
    title: "Digital Certificate",
    category: "Security",
    definition: "An electronic document that uses a digital signature to bind a public key with an identity. It's issued by a certificate authority and used to verify the identity of certificate holders.",
    example: "When you visit an HTTPS website, the server presents a digital certificate to prove its identity.",
    relatedTerms: ["pki", "certificate-authority", "ssl", "x509"]
  },
  {
    id: "ssl-certificate",
    title: "SSL/TLS Certificate",
    category: "Security",
    definition: "A digital certificate that authenticates a website's identity and enables encrypted connections. Modern certificates use TLS (Transport Layer Security), though often still called SSL certificates.",
    example: "Websites display a padlock icon in the browser when they have a valid SSL/TLS certificate installed.",
    relatedTerms: ["tls", "https", "pki", "certificate-authority"]
  },
  {
    id: "two-factor-authentication",
    title: "Two-Factor Authentication (2FA)",
    category: "Security",
    definition: "A security process that requires two different authentication factors to verify user identity. Typically combines something you know (password) with something you have (phone) or something you are (biometric).",
    example: "After entering your password, you receive a code via SMS or authenticator app that must be entered to complete login.",
    relatedTerms: ["mfa", "authentication", "otp", "security-token"]
  },
  {
    id: "mfa",
    title: "MFA (Multi-Factor Authentication)",
    category: "Security",
    definition: "An authentication method that requires two or more verification factors to gain access. It provides stronger security than single-factor authentication by requiring multiple proof points.",
    example: "Enterprise systems might require password + biometric scan + hardware token for high-security access.",
    relatedTerms: ["two-factor-authentication", "authentication", "otp", "biometric"]
  },
  {
    id: "otp",
    title: "OTP (One-Time Password)",
    category: "Security",
    definition: "A password that is valid for only one login session or transaction. OTPs are typically time-based or counter-based and commonly used in multi-factor authentication.",
    example: "Google Authenticator generates time-based OTPs that change every 30 seconds for account login.",
    relatedTerms: ["totp", "two-factor-authentication", "mfa", "authentication"]
  },
  {
    id: "totp",
    title: "TOTP (Time-Based One-Time Password)",
    category: "Security",
    definition: "An algorithm that generates a one-time password using the current time as a factor. The password is valid for a short period (typically 30 seconds) and synced between client and server.",
    example: "Authenticator apps like Authy use TOTP to generate 6-digit codes that expire every 30 seconds.",
    relatedTerms: ["otp", "two-factor-authentication", "hotp", "authentication"]
  },
  {
    id: "biometric-authentication",
    title: "Biometric Authentication",
    category: "Security",
    definition: "A security process that uses unique biological characteristics to verify identity. Common biometrics include fingerprints, facial recognition, iris scans, and voice recognition.",
    example: "Modern smartphones use fingerprint sensors or Face ID to unlock devices and authorize payments.",
    relatedTerms: ["mfa", "authentication", "fingerprint", "facial-recognition"]
  },
  {
    id: "oauth",
    title: "OAuth",
    category: "Security",
    definition: "An open standard authorization protocol that enables applications to obtain limited access to user accounts on an HTTP service without exposing passwords. Commonly used for 'Sign in with' features.",
    example: "When you use 'Sign in with Google' on a website, OAuth allows the site to access your profile without knowing your Google password.",
    relatedTerms: ["authentication", "authorization", "openid", "api-security"]
  },
  {
    id: "openid",
    title: "OpenID Connect",
    category: "Security",
    definition: "An identity layer built on top of OAuth 2.0 that allows clients to verify user identity and obtain basic profile information. It enables single sign-on (SSO) across multiple websites.",
    example: "Enterprise applications use OpenID Connect to allow employees to sign in once and access multiple internal services.",
    relatedTerms: ["oauth", "sso", "authentication", "identity-provider"]
  },
  {
    id: "sso",
    title: "SSO (Single Sign-On)",
    category: "Security",
    definition: "An authentication scheme that allows users to log in once and gain access to multiple related applications without re-entering credentials. It improves user experience and can enhance security.",
    example: "After logging into your corporate account, you can access email, calendar, and document management without additional logins.",
    relatedTerms: ["authentication", "saml", "openid", "identity-management"]
  },
  {
    id: "saml",
    title: "SAML (Security Assertion Markup Language)",
    category: "Security",
    definition: "An XML-based framework for exchanging authentication and authorization data between identity providers and service providers. It enables SSO for web applications.",
    example: "Enterprise applications use SAML to allow employees to log in once through their company's identity provider and access multiple cloud services.",
    relatedTerms: ["sso", "authentication", "xml", "identity-provider"]
  },
  {
    id: "jwt",
    title: "JWT (JSON Web Token)",
    category: "Security",
    definition: "A compact, URL-safe token format used to securely transmit information between parties as a JSON object. JWTs are commonly used for authentication and information exchange.",
    example: "After login, the server issues a JWT that the client includes in subsequent API requests to prove authentication.",
    relatedTerms: ["authentication", "token", "authorization", "api-security"]
  },
  {
    id: "access-control",
    title: "Access Control",
    category: "Security",
    definition: "Security measures that regulate who or what can view or use resources in a computing environment. It includes authentication and authorization mechanisms.",
    example: "File system permissions determine which users can read, write, or execute specific files.",
    relatedTerms: ["authorization", "rbac", "authentication", "least-privilege"]
  },
  {
    id: "rbac",
    title: "RBAC (Role-Based Access Control)",
    category: "Security",
    definition: "An access control method that assigns permissions to roles rather than individual users. Users are then assigned to roles, simplifying permission management.",
    example: "In a company system, roles like 'Admin', 'Manager', and 'Employee' have different permissions, and users are assigned to appropriate roles.",
    relatedTerms: ["access-control", "authorization", "abac", "permission"]
  },
  {
    id: "abac",
    title: "ABAC (Attribute-Based Access Control)",
    category: "Security",
    definition: "An access control method that uses attributes (user, resource, environment) and policies to determine access. More flexible than RBAC as it evaluates multiple conditions.",
    example: "Access granted only if user is a manager AND accessing during business hours AND from a company IP address.",
    relatedTerms: ["access-control", "rbac", "authorization", "policy"]
  },
  {
    id: "least-privilege",
    title: "Principle of Least Privilege",
    category: "Security",
    definition: "A security concept where users and programs are granted only the minimum privileges necessary to perform their functions. This reduces the potential damage from accidents or attacks.",
    example: "A web application runs with limited database permissions, only able to read and write specific tables rather than full admin access.",
    relatedTerms: ["access-control", "security-principle", "privilege-escalation", "authorization"]
  },
  {
    id: "defense-in-depth",
    title: "Defense in Depth",
    category: "Security",
    definition: "A layered security strategy that uses multiple defensive mechanisms to protect information. If one layer fails, others continue to provide protection.",
    example: "A system uses firewalls, IDS, encryption, access controls, and monitoring - multiple layers protecting against different attack vectors.",
    relatedTerms: ["security-strategy", "layered-security", "redundancy", "security"]
  },
  {
    id: "security-audit",
    title: "Security Audit",
    category: "Security",
    definition: "A systematic evaluation of an organization's information system security. It assesses compliance with policies, identifies vulnerabilities, and recommends improvements.",
    example: "Annual security audits review access logs, test security controls, and verify compliance with industry standards like PCI DSS.",
    relatedTerms: ["penetration-testing", "compliance", "risk-assessment", "vulnerability-scan"]
  },
  {
    id: "vulnerability-scan",
    title: "Vulnerability Scan",
    category: "Security",
    definition: "An automated process of identifying security weaknesses in systems, applications, and networks. Scanners check for known vulnerabilities, misconfigurations, and security patches.",
    example: "Running Nessus or OpenVAS to scan network devices for outdated software, open ports, and security misconfigurations.",
    relatedTerms: ["vulnerability", "security-audit", "penetration-testing", "scanning"]
  },
  {
    id: "threat-modeling",
    title: "Threat Modeling",
    category: "Security",
    definition: "A structured process for identifying and evaluating potential threats to a system. It helps prioritize security efforts by understanding what needs protection and potential attack vectors.",
    example: "Using STRIDE methodology to analyze threats: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.",
    relatedTerms: ["risk-assessment", "security-analysis", "attack-surface", "security-design"]
  },
  {
    id: "attack-surface",
    title: "Attack Surface",
    category: "Security",
    definition: "The sum of all possible points where an unauthorized user can try to enter data or extract data from a system. Reducing the attack surface minimizes security risk.",
    example: "Disabling unnecessary services, closing unused ports, and removing default accounts reduces the attack surface.",
    relatedTerms: ["threat-modeling", "security-hardening", "exposure", "vulnerability"]
  },
  {
    id: "security-hardening",
    title: "Security Hardening",
    category: "Security",
    definition: "The process of securing a system by reducing its attack surface, eliminating unnecessary services, applying security patches, and implementing security best practices.",
    example: "Server hardening includes disabling default accounts, configuring firewalls, enabling logging, and applying the latest security updates.",
    relatedTerms: ["attack-surface", "baseline-security", "configuration-management", "security"]
  },
  {
    id: "incident-response",
    title: "Incident Response",
    category: "Security",
    definition: "An organized approach to addressing and managing the aftermath of a security breach or attack. The goal is to handle the situation to limit damage and reduce recovery time and costs.",
    example: "When ransomware is detected, the incident response team isolates infected systems, investigates the attack, and implements recovery procedures.",
    relatedTerms: ["security-incident", "forensics", "disaster-recovery", "csirt"]
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    category: "Security",
    definition: "The process of uncovering and interpreting electronic data for use in investigations. It involves recovering and investigating material found in digital devices.",
    example: "Forensic analysts examine disk images, memory dumps, and network logs to determine how a breach occurred and what data was compromised.",
    relatedTerms: ["incident-response", "evidence", "chain-of-custody", "investigation"]
  },
  {
    id: "honeypot",
    title: "Honeypot",
    category: "Security",
    definition: "A decoy system or resource designed to attract and detect attackers. Honeypots appear to be legitimate targets but are isolated and monitored to study attack techniques.",
    example: "A fake database server is set up to lure attackers, allowing security teams to study their methods without risking real data.",
    relatedTerms: ["deception-technology", "intrusion-detection", "security-research", "trap"]
  },
  {
    id: "security-token",
    title: "Security Token",
    category: "Security",
    definition: "A physical or digital device used to authenticate identity. Hardware tokens generate one-time passwords, while software tokens can be apps on smartphones.",
    example: "A YubiKey hardware security token provides two-factor authentication by generating cryptographic proofs of identity.",
    relatedTerms: ["two-factor-authentication", "hardware-token", "authentication", "yubikey"]
  },
  {
    id: "vpn",
    title: "VPN (Virtual Private Network)",
    category: "Security",
    definition: "A technology that creates a secure, encrypted connection over a less secure network like the internet. VPNs protect data in transit and can mask the user's location and identity.",
    example: "Remote employees use a VPN to securely access company resources as if they were on the office network.",
    relatedTerms: ["encryption", "tunnel", "network-security", "ipsec"]
  },
  {
    id: "ipsec",
    title: "IPsec (Internet Protocol Security)",
    category: "Security",
    definition: "A protocol suite for securing Internet Protocol communications by authenticating and encrypting each IP packet in a communication session.",
    example: "VPN connections often use IPsec to create secure tunnels between remote offices.",
    relatedTerms: ["vpn", "encryption", "network-security", "tunnel"]
  },
  {
    id: "dmz",
    title: "DMZ (Demilitarized Zone)",
    category: "Security",
    definition: "A physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network. It adds an additional layer of security.",
    example: "Web servers and email servers are placed in a DMZ, separated from the internal network by firewalls.",
    relatedTerms: ["firewall", "network-security", "perimeter-security", "segmentation"]
  },
  {
    id: "network-segmentation",
    title: "Network Segmentation",
    category: "Security",
    definition: "The practice of dividing a network into smaller, isolated segments to improve security and performance. It limits the spread of attacks and contains potential breaches.",
    example: "Separating guest Wi-Fi, employee workstations, and server infrastructure into different network segments with controlled access between them.",
    relatedTerms: ["dmz", "vlan", "firewall", "isolation"]
  },
  {
    id: "sandboxing",
    title: "Sandboxing",
    category: "Security",
    definition: "A security mechanism for running untrusted code in an isolated environment where it cannot affect the host system. Used to test software and analyze malware safely.",
    example: "Modern browsers run web page scripts in sandboxes to prevent malicious code from accessing the operating system.",
    relatedTerms: ["isolation", "virtualization", "container", "security"]
  },
  {
    id: "security-information",
    title: "Security by Obscurity",
    category: "Security",
    definition: "A controversial security practice that relies on keeping system details secret. Generally considered weak as it doesn't address underlying vulnerabilities and fails when secrets are discovered.",
    example: "Using non-standard ports for services or hiding directory names - ineffective if discovered and doesn't fix actual security flaws.",
    relatedTerms: ["security-principle", "defense-in-depth", "security-through-obscurity"]
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    category: "Security",
    definition: "Psychological manipulation techniques used to trick people into divulging confidential information or performing actions that compromise security. It exploits human psychology rather than technical vulnerabilities.",
    example: "Phishing emails that impersonate company executives to trick employees into transferring money or sharing credentials.",
    relatedTerms: ["phishing", "pretexting", "baiting", "human-factor"]
  },
  {
    id: "phishing",
    title: "Phishing",
    category: "Security",
    definition: "A social engineering attack where attackers impersonate legitimate organizations to trick victims into revealing sensitive information like passwords or credit card numbers.",
    example: "Fake emails appearing to be from banks asking users to click links and enter login credentials on fraudulent websites.",
    relatedTerms: ["social-engineering", "spear-phishing", "whaling", "email-security"]
  },
  {
    id: "spear-phishing",
    title: "Spear Phishing",
    category: "Security",
    definition: "A targeted phishing attack directed at specific individuals or organizations. Attackers research their targets to create convincing, personalized messages.",
    example: "An email crafted specifically for a CFO, referencing real projects and colleagues, requesting an urgent wire transfer.",
    relatedTerms: ["phishing", "social-engineering", "whaling", "apt"]
  },
  {
    id: "whaling",
    title: "Whaling",
    category: "Security",
    definition: "A type of spear phishing attack that targets high-profile individuals like executives or high-level managers. Also called CEO fraud.",
    example: "Attackers impersonate the CEO in an email to the finance department, requesting an urgent confidential wire transfer.",
    relatedTerms: ["spear-phishing", "phishing", "social-engineering", "business-email-compromise"]
  },
  {
    id: "pretexting",
    title: "Pretexting",
    category: "Security",
    definition: "A social engineering technique where an attacker creates a fabricated scenario to obtain information from a target. The attacker impersonates someone in authority or with a legitimate need.",
    example: "An attacker calls IT support claiming to be an employee who forgot their password, providing enough personal information to convince the support agent.",
    relatedTerms: ["social-engineering", "impersonation", "phishing", "vishing"]
  },
  {
    id: "vishing",
    title: "Vishing (Voice Phishing)",
    category: "Security",
    definition: "Phone-based social engineering where attackers use voice calls to trick victims into revealing sensitive information or performing actions.",
    example: "Scammers call claiming to be from tech support, saying your computer has a virus and needs immediate remote access to fix it.",
    relatedTerms: ["phishing", "social-engineering", "phone-scam", "pretexting"]
  },
  {
    id: "apt",
    title: "APT (Advanced Persistent Threat)",
    category: "Security",
    definition: "A prolonged and targeted cyber attack where an intruder gains access to a network and remains undetected for an extended period. Often state-sponsored or well-funded criminal groups.",
    example: "Nation-state actors infiltrate a government network, maintain access for months, and slowly exfiltrate classified information.",
    relatedTerms: ["cyber-espionage", "targeted-attack", "persistent-threat", "nation-state"]
  },
  {
    id: "data-breach",
    title: "Data Breach",
    category: "Security",
    definition: "A security incident where sensitive, protected, or confidential data is accessed, stolen, or used by unauthorized individuals. Can result from attacks, human error, or system failures.",
    example: "The Equifax breach exposed personal information of 147 million people due to unpatched vulnerabilities.",
    relatedTerms: ["incident-response", "data-leak", "exposure", "pii"]
  },
  {
    id: "data-leak",
    title: "Data Leak",
    category: "Security",
    definition: "Unauthorized transmission of data from within an organization to an external destination. Can be accidental or intentional, and may not involve malicious intent unlike breaches.",
    example: "A misconfigured cloud storage bucket exposes customer data publicly without the organization realizing it.",
    relatedTerms: ["data-breach", "data-loss-prevention", "exposure", "misconfiguration"]
  },
  {
    id: "dlp",
    title: "DLP (Data Loss Prevention)",
    category: "Security",
    definition: "Tools and processes that detect and prevent data breaches, exfiltration, or unwanted destruction of sensitive data. DLP software monitors, detects, and blocks sensitive data in use, in motion, and at rest.",
    example: "DLP software prevents employees from sending confidential documents outside the company via email or uploading to personal cloud storage.",
    relatedTerms: ["data-protection", "data-leak", "endpoint-security", "monitoring"]
  },
  {
    id: "endpoint-security",
    title: "Endpoint Security",
    category: "Security",
    definition: "Protection of endpoints (computers, mobile devices, servers) from cyber threats. Includes antivirus, anti-malware, firewalls, and device management solutions.",
    example: "Deploying endpoint detection and response (EDR) software on all company laptops to monitor for malicious activity.",
    relatedTerms: ["antivirus", "edr", "device-management", "security"]
  },
  {
    id: "edr",
    title: "EDR (Endpoint Detection and Response)",
    category: "Security",
    definition: "An integrated endpoint security solution that combines real-time monitoring, threat detection, and automated response capabilities for endpoints.",
    example: "EDR tools detect suspicious behavior like unusual file encryption patterns indicating ransomware and automatically isolate the affected device.",
    relatedTerms: ["endpoint-security", "threat-detection", "incident-response", "siem"]
  },
  {
    id: "antivirus",
    title: "Antivirus Software",
    category: "Security",
    definition: "Software designed to detect, prevent, and remove malicious software (malware) from computer systems. Uses signature-based detection, heuristics, and behavioral analysis.",
    example: "Windows Defender scans files for known malware signatures and monitors program behavior for suspicious activities.",
    relatedTerms: ["malware", "endpoint-security", "signature-detection", "virus"]
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security",
    category: "Security",
    definition: "A security model that requires strict identity verification for every person and device trying to access resources, regardless of whether they're inside or outside the network perimeter.",
    example: "Instead of trusting everyone inside the corporate network, every access request is verified and authorized based on identity, device, and context.",
    relatedTerms: ["access-control", "authentication", "microsegmentation", "security-model"]
  },
  {
    id: "security-posture",
    title: "Security Posture",
    category: "Security",
    definition: "The overall security status of an organization's networks, information, and systems based on security controls, capabilities, and readiness to respond to threats.",
    example: "Regular assessments evaluate the organization's security posture by measuring patch levels, configuration compliance, and incident response readiness.",
    relatedTerms: ["security-assessment", "risk-management", "compliance", "security-metrics"]
  },
  {
    id: "compliance",
    title: "Security Compliance",
    category: "Security",
    definition: "Adherence to security standards, regulations, and best practices required by law or industry. Common frameworks include PCI DSS, HIPAA, GDPR, and SOC 2.",
    example: "E-commerce sites must comply with PCI DSS requirements for handling credit card data securely.",
    relatedTerms: ["gdpr", "hipaa", "pci-dss", "regulation"]
  },
  {
    id: "gdpr",
    title: "GDPR (General Data Protection Regulation)",
    category: "Security",
    definition: "EU regulation on data protection and privacy that applies to all companies processing the personal data of EU residents. It grants individuals control over their personal data.",
    example: "Websites must obtain explicit consent for cookies and allow users to request deletion of their personal data under GDPR.",
    relatedTerms: ["compliance", "privacy", "data-protection", "regulation"]
  },
  {
    id: "red-team",
    title: "Red Team",
    category: "Security",
    definition: "A group of security professionals who simulate real-world attacks to test an organization's detection and response capabilities. They think like attackers to find vulnerabilities.",
    example: "The red team attempts to breach the network using social engineering, phishing, and exploitation to test the blue team's defenses.",
    relatedTerms: ["penetration-testing", "blue-team", "purple-team", "security-testing"]
  },
  {
    id: "blue-team",
    title: "Blue Team",
    category: "Security",
    definition: "Security professionals responsible for defending against attacks and responding to incidents. They monitor systems, analyze threats, and implement security controls.",
    example: "The blue team monitors SIEM alerts, investigates suspicious activities, and implements countermeasures against the red team's simulated attacks.",
    relatedTerms: ["red-team", "defensive-security", "incident-response", "siem"]
  },
  {
    id: "purple-team",
    title: "Purple Team",
    category: "Security",
    definition: "A collaborative approach where red team (attackers) and blue team (defenders) work together to improve security. The focus is on sharing knowledge and improving both offensive and defensive capabilities.",
    example: "After a red team exercise, both teams meet to discuss attack techniques and how detection and response can be improved.",
    relatedTerms: ["red-team", "blue-team", "security-operations", "collaboration"]
  }
];
