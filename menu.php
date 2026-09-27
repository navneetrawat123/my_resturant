<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/db.php';

$pdo = getDbConnection();
$stmt = $pdo->query("SELECT id, name, description, price, category, image FROM menu_items ORDER BY category, id");
$items = $stmt->fetchAll();

echo json_encode(['success' => true, 'items' => $items]);
