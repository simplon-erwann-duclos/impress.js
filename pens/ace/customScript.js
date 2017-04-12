var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

function executeCode(){
    var code = editor.getValue();
    eval(code);
}


function affiche() {
	var visible = document.getElementById('editor').style.bottom; 
	if (visible == "-300px") {
		document.getElementById('editor').style.bottom = '0px';
		document.getElementById('editor').style.opacity = 1;
		document.getElementById('exec').style.bottom = '210px';
		document.getElementById('exec').style.opacity = 1;
		document.getElementById('click').style.bottom = '250px';
		document.getElementById('click').value = 'Cacher 🢃';
		
	}
	else {
		document.getElementById('editor').style.bottom = '-300px';
		document.getElementById('editor').style.opacity = 0;
		document.getElementById('exec').style.bottom = '-50px';
		document.getElementById('exec').style.opacity = 0;
		document.getElementById('click').style.bottom = '25px';

		document.getElementById('click').value = 'Montrer 🢁';

	}
}
