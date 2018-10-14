var OPCODES = [
  {
    "Opcode": "00h",
    "Mnemonics": "STOP_CODE",
    "Operand length": 0,
    "Description": "Indicates end-of-code to the compiler, not used by the interpreter."
  },
  {
    "Opcode": "01h",
    "Mnemonics": "POP_TOP",
    "Operand length": 0,
    "Description": "Removes the top-of-stack (TOS) item."
  },
  {
    "Opcode": "02h",
    "Mnemonics": "ROT_TWO",
    "Operand length": 0,
    "Description": "Swaps the two top-most stack items."
  },
  {
    "Opcode": "03h",
    "Mnemonics": "ROT_THREE",
    "Operand length": 0,
    "Description": "Lifts second and third stack item one position up, moves top down to position three."
  },
  {
    "Opcode": "04h",
    "Mnemonics": "DUP_TOP",
    "Operand length": 0,
    "Description": "Duplicates the reference on top of the stack."
  },
  {
    "Opcode": "05h",
    "Mnemonics": "ROT_FOUR",
    "Operand length": 0,
    "Description": "Lifts second, third and forth stack item one position up, moves top down to position four."
  },
  {
    "Opcode": "09h",
    "Mnemonics": "NOP",
    "Operand length": 0,
    "Description": "Do nothing code. Used as a placeholder by the bytecode optimizer."
  },
  {
    "Opcode": "0Ah",
    "Mnemonics": "UNARY_POSITIVE",
    "Operand length": 0,
    "Description": "Implements TOS = +TOS."
  },
  {
    "Opcode": "0Bh",
    "Mnemonics": "UNARY_NEGATIVE",
    "Operand length": 0,
    "Description": "Implements TOS = -TOS."
  },
  {
    "Opcode": "0Ch",
    "Mnemonics": "UNARY_NOT",
    "Operand length": 0,
    "Description": "Implements TOS = not TOS."
  },
  {
    "Opcode": "0Dh",
    "Mnemonics": "UNARY_CONVERT",
    "Operand length": 0,
    "Description": "Implements TOS = `TOS`."
  },
  {
    "Opcode": "0Fh",
    "Mnemonics": "UNARY_INVERT",
    "Operand length": 0,
    "Description": "Implements TOS = ~TOS."
  },
  {
    "Opcode": "12h",
    "Mnemonics": "LIST_APPEND",
    "Operand length": 0,
    "Description": "Calls list.append(TOS1, TOS). Used to implement list comprehensions."
  },
  {
    "Opcode": "13h",
    "Mnemonics": "BINARY_POWER",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 ** TOS."
  },
  {
    "Opcode": "14h",
    "Mnemonics": "BINARY_MULTIPLY",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 * TOS."
  },
  {
    "Opcode": "15h",
    "Mnemonics": "BINARY_DIVIDE",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 / TOS when from __future__ import division is not in effect."
  },
  {
    "Opcode": "16h",
    "Mnemonics": "BINARY_MODULO",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 % TOS."
  },
  {
    "Opcode": "17h",
    "Mnemonics": "BINARY_ADD",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 + TOS."
  },
  {
    "Opcode": "18h",
    "Mnemonics": "BINARY_SUBTRACT",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 - TOS."
  },
  {
    "Opcode": "19h",
    "Mnemonics": "BINARY_SUBSCR",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1[TOS]."
  },
  {
    "Opcode": "1Ah",
    "Mnemonics": "BINARY_FLOOR_DIVIDE",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 // TOS."
  },
  {
    "Opcode": "1Bh",
    "Mnemonics": "BINARY_TRUE_DIVIDE",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 / TOS when from __future__ import division is in effect."
  },
  {
    "Opcode": "1Ch",
    "Mnemonics": "INPLACE_FLOOR_DIVIDE",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 // TOS."
  },
  {
    "Opcode": "1Dh",
    "Mnemonics": "INPLACE_TRUE_DIVIDE",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 / TOS when from __future__ import division is in effect."
  },
  {
    "Opcode": "1Eh",
    "Mnemonics": "SLICE",
    "Operand length": 0,
    "Description": "Implements TOS = TOS[:]."
  },
  {
    "Opcode": "1Fh",
    "Mnemonics": "SLICE+1",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1[TOS:]."
  },
  {
    "Opcode": "20h",
    "Mnemonics": "SLICE+2",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1[:TOS]."
  },
  {
    "Opcode": "21h",
    "Mnemonics": "SLICE+3",
    "Operand length": 0,
    "Description": "Implements TOS = TOS2[TOS1:TOS]."
  },
  {
    "Opcode": "28h",
    "Mnemonics": "STORE_SLICE",
    "Operand length": 0,
    "Description": "Implements TOS[:] = TOS1."
  },
  {
    "Opcode": "29h",
    "Mnemonics": "STORE_SLICE+1",
    "Operand length": 0,
    "Description": "Implements TOS1[TOS:] = TOS2."
  },
  {
    "Opcode": "2Ah",
    "Mnemonics": "STORE_SLICE+2",
    "Operand length": 0,
    "Description": "Implements TOS1[:TOS] = TOS2."
  },
  {
    "Opcode": "2Bh",
    "Mnemonics": "STORE_SLICE+3",
    "Operand length": 0,
    "Description": "Implements TOS2[TOS1:TOS] = TOS3."
  },
  {
    "Opcode": "32h",
    "Mnemonics": "DELETE_SLICE",
    "Operand length": 0,
    "Description": "Implements del TOS[:]."
  },
  {
    "Opcode": "33h",
    "Mnemonics": "DELETE_SLICE+1",
    "Operand length": 0,
    "Description": "Implements del TOS1[TOS:]."
  },
  {
    "Opcode": "34h",
    "Mnemonics": "DELETE_SLICE+2",
    "Operand length": 0,
    "Description": "Implements del TOS1[:TOS]."
  },
  {
    "Opcode": "35h",
    "Mnemonics": "DELETE_SLICE+3",
    "Operand length": 0,
    "Description": "Implements del TOS2[TOS1:TOS]."
  },
  {
    "Opcode": "37h",
    "Mnemonics": "INPLACE_ADD",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 + TOS."
  },
  {
    "Opcode": "38h",
    "Mnemonics": "INPLACE_SUBTRACT",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 - TOS."
  },
  {
    "Opcode": "39h",
    "Mnemonics": "INPLACE_MULTIPLY",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 * TOS."
  },
  {
    "Opcode": "3Ah",
    "Mnemonics": "INPLACE_DIVIDE",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 / TOS when from __future__ import division is not in effect."
  },
  {
    "Opcode": "3Bh",
    "Mnemonics": "INPLACE_MODULO",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 % TOS."
  },
  {
    "Opcode": "3Ch",
    "Mnemonics": "STORE_SUBSCR",
    "Operand length": 0,
    "Description": "Implements TOS1[TOS] = TOS2."
  },
  {
    "Opcode": "3Dh",
    "Mnemonics": "DELETE_SUBSCR",
    "Operand length": 0,
    "Description": "Implements del TOS1[TOS]."
  },
  {
    "Opcode": "3Eh",
    "Mnemonics": "BINARY_LSHIFT",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 << TOS."
  },
  {
    "Opcode": "3Fh",
    "Mnemonics": "BINARY_RSHIFT",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 >> TOS."
  },
  {
    "Opcode": "40h",
    "Mnemonics": "BINARY_AND",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 & TOS."
  },
  {
    "Opcode": "41h",
    "Mnemonics": "BINARY_XOR",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 ^ TOS."
  },
  {
    "Opcode": "42h",
    "Mnemonics": "BINARY_OR",
    "Operand length": 0,
    "Description": "Implements TOS = TOS1 | TOS."
  },
  {
    "Opcode": "43h",
    "Mnemonics": "INPLACE_POWER",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 ** TOS."
  },
  {
    "Opcode": "44h",
    "Mnemonics": "GET_ITER",
    "Operand length": 0,
    "Description": "Implements TOS = iter(TOS)."
  },
  {
    "Opcode": "46h",
    "Mnemonics": "PRINT_EXPR",
    "Operand length": 0,
    "Description": "Implements the expression statement for the interactive mode. TOS is removed from the stack and printed. In non-interactive mode, an expression statement is terminated with POP_STACK."
  },
  {
    "Opcode": "47h",
    "Mnemonics": "PRINT_ITEM",
    "Operand length": 0,
    "Description": "Prints TOS to the file-like object bound to sys.stdout. There is one such instruction for each item in the print statement."
  },
  {
    "Opcode": "48h",
    "Mnemonics": "PRINT_NEWLINE",
    "Operand length": 0,
    "Description": "Prints a new line on sys.stdout. This is generated as the last operation of a print statement, unless the statement ends with a comma."
  },
  {
    "Opcode": "49h",
    "Mnemonics": "PRINT_ITEM_TO",
    "Operand length": 0,
    "Description": "Like PRINT_ITEM, but prints the item second from TOS to the file-like object at TOS. This is used by the extended print statement."
  },
  {
    "Opcode": "4Ah",
    "Mnemonics": "PRINT_NEWLINE_TO",
    "Operand length": 0,
    "Description": "Like PRINT_NEWLINE, but prints the new line on the file-like object on the TOS. This is used by the extended print statement."
  },
  {
    "Opcode": "4Bh",
    "Mnemonics": "INPLACE_LSHIFT",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 << TOS."
  },
  {
    "Opcode": "4Ch",
    "Mnemonics": "INPLACE_RSHIFT",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 >> TOS."
  },
  {
    "Opcode": "4Dh",
    "Mnemonics": "INPLACE_AND",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 & TOS."
  },
  {
    "Opcode": "4Eh",
    "Mnemonics": "INPLACE_XOR",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 ^ TOS."
  },
  {
    "Opcode": "4Fh",
    "Mnemonics": "INPLACE_OR",
    "Operand length": 0,
    "Description": "Implements in-place TOS = TOS1 | TOS."
  },
  {
    "Opcode": "50h",
    "Mnemonics": "BREAK_LOOP",
    "Operand length": 0,
    "Description": "Terminates a loop due to a break statement."
  },
  {
    "Opcode": "51h",
    "Mnemonics": "WITH_CLEANUP",
    "Operand length": 0,
    "Description": "???"
  },
  {
    "Opcode": "52h",
    "Mnemonics": "LOAD_LOCALS",
    "Operand length": 0,
    "Description": "Pushes a reference to the locals of the current scope on the stack. This is used in the code for a class definition: After the class body is evaluated, the locals are passed to the class definition."
  },
  {
    "Opcode": "53h",
    "Mnemonics": "RETURN_VALUE",
    "Operand length": 0,
    "Description": "Returns with TOS to the caller of the function."
  },
  {
    "Opcode": "54h",
    "Mnemonics": "IMPORT_STAR",
    "Operand length": 0,
    "Description": "Loads all symbols not starting with \"_\" directly from the module TOS to the local namespace. The module is popped after loading all names. This opcode implements from module import *."
  },
  {
    "Opcode": "55h",
    "Mnemonics": "EXEC_STMT",
    "Operand length": 0,
    "Description": "Implements exec TOS2,TOS1,TOS. The compiler fills missing optional parameters with None."
  },
  {
    "Opcode": "56h",
    "Mnemonics": "YIELD_VALUE",
    "Operand length": 0,
    "Description": "Pops TOS and yields it from a generator."
  },
  {
    "Opcode": "57h",
    "Mnemonics": "POP_BLOCK",
    "Operand length": 0,
    "Description": "Removes one block from the block stack. Per frame, there is a stack of blocks, denoting nested loops, try statements, and such."
  },
  {
    "Opcode": "58h",
    "Mnemonics": "END_FINALLY",
    "Operand length": 0,
    "Description": "Terminates a finally clause. The interpreter recalls whether the exception has to be re-raised, or whether the function returns, and continues with the outer-next block."
  },
  {
    "Opcode": "59h",
    "Mnemonics": "BUILD_CLASS",
    "Operand length": 0,
    "Description": "Creates a new class object. TOS is the methods dictionary, TOS1 the tuple of the names of the base classes, and TOS2 the class name."
  },
  {
    "Opcode": "5Ah",
    "Mnemonics": "STORE_NAME",
    "Operand length": 2,
    "Description": "Implements name = TOS. /namei/ is the index of name in the attribute co_names of the code object. The compiler tries to use STORE_LOCAL or STORE_GLOBAL if possible."
  },
  {
    "Opcode": "5Bh",
    "Mnemonics": "DELETE_NAME",
    "Operand length": 2,
    "Description": "Implements del name, where /namei/ is the index into co_names attribute of the code object."
  },
  {
    "Opcode": "5Ch",
    "Mnemonics": "UNPACK_SEQUENCE",
    "Operand length": 2,
    "Description": "Unpacks TOS into /count/ individual values, which are put onto the stack right-to-left."
  },
  {
    "Opcode": "5Dh",
    "Mnemonics": "FOR_ITER",
    "Operand length": 2,
    "Description": "TOS is an iterator. Call its next() method. If this yields a new value, push it on the stack (leaving the iterator below it). If the iterator indicates it is exhausted TOS is popped, and the byte code counter is incremented by /delta/."
  },
  {
    "Opcode": "5Fh",
    "Mnemonics": "STORE_ATTR",
    "Operand length": 2,
    "Description": "Implements TOS.name = TOS1, where /namei/ is the index of name in co_names."
  },
  {
    "Opcode": "60h",
    "Mnemonics": "DELETE_ATTR",
    "Operand length": 2,
    "Description": "Implements del TOS.name, using /namei/ as index into co_names."
  },
  {
    "Opcode": "61h",
    "Mnemonics": "STORE_GLOBAL",
    "Operand length": 2,
    "Description": "Works as STORE_NAME(/namei/), but stores the name as a global."
  },
  {
    "Opcode": "62h",
    "Mnemonics": "DELETE_GLOBAL",
    "Operand length": 2,
    "Description": "Works as DELETE_NAME(/namei/), but deletes a global name."
  },
  {
    "Opcode": "63h",
    "Mnemonics": "DUP_TOPX",
    "Operand length": "None",
    "Description": "Duplicate /count/ items, keeping them in the same order. Due to implementation limits, count should be between 1 and 5 inclusive."
  },
  {
    "Opcode": "64h",
    "Mnemonics": "LOAD_CONST",
    "Operand length": 2,
    "Description": "Pushes \"co_consts[/consti/]\" onto the stack."
  },
  {
    "Opcode": "65h",
    "Mnemonics": "LOAD_NAME",
    "Operand length": 2,
    "Description": "Pushes the value associated with \"co_names[/namei/]\" onto the stack."
  },
  {
    "Opcode": "66h",
    "Mnemonics": "BUILD_TUPLE",
    "Operand length": 2,
    "Description": "Creates a tuple consuming /count/ items from the stack, and pushes the resulting tuple onto the stack."
  },
  {
    "Opcode": "67h",
    "Mnemonics": "BUILD_LIST",
    "Operand length": 2,
    "Description": "Works as BUILD_TUPLE(/count/), but creates a list."
  },
  {
    "Opcode": "68h",
    "Mnemonics": "BUILD_MAP",
    "Operand length": 2,
    "Description": "Pushes a new empty dictionary object onto the stack. The argument is ignored and set to /zero/ by the compiler."
  },
  {
    "Opcode": "69h",
    "Mnemonics": "LOAD_ATTR",
    "Operand length": 2,
    "Description": "Replaces TOS with getattr(TOS, co_names[/namei/])."
  },
  {
    "Opcode": "6Ah",
    "Mnemonics": "COMPARE_OP",
    "Operand length": 2,
    "Description": "Performs a Boolean operation. The operation name can be found in cmp_op[/opname/]."
  },
  {
    "Opcode": "6Bh",
    "Mnemonics": "IMPORT_NAME",
    "Operand length": 2,
    "Description": "Imports the module co_names[/namei/]. The module object is pushed onto the stack. The current namespace is not affected: for a proper import statement, a subsequent STORE_FAST instruction modifies the namespace."
  },
  {
    "Opcode": "6Ch",
    "Mnemonics": "IMPORT_FROM",
    "Operand length": 2,
    "Description": "Loads the attribute co_names[/namei/] from the module found in TOS. The resulting object is pushed onto the stack, to be subsequently stored by a STORE_FAST instruction."
  },
  {
    "Opcode": "6Eh",
    "Mnemonics": "JUMP_FORWARD",
    "Operand length": 2,
    "Description": "Increments byte code counter by /delta/."
  },
  {
    "Opcode": "6Fh",
    "Mnemonics": "JUMP_IF_FALSE",
    "Operand length": 2,
    "Description": "If TOS is false, increment the byte code counter by /delta/. TOS is not changed."
  },
  {
    "Opcode": "70h",
    "Mnemonics": "JUMP_IF_TRUE",
    "Operand length": 2,
    "Description": "If TOS is true, increment the byte code counter by /delta/. TOS is left on the stack."
  },
  {
    "Opcode": "71h",
    "Mnemonics": "JUMP_ABSOLUTE",
    "Operand length": 2,
    "Description": "Set byte code counter to /target/."
  },
  {
    "Opcode": "74h",
    "Mnemonics": "LOAD_GLOBAL",
    "Operand length": 2,
    "Description": "Loads the global named co_names[/namei/] onto the stack."
  },
  {
    "Opcode": "77h",
    "Mnemonics": "CONTINUE_LOOP",
    "Operand length": 2,
    "Description": "Continues a loop due to a continue statement. /target/ is the address to jump to (which should be a FOR_ITER instruction)."
  },
  {
    "Opcode": "78h",
    "Mnemonics": "SETUP_LOOP",
    "Operand length": 2,
    "Description": "Pushes a block for a loop onto the block stack. The block spans from the current instruction with a size of /delta/ bytes."
  },
  {
    "Opcode": "79h",
    "Mnemonics": "SETUP_EXCEPT",
    "Operand length": 2,
    "Description": "Pushes a try block from a try-except clause onto the block stack. /delta/ points to the first except block."
  },
  {
    "Opcode": "7Ah",
    "Mnemonics": "SETUP_FINALLY",
    "Operand length": 2,
    "Description": "Pushes a try block from a try-except clause onto the block stack. /delta/ points to the finally block."
  },
  {
    "Opcode": "7Ch",
    "Mnemonics": "LOAD_FAST",
    "Operand length": 2,
    "Description": "Pushes a reference to the local co_varnames[/var_num/] onto the stack."
  },
  {
    "Opcode": "7Dh",
    "Mnemonics": "STORE_FAST",
    "Operand length": 2,
    "Description": "Stores TOS into the local co_varnames[/var_num/]."
  },
  {
    "Opcode": "7Eh",
    "Mnemonics": "DELETE_FAST",
    "Operand length": 2,
    "Description": "Deletes local co_varnames[/var_num/]."
  },
  {
    "Opcode": "82h",
    "Mnemonics": "RAISE_VARARGS",
    "Operand length": 2,
    "Description": "Raises an exception. /argc/ indicates the number of parameters to the raise statement, ranging from 0 to 3. The handler will find the traceback as TOS2, the parameter as TOS1, and the exception as TOS."
  },
  {
    "Opcode": "83h",
    "Mnemonics": "CALL_FUNCTION",
    "Operand length": 2,
    "Description": "Calls a function. The low byte of /argc/ indicates the number of positional parameters, the high byte the number of keyword parameters. On the stack, the opcode finds the keyword parameters first. For each keyword argument, the value is on top of the key. Below the keyword parameters, the positional parameters are on the stack, with the right-most parameter on top. Below the parameters, the function object to call is on the stack."
  },
  {
    "Opcode": "84h",
    "Mnemonics": "MAKE_FUNCTION",
    "Operand length": 2,
    "Description": "Pushes a new function object on the stack. TOS is the code associated with the function. The function object is defined to have /argc/ default parameters, which are found below TOS."
  },
  {
    "Opcode": "85h",
    "Mnemonics": "BUILD_SLICE",
    "Operand length": 2,
    "Description": "Pushes a slice object on the stack. /argc/ must be 2 or 3. If it is 2, slice(TOS1, TOS) is pushed; if it is 3, slice(TOS2, TOS1, TOS) is pushed. See the slice() built-in function for more information."
  },
  {
    "Opcode": "86h",
    "Mnemonics": "MAKE_CLOSURE",
    "Operand length": 2,
    "Description": "Creates a new function object, sets its func_closure slot, and pushes it on the stack. TOS is the code associated with the function. If the code object has N free variables, the next N items on the stack are the cells for these variables. The function also has /argc/ default parameters, where are found before the cells."
  },
  {
    "Opcode": "87h",
    "Mnemonics": "LOAD_CLOSURE",
    "Operand length": 2,
    "Description": "Pushes a reference to the cell contained in slot /i/ of the cell and free variable storage. The name of the variable is co_cellvars[i] if i is less than the length of co_cellvars. Otherwise it is co_freevars[i - len(co_cellvars)]."
  },
  {
    "Opcode": "88h",
    "Mnemonics": "LOAD_DEREF",
    "Operand length": 2,
    "Description": "Loads the cell contained in slot /i/ of the cell and free variable storage. Pushes a reference to the object the cell contains on the stack."
  },
  {
    "Opcode": "89h",
    "Mnemonics": "STORE_DEREF",
    "Operand length": 2,
    "Description": "Stores TOS into the cell contained in slot /i/ of the cell and free variable storage."
  },
  {
    "Opcode": "8Ch",
    "Mnemonics": "CALL_FUNCTION_VAR",
    "Operand length": 2,
    "Description": "Calls a function. /argc/ is interpreted as in CALL_FUNCTION. The top element on the stack contains the variable argument list, followed by keyword and positional arguments."
  },
  {
    "Opcode": "8Dh",
    "Mnemonics": "CALL_FUNCTION_KW",
    "Operand length": 2,
    "Description": "Calls a function. /argc/ is interpreted as in CALL_FUNCTION. The top element on the stack contains the keyword arguments dictionary, followed by explicit keyword and positional arguments."
  },
  {
    "Opcode": "8Eh",
    "Mnemonics": "CALL_FUNCTION_VAR_KW",
    "Operand length": 2,
    "Description": "Calls a function. /argc/ is interpreted as in CALL_FUNCTION. The top element on the stack contains the keyword arguments dictionary, followed by the variable-arguments tuple, followed by explicit keyword and positional arguments."
  },
  {
    "Opcode": "8Fh",
    "Mnemonics": "EXTENDED_ARG",
    "Operand length": 2,
    "Description": "Support for opargs more than 16 bits long."
  }
];