<?php 
	$nombre=$_FILES['imagen']['name'];
	$guardado=$_FILES['imagen']['tmp_name'];
	if(!file_exists('img')){
		mkdir('img',0777,true);
		if(file_exists('img')){
			if(move_uploaded_file($guardado, 'img/'.$nombre)){
				echo 'img/'.$nombre;
				return 'img/'.$nombre;
			}else{
				return "nada";
			}
		}
	}else{
		if(move_uploaded_file($guardado, 'img/'.$nombre)){
			echo 'img/'.$nombre;
			return 'img/'.$nombre;
		}else{
			return "nada";
		}
	}
?>