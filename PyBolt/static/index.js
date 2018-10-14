
var theme = "ace/theme/monokai";
var input_editor;
var output_editor;

var last_editor_state = "";

function compile(source, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', COMPILE_URL);
  xhr.onload = function() {
    var data = JSON.parse(xhr.response);
    callback(data);
  }

  xhr.send(source);
}

function onSync() {
  var current_editor_state = input_editor.getValue();
  if( current_editor_state !== last_editor_state) {
    
    compile(current_editor_state, function(message) {
      output_editor.setValue(message.data, 1);
    })
    
    last_editor_state = current_editor_state;
  }
}

function registerInputEditor() {
  input_editor = ace.edit('python-input');
  input_editor.session.setMode("ace/mode/python");

  window.setInterval(onSync, 2000);
}

function registerOutputEditor() {
  output_editor = ace.edit('bytecode-output');
  output_editor.setOptions({
    readOnly: true
  });
}

function registerEditors() {
  registerInputEditor();
  registerOutputEditor();
}


(function () {
  registerEditors();
})();