
var input_editor;
var output_editor;

var last_editor_state = "";

function compile(source, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', COMPILE_URL);
  xhr.onload = function () {
    var data = JSON.parse(xhr.response);
    callback(data);
  }

  xhr.send(source);
}

function onSync() {
  var current_editor_state = input_editor.getValue();
  if (current_editor_state !== last_editor_state) {

    compile(current_editor_state, function (message) {
      output_editor.setValue(message.data, 1);
    })

    last_editor_state = current_editor_state;
  }
}

function getOpCodeMnemonics() {
  return OPCODES.map(function (entry) {
    return entry["Mnemonics"];
  });
}

function isOpCode(code) {
  return getOpCodeMnemonics().includes(code);
}

function getOpCodeDescription(code) {
  var code_data = OPCODES.filter( function( entry ) {
    return entry["Mnemonics"] == code;
  })[0];

  var description = code_data["Description"];

  return description;
}

function buildMnemonicsRegex() {
  var regex = getOpCodeMnemonics().join("|");
  return RegExp(regex);
}

function registerBytecodeLanguage() {
  monaco.languages.register({ id: 'pythonBytecode' });

  monaco.languages.registerHoverProvider('pythonBytecode', {
    provideHover: function (model, position) {
      var word = model.getWordAtPosition(position);
      var code = word.word;
      if (isOpCode(code)) {
        return {
          range: new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn),
          contents: [
            { value: '**' + word.word + '**' },
            { value: getOpCodeDescription(code) }
          ]
        }
      }
      else {
        return {}
      }
    }
  });

  var mnemonicsRegex = buildMnemonicsRegex();
  monaco.languages.setMonarchTokensProvider('pythonBytecode', {

    tokenizer: {
      root: [
        [mnemonicsRegex, "bytecode-mnemonics"],
        [/'.*'/, "bytecode-string"]
      ]
    }
  });

  monaco.editor.defineTheme('pythonByteCodeTheme', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'bytecode-mnemonics', foreground: '0000FF' },
      { token: 'bytecode-string', foreground: 'A31515'}
    ]
  });
}

function registerInputEditor() {
  input_editor = monaco.editor.create(document.getElementById("python-input"), {
    value: "print('hello world')",
    language: "python",
    minimap: {
      enabled: false
    }
  });

  window.setInterval(onSync, 2000);
}

function registerOutputEditor() {
  output_editor = monaco.editor.create(document.getElementById("bytecode-output"), {
    theme: "pythonByteCodeTheme",
    language: "pythonBytecode",
    readOnly: true,
    minimap: {
      enabled: false
    }
  });
}

function registerEditors() {
  registerBytecodeLanguage();
  registerInputEditor();
  registerOutputEditor();
}


(function () {
  registerEditors();
})();