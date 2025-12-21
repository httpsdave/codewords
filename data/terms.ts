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
  },
  {
    id: "variable",
    title: "Variable",
    category: "Programming Concept",
    definition: "A named storage location in computer memory that holds a value which can be changed during program execution. Variables have a name, a data type, and a value that can be read and modified throughout the program.",
    example: "let name = 'John'; const age = 25; var isStudent = true;",
    relatedTerms: ["data-type", "string", "integer", "boolean"]
  },
  {
    id: "function",
    title: "Function",
    category: "Programming Concept",
    definition: "A reusable block of code that performs a specific task. Functions can accept input parameters, execute a series of statements, and optionally return a value. They help organize code and promote code reusability.",
    example: "function add(a, b) { return a + b; } // Usage: add(5, 3) returns 8",
    relatedTerms: ["parameter", "return", "recursion", "method"]
  },
  {
    id: "array",
    title: "Array",
    category: "Data Structure",
    definition: "An ordered collection of elements stored at contiguous memory locations, where each element can be accessed using an index. Arrays are one of the most fundamental data structures used to store multiple values of the same type.",
    example: "let numbers = [1, 2, 3, 4, 5]; let fruits = ['apple', 'banana', 'orange'];",
    relatedTerms: ["data-structure", "index", "list", "collection"]
  },
  {
    id: "loop",
    title: "Loop",
    category: "Control Flow",
    definition: "A control structure that repeatedly executes a block of code until a specified condition is met. Common types include for loops, while loops, and do-while loops, which are essential for iterating over data or repeating operations.",
    example: "for(let i = 0; i < 5; i++) { console.log(i); } // Prints 0 to 4",
    relatedTerms: ["iteration", "for-loop", "while-loop", "control-flow"]
  },
  {
    id: "conditional",
    title: "Conditional Statement",
    category: "Control Flow",
    definition: "A programming construct that executes different code blocks based on whether a condition evaluates to true or false. The most common forms are if, if-else, and switch statements, which enable decision-making in programs.",
    example: "if (score >= 60) { console.log('Pass'); } else { console.log('Fail'); }",
    relatedTerms: ["boolean", "if-else", "switch", "control-flow"]
  },
  {
    id: "string",
    title: "String",
    category: "Data Type",
    definition: "A sequence of characters used to represent text in programming. Strings are typically enclosed in quotes and support various operations like concatenation, substring extraction, and pattern matching.",
    example: "let greeting = 'Hello, World!'; let message = `Welcome ${name}`;",
    relatedTerms: ["data-type", "character", "text", "variable"]
  },
  {
    id: "integer",
    title: "Integer",
    category: "Data Type",
    definition: "A whole number without a fractional component, which can be positive, negative, or zero. Integers are one of the most basic numeric data types used in programming for counting, indexing, and mathematical operations.",
    example: "let count = 42; let temperature = -5; let zero = 0;",
    relatedTerms: ["data-type", "number", "variable", "float"]
  },
  {
    id: "boolean",
    title: "Boolean",
    category: "Data Type",
    definition: "A data type that has only two possible values: true or false. Booleans are fundamental to logic and control flow, used extensively in conditional statements and logical operations.",
    example: "let isActive = true; let hasError = false; let result = (5 > 3); // true",
    relatedTerms: ["data-type", "conditional", "logical-operator", "true-false"]
  },
  {
    id: "object",
    title: "Object",
    category: "Data Structure",
    definition: "A collection of key-value pairs where keys are strings (or symbols) and values can be any data type. Objects are instances of classes in OOP and are used to represent real-world entities with properties and methods.",
    example: "let person = { name: 'Alice', age: 30, greet: function() { console.log('Hello'); } };",
    relatedTerms: ["oop", "class", "property", "method", "json"]
  },
  {
    id: "javascript",
    title: "JavaScript",
    category: "Programming Language",
    definition: "A high-level, interpreted programming language primarily used for creating interactive web pages. JavaScript runs in web browsers and on servers (Node.js), making it one of the most popular and versatile programming languages.",
    example: "document.getElementById('demo').innerHTML = 'Hello JavaScript!';",
    relatedTerms: ["nodejs", "typescript", "frontend", "web-development"]
  },
  {
    id: "python",
    title: "Python",
    category: "Programming Language",
    definition: "A high-level, interpreted programming language known for its simple, readable syntax and versatility. Python is widely used in web development, data science, artificial intelligence, automation, and scientific computing.",
    example: "print('Hello, Python!') # Simple and readable syntax",
    relatedTerms: ["programming-language", "scripting", "data-science", "machine-learning"]
  },
  {
    id: "html",
    title: "HTML (HyperText Markup Language)",
    category: "Web Technology",
    definition: "The standard markup language for creating web pages and web applications. HTML provides the structure and content of web pages using elements defined by tags, which browsers interpret and render.",
    example: "<html><body><h1>Hello World</h1><p>This is HTML</p></body></html>",
    relatedTerms: ["css", "web-development", "frontend", "markup"]
  },
  {
    id: "css",
    title: "CSS (Cascading Style Sheets)",
    category: "Web Technology",
    definition: "A stylesheet language used to describe the presentation and visual styling of HTML documents. CSS controls layout, colors, fonts, spacing, and responsive design, separating content from presentation.",
    example: "h1 { color: blue; font-size: 24px; margin: 10px; }",
    relatedTerms: ["html", "web-development", "frontend", "styling"]
  },
  {
    id: "sql",
    title: "SQL (Structured Query Language)",
    category: "Database Language",
    definition: "A domain-specific language used to manage and manipulate relational databases. SQL enables users to create, read, update, and delete data (CRUD operations), as well as define database schemas and control access.",
    example: "SELECT * FROM users WHERE age > 18 ORDER BY name;",
    relatedTerms: ["database", "query", "dbms", "relational-database"]
  },
  {
    id: "http",
    title: "HTTP (HyperText Transfer Protocol)",
    category: "Network Protocol",
    definition: "The foundation protocol of data communication on the World Wide Web. HTTP defines how messages are formatted and transmitted between web browsers and servers, using methods like GET, POST, PUT, and DELETE.",
    example: "GET /api/users HTTP/1.1\\nHost: example.com",
    relatedTerms: ["https", "api", "rest", "web", "protocol"]
  },
  {
    id: "https",
    title: "HTTPS (HTTP Secure)",
    category: "Network Protocol",
    definition: "An extension of HTTP that uses encryption (TLS/SSL) to secure communication between browsers and web servers. HTTPS protects data integrity and privacy, preventing eavesdropping and man-in-the-middle attacks.",
    relatedTerms: ["http", "security", "encryption", "ssl", "tls"]
  },
  {
    id: "json",
    title: "JSON (JavaScript Object Notation)",
    category: "Data Format",
    definition: "A lightweight, text-based data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is widely used for APIs, configuration files, and data storage.",
    example: '{ "name": "John", "age": 30, "isStudent": false, "courses": ["Math", "CS"] }',
    relatedTerms: ["object", "api", "data-format", "xml"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    category: "Software Development",
    definition: "The practice of creating the user interface and user experience of a website or application. Frontend developers work with HTML, CSS, and JavaScript to build what users see and interact with in their browsers.",
    relatedTerms: ["html", "css", "javascript", "backend", "ui-ux"]
  },
  {
    id: "backend",
    title: "Backend Development",
    category: "Software Development",
    definition: "The server-side development that handles data processing, business logic, database interactions, and server configuration. Backend developers work with server languages, databases, and APIs to power the application's functionality.",
    relatedTerms: ["frontend", "server", "database", "api", "nodejs"]
  },
  {
    id: "algorithm",
    title: "Algorithm",
    category: "Computer Science",
    definition: "A step-by-step procedure or formula for solving a problem or completing a task. Algorithms are the foundation of computer programming, defining the logic and efficiency of how programs process data and make decisions.",
    relatedTerms: ["complexity", "data-structure", "sorting", "searching", "efficiency"]
  },
  {
    id: "big-o",
    title: "Big O Notation",
    category: "Algorithm Analysis",
    definition: "A mathematical notation used to describe the upper bound of an algorithm's time or space complexity in terms of input size. Big O helps compare algorithm efficiency, with common classifications like O(1), O(n), O(log n), and O(n²).",
    example: "O(1) - constant, O(n) - linear, O(log n) - logarithmic, O(n²) - quadratic",
    relatedTerms: ["complexity", "algorithm", "performance", "efficiency"]
  },
  {
    id: "data-structure",
    title: "Data Structure",
    category: "Computer Science",
    definition: "A specialized format for organizing, storing, and managing data in computer memory. Data structures define the relationship between data elements and the operations that can be performed on them, affecting program efficiency.",
    relatedTerms: ["array", "stack", "queue", "tree", "hash-table", "linked-list"]
  },
  {
    id: "stack",
    title: "Stack",
    category: "Data Structure",
    definition: "A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end, called the top. Stacks are used in function call management, expression evaluation, undo mechanisms, and backtracking algorithms.",
    example: "stack.push(1); stack.push(2); stack.pop(); // Returns 2",
    relatedTerms: ["data-structure", "lifo", "queue", "recursion"]
  },
  {
    id: "queue",
    title: "Queue",
    category: "Data Structure",
    definition: "A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front. Queues are used in task scheduling, breadth-first search, printer spooling, and handling asynchronous operations.",
    example: "queue.enqueue(1); queue.enqueue(2); queue.dequeue(); // Returns 1",
    relatedTerms: ["data-structure", "fifo", "stack", "linked-list"]
  },
  {
    id: "hash-table",
    title: "Hash Table",
    category: "Data Structure",
    definition: "A data structure that implements an associative array using a hash function to compute an index into an array of buckets. Hash tables provide average O(1) time complexity for insertions, deletions, and lookups, making them extremely efficient.",
    example: "let map = new Map(); map.set('key', 'value'); map.get('key'); // 'value'",
    relatedTerms: ["data-structure", "hash-function", "dictionary", "object"]
  },
  {
    id: "linked-list",
    title: "Linked List",
    category: "Data Structure",
    definition: "A linear data structure where elements (nodes) are stored in separate memory locations, with each node containing data and a reference (link) to the next node. Unlike arrays, linked lists allow efficient insertions and deletions.",
    example: "class Node { constructor(data) { this.data = data; this.next = null; } }",
    relatedTerms: ["data-structure", "node", "pointer", "array"]
  },
  {
    id: "tree",
    title: "Tree",
    category: "Data Structure",
    definition: "A hierarchical data structure consisting of nodes connected by edges, with a single root node and child nodes forming a parent-child relationship. Trees are used in file systems, DOM structures, decision making, and databases.",
    relatedTerms: ["data-structure", "binary-tree", "node", "graph", "hierarchical"]
  },
  {
    id: "binary-search",
    title: "Binary Search",
    category: "Algorithm",
    definition: "An efficient search algorithm that finds a target value in a sorted array by repeatedly dividing the search interval in half. Binary search has O(log n) time complexity, making it much faster than linear search for large datasets.",
    example: "function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while(left <= right) { let mid = Math.floor((left + right) / 2); if(arr[mid] === target) return mid; if(arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",
    relatedTerms: ["algorithm", "search", "sorted", "log-n", "divide-conquer"]
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    category: "Sorting Algorithm",
    definition: "A divide-and-conquer sorting algorithm that recursively divides an array into halves, sorts them, and merges them back together. Merge sort guarantees O(n log n) time complexity in all cases, making it reliable for large datasets.",
    example: "function mergeSort(arr) { if(arr.length <= 1) return arr; const mid = Math.floor(arr.length / 2); const left = mergeSort(arr.slice(0, mid)); const right = mergeSort(arr.slice(mid)); return merge(left, right); }",
    relatedTerms: ["sorting", "algorithm", "divide-conquer", "recursion", "n-log-n"]
  },
  {
    id: "quick-sort",
    title: "Quick Sort",
    category: "Sorting Algorithm",
    definition: "A highly efficient divide-and-conquer sorting algorithm that selects a 'pivot' element and partitions the array around it. Quick sort has average O(n log n) complexity and is often faster in practice than other sorting algorithms.",
    example: "function quickSort(arr) { if(arr.length <= 1) return arr; const pivot = arr[arr.length - 1]; const left = arr.filter((x, i) => x < pivot && i < arr.length - 1); const right = arr.filter((x, i) => x >= pivot && i < arr.length - 1); return [...quickSort(left), pivot, ...quickSort(right)]; }",
    relatedTerms: ["sorting", "algorithm", "divide-conquer", "partition", "pivot"]
  },
  {
    id: "ide",
    title: "IDE (Integrated Development Environment)",
    category: "Development Tool",
    definition: "A software application that provides comprehensive facilities for software development, typically including a source code editor, debugger, compiler/interpreter, and build automation tools. Popular IDEs include VS Code, IntelliJ, and Eclipse.",
    relatedTerms: ["editor", "debugger", "compiler", "development", "vscode"]
  },
  {
    id: "compiler",
    title: "Compiler",
    category: "Development Tool",
    definition: "A program that translates source code written in a high-level programming language into machine code or bytecode that can be executed by a computer. Compilers analyze and optimize code before generating the final executable.",
    relatedTerms: ["interpreter", "bytecode", "machine-code", "build", "compilation"]
  },
  {
    id: "interpreter",
    title: "Interpreter",
    category: "Development Tool",
    definition: "A program that directly executes source code line-by-line without prior compilation to machine code. Interpreters provide immediate feedback and easier debugging but generally run slower than compiled code.",
    relatedTerms: ["compiler", "runtime", "execution", "scripting", "jit"]
  },
  {
    id: "debugging",
    title: "Debugging",
    category: "Software Development",
    definition: "The process of identifying, analyzing, and removing bugs (errors) from computer programs. Debugging involves using tools like debuggers, logging, breakpoints, and testing to locate and fix issues in code.",
    relatedTerms: ["bug", "testing", "debugger", "breakpoint", "error"]
  },
  {
    id: "testing",
    title: "Software Testing",
    category: "Software Development",
    definition: "The process of evaluating software to ensure it works correctly and meets requirements. Testing includes unit tests, integration tests, and end-to-end tests, helping catch bugs early and maintain code quality.",
    relatedTerms: ["unit-test", "integration-test", "debugging", "qa", "test-driven"]
  },
  {
    id: "framework",
    title: "Framework",
    category: "Software Development",
    definition: "A pre-built structure or platform that provides a foundation for developing software applications. Frameworks offer reusable code, libraries, and tools that enforce best practices and speed up development.",
    relatedTerms: ["library", "architecture", "development", "react", "angular"]
  },
  {
    id: "library",
    title: "Library",
    category: "Software Development",
    definition: "A collection of pre-written code, functions, and routines that developers can use to perform common tasks without writing code from scratch. Libraries promote code reuse and reduce development time.",
    relatedTerms: ["framework", "module", "package", "dependency", "npm"]
  },
  {
    id: "rest",
    title: "REST (Representational State Transfer)",
    category: "API Architecture",
    definition: "An architectural style for designing networked applications that uses HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs. RESTful APIs are stateless, scalable, and widely used in web services.",
    example: "GET /api/users/123 - Retrieve user\\nPOST /api/users - Create user\\nPUT /api/users/123 - Update user\\nDELETE /api/users/123 - Delete user",
    relatedTerms: ["api", "http", "web-service", "json", "stateless"]
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "Programming Language",
    definition: "A strongly-typed superset of JavaScript that adds static type checking and additional features. TypeScript compiles to JavaScript and helps catch errors at compile-time, improving code quality and developer productivity.",
    example: "let count: number = 5; function greet(name: string): string { return `Hello ${name}`; }",
    relatedTerms: ["javascript", "type-checking", "compiled", "static-typing"]
  },
  {
    id: "nodejs",
    title: "Node.js",
    category: "Runtime Environment",
    definition: "A JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server-side. Node.js uses an event-driven, non-blocking I/O model, making it efficient for building scalable network applications.",
    relatedTerms: ["javascript", "backend", "server", "npm", "event-driven"]
  },
  {
    id: "react",
    title: "React",
    category: "Frontend Framework",
    definition: "A JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React uses a component-based architecture and virtual DOM for efficient rendering and state management.",
    relatedTerms: ["javascript", "frontend", "component", "jsx", "virtual-dom"]
  },
  {
    id: "agile",
    title: "Agile Methodology",
    category: "Software Development",
    definition: "An iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback. Agile breaks projects into small increments (sprints), allowing teams to adapt to changing requirements quickly.",
    relatedTerms: ["scrum", "sprint", "methodology", "development", "iteration"]
  },
  {
    id: "cicd",
    title: "CI/CD (Continuous Integration/Continuous Deployment)",
    category: "DevOps",
    definition: "A software development practice where code changes are automatically built, tested, and deployed. CI merges code frequently to detect issues early, while CD automates the release process to production.",
    relatedTerms: ["devops", "automation", "deployment", "testing", "pipeline"]
  },
  {
    id: "docker",
    title: "Docker",
    category: "DevOps",
    definition: "A platform that uses containerization to package applications and their dependencies into portable containers. Docker ensures applications run consistently across different environments, from development to production.",
    relatedTerms: ["container", "devops", "virtualization", "deployment", "kubernetes"]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Infrastructure",
    definition: "The delivery of computing services (servers, storage, databases, networking, software) over the internet. Cloud providers like AWS, Azure, and Google Cloud offer scalable, on-demand resources with pay-as-you-go pricing.",
    relatedTerms: ["aws", "azure", "gcp", "saas", "paas", "iaas"]
  },
  {
    id: "microservices",
    title: "Microservices",
    category: "Architecture Pattern",
    definition: "An architectural style that structures an application as a collection of small, independent services that communicate via APIs. Each microservice handles a specific business function and can be developed, deployed, and scaled independently.",
    relatedTerms: ["architecture", "api", "distributed", "scalability", "rest"]
  },
  {
    id: "async-await",
    title: "Async/Await",
    category: "Programming Concept",
    definition: "A syntax for handling asynchronous operations in JavaScript that makes async code look and behave like synchronous code. Async/await simplifies promise-based code, improving readability and error handling.",
    example: "async function fetchData() { const response = await fetch('/api/data'); const data = await response.json(); return data; }",
    relatedTerms: ["promise", "asynchronous", "javascript", "callback"]
  },
  {
    id: "encapsulation",
    title: "Encapsulation",
    category: "OOP Concept",
    definition: "An object-oriented programming principle that bundles data and methods that operate on that data within a single unit (class), restricting direct access to some components. Encapsulation hides internal implementation details and protects data integrity.",
    relatedTerms: ["oop", "abstraction", "information-hiding", "private", "public"]
  },
  {
    id: "inheritance",
    title: "Inheritance",
    category: "OOP Concept",
    definition: "An object-oriented programming mechanism where a new class (child/subclass) derives properties and methods from an existing class (parent/superclass). Inheritance promotes code reuse and establishes hierarchical relationships between classes.",
    relatedTerms: ["oop", "polymorphism", "subclass", "superclass", "extends"]
  },
  {
    id: "polymorphism",
    title: "Polymorphism",
    category: "OOP Concept",
    definition: "An object-oriented programming concept where objects of different classes can be treated as objects of a common superclass. Polymorphism allows methods to behave differently based on the object that invokes them, enabling flexible and extensible code.",
    relatedTerms: ["oop", "inheritance", "method-overriding", "interface"]
  },
  {
    id: "interface",
    title: "Interface",
    category: "OOP Concept",
    definition: "A contract in object-oriented programming that defines a set of methods a class must implement without specifying how they work. Interfaces enable abstraction, define capabilities, and allow different classes to be used interchangeably.",
    relatedTerms: ["oop", "abstraction", "contract", "implementation", "polymorphism"]
  },
  {
    id: "jvm",
    title: "JVM (Java Virtual Machine)",
    category: "Runtime Environment",
    definition: "A virtual machine that enables computers to run Java programs and programs written in other languages compiled to Java bytecode. The JVM provides platform independence, memory management, and security features.",
    relatedTerms: ["java", "bytecode", "runtime", "garbage-collection", "platform-independent"]
  },
  {
    id: "bytecode",
    title: "Bytecode",
    category: "Computer Science",
    definition: "An intermediate representation of code that sits between source code and machine code. Bytecode is executed by a virtual machine (like JVM) rather than directly by hardware, enabling platform independence and optimization.",
    relatedTerms: ["jvm", "compiler", "intermediate", "java", "portable"]
  },
  {
    id: "space-complexity",
    title: "Space Complexity",
    category: "Algorithm Analysis",
    definition: "A measure of the amount of memory an algorithm needs relative to the input size. Space complexity analysis helps evaluate memory efficiency and is typically expressed using Big O notation, similar to time complexity.",
    relatedTerms: ["complexity", "big-o", "memory", "algorithm", "efficiency"]
  },
  {
    id: "sorting",
    title: "Sorting",
    category: "Algorithm",
    definition: "The process of arranging data elements in a specific order (ascending or descending). Sorting is a fundamental operation in computer science with various algorithms like bubble sort, merge sort, and quick sort, each with different time complexities.",
    relatedTerms: ["algorithm", "bubble-sort", "merge-sort", "quick-sort", "ordering"]
  },
  {
    id: "web-service",
    title: "Web Service",
    category: "Software Architecture",
    definition: "A software system designed to support interoperable machine-to-machine interaction over a network. Web services use standard protocols like HTTP and data formats like JSON or XML to enable communication between different applications.",
    relatedTerms: ["api", "rest", "http", "soap", "integration"]
  },
  {
    id: "github",
    title: "GitHub",
    category: "Development Platform",
    definition: "A web-based platform for version control and collaboration using Git. GitHub hosts Git repositories, provides issue tracking, code review tools, CI/CD pipelines, and enables developers to collaborate on open-source and private projects.",
    relatedTerms: ["git", "repository", "version-control", "collaboration", "pull-request"]
  },
  {
    id: "version-control",
    title: "Version Control",
    category: "Software Development",
    definition: "A system that tracks changes to files over time, allowing developers to recall specific versions, collaborate without conflicts, and maintain a history of modifications. Git is the most popular version control system.",
    relatedTerms: ["git", "github", "commit", "branch", "repository"]
  },
  {
    id: "repository",
    title: "Repository",
    category: "Version Control",
    definition: "A storage location for software projects that contains all files, folders, and the complete history of changes. Repositories can be local (on your computer) or remote (on platforms like GitHub), enabling collaboration and backup.",
    relatedTerms: ["git", "github", "version-control", "commit", "clone"]
  },
  {
    id: "nosql",
    title: "NoSQL Database",
    category: "Database",
    definition: "A category of database management systems that don't use the traditional relational (SQL) model. NoSQL databases (like MongoDB, Redis, Cassandra) are designed for scalability, flexibility, and handling unstructured or semi-structured data.",
    relatedTerms: ["database", "sql", "mongodb", "document-store", "key-value"]
  },
  {
    id: "dbms",
    title: "DBMS (Database Management System)",
    category: "Database",
    definition: "Software that enables users to create, manage, and interact with databases. DBMS handles data storage, retrieval, security, backup, and provides an interface for database operations through languages like SQL.",
    relatedTerms: ["database", "sql", "data-management", "relational", "query"]
  },
  {
    id: "base-case",
    title: "Base Case",
    category: "Programming Concept",
    definition: "A condition in recursive functions that stops the recursion by returning a value without making further recursive calls. Base cases prevent infinite recursion and define the simplest instance of a problem that can be solved directly.",
    example: "function factorial(n) { if(n <= 1) return 1; // Base case return n * factorial(n - 1); }",
    relatedTerms: ["recursion", "termination", "recursive", "algorithm"]
  },
  {
    id: "npm",
    title: "npm (Node Package Manager)",
    category: "Development Tool",
    definition: "The default package manager for Node.js that allows developers to install, share, and manage JavaScript libraries and dependencies. npm hosts hundreds of thousands of reusable packages and manages project dependencies via package.json.",
    relatedTerms: ["nodejs", "package", "dependency", "library", "javascript"]
  },
  {
    id: "class",
    title: "Class",
    category: "OOP Concept",
    definition: "A blueprint or template for creating objects in object-oriented programming. Classes define properties (attributes) and methods (functions) that objects created from the class will have, encapsulating data and behavior together.",
    example: "class Car { constructor(brand) { this.brand = brand; } drive() { console.log('Driving'); } }",
    relatedTerms: ["oop", "object", "constructor", "method", "instance"]
  },
  {
    id: "method",
    title: "Method",
    category: "Programming Concept",
    definition: "A function that is associated with an object or class in object-oriented programming. Methods define behaviors and operations that can be performed on objects, accessing and manipulating the object's data.",
    example: "class Person { greet() { return 'Hello!'; } } // greet is a method",
    relatedTerms: ["function", "class", "object", "oop", "behavior"]
  }
];
