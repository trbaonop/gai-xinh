<?php
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $tempFile = $_FILES['file']['tmp_name'];
    $targetPath = 'uploads/';
    $targetFile = $targetPath . $_FILES['file']['name'];

    if (move_uploaded_file($tempFile, $targetFile)) {
        $imageUrl = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $targetFile;
        echo json_encode(array('success' => true, 'imageUrl' => $imageUrl));
    } else {
        echo json_encode(array('success' => false));
    }
} else {
    echo json_encode(array('success' => false));
}
?>
