export interface Term {
  id: string;
  title: string;
  category: string;
  definition: string;
  example?: string;
  relatedTerms?: string[];
}

export const terms: Term[] = [
  {
    id: "java",
    title: "Java",
    category: "Programming Language",
    definition: "A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the principle of 'write once, run anywhere' (WORA), meaning compiled Java code can run on all platforms that support Java.",
    example: "public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }",
    relatedTerms: ["oop", "jvm", "bytecode"]
  },
  {
    id: "oop",
    title: "Object-Oriented Programming (OOP)",
    category: "Programming Paradigm",
    definition: "A programming paradigm based on the concept of 'objects', which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them.",
    relatedTerms: ["java", "abstraction", "encapsulation", "inheritance", "polymorphism"]
  },
  {
    id: "cpp",
    title: "C++",
    category: "Programming Language",
    definition: "A general-purpose programming language created as an extension of the C programming language. C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.",
    example: "#include <iostream>\nint main() { std::cout << \"Hello World\"; return 0; }",
    relatedTerms: ["c", "oop", "template"]
  },
  {
    id: "abstraction",
    title: "Abstraction",
    category: "OOP Concept",
    definition: "One of the four fundamental principles of object-oriented programming. Abstraction means hiding complex implementation details and showing only the necessary features of an object. It helps reduce programming complexity and effort.",
    relatedTerms: ["oop", "encapsulation", "interface"]
  },
  {
    id: "complexity",
    title: "Time Complexity",
    category: "Algorithm Analysis",
    definition: "A computational concept that describes the amount of time an algorithm takes to run as a function of the input size. It's typically expressed using Big O notation (e.g., O(n), O(log n), O(n²)) to classify algorithms according to their running time requirements.",
    relatedTerms: ["big-o", "space-complexity", "algorithm"]
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    category: "Sorting Algorithm",
    definition: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It has a time complexity of O(n²) in the average and worst case.",
    example: "function bubbleSort(arr) { for(let i = 0; i < arr.length; i++) { for(let j = 0; j < arr.length - i - 1; j++) { if(arr[j] > arr[j+1]) { [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; } } } return arr; }",
    relatedTerms: ["complexity", "sorting", "algorithm"]
  },
  {
    id: "api",
    title: "API (Application Programming Interface)",
    category: "Software Development",
    definition: "A set of rules, protocols, and tools that allows different software applications to communicate with each other. APIs define the methods and data structures that developers can use to interact with external software components, operating systems, or microservices.",
    relatedTerms: ["rest", "http", "web-service"]
  },
  {
    id: "git",
    title: "Git",
    category: "Version Control",
    definition: "A distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git allows multiple developers to work together on the same codebase and tracks changes to files over time.",
    relatedTerms: ["github", "version-control", "repository"]
  },
  {
    id: "database",
    title: "Database",
    category: "Data Storage",
    definition: "An organized collection of structured information or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS) and supports storage, retrieval, modification, and deletion of data.",
    relatedTerms: ["sql", "nosql", "dbms"]
  },
  {
    id: "recursion",
    title: "Recursion",
    category: "Programming Concept",
    definition: "A programming technique where a function calls itself directly or indirectly in order to solve a problem. Each recursive call works on a smaller instance of the same problem, with a base case that stops the recursion.",
    example: "function factorial(n) { if(n <= 1) return 1; return n * factorial(n - 1); }",
    relatedTerms: ["algorithm", "stack", "base-case"]
  }
];
