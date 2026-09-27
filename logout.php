<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';
$token = str_replace('Bearer ', '', $authHeader);

if ($token) {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("DELETE FROM sessions WHERE token = ?");
    $stmt->execute([$token]);
}

echo json_encode(['success' => true, 'message' => 'Logged out.']);
