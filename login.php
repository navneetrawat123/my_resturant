<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);

$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

if (!$email || !$password) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email and password are required.']);
    exit;
}

$pdo = getDbConnection();
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password'])) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Invalid email or password.']);
    exit;
}

// Simple token-based session (works well across separate frontend/backend domains)
$token = bin2hex(random_bytes(32));
$stmt = $pdo->prepare("INSERT INTO sessions (user_id, token, created_at) VALUES (?, ?, NOW())");
$stmt->execute([$user['id'], $token]);

echo json_encode([
    'success' => true,
    'message' => 'Login successful.',
    'token' => $token,
    'user' => [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email'],
    ],
]);
