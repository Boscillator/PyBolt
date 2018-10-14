from flask import Flask, request, Response, jsonify, render_template
from dis import dis
from io import StringIO

app = Flask(__name__)

@app.route('/')
def render_homepage():
  return render_template('index.html')

@app.route('/compile', methods=['POST'])
def do_compile():
  #get the code to compile
  code = request.data

  #compile it
  try:
    bytecode = compile(code, 'user_code', 'exec')
  except SyntaxError as e:
    #if the code is wrong, return an error message with code 400
    return jsonify({
      'ok':False,
      'data':e.msg,
      'line':e.lineno,
      'text':e.text
    }), 400
  
  #disassemble it
  output_file = StringIO()
  dis(bytecode, file=output_file)

  #get the result of the disassembly
  output_file.seek(0)
  disassembly = output_file.read()

  #return that result
  return jsonify({
    'ok':True,
    'data':disassembly
  })