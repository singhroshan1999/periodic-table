<?php
$atomic_number = $_GET["atomic_number"];
      if ( !file_exists("element_info/$atomic_number") ) {
        exit();
      }

$fp = fopen("element_info/$atomic_number","r");
print fread($fp,filesize("element_info/$atomic_number"));
fclose($fp);
?>