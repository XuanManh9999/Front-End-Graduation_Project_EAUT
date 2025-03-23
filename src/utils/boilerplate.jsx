const boilerplate = {
  // 🔹 Ngôn ngữ phổ biến
  javascript: `function greet() {
    console.log("Hello, World!");
  }
  greet();`,

  typescript: `function greet(): void {
    console.log("Hello, World!");
  }
  greet();`,

  java: `public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`,

  python: `def greet():
      print("Hello, World!")
  
  greet()`,

  cpp: `#include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, World!" << endl;
      return 0;
  }`,

  c: `#include <stdio.h>
  
  int main() {
      printf("Hello, World!\\n");
      return 0;
  }`,

  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
  </html>`,

  css: `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
  }`,

  php: `<?php
  echo "Hello, World!";
  ?>`,

  sql: `SELECT 'Hello, World!' AS message;`,

  rust: `fn main() {
      println!("Hello, World!");
  }`,

  go: `package main
  import "fmt"
  
  func main() {
      fmt.Println("Hello, World!")
  }`,

  swift: `import Foundation
  
  print("Hello, World!")`,

  kotlin: `fun main() {
      println("Hello, World!")
  }`,

  dart: `void main() {
    print('Hello, World!');
  }`,

  r: `print("Hello, World!")`,

  lua: `print("Hello, World!")`,

  ruby: `puts "Hello, World!"`,

  shell: `echo "Hello, World!"`,

  perl: `print "Hello, World!\\n";`,

  scala: `object Main extends App {
    println("Hello, World!")
  }`,

  groovy: `println 'Hello, World!'`,

  objectivec: `#import <Foundation/Foundation.h>
  
  int main(int argc, const char * argv[]) {
      @autoreleasepool {
          NSLog(@"Hello, World!");
      }
      return 0;
  }`,

  vb: `Module HelloWorld
    Sub Main()
      Console.WriteLine("Hello, World!")
    End Sub
  End Module`,

  haskell: `main = putStrLn "Hello, World!"`,

  clojure: `(println "Hello, World!")`,

  julia: `println("Hello, World!")`,

  // 🔹 Ngôn ngữ ít phổ biến hơn
  fortran: `PROGRAM HELLO
    PRINT *, 'Hello, World!'
    END PROGRAM HELLO`,

  cobol: `IDENTIFICATION DIVISION.
  PROGRAM-ID. HELLO-WORLD.
  PROCEDURE DIVISION.
      DISPLAY "Hello, World!".
      STOP RUN.`,

  pascal: `program HelloWorld;
  begin
    writeln('Hello, World!');
  end.`,

  lisp: `(format t "Hello, World!~%")`,

  prolog: `:- initialization(main).
  main :- write('Hello, World!'), nl.`,

  tcl: `puts "Hello, World!"`,

  smalltalk: `Transcript show: 'Hello, World!'.`,

  ada: `with Ada.Text_IO;
  use Ada.Text_IO;
  procedure Hello is
  begin
    Put_Line("Hello, World!");
  end Hello;`,

  assembly_x86: `section .data
  hello db 'Hello, World!', 0
  
  section .text
  global _start
  
  _start:
      mov edx, 13
      mov ecx, hello
      mov ebx, 1
      mov eax, 4
      int 0x80
  
      mov eax, 1
      xor ebx, ebx
      int 0x80`,

  erlang: `-module(hello).
  -export([start/0]).
  
  start() ->
      io:fwrite("Hello, World!~n").`,

  awk: `BEGIN { print "Hello, World!" }`,

  d: `import std.stdio;
  void main() {
      writeln("Hello, World!");
  }`,

  fsharp: `printfn "Hello, World!"`,

  nim: `echo "Hello, World!"`,

  elixir: `IO.puts "Hello, World!"`,

  crystal: `puts "Hello, World!"`,

  ocaml: `print_endline "Hello, World!";`,

  matlab: `disp('Hello, World!')`,

  bash: `#!/bin/bash
  echo "Hello, World!"`,

  powershell: `Write-Output "Hello, World!"`,

  rebol: `print "Hello, World!"`,

  fennel: `(print "Hello, World!")`,

  zig: `const std = @import("std");
  pub fn main() void {
      std.debug.print("Hello, World!\\n", .{});
  }`,

  factor: `"Hello, World!" print`,

  idris: `module Main
  
  main : IO ()
  main = putStrLn "Hello, World!"`,

  j: `echo 'Hello, World!'`,

  bc: `print "Hello, World!\\n"`,

  forth: `. "Hello, World!"`,

  chap: `print("Hello, World!")`,

  pike: `int main() {
      write("Hello, World!\\n");
      return 0;
  }`,

  mercury: `:- module hello.
  :- interface.
  :- import_module io.
  :- pred main(io::di, io::uo) is det.
  
  main(!IO) :-
      io.write_string("Hello, World!\\n", !IO).`,

  esolang_brainfuck: `++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.
  >++.<<+++++++++++++++.>.+++.------.--------.>+.>.`,

  esolang_malbolge: `(='&%!:9]!~}|z2Vx/yJ;GZzK5\`R)G3/UvRL3_wf/kJ4w}`,

  esolang_beescript: `HAI 1.2
  VISIBLE "Hello, World!"
  KTHXBYE`,

  v: `fn main() {
      println("Hello, World!")
  }`,

  swoft: `func main() {
      print("Hello, World!")
  }`,
};

export default boilerplate;
