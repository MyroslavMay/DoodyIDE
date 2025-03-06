export const LANGS_VER = {
    "c": "10.2.0",
    "cpp": "10.2.0",
    "shell": "5.2.0",
    "dart": "2.19.6",
    "python": "3.10.0",
    "ruby": "3.0.1",
    "rust": "1.68.2",
    "typescript": "5.0.3",
    "javascript": "18.15.0",
    "csharp": "5.0.201",
    "go": "1.16.2",
    "java": "15.0.2",
    "php": "8.2.3",
    "powershell": "7.1.4",
    "swift": "5.3.3",
    "vb": "5.0.201",
    "fsharp": "5.0.201",
    "plaintext": "null",
    "lua": "5.4.4",
    "perl": "5.36.0",
    "clojure": "1.10.3",
    "coffescript": "2.5.1",
    "groovy": "3.0.7",
};

export const LANGS_SPIPPETS = {
    "shell": `#!/bin/bash
name="You"
echo "Hello, $name"`,

    "clojure": `(ns clojure.examples.hello
   (:gen-class))
(defn hello-world []
   (println "Hello World"))
(hello-world)`,

    "coffescript": 'console.log "Hello world"',

    "dart": `void main() {
  print("Hello, World!");
}`,

    "typescript": `let message: string = 'Hello, World!';
console.log(message);`,

    "javascript": `let name = "You";
console.log('Hello, World!');
console.log("Your name is " + name);`,

    "vb": `Imports System

Module Module1
   Sub Main()
     Console.WriteLine("Hello World!")
     Console.WriteLine("Press Enter Key to Exit.")
     Console.ReadLine()
   End Sub
End Module`,

    "fsharp": `printfn "Hello, World!"`,

    "csharp": `public class Program
{
    public static void Main(string[] args)
    {
        System.Console.WriteLine("Hello, World!");
    }
}`,

    "c": `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,

    "cpp": `#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`,

    "go": `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

    "groovy": 'println "Hello World!"',

    "java": `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`,

    "lua": 'print("Hello World!")',

    "perl": `use strict; 
use warnings; 
  
print("Hello World"); `,

    "php": "<?php echo 'Hello, World!'; ?>",

    "powershell": 'Write-Host "Hello, World!" -BackgroundColor Red -ForegroundColor White',

    "python": 'print("Hello, World!")',

    "ruby": 'puts "Hello, World!"',

    "rust": `fn main() {
    println!("Hello World!");
}`,

    "swift": 'print("Hello, World!")'
}