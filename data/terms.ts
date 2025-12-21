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
  },
  {
    id: "data-type",
    title: "Data Type",
    category: "Programming Concept",
    definition: "A classification that specifies which type of value a variable can hold and what operations can be performed on it. Common data types include integers, strings, booleans, floats, and complex types like arrays and objects.",
    relatedTerms: ["variable", "integer", "string", "boolean", "float", "array"]
  },
  {
    id: "parameter",
    title: "Parameter",
    category: "Programming Concept",
    definition: "A variable declared in a function definition that accepts values (arguments) passed when the function is called. Parameters allow functions to receive input data and perform operations based on that data.",
    example: "function greet(name, age) { // name and age are parameters\n  return `Hello ${name}, you are ${age} years old`;\n}",
    relatedTerms: ["function", "argument", "variable", "return"]
  },
  {
    id: "return",
    title: "Return Statement",
    category: "Programming Concept",
    definition: "A statement that ends function execution and specifies the value to be sent back to the caller. Return statements are essential for functions that produce output values.",
    example: "function add(a, b) { return a + b; } // Returns the sum",
    relatedTerms: ["function", "parameter", "value", "output"]
  },
  {
    id: "index",
    title: "Index",
    category: "Programming Concept",
    definition: "A numeric position identifier used to access elements in ordered data structures like arrays and strings. Most programming languages use zero-based indexing, where the first element is at index 0.",
    example: "let arr = ['a', 'b', 'c'];\narr[0]; // 'a' - first element\narr[2]; // 'c' - third element",
    relatedTerms: ["array", "list", "subscript", "position"]
  },
  {
    id: "number",
    title: "Number",
    category: "Data Type",
    definition: "A primitive data type that represents numeric values, including integers and floating-point numbers. Numbers are used for mathematical operations, counting, measurements, and calculations.",
    example: "let count = 42; // Integer\nlet price = 19.99; // Float\nlet result = count * 2; // 84",
    relatedTerms: ["integer", "float", "data-type", "variable"]
  },
  {
    id: "float",
    title: "Float (Floating-Point Number)",
    category: "Data Type",
    definition: "A numeric data type that represents real numbers with decimal points. Floats are used for values that require fractional precision, such as scientific calculations, currency, and measurements.",
    example: "let pi = 3.14159;\nlet price = 29.99;\nlet result = 10 / 3; // 3.3333...",
    relatedTerms: ["number", "integer", "data-type", "decimal"]
  },
  {
    id: "character",
    title: "Character",
    category: "Data Type",
    definition: "A single unit of text, such as a letter, digit, or symbol. Characters are the building blocks of strings and are typically represented using encoding schemes like ASCII or Unicode.",
    example: "char letter = 'A';\nchar digit = '9';\nchar symbol = '@';",
    relatedTerms: ["string", "text", "data-type", "unicode"]
  },
  {
    id: "property",
    title: "Property",
    category: "OOP Concept",
    definition: "A value associated with an object that describes its characteristics or attributes. Properties can be accessed and modified using dot notation or bracket notation in most programming languages.",
    example: "let person = { name: 'Alice', age: 30 };\nperson.name; // 'Alice' - accessing property\nperson.age = 31; // Modifying property",
    relatedTerms: ["object", "attribute", "field", "member"]
  },
  {
    id: "constructor",
    title: "Constructor",
    category: "OOP Concept",
    definition: "A special method that is automatically called when creating a new instance of a class. Constructors initialize object properties and perform setup operations needed for the object to function properly.",
    example: "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}",
    relatedTerms: ["class", "object", "instance", "initialization"]
  },
  {
    id: "instance",
    title: "Instance",
    category: "OOP Concept",
    definition: "A specific realization of a class that exists in memory. Each instance has its own set of property values while sharing the class's methods and structure. Creating an instance is called instantiation.",
    example: "class Car { constructor(brand) { this.brand = brand; } }\nlet myCar = new Car('Toyota'); // myCar is an instance",
    relatedTerms: ["class", "object", "constructor", "instantiation"]
  },
  {
    id: "behavior",
    title: "Behavior",
    category: "OOP Concept",
    definition: "The actions or operations that an object can perform, typically implemented as methods. Behavior defines what an object can do, while properties define what an object is.",
    relatedTerms: ["method", "function", "object", "oop"]
  },
  {
    id: "argument",
    title: "Argument",
    category: "Programming Concept",
    definition: "The actual value passed to a function when it is called, corresponding to the function's parameters. Arguments provide the concrete data that the function will operate on.",
    example: "function greet(name) { return `Hello ${name}`; }\ngreet('Alice'); // 'Alice' is the argument",
    relatedTerms: ["parameter", "function", "value", "call"]
  },
  {
    id: "value",
    title: "Value",
    category: "Programming Concept",
    definition: "Data stored in a variable or returned by an expression. Values can be primitive types (numbers, strings, booleans) or complex types (objects, arrays). Values are the actual data that programs manipulate.",
    relatedTerms: ["variable", "data-type", "expression", "literal"]
  },
  {
    id: "output",
    title: "Output",
    category: "Programming Concept",
    definition: "Data produced by a program or function and sent to an external destination, such as the screen, a file, or another function. Output is the result of program execution that users or other systems can observe.",
    example: "console.log('Hello World'); // Console output\nreturn result; // Function output",
    relatedTerms: ["input", "return", "console", "print"]
  },
  {
    id: "text",
    title: "Text",
    category: "Data Concept",
    definition: "Human-readable character sequences used for communication and data representation. In programming, text is typically represented as strings and is fundamental for user interfaces, documentation, and data exchange.",
    relatedTerms: ["string", "character", "unicode", "encoding"]
  },
  {
    id: "control-flow",
    title: "Control Flow",
    category: "Programming Concept",
    definition: "The order in which individual statements, instructions, or function calls are executed in a program. Control flow structures like conditionals, loops, and function calls determine the path of execution.",
    relatedTerms: ["conditional", "loop", "if-else", "switch", "for-loop"]
  },
  {
    id: "for-loop",
    title: "For Loop",
    category: "Control Flow",
    definition: "A control structure that repeats a block of code a specific number of times, typically iterating over a range or collection. For loops have an initialization, condition, and increment/decrement expression.",
    example: "for(let i = 0; i < 10; i++) {\n  console.log(i); // Prints 0 to 9\n}",
    relatedTerms: ["loop", "iteration", "while-loop", "control-flow"]
  },
  {
    id: "while-loop",
    title: "While Loop",
    category: "Control Flow",
    definition: "A control structure that repeatedly executes a block of code as long as a specified condition remains true. While loops are useful when the number of iterations is not known in advance.",
    example: "let i = 0;\nwhile(i < 5) {\n  console.log(i);\n  i++;\n}",
    relatedTerms: ["loop", "iteration", "for-loop", "control-flow"]
  },
  {
    id: "if-else",
    title: "If-Else Statement",
    category: "Control Flow",
    definition: "A conditional statement that executes one block of code if a condition is true, and another block if it's false. If-else statements are fundamental for decision-making in programs.",
    example: "if (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",
    relatedTerms: ["conditional", "boolean", "control-flow", "switch"]
  },
  {
    id: "switch",
    title: "Switch Statement",
    category: "Control Flow",
    definition: "A control structure that selects one of many code blocks to execute based on the value of an expression. Switch statements provide a cleaner alternative to multiple if-else statements for value-based branching.",
    example: "switch(day) {\n  case 'Monday': console.log('Start of week'); break;\n  case 'Friday': console.log('End of week'); break;\n  default: console.log('Midweek');\n}",
    relatedTerms: ["conditional", "control-flow", "if-else", "case"]
  },
  {
    id: "iteration",
    title: "Iteration",
    category: "Programming Concept",
    definition: "The process of repeatedly executing a set of instructions, typically using loops. Each repetition is called an iteration, and the process continues until a specified condition is met.",
    relatedTerms: ["loop", "for-loop", "while-loop", "recursion"]
  },
  {
    id: "promise",
    title: "Promise",
    category: "Programming Concept",
    definition: "An object representing the eventual completion or failure of an asynchronous operation in JavaScript. Promises provide a cleaner way to handle async operations compared to callbacks, with .then() and .catch() methods.",
    example: "fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));",
    relatedTerms: ["async-await", "asynchronous", "callback", "javascript"]
  },
  {
    id: "callback",
    title: "Callback Function",
    category: "Programming Concept",
    definition: "A function passed as an argument to another function, to be executed later when a certain event occurs or operation completes. Callbacks are fundamental to asynchronous programming and event handling.",
    example: "setTimeout(() => {\n  console.log('Executed after 1 second');\n}, 1000);",
    relatedTerms: ["function", "asynchronous", "promise", "event-handler"]
  },
  {
    id: "asynchronous",
    title: "Asynchronous Programming",
    category: "Programming Paradigm",
    definition: "A programming approach where operations can run independently of the main program flow, allowing the program to continue executing without waiting for long-running tasks to complete. Essential for I/O operations and network requests.",
    relatedTerms: ["async-await", "promise", "callback", "synchronous"]
  },
  {
    id: "list",
    title: "List",
    category: "Data Structure",
    definition: "An ordered collection of elements that can grow or shrink dynamically. Lists are similar to arrays but often provide more flexible operations for adding, removing, and modifying elements.",
    relatedTerms: ["array", "collection", "linked-list", "data-structure"]
  },
  {
    id: "collection",
    title: "Collection",
    category: "Data Structure",
    definition: "A container object that groups multiple elements together. Collections include arrays, lists, sets, maps, and other data structures that store and organize data.",
    relatedTerms: ["array", "list", "set", "map", "data-structure"]
  },
  {
    id: "private",
    title: "Private (Access Modifier)",
    category: "OOP Concept",
    definition: "An access modifier that restricts access to class members (properties and methods) to only within that class. Private members cannot be accessed from outside the class, enforcing encapsulation.",
    example: "class BankAccount {\n  #balance = 0; // Private field in JavaScript\n  deposit(amount) { this.#balance += amount; }\n}",
    relatedTerms: ["public", "encapsulation", "access-modifier", "protected"]
  },
  {
    id: "public",
    title: "Public (Access Modifier)",
    category: "OOP Concept",
    definition: "An access modifier that allows class members to be accessed from anywhere in the program. Public members form the interface through which external code interacts with objects.",
    example: "class Person {\n  public name: string; // Public property\n  public greet() { return 'Hello'; } // Public method\n}",
    relatedTerms: ["private", "encapsulation", "access-modifier", "protected"]
  },
  {
    id: "subclass",
    title: "Subclass",
    category: "OOP Concept",
    definition: "A class that inherits properties and methods from another class (the superclass). Subclasses can add new features or override inherited behavior, enabling code reuse and specialization.",
    example: "class Animal { }\nclass Dog extends Animal { bark() { return 'Woof!'; } }\n// Dog is a subclass of Animal",
    relatedTerms: ["inheritance", "superclass", "extends", "derived-class"]
  },
  {
    id: "superclass",
    title: "Superclass",
    category: "OOP Concept",
    definition: "A class from which other classes (subclasses) inherit properties and methods. The superclass defines common behavior that subclasses can reuse and extend.",
    example: "class Animal { eat() { } } // Superclass\nclass Dog extends Animal { } // Dog inherits from Animal",
    relatedTerms: ["inheritance", "subclass", "base-class", "parent-class"]
  },
  {
    id: "extends",
    title: "Extends (Keyword)",
    category: "OOP Concept",
    definition: "A keyword used in object-oriented programming to create a subclass that inherits from a superclass. The extends keyword establishes an inheritance relationship between classes.",
    example: "class Vehicle { }\nclass Car extends Vehicle { }\n// Car inherits from Vehicle",
    relatedTerms: ["inheritance", "subclass", "superclass", "implements"]
  },
  {
    id: "method-overriding",
    title: "Method Overriding",
    category: "OOP Concept",
    definition: "A feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. Overriding enables polymorphism and customization of inherited behavior.",
    example: "class Animal { speak() { return 'Sound'; } }\nclass Dog extends Animal { speak() { return 'Woof'; } }",
    relatedTerms: ["polymorphism", "inheritance", "override", "virtual"]
  },
  {
    id: "contract",
    title: "Contract (Programming)",
    category: "Software Design",
    definition: "An agreement that defines the obligations and guarantees between different parts of a program. Interfaces and abstract classes define contracts that implementing classes must fulfill.",
    relatedTerms: ["interface", "abstraction", "api", "specification"]
  },
  {
    id: "implementation",
    title: "Implementation",
    category: "Software Design",
    definition: "The concrete realization of an interface, abstract class, or design specification. Implementation provides the actual code and logic that fulfills the contract defined by an abstraction.",
    relatedTerms: ["interface", "abstraction", "concrete", "realization"]
  },
  {
    id: "attribute",
    title: "Attribute",
    category: "OOP Concept",
    definition: "A characteristic or property of an object that describes its state. Attributes store data associated with objects and are often accessed through getter and setter methods.",
    relatedTerms: ["property", "field", "member", "variable"]
  },
  {
    id: "field",
    title: "Field",
    category: "OOP Concept",
    definition: "A variable declared within a class that holds data for objects of that class. Fields represent the state or properties of objects and can have different access modifiers.",
    relatedTerms: ["property", "attribute", "member", "variable"]
  },
  {
    id: "member",
    title: "Member",
    category: "OOP Concept",
    definition: "A general term for properties, methods, and other elements that belong to a class or object. Members define the structure and behavior of classes.",
    relatedTerms: ["property", "method", "field", "class"]
  },
  {
    id: "initialization",
    title: "Initialization",
    category: "Programming Concept",
    definition: "The process of assigning an initial value to a variable, object, or data structure when it is created. Proper initialization prevents undefined behavior and ensures objects start in a valid state.",
    example: "let count = 0; // Initialization\nlet person = new Person('Alice'); // Object initialization",
    relatedTerms: ["variable", "constructor", "declaration", "assignment"]
  },
  {
    id: "node",
    title: "Node",
    category: "Data Structure",
    definition: "A fundamental unit in data structures like linked lists, trees, and graphs. Each node typically contains data and references (pointers) to other nodes, forming the structure's connections.",
    example: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}",
    relatedTerms: ["linked-list", "tree", "graph", "pointer"]
  },
  {
    id: "pointer",
    title: "Pointer",
    category: "Programming Concept",
    definition: "A variable that stores the memory address of another variable or object. Pointers are fundamental in languages like C and C++ for dynamic memory management and building data structures.",
    relatedTerms: ["reference", "memory", "address", "linked-list"]
  },
  {
    id: "binary-tree",
    title: "Binary Tree",
    category: "Data Structure",
    definition: "A tree data structure where each node has at most two children, referred to as the left child and right child. Binary trees are used in binary search trees, heaps, and expression parsing.",
    relatedTerms: ["tree", "node", "binary-search-tree", "hierarchical"]
  },
  {
    id: "graph",
    title: "Graph",
    category: "Data Structure",
    definition: "A non-linear data structure consisting of vertices (nodes) connected by edges. Graphs represent relationships between entities and are used in networks, social connections, and pathfinding algorithms.",
    relatedTerms: ["node", "edge", "vertex", "tree", "network"]
  },
  {
    id: "hierarchical",
    title: "Hierarchical Structure",
    category: "Data Structure",
    definition: "An organizational structure where elements are arranged in a ranked order, with parent-child relationships forming levels. Trees and file systems are common examples of hierarchical structures.",
    relatedTerms: ["tree", "parent-child", "levels", "organization"]
  },
  {
    id: "lifo",
    title: "LIFO (Last-In-First-Out)",
    category: "Data Structure Concept",
    definition: "A principle where the last element added to a data structure is the first one to be removed. Stacks follow the LIFO principle, used in function calls, undo operations, and expression evaluation.",
    relatedTerms: ["stack", "fifo", "data-structure", "order"]
  },
  {
    id: "fifo",
    title: "FIFO (First-In-First-Out)",
    category: "Data Structure Concept",
    definition: "A principle where the first element added to a data structure is the first one to be removed. Queues follow the FIFO principle, used in task scheduling, buffering, and breadth-first search.",
    relatedTerms: ["queue", "lifo", "data-structure", "order"]
  },
  {
    id: "hash-function",
    title: "Hash Function",
    category: "Algorithm",
    definition: "A function that converts input data of arbitrary size into a fixed-size value (hash code). Hash functions are used in hash tables, cryptography, and data integrity verification to provide fast data retrieval.",
    relatedTerms: ["hash-table", "hashing", "collision", "algorithm"]
  },
  {
    id: "dictionary",
    title: "Dictionary",
    category: "Data Structure",
    definition: "A data structure that stores key-value pairs, allowing fast lookup of values by their keys. Also known as maps or associative arrays, dictionaries provide O(1) average-time complexity for insertions and lookups.",
    example: "let dict = { 'name': 'Alice', 'age': 30 };\ndict['name']; // 'Alice'",
    relatedTerms: ["hash-table", "map", "key-value", "object"]
  },
  {
    id: "set",
    title: "Set",
    category: "Data Structure",
    definition: "A collection of unique elements with no duplicates. Sets provide efficient operations for adding, removing, and checking membership, and are useful for removing duplicates and performing mathematical set operations.",
    example: "let mySet = new Set([1, 2, 3, 2, 1]); // Set {1, 2, 3}",
    relatedTerms: ["collection", "unique", "data-structure", "hash-set"]
  },
  {
    id: "map",
    title: "Map",
    category: "Data Structure",
    definition: "A collection of key-value pairs where each key is unique. Maps maintain insertion order and allow any data type as keys, providing efficient lookup and iteration capabilities.",
    example: "let map = new Map();\nmap.set('key1', 'value1');\nmap.get('key1'); // 'value1'",
    relatedTerms: ["dictionary", "hash-table", "key-value", "collection"]
  },
  {
    id: "server",
    title: "Server",
    category: "Infrastructure",
    definition: "A computer or program that provides services, resources, or data to other computers (clients) over a network. Servers handle requests, process data, and send responses in client-server architectures.",
    relatedTerms: ["backend", "client", "http", "nodejs", "web-server"]
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Software Development",
    definition: "The process of creating websites and web applications for the internet or intranet. Web development includes frontend (client-side), backend (server-side), and full-stack development.",
    relatedTerms: ["frontend", "backend", "html", "css", "javascript"]
  },
  {
    id: "component",
    title: "Component",
    category: "Frontend Development",
    definition: "A reusable, self-contained piece of code that encapsulates UI elements and logic. Components are the building blocks of modern frontend frameworks like React, Vue, and Angular.",
    example: "function Button({ text, onClick }) {\n  return <button onClick={onClick}>{text}</button>;\n}",
    relatedTerms: ["react", "frontend", "ui", "reusable", "modular"]
  },
  {
    id: "jsx",
    title: "JSX (JavaScript XML)",
    category: "Frontend Technology",
    definition: "A syntax extension for JavaScript that allows writing HTML-like code within JavaScript. JSX is used in React to describe UI components and is compiled to JavaScript function calls.",
    example: "const element = <h1>Hello, {name}!</h1>;",
    relatedTerms: ["react", "javascript", "component", "template"]
  },
  {
    id: "virtual-dom",
    title: "Virtual DOM",
    category: "Frontend Technology",
    definition: "A lightweight copy of the actual DOM kept in memory by frameworks like React. The virtual DOM enables efficient updates by calculating minimal changes needed and batching DOM operations.",
    relatedTerms: ["react", "dom", "rendering", "performance"]
  },
  {
    id: "ui-ux",
    title: "UI/UX (User Interface/User Experience)",
    category: "Design",
    definition: "UI focuses on the visual elements and interactive components users interact with, while UX encompasses the overall experience and satisfaction users have with a product. Both are crucial for creating effective digital products.",
    relatedTerms: ["design", "frontend", "usability", "interface"]
  },
  {
    id: "markup",
    title: "Markup Language",
    category: "Web Technology",
    definition: "A system for annotating text to define its structure, formatting, and presentation. HTML and XML are markup languages that use tags to describe document elements.",
    relatedTerms: ["html", "xml", "tags", "structure"]
  },
  {
    id: "styling",
    title: "Styling",
    category: "Web Development",
    definition: "The process of applying visual presentation to web content using CSS. Styling controls colors, fonts, layouts, spacing, and responsive design to create attractive and usable interfaces.",
    relatedTerms: ["css", "design", "layout", "presentation"]
  },
  {
    id: "web",
    title: "World Wide Web (WWW)",
    category: "Internet Technology",
    definition: "An information system where documents and resources are identified by URLs, interconnected by hyperlinks, and accessed via the internet using web browsers and the HTTP protocol.",
    relatedTerms: ["http", "url", "browser", "internet", "html"]
  },
  {
    id: "client",
    title: "Client",
    category: "Network Architecture",
    definition: "A computer or program that requests services or resources from a server. In web development, browsers are clients that request web pages from web servers.",
    relatedTerms: ["server", "client-server", "browser", "frontend"]
  },
  {
    id: "editor",
    title: "Code Editor",
    category: "Development Tool",
    definition: "A text editor specifically designed for writing and editing source code. Code editors provide syntax highlighting, auto-completion, and other features that enhance programmer productivity.",
    relatedTerms: ["ide", "vscode", "development", "text-editor"]
  },
  {
    id: "debugger",
    title: "Debugger",
    category: "Development Tool",
    definition: "A program or tool used to test and debug other programs by allowing developers to pause execution, inspect variables, step through code line-by-line, and identify the source of errors.",
    relatedTerms: ["debugging", "breakpoint", "ide", "error"]
  },
  {
    id: "bug",
    title: "Bug",
    category: "Software Development",
    definition: "An error, flaw, or fault in a computer program that causes it to produce incorrect or unexpected results. Bugs range from minor issues to critical failures that prevent program execution.",
    relatedTerms: ["debugging", "error", "defect", "issue"]
  },
  {
    id: "error",
    title: "Error",
    category: "Programming Concept",
    definition: "A mistake or problem in code that prevents it from running correctly. Errors can be syntax errors (code structure), runtime errors (during execution), or logical errors (incorrect behavior).",
    relatedTerms: ["bug", "exception", "debugging", "crash"]
  },
  {
    id: "breakpoint",
    title: "Breakpoint",
    category: "Debugging",
    definition: "A marker set in code where the debugger will pause program execution, allowing developers to inspect the program's state, variable values, and execution flow at that specific point.",
    relatedTerms: ["debugger", "debugging", "pause", "inspection"]
  },
  {
    id: "module",
    title: "Module",
    category: "Software Architecture",
    definition: "A self-contained unit of code that encapsulates related functionality and can be imported and reused in other parts of a program. Modules promote code organization, reusability, and maintainability.",
    example: "// math.js\nexport function add(a, b) { return a + b; }\n// main.js\nimport { add } from './math.js';",
    relatedTerms: ["import", "export", "package", "namespace"]
  },
  {
    id: "package",
    title: "Package",
    category: "Software Distribution",
    definition: "A collection of related modules, libraries, and resources bundled together for distribution and reuse. Packages are managed by package managers like npm, pip, and Maven.",
    relatedTerms: ["npm", "library", "module", "dependency"]
  },
  {
    id: "dependency",
    title: "Dependency",
    category: "Software Development",
    definition: "An external library, package, or module that a project requires to function properly. Managing dependencies ensures all required code is available and compatible.",
    relatedTerms: ["package", "library", "npm", "version"]
  },
  {
    id: "unit-test",
    title: "Unit Test",
    category: "Testing",
    definition: "A type of software test that verifies the correctness of individual units or components of code in isolation. Unit tests are automated, fast, and help catch bugs early in development.",
    example: "test('adds 1 + 2 to equal 3', () => {\n  expect(add(1, 2)).toBe(3);\n});",
    relatedTerms: ["testing", "test-driven", "assertion", "jest"]
  },
  {
    id: "integration-test",
    title: "Integration Test",
    category: "Testing",
    definition: "A type of software test that verifies the correct interaction between multiple components, modules, or systems. Integration tests ensure that different parts of an application work together properly.",
    relatedTerms: ["testing", "unit-test", "end-to-end", "qa"]
  },
  {
    id: "qa",
    title: "QA (Quality Assurance)",
    category: "Software Development",
    definition: "The process of ensuring software meets quality standards through systematic testing, review, and validation. QA involves both manual and automated testing to identify and prevent defects.",
    relatedTerms: ["testing", "quality", "validation", "verification"]
  },
  {
    id: "test-driven",
    title: "Test-Driven Development (TDD)",
    category: "Development Methodology",
    definition: "A software development approach where tests are written before the actual code. TDD follows a cycle of writing a failing test, writing code to pass it, then refactoring.",
    relatedTerms: ["testing", "unit-test", "methodology", "red-green-refactor"]
  },
  {
    id: "encryption",
    title: "Encryption",
    category: "Security",
    definition: "The process of converting data into a coded format to prevent unauthorized access. Encryption uses algorithms and keys to transform readable data (plaintext) into unreadable data (ciphertext).",
    relatedTerms: ["security", "cryptography", "ssl", "tls", "decryption"]
  },
  {
    id: "ssl",
    title: "SSL (Secure Sockets Layer)",
    category: "Security Protocol",
    definition: "A deprecated security protocol for establishing encrypted links between web servers and browsers. SSL has been replaced by TLS but the term is still commonly used to refer to secure connections.",
    relatedTerms: ["tls", "https", "encryption", "security", "certificate"]
  },
  {
    id: "tls",
    title: "TLS (Transport Layer Security)",
    category: "Security Protocol",
    definition: "A cryptographic protocol that provides secure communication over a computer network. TLS is the successor to SSL and is used to secure HTTPS connections, email, and other internet communications.",
    relatedTerms: ["ssl", "https", "encryption", "security", "certificate"]
  },
  {
    id: "protocol",
    title: "Protocol",
    category: "Networking",
    definition: "A set of rules and standards that define how data is transmitted and received over a network. Protocols ensure devices can communicate effectively, with examples including HTTP, TCP/IP, and FTP.",
    relatedTerms: ["http", "tcp-ip", "network", "communication"]
  },
  {
    id: "xml",
    title: "XML (eXtensible Markup Language)",
    category: "Data Format",
    definition: "A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable. XML is used for data exchange, configuration files, and web services.",
    example: "<person>\n  <name>John</name>\n  <age>30</age>\n</person>",
    relatedTerms: ["json", "markup", "data-format", "soap"]
  },
  {
    id: "mongodb",
    title: "MongoDB",
    category: "NoSQL Database",
    definition: "A popular document-oriented NoSQL database that stores data in flexible, JSON-like documents. MongoDB is designed for scalability, high performance, and handling unstructured data.",
    relatedTerms: ["nosql", "database", "document-store", "json"]
  },
  {
    id: "relational",
    title: "Relational Database",
    category: "Database",
    definition: "A database that organizes data into tables with rows and columns, where relationships between tables are established through keys. Relational databases use SQL and ensure data integrity through ACID properties.",
    relatedTerms: ["sql", "database", "table", "dbms", "rdbms"]
  },
  {
    id: "query",
    title: "Query",
    category: "Database",
    definition: "A request for data or information from a database. Queries are written in languages like SQL to retrieve, insert, update, or delete data based on specified conditions.",
    example: "SELECT * FROM users WHERE age > 18;",
    relatedTerms: ["sql", "database", "select", "search"]
  },
  {
    id: "relational-database",
    title: "RDBMS (Relational Database Management System)",
    category: "Database",
    definition: "Software that manages relational databases, ensuring data integrity, security, and providing tools for querying and managing structured data. Examples include MySQL, PostgreSQL, and Oracle.",
    relatedTerms: ["sql", "database", "dbms", "relational"]
  },
  {
    id: "document-store",
    title: "Document Store",
    category: "NoSQL Database",
    definition: "A type of NoSQL database that stores data as documents (typically JSON or XML). Document stores are schema-flexible, allowing different documents to have different structures.",
    relatedTerms: ["nosql", "mongodb", "json", "database"]
  },
  {
    id: "key-value",
    title: "Key-Value Store",
    category: "NoSQL Database",
    definition: "A simple NoSQL database that stores data as key-value pairs, similar to a dictionary or hash table. Key-value stores provide fast lookups and are used for caching and session storage.",
    example: "Redis, DynamoDB - store and retrieve data by unique keys",
    relatedTerms: ["nosql", "database", "redis", "cache"]
  },
  {
    id: "devops",
    title: "DevOps",
    category: "Software Development",
    definition: "A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery. DevOps emphasizes automation, collaboration, and monitoring.",
    relatedTerms: ["cicd", "automation", "deployment", "agile"]
  },
  {
    id: "container",
    title: "Container",
    category: "DevOps",
    definition: "A lightweight, standalone package that includes application code and all dependencies needed to run it. Containers ensure consistent execution across different environments and are managed by tools like Docker.",
    relatedTerms: ["docker", "virtualization", "deployment", "image"]
  },
  {
    id: "deployment",
    title: "Deployment",
    category: "Software Development",
    definition: "The process of making software available for use in a production environment. Deployment involves installing, configuring, testing, and releasing software to end users.",
    relatedTerms: ["cicd", "release", "production", "devops"]
  },
  {
    id: "pipeline",
    title: "CI/CD Pipeline",
    category: "DevOps",
    definition: "An automated sequence of stages that code goes through from development to production. Pipelines include building, testing, and deploying code, ensuring quality and enabling rapid releases.",
    relatedTerms: ["cicd", "automation", "build", "deployment"]
  },
  {
    id: "automation",
    title: "Automation",
    category: "Software Development",
    definition: "The use of technology to perform tasks with minimal human intervention. In software development, automation includes automated testing, builds, deployments, and infrastructure management.",
    relatedTerms: ["cicd", "devops", "scripting", "efficiency"]
  },
  {
    id: "aws",
    title: "AWS (Amazon Web Services)",
    category: "Cloud Platform",
    definition: "A comprehensive cloud computing platform provided by Amazon, offering services including computing power, storage, databases, machine learning, and more on a pay-as-you-go basis.",
    relatedTerms: ["cloud-computing", "azure", "gcp", "iaas", "paas"]
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    category: "Cloud Platform",
    definition: "Microsoft's cloud computing platform providing services for building, deploying, and managing applications through Microsoft-managed data centers. Azure supports multiple programming languages and frameworks.",
    relatedTerms: ["cloud-computing", "aws", "gcp", "iaas", "paas"]
  },
  {
    id: "gcp",
    title: "GCP (Google Cloud Platform)",
    category: "Cloud Platform",
    definition: "Google's suite of cloud computing services offering infrastructure, platform, and software services. GCP provides computing, storage, machine learning, and data analytics capabilities.",
    relatedTerms: ["cloud-computing", "aws", "azure", "iaas", "paas"]
  },
  {
    id: "saas",
    title: "SaaS (Software as a Service)",
    category: "Cloud Computing",
    definition: "A software delivery model where applications are hosted by a provider and made available to customers over the internet. Users access SaaS applications through web browsers without installing software.",
    example: "Gmail, Salesforce, Office 365",
    relatedTerms: ["cloud-computing", "paas", "iaas", "subscription"]
  },
  {
    id: "paas",
    title: "PaaS (Platform as a Service)",
    category: "Cloud Computing",
    definition: "A cloud computing model that provides a platform for developers to build, run, and manage applications without managing underlying infrastructure. PaaS includes development tools, databases, and hosting.",
    example: "Heroku, Google App Engine, Azure App Service",
    relatedTerms: ["cloud-computing", "saas", "iaas", "development"]
  },
  {
    id: "iaas",
    title: "IaaS (Infrastructure as a Service)",
    category: "Cloud Computing",
    definition: "A cloud computing model that provides virtualized computing resources over the internet. IaaS offers virtual machines, storage, and networks, giving users control over the infrastructure.",
    example: "AWS EC2, Azure VMs, Google Compute Engine",
    relatedTerms: ["cloud-computing", "saas", "paas", "virtualization"]
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    category: "Container Orchestration",
    definition: "An open-source platform for automating deployment, scaling, and management of containerized applications. Kubernetes orchestrates containers across clusters of machines, ensuring high availability.",
    relatedTerms: ["docker", "container", "orchestration", "devops"]
  },
  {
    id: "distributed",
    title: "Distributed System",
    category: "System Architecture",
    definition: "A system whose components are located on different networked computers that communicate and coordinate their actions by passing messages. Distributed systems enable scalability and fault tolerance.",
    relatedTerms: ["microservices", "scalability", "network", "architecture"]
  },
  {
    id: "scalability",
    title: "Scalability",
    category: "System Design",
    definition: "The ability of a system to handle growing amounts of work by adding resources. Scalability can be vertical (adding more power to existing machines) or horizontal (adding more machines).",
    relatedTerms: ["performance", "distributed", "load-balancing", "cloud-computing"]
  },
  {
    id: "scripting",
    title: "Scripting Language",
    category: "Programming Language",
    definition: "A programming language designed for automating tasks and controlling software applications. Scripting languages like Python, JavaScript, and Bash are typically interpreted rather than compiled.",
    relatedTerms: ["python", "javascript", "automation", "interpreter"]
  },
  {
    id: "c",
    title: "C Programming Language",
    category: "Programming Language",
    definition: "A general-purpose, procedural programming language developed in the 1970s. C is known for its efficiency, low-level memory access, and influence on many modern languages like C++, Java, and JavaScript.",
    example: "#include <stdio.h>\nint main() { printf(\"Hello World\"); return 0; }",
    relatedTerms: ["cpp", "programming-language", "systems-programming", "compiled"]
  },
  {
    id: "template",
    title: "Template (C++)",
    category: "Programming Concept",
    definition: "A feature in C++ that allows functions and classes to operate with generic types, enabling code reusability. Templates are the foundation of generic programming in C++.",
    example: "template<typename T>\nT max(T a, T b) { return (a > b) ? a : b; }",
    relatedTerms: ["cpp", "generic-programming", "type-parameter"]
  },
  {
    id: "searching",
    title: "Searching Algorithm",
    category: "Algorithm",
    definition: "An algorithm designed to find a specific element or value within a data structure. Common searching algorithms include linear search, binary search, and hash-based searching.",
    relatedTerms: ["algorithm", "binary-search", "linear-search", "data-structure"]
  },
  {
    id: "efficiency",
    title: "Efficiency",
    category: "Algorithm Analysis",
    definition: "A measure of how well an algorithm uses computational resources like time and memory. Efficient algorithms minimize resource usage while maintaining correctness.",
    relatedTerms: ["complexity", "big-o", "optimization", "performance"]
  },
  {
    id: "performance",
    title: "Performance",
    category: "Software Engineering",
    definition: "The measure of how fast and responsive a system or application is. Performance optimization focuses on reducing latency, increasing throughput, and improving user experience.",
    relatedTerms: ["efficiency", "optimization", "scalability", "benchmarking"]
  },
  {
    id: "commit",
    title: "Commit",
    category: "Version Control",
    definition: "A saved snapshot of changes to a repository in version control systems like Git. Each commit records modifications with a message describing what changed and why.",
    example: "git commit -m 'Add new feature'",
    relatedTerms: ["git", "version-control", "repository", "branch"]
  },
  {
    id: "branch",
    title: "Branch",
    category: "Version Control",
    definition: "A parallel version of a repository that allows developers to work on features independently without affecting the main codebase. Branches can be merged back into the main branch when complete.",
    example: "git branch feature-login\ngit checkout feature-login",
    relatedTerms: ["git", "version-control", "merge", "commit"]
  },
  {
    id: "clone",
    title: "Clone (Git)",
    category: "Version Control",
    definition: "The process of creating a local copy of a remote repository. Cloning downloads all files, history, and branches from the remote repository to your local machine.",
    example: "git clone https://github.com/user/repo.git",
    relatedTerms: ["git", "repository", "remote", "version-control"]
  },
  {
    id: "pull-request",
    title: "Pull Request",
    category: "Version Control",
    definition: "A request to merge code changes from one branch into another, typically used in collaborative development. Pull requests enable code review, discussion, and approval before merging.",
    relatedTerms: ["github", "git", "branch", "merge", "code-review"]
  },
  {
    id: "soap",
    title: "SOAP (Simple Object Access Protocol)",
    category: "Web Service Protocol",
    definition: "A protocol for exchanging structured information in web services using XML. SOAP is more rigid and feature-rich than REST, supporting complex operations and built-in security standards.",
    relatedTerms: ["web-service", "xml", "rest", "api", "protocol"]
  },
  {
    id: "integration",
    title: "Integration",
    category: "Software Engineering",
    definition: "The process of combining different software systems, components, or services to work together as a unified whole. Integration enables data sharing and coordinated functionality between systems.",
    relatedTerms: ["api", "web-service", "middleware", "interoperability"]
  },
  {
    id: "scrum",
    title: "Scrum",
    category: "Agile Framework",
    definition: "An agile framework for managing software development projects using iterative sprints, daily standups, and defined roles (Scrum Master, Product Owner, Development Team). Scrum emphasizes teamwork and continuous improvement.",
    relatedTerms: ["agile", "sprint", "methodology", "standup"]
  },
  {
    id: "sprint",
    title: "Sprint",
    category: "Agile Methodology",
    definition: "A fixed time period (usually 1-4 weeks) in Scrum methodology during which a specific set of work must be completed and made ready for review. Sprints enable iterative development and frequent feedback.",
    relatedTerms: ["scrum", "agile", "iteration", "backlog"]
  },
  {
    id: "methodology",
    title: "Software Development Methodology",
    category: "Software Engineering",
    definition: "A structured approach to planning, designing, and controlling the software development process. Common methodologies include Agile, Scrum, Waterfall, and DevOps.",
    relatedTerms: ["agile", "scrum", "waterfall", "process"]
  },
  {
    id: "stateless",
    title: "Stateless",
    category: "Architecture Pattern",
    definition: "A design where each request from client to server contains all information needed to understand and process it. The server doesn't store client state between requests, enabling better scalability.",
    relatedTerms: ["rest", "api", "stateful", "http"]
  },
  {
    id: "synchronous",
    title: "Synchronous Programming",
    category: "Programming Paradigm",
    definition: "A programming approach where operations execute sequentially, with each operation waiting for the previous one to complete before starting. Synchronous code is easier to understand but can block execution.",
    relatedTerms: ["asynchronous", "blocking", "sequential", "execution"]
  },
  {
    id: "compile",
    title: "Compilation",
    category: "Software Development",
    definition: "The process of translating source code from a high-level programming language into machine code or bytecode. Compilation happens before program execution and can catch syntax errors early.",
    relatedTerms: ["compiler", "build", "executable", "bytecode"]
  },
  {
    id: "type-checking",
    title: "Type Checking",
    category: "Programming Concept",
    definition: "The process of verifying that variables and expressions have compatible types. Type checking can be static (at compile-time) or dynamic (at runtime), helping prevent type-related errors.",
    relatedTerms: ["typescript", "static-typing", "type-system", "compiler"]
  },
  {
    id: "static-typing",
    title: "Static Typing",
    category: "Type System",
    definition: "A type system where variable types are known at compile-time and cannot change during runtime. Static typing catches type errors early and can improve performance and code documentation.",
    relatedTerms: ["typescript", "type-checking", "dynamic-typing", "compiler"]
  },
  {
    id: "compiled",
    title: "Compiled Language",
    category: "Programming Language",
    definition: "A programming language where source code is translated to machine code before execution. Compiled languages like C, C++, and Rust typically offer better performance than interpreted languages.",
    relatedTerms: ["compiler", "c", "cpp", "machine-code", "interpreted"]
  },
  {
    id: "event-driven",
    title: "Event-Driven Programming",
    category: "Programming Paradigm",
    definition: "A programming paradigm where program flow is determined by events such as user actions, sensor outputs, or messages. Event-driven systems respond to events through handlers or listeners.",
    relatedTerms: ["callback", "event-handler", "asynchronous", "nodejs"]
  },
  {
    id: "garbage-collection",
    title: "Garbage Collection",
    category: "Memory Management",
    definition: "An automatic memory management process that reclaims memory occupied by objects no longer in use. Garbage collection prevents memory leaks and is used in Java, JavaScript, Python, and other languages.",
    relatedTerms: ["memory", "jvm", "automatic", "heap"]
  },
  {
    id: "platform-independent",
    title: "Platform Independence",
    category: "Software Property",
    definition: "The ability of software to run on different operating systems and hardware platforms without modification. Java's 'write once, run anywhere' philosophy exemplifies platform independence through the JVM.",
    relatedTerms: ["jvm", "portability", "cross-platform", "java"]
  },
  {
    id: "graphql",
    title: "GraphQL",
    category: "API Technology",
    definition: "A query language and runtime for APIs that allows clients to request exactly the data they need. GraphQL provides a more efficient, powerful, and flexible alternative to REST APIs.",
    example: "query { user(id: \"123\") { name email posts { title } } }",
    relatedTerms: ["api", "rest", "query", "web-service"]
  },
  {
    id: "websocket",
    title: "WebSocket",
    category: "Network Protocol",
    definition: "A communication protocol that provides full-duplex, bidirectional communication channels over a single TCP connection. WebSockets enable real-time data exchange between clients and servers.",
    relatedTerms: ["protocol", "real-time", "tcp", "http"]
  },
  {
    id: "pwa",
    title: "PWA (Progressive Web App)",
    category: "Web Technology",
    definition: "Web applications that use modern web capabilities to deliver app-like experiences. PWAs are reliable, fast, and engaging, working offline and installable on devices like native apps.",
    relatedTerms: ["web-app", "service-worker", "offline", "manifest"]
  },
  {
    id: "spa",
    title: "SPA (Single Page Application)",
    category: "Web Architecture",
    definition: "A web application that loads a single HTML page and dynamically updates content as users interact with it. SPAs provide a seamless user experience without page reloads.",
    relatedTerms: ["react", "angular", "vue", "client-side"]
  },
  {
    id: "ssr",
    title: "SSR (Server-Side Rendering)",
    category: "Web Technology",
    definition: "A technique where web pages are rendered on the server and sent to the client as fully-formed HTML. SSR improves initial load time and SEO compared to client-side rendering.",
    relatedTerms: ["next-js", "rendering", "seo", "performance"]
  },
  {
    id: "ssg",
    title: "SSG (Static Site Generation)",
    category: "Web Technology",
    definition: "A method of pre-rendering pages at build time, generating static HTML files. SSG offers excellent performance and security, ideal for content that doesn't change frequently.",
    relatedTerms: ["next-js", "jamstack", "build", "static"]
  },
  {
    id: "operator",
    title: "Operator",
    category: "Programming Concept",
    definition: "A symbol that performs operations on variables and values. Operators include arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (&&, ||, !), and assignment (=, +=, -=) operators.",
    example: "let sum = 5 + 3; // + is an arithmetic operator\nlet isEqual = (x == y); // == is a comparison operator",
    relatedTerms: ["expression", "operand", "arithmetic", "logical"]
  },
  {
    id: "expression",
    title: "Expression",
    category: "Programming Concept",
    definition: "A combination of values, variables, operators, and function calls that evaluates to a single value. Expressions are the building blocks of statements and can be assigned to variables.",
    example: "5 + 3 * 2 // Expression that evaluates to 11\ngetName() // Function call expression",
    relatedTerms: ["operator", "value", "statement", "evaluation"]
  },
  {
    id: "statement",
    title: "Statement",
    category: "Programming Concept",
    definition: "A complete instruction that performs an action in a program. Statements can declare variables, control flow, call functions, or assign values, typically ending with a semicolon.",
    example: "let x = 5; // Declaration statement\nif (x > 0) { console.log('positive'); } // Control statement",
    relatedTerms: ["expression", "declaration", "instruction", "syntax"]
  },
  {
    id: "constant",
    title: "Constant",
    category: "Programming Concept",
    definition: "A variable whose value cannot be changed after initialization. Constants are declared using keywords like 'const' and help prevent accidental modifications and improve code clarity.",
    example: "const PI = 3.14159;\nconst MAX_USERS = 100;\n// PI = 3.14; // Error: Cannot reassign constant",
    relatedTerms: ["variable", "immutable", "final", "readonly"]
  },
  {
    id: "scope",
    title: "Scope",
    category: "Programming Concept",
    definition: "The region of code where a variable is accessible and visible. Scope can be global (accessible everywhere), function/local (within a function), or block (within { } braces).",
    example: "let global = 'accessible everywhere';\nfunction test() {\n  let local = 'only in function';\n}",
    relatedTerms: ["variable", "closure", "namespace", "visibility"]
  },
  {
    id: "null",
    title: "Null/Undefined",
    category: "Data Type",
    definition: "Special values representing the absence of a value. 'Null' is an intentional absence, while 'undefined' means a variable has been declared but not assigned a value.",
    example: "let x = null; // Intentionally empty\nlet y; // undefined - declared but not initialized",
    relatedTerms: ["data-type", "value", "void", "optional"]
  },
  {
    id: "heap",
    title: "Heap",
    category: "Data Structure",
    definition: "A specialized tree-based data structure that satisfies the heap property: in a max heap, parent nodes are greater than children; in a min heap, parent nodes are smaller. Heaps are used in priority queues and heap sort.",
    relatedTerms: ["tree", "priority-queue", "binary-tree", "data-structure"]
  },
  {
    id: "trie",
    title: "Trie (Prefix Tree)",
    category: "Data Structure",
    definition: "A tree-like data structure used to store strings where each node represents a character. Tries enable efficient prefix-based searching, autocomplete, and spell checking with O(m) time complexity where m is the string length.",
    relatedTerms: ["tree", "string", "search", "prefix"]
  },
  {
    id: "dfs",
    title: "DFS (Depth-First Search)",
    category: "Algorithm",
    definition: "A graph traversal algorithm that explores as far as possible along each branch before backtracking. DFS uses a stack (or recursion) and is used in pathfinding, cycle detection, and topological sorting.",
    relatedTerms: ["graph", "bfs", "traversal", "recursion", "stack"]
  },
  {
    id: "bfs",
    title: "BFS (Breadth-First Search)",
    category: "Algorithm",
    definition: "A graph traversal algorithm that explores all neighbors at the current depth before moving to nodes at the next depth level. BFS uses a queue and finds shortest paths in unweighted graphs.",
    relatedTerms: ["graph", "dfs", "traversal", "queue", "shortest-path"]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    category: "Algorithm Technique",
    definition: "An optimization technique that solves complex problems by breaking them into simpler overlapping subproblems and storing their solutions to avoid redundant calculations. Used in optimization, counting, and decision problems.",
    example: "Fibonacci with memoization, longest common subsequence, knapsack problem",
    relatedTerms: ["algorithm", "memoization", "optimization", "recursion"]
  },
  {
    id: "greedy-algorithm",
    title: "Greedy Algorithm",
    category: "Algorithm Technique",
    definition: "An algorithmic approach that makes the locally optimal choice at each step, hoping to find a global optimum. Greedy algorithms are simple and efficient but don't always guarantee the best solution.",
    example: "Dijkstra's shortest path, Huffman coding, activity selection",
    relatedTerms: ["algorithm", "optimization", "heuristic", "local-optimum"]
  },
  {
    id: "refactoring",
    title: "Refactoring",
    category: "Software Engineering",
    definition: "The process of restructuring existing code without changing its external behavior to improve readability, maintainability, and performance. Refactoring reduces technical debt and makes code easier to understand.",
    relatedTerms: ["code-quality", "technical-debt", "clean-code", "maintenance"]
  },
  {
    id: "technical-debt",
    title: "Technical Debt",
    category: "Software Engineering",
    definition: "The implied cost of future rework caused by choosing quick, easy solutions instead of better approaches that would take longer. Technical debt accumulates over time and must be paid back through refactoring.",
    relatedTerms: ["refactoring", "code-quality", "maintenance", "legacy-code"]
  },
  {
    id: "ruby",
    title: "Ruby",
    category: "Programming Language",
    definition: "A dynamic, object-oriented programming language known for its elegant syntax and developer happiness. Ruby emphasizes simplicity and productivity, and powers the Rails web framework.",
    example: "puts 'Hello, World!'\n5.times { print 'Ruby ' }",
    relatedTerms: ["rails", "scripting", "oop", "dynamic"]
  },
  {
    id: "php",
    title: "PHP",
    category: "Programming Language",
    definition: "A server-side scripting language designed for web development. PHP is embedded in HTML and powers millions of websites including WordPress, Facebook, and Wikipedia.",
    example: "<?php echo 'Hello, World!'; ?>",
    relatedTerms: ["web-development", "backend", "server-side", "scripting"]
  },
  {
    id: "swift",
    title: "Swift",
    category: "Programming Language",
    definition: "A powerful, modern programming language developed by Apple for iOS, macOS, watchOS, and tvOS development. Swift is fast, safe, and designed to work with Apple's Cocoa frameworks.",
    example: "print(\"Hello, World!\")\nvar greeting = \"Swift is awesome\"",
    relatedTerms: ["ios", "apple", "mobile", "objective-c"]
  },
  {
    id: "kotlin",
    title: "Kotlin",
    category: "Programming Language",
    definition: "A modern, statically-typed programming language that runs on the JVM and is fully interoperable with Java. Kotlin is the preferred language for Android development and emphasizes conciseness and safety.",
    example: "fun main() { println(\"Hello, Kotlin!\") }",
    relatedTerms: ["java", "jvm", "android", "mobile"]
  },
  {
    id: "go",
    title: "Go (Golang)",
    category: "Programming Language",
    definition: "A statically-typed, compiled language developed by Google, designed for simplicity, efficiency, and excellent concurrency support. Go is popular for cloud services, DevOps tools, and microservices.",
    example: "package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello, Go!\") }",
    relatedTerms: ["google", "concurrent", "compiled", "backend"]
  },
  {
    id: "rust",
    title: "Rust",
    category: "Programming Language",
    definition: "A systems programming language focused on safety, speed, and concurrency without a garbage collector. Rust prevents memory errors at compile-time, making it ideal for performance-critical applications.",
    example: "fn main() { println!(\"Hello, Rust!\"); }",
    relatedTerms: ["systems-programming", "memory-safety", "compiled", "performance"]
  },
  {
    id: "angular",
    title: "Angular",
    category: "Frontend Framework",
    definition: "A TypeScript-based web application framework developed by Google. Angular provides a complete solution for building large-scale applications with two-way data binding, dependency injection, and a powerful CLI.",
    relatedTerms: ["typescript", "frontend", "spa", "google"]
  },
  {
    id: "vue",
    title: "Vue.js",
    category: "Frontend Framework",
    definition: "A progressive JavaScript framework for building user interfaces. Vue is designed to be incrementally adoptable, with a simple core that can be extended with official libraries for routing and state management.",
    relatedTerms: ["javascript", "frontend", "spa", "component"]
  },
  {
    id: "next-js",
    title: "Next.js",
    category: "React Framework",
    definition: "A React framework for production that provides server-side rendering, static site generation, API routes, and optimized performance out of the box. Next.js simplifies building full-stack React applications.",
    relatedTerms: ["react", "ssr", "ssg", "vercel", "fullstack"]
  },
  {
    id: "django",
    title: "Django",
    category: "Web Framework",
    definition: "A high-level Python web framework that encourages rapid development and clean design. Django follows the 'batteries included' philosophy, providing an ORM, authentication, admin interface, and more.",
    relatedTerms: ["python", "backend", "framework", "mvc"]
  },
  {
    id: "flask",
    title: "Flask",
    category: "Web Framework",
    definition: "A lightweight, micro web framework for Python that provides the basics for building web applications. Flask is simple, flexible, and allows developers to choose their own tools and libraries.",
    relatedTerms: ["python", "backend", "framework", "microframework"]
  },
  {
    id: "spring",
    title: "Spring Framework",
    category: "Java Framework",
    definition: "A comprehensive framework for enterprise Java development. Spring provides infrastructure support for developing robust applications with dependency injection, aspect-oriented programming, and extensive modules.",
    relatedTerms: ["java", "backend", "framework", "enterprise"]
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    category: "Software Development",
    definition: "The practice of working on both frontend (client-side) and backend (server-side) parts of a web application. Full-stack developers have knowledge of databases, servers, systems engineering, and client-facing interfaces.",
    relatedTerms: ["frontend", "backend", "web-development", "fullstack"]
  },
  {
    id: "mvc",
    title: "MVC (Model-View-Controller)",
    category: "Design Pattern",
    definition: "A software architectural pattern that separates an application into three interconnected components: Model (data), View (UI), and Controller (business logic). MVC promotes organized code and separation of concerns.",
    relatedTerms: ["design-pattern", "architecture", "separation-of-concerns"]
  },
  {
    id: "state-management",
    title: "State Management",
    category: "Frontend Development",
    definition: "The practice of managing and synchronizing application state (data) across components. State management libraries like Redux, MobX, and Vuex help maintain consistent data flow in complex applications.",
    relatedTerms: ["react", "redux", "frontend", "data-flow"]
  },
  {
    id: "middleware",
    title: "Middleware",
    category: "Software Architecture",
    definition: "Software that acts as a bridge between an operating system or database and applications, especially on a network. Middleware intercepts requests/responses to add functionality like logging, authentication, or error handling.",
    relatedTerms: ["backend", "express", "pipeline", "layer"]
  },
  {
    id: "webhook",
    title: "Webhook",
    category: "API Pattern",
    definition: "An HTTP callback that sends real-time data to other applications when specific events occur. Webhooks enable event-driven communication, allowing systems to notify each other automatically.",
    relatedTerms: ["api", "callback", "event-driven", "http"]
  },
  {
    id: "rate-limiting",
    title: "Rate Limiting",
    category: "API Security",
    definition: "A technique to control the number of requests a user can make to an API within a specified time period. Rate limiting prevents abuse, ensures fair usage, and protects server resources.",
    relatedTerms: ["api", "security", "throttling", "quota"]
  },
  {
    id: "caching",
    title: "Caching",
    category: "Performance Optimization",
    definition: "The practice of storing frequently accessed data in a temporary storage location (cache) for faster retrieval. Caching reduces load times, decreases server load, and improves application performance.",
    relatedTerms: ["performance", "redis", "cdn", "memory"]
  },
  {
    id: "load-balancing",
    title: "Load Balancing",
    category: "System Architecture",
    definition: "The process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed. Load balancing improves availability, reliability, and scalability of applications.",
    relatedTerms: ["scalability", "distributed", "high-availability", "server"]
  },
  {
    id: "authentication",
    title: "Authentication",
    category: "Security",
    definition: "The process of verifying the identity of a user, device, or system. Authentication confirms 'you are who you say you are' through credentials like passwords, tokens, biometrics, or multi-factor methods.",
    relatedTerms: ["authorization", "security", "login", "credentials", "jwt"]
  },
  {
    id: "authorization",
    title: "Authorization",
    category: "Security",
    definition: "The process of determining what actions an authenticated user is allowed to perform. Authorization controls access to resources and operations based on user roles and permissions.",
    relatedTerms: ["authentication", "security", "permissions", "access-control"]
  },
  {
    id: "jwt",
    title: "JWT (JSON Web Token)",
    category: "Authentication",
    definition: "A compact, URL-safe token format for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and information exchange in web applications.",
    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0...",
    relatedTerms: ["authentication", "token", "json", "security"]
  },
  {
    id: "oauth",
    title: "OAuth",
    category: "Authorization Protocol",
    definition: "An open standard authorization framework that enables applications to obtain limited access to user accounts on HTTP services. OAuth allows third-party applications to access user data without exposing passwords.",
    relatedTerms: ["authorization", "authentication", "security", "api"]
  },
  {
    id: "cors",
    title: "CORS (Cross-Origin Resource Sharing)",
    category: "Web Security",
    definition: "A security feature that allows or restricts web applications running at one origin to access resources from a different origin. CORS headers control which domains can make cross-origin requests.",
    relatedTerms: ["security", "http", "browser", "same-origin"]
  },
  {
    id: "redis",
    title: "Redis",
    category: "In-Memory Database",
    definition: "An open-source, in-memory data structure store used as a database, cache, and message broker. Redis supports various data structures like strings, hashes, lists, sets, and provides exceptional performance.",
    relatedTerms: ["nosql", "caching", "key-value", "database"]
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    category: "Relational Database",
    definition: "A powerful, open-source object-relational database system known for reliability, feature robustness, and performance. PostgreSQL supports advanced data types, full-text search, and JSON storage.",
    relatedTerms: ["sql", "relational", "database", "rdbms"]
  },
  {
    id: "mysql",
    title: "MySQL",
    category: "Relational Database",
    definition: "An open-source relational database management system that is widely used for web applications. MySQL is known for its speed, reliability, and ease of use, powering many popular websites.",
    relatedTerms: ["sql", "relational", "database", "rdbms"]
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    category: "Search Engine",
    definition: "A distributed, RESTful search and analytics engine built on Apache Lucene. Elasticsearch enables fast, scalable full-text search, logging, and real-time analytics across large datasets.",
    relatedTerms: ["search", "nosql", "analytics", "indexing"]
  },
  {
    id: "database-index",
    title: "Database Index",
    category: "Database",
    definition: "A data structure that improves the speed of data retrieval operations on a database table. Indexes work like book indexes, allowing the database to find data without scanning every row.",
    relatedTerms: ["database", "performance", "query", "optimization"]
  },
  {
    id: "transaction",
    title: "Transaction",
    category: "Database",
    definition: "A sequence of database operations treated as a single unit of work that either completes entirely or not at all. Transactions ensure data consistency and integrity through ACID properties.",
    relatedTerms: ["acid", "database", "commit", "rollback"]
  },
  {
    id: "acid",
    title: "ACID",
    category: "Database Concept",
    definition: "A set of properties (Atomicity, Consistency, Isolation, Durability) that guarantee reliable database transactions. ACID ensures data validity despite errors, power failures, or other mishaps.",
    relatedTerms: ["transaction", "database", "consistency", "reliability"]
  },
  {
    id: "schema",
    title: "Database Schema",
    category: "Database",
    definition: "The structure or blueprint of a database that defines how data is organized, including tables, fields, relationships, and constraints. Schemas enforce data organization and integrity rules.",
    relatedTerms: ["database", "table", "structure", "design"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Artificial Intelligence",
    definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. Machine learning uses algorithms to find patterns in data and make predictions or decisions.",
    relatedTerms: ["ai", "data-science", "neural-network", "deep-learning"]
  },
  {
    id: "ai",
    title: "AI (Artificial Intelligence)",
    category: "Computer Science",
    definition: "The simulation of human intelligence processes by machines, especially computer systems. AI includes learning, reasoning, problem-solving, perception, and language understanding.",
    relatedTerms: ["machine-learning", "neural-network", "nlp", "deep-learning"]
  },
  {
    id: "blockchain",
    title: "Blockchain",
    category: "Distributed Technology",
    definition: "A decentralized, distributed ledger technology that records transactions across multiple computers. Blockchain ensures data integrity through cryptographic hashing and consensus mechanisms.",
    relatedTerms: ["cryptocurrency", "distributed", "decentralized", "ledger"]
  },
  {
    id: "cryptocurrency",
    title: "Cryptocurrency",
    category: "Digital Currency",
    definition: "A digital or virtual currency that uses cryptography for security and operates on blockchain technology. Cryptocurrencies like Bitcoin and Ethereum enable decentralized financial transactions.",
    relatedTerms: ["blockchain", "bitcoin", "decentralized", "digital"]
  },
  {
    id: "iot",
    title: "IoT (Internet of Things)",
    category: "Technology",
    definition: "A network of physical devices embedded with sensors, software, and connectivity that enables them to collect and exchange data. IoT connects everyday objects to the internet for automation and monitoring.",
    relatedTerms: ["sensors", "smart-devices", "connectivity", "automation"]
  },
  {
    id: "serverless",
    title: "Serverless Computing",
    category: "Cloud Computing",
    definition: "A cloud execution model where the cloud provider manages server infrastructure, automatically allocating resources as needed. Developers focus on code while the provider handles scaling, availability, and maintenance.",
    example: "AWS Lambda, Azure Functions, Google Cloud Functions",
    relatedTerms: ["cloud-computing", "faas", "lambda", "scalability"]
  },
  {
    id: "edge-computing",
    title: "Edge Computing",
    category: "Distributed Computing",
    definition: "A distributed computing paradigm that brings computation and data storage closer to the data source or end users. Edge computing reduces latency, bandwidth usage, and improves response times.",
    relatedTerms: ["distributed", "cloud-computing", "iot", "latency"]
  },
  {
    id: "webassembly",
    title: "WebAssembly (WASM)",
    category: "Web Technology",
    definition: "A binary instruction format that enables high-performance execution of code in web browsers. WebAssembly allows languages like C, C++, and Rust to run on the web at near-native speed.",
    relatedTerms: ["web", "performance", "binary", "browser"]
  },
  {
    id: "linter",
    title: "Linter",
    category: "Development Tool",
    definition: "A static code analysis tool that checks source code for programming errors, bugs, stylistic errors, and suspicious constructs. Linters like ESLint enforce code quality and consistency.",
    relatedTerms: ["code-quality", "eslint", "static-analysis", "error"]
  },
  {
    id: "prettier",
    title: "Prettier",
    category: "Development Tool",
    definition: "An opinionated code formatter that enforces a consistent code style by parsing and reprinting code. Prettier supports multiple languages and integrates with most editors and CI systems.",
    relatedTerms: ["formatting", "code-style", "developer-tool", "consistency"]
  },
  {
    id: "webpack",
    title: "Webpack",
    category: "Build Tool",
    definition: "A module bundler for JavaScript applications that packages code and assets into optimized bundles for browsers. Webpack handles dependencies, transformations, and optimization for web projects.",
    relatedTerms: ["bundler", "build", "javascript", "module"]
  },
  {
    id: "babel",
    title: "Babel",
    category: "JavaScript Compiler",
    definition: "A JavaScript compiler that converts modern JavaScript (ES6+) into backwards-compatible versions for older browsers. Babel enables developers to use the latest language features while maintaining compatibility.",
    relatedTerms: ["javascript", "transpiler", "compiler", "es6"]
  },
  {
    id: "bit",
    title: "Bit",
    category: "Computer Fundamentals",
    definition: "The smallest unit of data in computing, representing a binary digit that can be either 0 or 1. Bits are the foundation of all digital data and computing operations.",
    relatedTerms: ["byte", "binary", "data", "digital"]
  },
  {
    id: "byte",
    title: "Byte",
    category: "Computer Fundamentals",
    definition: "A unit of digital information consisting of 8 bits. A byte can represent 256 different values (0-255) and is the standard unit for measuring computer memory and storage.",
    example: "1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB",
    relatedTerms: ["bit", "memory", "storage", "kilobyte"]
  },
  {
    id: "binary",
    title: "Binary",
    category: "Number System",
    definition: "A base-2 number system using only two digits: 0 and 1. Binary is the fundamental language of computers, where all data and instructions are represented as sequences of bits.",
    example: "Decimal 5 = Binary 101, Decimal 10 = Binary 1010",
    relatedTerms: ["bit", "byte", "hexadecimal", "decimal"]
  },
  {
    id: "ascii",
    title: "ASCII",
    category: "Character Encoding",
    definition: "American Standard Code for Information Interchange - a character encoding standard that assigns numbers to letters, digits, and symbols. ASCII uses 7 bits to represent 128 characters.",
    example: "'A' = 65, 'a' = 97, '0' = 48, space = 32",
    relatedTerms: ["unicode", "character", "encoding", "text"]
  },
  {
    id: "unicode",
    title: "Unicode",
    category: "Character Encoding",
    definition: "A universal character encoding standard that assigns a unique number to every character across all writing systems and languages. Unicode supports over 140,000 characters including emojis.",
    relatedTerms: ["ascii", "utf-8", "character", "encoding"]
  },
  {
    id: "memory",
    title: "Memory (RAM)",
    category: "Computer Hardware",
    definition: "Random Access Memory - temporary storage that holds data and programs currently being used by the CPU. Memory is fast but volatile, losing all data when power is off.",
    relatedTerms: ["ram", "cpu", "storage", "volatile"]
  },
  {
    id: "cpu",
    title: "CPU (Central Processing Unit)",
    category: "Computer Hardware",
    definition: "The primary component of a computer that performs instructions and calculations. Often called the 'brain' of the computer, the CPU executes program instructions and processes data.",
    relatedTerms: ["processor", "memory", "hardware", "clock-speed"]
  },
  {
    id: "operating-system",
    title: "Operating System",
    category: "System Software",
    definition: "System software that manages computer hardware and software resources, providing services for programs. Examples include Windows, macOS, Linux, iOS, and Android.",
    relatedTerms: ["os", "kernel", "system", "software"]
  },
  {
    id: "syntax",
    title: "Syntax",
    category: "Programming Concept",
    definition: "The set of rules that define the structure and format of valid statements in a programming language. Syntax errors occur when code doesn't follow these rules and prevent program compilation or execution.",
    example: "Python: print('Hello') ✓ vs print 'Hello' ✗ (syntax error)",
    relatedTerms: ["semantics", "grammar", "language", "error"]
  },
  {
    id: "semantics",
    title: "Semantics",
    category: "Programming Concept",
    definition: "The meaning of syntactically correct code - what the code actually does when executed. While syntax is about structure, semantics is about behavior and logic.",
    relatedTerms: ["syntax", "logic", "meaning", "behavior"]
  },
  {
    id: "identifier",
    title: "Identifier",
    category: "Programming Concept",
    definition: "A name used to identify variables, functions, classes, or other entities in code. Identifiers must follow language-specific naming rules and should be descriptive and meaningful.",
    example: "let userName = 'John'; // userName is an identifier",
    relatedTerms: ["variable", "name", "naming-convention", "camelCase"]
  },
  {
    id: "literal",
    title: "Literal",
    category: "Programming Concept",
    definition: "A fixed value written directly in code, such as numbers, strings, or booleans. Literals represent actual data values rather than variables or expressions.",
    example: "42 // number literal\n'Hello' // string literal\ntrue // boolean literal",
    relatedTerms: ["value", "constant", "data-type", "hardcoded"]
  },
  {
    id: "comment",
    title: "Comment",
    category: "Programming Concept",
    definition: "Text in source code that is ignored by the compiler/interpreter, used to explain code, add notes, or temporarily disable code. Comments improve code readability and maintainability.",
    example: "// Single-line comment\n/* Multi-line\n   comment */",
    relatedTerms: ["documentation", "annotation", "code-quality"]
  },
  {
    id: "indentation",
    title: "Indentation",
    category: "Code Style",
    definition: "The practice of adding whitespace at the beginning of lines to visually represent code structure and nesting. Proper indentation makes code more readable and, in Python, is syntactically required.",
    example: "if (condition) {\n  // indented code block\n  console.log('nested');\n}",
    relatedTerms: ["formatting", "code-style", "readability", "whitespace"]
  },
  {
    id: "concatenation",
    title: "Concatenation",
    category: "String Operation",
    definition: "The operation of joining two or more strings together to form a single string. Concatenation is fundamental to string manipulation and building dynamic text.",
    example: "'Hello' + ' ' + 'World' // 'Hello World'\n`${first} ${last}` // template literal",
    relatedTerms: ["string", "operator", "joining", "plus"]
  },
  {
    id: "type-conversion",
    title: "Type Conversion (Casting)",
    category: "Programming Concept",
    definition: "The process of converting a value from one data type to another, either explicitly (casting) or implicitly (coercion). Type conversion is essential when working with different data types.",
    example: "String(123) // '123'\nNumber('456') // 456\nparseInt('789') // 789",
    relatedTerms: ["casting", "data-type", "coercion", "conversion"]
  },
  {
    id: "tuple",
    title: "Tuple",
    category: "Data Structure",
    definition: "An ordered, immutable collection of elements that can contain different data types. Unlike arrays, tuples have fixed size and cannot be modified after creation.",
    example: "person = ('Alice', 25, 'Engineer') # Python tuple\nlet point: [number, number] = [10, 20]; // TypeScript",
    relatedTerms: ["array", "list", "immutable", "collection"]
  },
  {
    id: "struct",
    title: "Struct (Structure)",
    category: "Data Structure",
    definition: "A composite data type that groups together variables of different types under a single name. Structs are used to represent records or complex data in languages like C and Go.",
    example: "struct Person {\n  char name[50];\n  int age;\n  float salary;\n};",
    relatedTerms: ["record", "object", "data-type", "composite"]
  },
  {
    id: "enum",
    title: "Enum (Enumeration)",
    category: "Data Type",
    definition: "A data type consisting of a set of named constants, making code more readable and maintainable. Enums restrict variables to one of a predefined set of values.",
    example: "enum Color { RED, GREEN, BLUE }\nenum Status { PENDING = 0, APPROVED = 1, REJECTED = 2 }",
    relatedTerms: ["constant", "data-type", "named-values"]
  },
  {
    id: "matrix",
    title: "Matrix",
    category: "Data Structure",
    definition: "A two-dimensional array arranged in rows and columns, commonly used in mathematics, graphics, and data science. Matrices enable efficient representation of tabular data.",
    example: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // 3x3 matrix",
    relatedTerms: ["array", "2d-array", "grid", "table"]
  },
  {
    id: "deque",
    title: "Deque (Double-Ended Queue)",
    category: "Data Structure",
    definition: "A data structure that allows insertion and deletion of elements from both front and rear ends. Deques are more flexible than standard queues and can function as both stacks and queues.",
    relatedTerms: ["queue", "stack", "data-structure", "double-ended"]
  },
  {
    id: "immutable",
    title: "Immutable",
    category: "Programming Concept",
    definition: "A property of data that cannot be changed after creation. Immutable objects provide safety, predictability, and are essential in functional programming and concurrent systems.",
    relatedTerms: ["mutable", "constant", "readonly", "functional"]
  },
  {
    id: "linear-search",
    title: "Linear Search",
    category: "Algorithm",
    definition: "A simple search algorithm that checks each element in a list sequentially until the target is found or the list ends. Linear search has O(n) time complexity and works on unsorted data.",
    example: "function linearSearch(arr, target) {\n  for(let i = 0; i < arr.length; i++) {\n    if(arr[i] === target) return i;\n  }\n  return -1;\n}",
    relatedTerms: ["search", "algorithm", "binary-search", "sequential"]
  },
  {
    id: "selection-sort",
    title: "Selection Sort",
    category: "Sorting Algorithm",
    definition: "A simple sorting algorithm that repeatedly finds the minimum element from the unsorted portion and places it at the beginning. Selection sort has O(n²) time complexity.",
    example: "Find min, swap with first; find next min, swap with second; repeat",
    relatedTerms: ["sorting", "algorithm", "bubble-sort", "insertion-sort"]
  },
  {
    id: "insertion-sort",
    title: "Insertion Sort",
    category: "Sorting Algorithm",
    definition: "A simple sorting algorithm that builds the sorted array one element at a time by inserting each element into its correct position. Efficient for small datasets with O(n²) worst-case complexity.",
    example: "Like sorting playing cards: pick each card and insert it in the right position",
    relatedTerms: ["sorting", "algorithm", "selection-sort", "bubble-sort"]
  },
  {
    id: "traversal",
    title: "Traversal",
    category: "Algorithm",
    definition: "The process of visiting each element in a data structure exactly once. Common traversals include array iteration, tree traversals (inorder, preorder, postorder), and graph traversals (DFS, BFS).",
    relatedTerms: ["iteration", "visit", "dfs", "bfs", "loop"]
  },
  {
    id: "comparison",
    title: "Comparison Operator",
    category: "Programming Concept",
    definition: "Operators that compare two values and return a boolean result. Common comparison operators include == (equal), != (not equal), < (less than), > (greater than), <= and >=.",
    example: "5 > 3 // true\n10 == 10 // true\n'a' < 'b' // true",
    relatedTerms: ["operator", "boolean", "conditional", "relational"]
  },
  {
    id: "abstract-class",
    title: "Abstract Class",
    category: "OOP Concept",
    definition: "A class that cannot be instantiated and serves as a blueprint for other classes. Abstract classes can contain both implemented and abstract methods that subclasses must implement.",
    example: "abstract class Animal {\n  abstract makeSound(): void;\n  move() { console.log('moving'); }\n}",
    relatedTerms: ["class", "abstraction", "inheritance", "interface"]
  },
  {
    id: "static-method",
    title: "Static Method",
    category: "OOP Concept",
    definition: "A method that belongs to the class itself rather than instances of the class. Static methods can be called without creating an object and typically perform utility functions.",
    example: "class Math {\n  static add(a, b) { return a + b; }\n}\nMath.add(5, 3); // Call without instance",
    relatedTerms: ["class", "method", "class-method", "instance"]
  },
  {
    id: "getter-setter",
    title: "Getter/Setter",
    category: "OOP Concept",
    definition: "Special methods that provide controlled access to object properties. Getters retrieve property values while setters assign new values, enabling validation and encapsulation.",
    example: "class Person {\n  get name() { return this._name; }\n  set name(value) { this._name = value; }\n}",
    relatedTerms: ["property", "encapsulation", "accessor", "mutator"]
  },
  {
    id: "destructor",
    title: "Destructor",
    category: "OOP Concept",
    definition: "A special method automatically called when an object is destroyed or goes out of scope. Destructors clean up resources like memory, file handles, or network connections.",
    example: "class File {\n  ~File() { // C++ destructor\n    closeFile();\n  }\n}",
    relatedTerms: ["constructor", "cleanup", "memory", "lifecycle"]
  },
  {
    id: "this-keyword",
    title: "This/Self Keyword",
    category: "OOP Concept",
    definition: "A keyword that refers to the current instance of a class within its methods. 'this' (JavaScript, Java) or 'self' (Python) allows access to instance properties and methods.",
    example: "class Person {\n  constructor(name) {\n    this.name = name; // 'this' refers to current instance\n  }\n}",
    relatedTerms: ["instance", "object", "reference", "context"]
  },
  {
    id: "overloading",
    title: "Method Overloading",
    category: "OOP Concept",
    definition: "The ability to define multiple methods with the same name but different parameters. Overloading enables the same operation to behave differently based on input types or counts.",
    example: "class Calculator {\n  add(a, b) { return a + b; }\n  add(a, b, c) { return a + b + c; }\n}",
    relatedTerms: ["polymorphism", "method", "parameters", "overriding"]
  },
  {
    id: "ip-address",
    title: "IP Address",
    category: "Networking",
    definition: "Internet Protocol address - a unique numerical label assigned to each device on a network. IP addresses identify and locate devices, with IPv4 (32-bit) and IPv6 (128-bit) formats.",
    example: "IPv4: 192.168.1.1\nIPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    relatedTerms: ["network", "dns", "tcp-ip", "subnet"]
  },
  {
    id: "dns",
    title: "DNS (Domain Name System)",
    category: "Networking",
    definition: "A hierarchical system that translates human-readable domain names (like google.com) into IP addresses. DNS acts as the internet's phone book, enabling users to access websites using names.",
    relatedTerms: ["domain", "ip-address", "network", "url"]
  },
  {
    id: "url",
    title: "URL (Uniform Resource Locator)",
    category: "Internet",
    definition: "A reference to a web resource that specifies its location and how to retrieve it. URLs contain the protocol (http/https), domain name, and optional path, parameters, and fragments.",
    example: "https://www.example.com/path/page.html?id=123#section",
    relatedTerms: ["uri", "http", "domain", "web"]
  },
  {
    id: "port",
    title: "Port",
    category: "Networking",
    definition: "A virtual endpoint for network communication identified by a number (0-65535). Ports allow multiple services to run on the same IP address, with common ports like 80 (HTTP) and 443 (HTTPS).",
    example: "localhost:3000 // Port 3000\nhttp://example.com:8080 // Port 8080",
    relatedTerms: ["network", "tcp", "socket", "endpoint"]
  },
  {
    id: "tcp-ip",
    title: "TCP/IP",
    category: "Network Protocol",
    definition: "Transmission Control Protocol/Internet Protocol - the fundamental communication protocols of the internet. TCP ensures reliable data delivery while IP handles addressing and routing.",
    relatedTerms: ["protocol", "network", "internet", "packet"]
  },
  {
    id: "packet",
    title: "Packet",
    category: "Networking",
    definition: "A unit of data transmitted over a network, containing both the payload (actual data) and header (metadata like source, destination, protocol). Networks break data into packets for efficient transmission.",
    relatedTerms: ["network", "tcp-ip", "data", "transmission"]
  },
  {
    id: "pseudocode",
    title: "Pseudocode",
    category: "Algorithm Design",
    definition: "A plain-language description of algorithm steps that resembles code but isn't tied to any specific programming language. Pseudocode helps plan logic before actual coding.",
    example: "BEGIN\n  SET total to 0\n  FOR each number in list\n    ADD number to total\n  END FOR\n  DISPLAY total\nEND",
    relatedTerms: ["algorithm", "flowchart", "planning", "design"]
  },
  {
    id: "flowchart",
    title: "Flowchart",
    category: "Algorithm Design",
    definition: "A diagram that uses shapes and arrows to represent the steps and flow of an algorithm or process. Flowcharts visually illustrate program logic, decisions, and loops.",
    relatedTerms: ["algorithm", "pseudocode", "diagram", "visualization"]
  },
  {
    id: "input",
    title: "Input",
    category: "Programming Concept",
    definition: "Data provided to a program from external sources like users, files, or other programs. Input allows programs to process different data and respond to user interactions.",
    example: "let name = prompt('Enter your name'); // User input\nfs.readFile('data.txt'); // File input",
    relatedTerms: ["output", "user-input", "data", "stdin"]
  },
  {
    id: "increment-decrement",
    title: "Increment/Decrement",
    category: "Programming Concept",
    definition: "Operations that increase (increment) or decrease (decrement) a variable's value, typically by 1. Common in loops and counters using ++ and -- operators.",
    example: "let count = 5;\ncount++; // 6 (increment)\ncount--; // 5 (decrement)\ncount += 2; // 7",
    relatedTerms: ["operator", "counter", "loop", "arithmetic"]
  },
  {
    id: "modulo",
    title: "Modulo Operation",
    category: "Mathematical Operator",
    definition: "An operation that returns the remainder after division. The modulo operator (%) is useful for checking divisibility, cycling through values, and determining even/odd numbers.",
    example: "10 % 3 // 1 (remainder)\n15 % 5 // 0 (evenly divisible)\n7 % 2 // 1 (odd number)",
    relatedTerms: ["operator", "remainder", "division", "arithmetic"]
  },
  {
    id: "exception",
    title: "Exception",
    category: "Error Handling",
    definition: "An event that disrupts the normal flow of program execution, typically caused by errors. Exceptions can be caught and handled to prevent program crashes and provide graceful error recovery.",
    relatedTerms: ["error", "try-catch", "throw", "exception-handling"]
  },
  {
    id: "try-catch",
    title: "Try-Catch Block",
    category: "Error Handling",
    definition: "A control structure that handles exceptions by attempting code in the 'try' block and catching errors in the 'catch' block. An optional 'finally' block executes regardless of success or failure.",
    example: "try {\n  riskyOperation();\n} catch (error) {\n  console.error(error);\n} finally {\n  cleanup();\n}",
    relatedTerms: ["exception", "error", "throw", "finally"]
  },
  {
    id: "throw",
    title: "Throw Statement",
    category: "Error Handling",
    definition: "A statement that creates and throws an exception, interrupting normal program flow. Throw allows programmers to signal errors and pass them up to exception handlers.",
    example: "if (age < 0) {\n  throw new Error('Age cannot be negative');\n}",
    relatedTerms: ["exception", "try-catch", "error", "raise"]
  },
  {
    id: "finally",
    title: "Finally Block",
    category: "Error Handling",
    definition: "A block of code in exception handling that always executes, whether an exception occurs or not. Finally blocks are used for cleanup operations like closing files or releasing resources.",
    example: "try {\n  openFile();\n} catch (e) {\n  handleError(e);\n} finally {\n  closeFile(); // Always runs\n}",
    relatedTerms: ["try-catch", "exception", "cleanup", "guaranteed"]
  },
  {
    id: "stack-trace",
    title: "Stack Trace",
    category: "Debugging",
    definition: "A report showing the sequence of function calls that led to an error or current execution point. Stack traces help developers identify where errors occurred and the path of execution.",
    relatedTerms: ["error", "debugging", "call-stack", "exception"]
  },
  {
    id: "lambda",
    title: "Lambda Function",
    category: "Programming Concept",
    definition: "An anonymous function defined without a name, often used for short, simple operations. Lambda functions are common in functional programming and callbacks.",
    example: "// JavaScript arrow function (lambda)\nconst add = (a, b) => a + b;\n// Python lambda\nlambda x: x * 2",
    relatedTerms: ["arrow-function", "anonymous-function", "functional", "callback"]
  },
  {
    id: "arrow-function",
    title: "Arrow Function",
    category: "JavaScript",
    definition: "A concise syntax for writing functions in JavaScript using the => operator. Arrow functions have lexical 'this' binding and are commonly used for callbacks and short functions.",
    example: "const multiply = (a, b) => a * b;\narray.map(x => x * 2);",
    relatedTerms: ["lambda", "function", "javascript", "es6"]
  },
  {
    id: "closure",
    title: "Closure",
    category: "Programming Concept",
    definition: "A function that retains access to variables from its outer scope even after the outer function has finished executing. Closures enable data privacy and factory patterns.",
    example: "function counter() {\n  let count = 0;\n  return () => ++count; // Closure over 'count'\n}",
    relatedTerms: ["scope", "function", "lexical", "encapsulation"]
  },
  {
    id: "hoisting",
    title: "Hoisting",
    category: "JavaScript",
    definition: "JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. Understanding hoisting helps prevent unexpected undefined values and errors.",
    example: "console.log(x); // undefined (not error)\nvar x = 5; // Declaration hoisted, assignment not",
    relatedTerms: ["javascript", "scope", "var", "temporal-dead-zone"]
  },
  {
    id: "prototype",
    title: "Prototype",
    category: "JavaScript",
    definition: "An object from which other objects inherit properties and methods in JavaScript. Prototypes form the basis of JavaScript's inheritance model before ES6 classes.",
    example: "Array.prototype.customMethod = function() { };\n// All arrays inherit customMethod",
    relatedTerms: ["inheritance", "javascript", "object", "prototype-chain"]
  },
  {
    id: "truthy-falsy",
    title: "Truthy/Falsy",
    category: "JavaScript",
    definition: "Values that evaluate to true or false in boolean contexts. Falsy values include false, 0, '', null, undefined, and NaN; all other values are truthy.",
    example: "if ('hello') { } // 'hello' is truthy\nif (0) { } // 0 is falsy, block skipped",
    relatedTerms: ["boolean", "coercion", "conditional", "javascript"]
  },
  {
    id: "ternary-operator",
    title: "Ternary Operator",
    category: "Programming Concept",
    definition: "A conditional operator that evaluates a condition and returns one of two values. The ternary operator (? :) provides a concise alternative to if-else statements.",
    example: "let status = age >= 18 ? 'adult' : 'minor';\nlet max = a > b ? a : b;",
    relatedTerms: ["conditional", "operator", "if-else", "expression"]
  },
  {
    id: "dom",
    title: "DOM (Document Object Model)",
    category: "Web Technology",
    definition: "A programming interface for HTML and XML documents that represents the page structure as a tree of objects. The DOM allows scripts to dynamically access and update content, structure, and styles.",
    relatedTerms: ["html", "javascript", "browser", "web", "tree"]
  },
  {
    id: "cookie",
    title: "Cookie",
    category: "Web Technology",
    definition: "Small pieces of data stored by web browsers on the user's device. Cookies are used for session management, personalization, and tracking user behavior across websites.",
    example: "document.cookie = 'username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT';",
    relatedTerms: ["session", "browser", "storage", "http"]
  },
  {
    id: "local-storage",
    title: "Local Storage",
    category: "Web Storage",
    definition: "A web storage API that allows websites to store key-value pairs in the browser with no expiration. Local storage persists even after the browser is closed, unlike session storage.",
    example: "localStorage.setItem('user', 'Alice');\nconst user = localStorage.getItem('user');",
    relatedTerms: ["session-storage", "cookie", "browser", "persistence"]
  },
  {
    id: "session-storage",
    title: "Session Storage",
    category: "Web Storage",
    definition: "A web storage API similar to local storage, but data is cleared when the browser tab is closed. Session storage is scoped to a single tab or window.",
    example: "sessionStorage.setItem('tempData', 'value');\nsessionStorage.getItem('tempData');",
    relatedTerms: ["local-storage", "cookie", "browser", "temporary"]
  },
  {
    id: "ajax",
    title: "AJAX (Asynchronous JavaScript and XML)",
    category: "Web Technology",
    definition: "A technique for creating asynchronous web applications that can update parts of a page without reloading the entire page. AJAX uses XMLHttpRequest or Fetch API to communicate with servers.",
    relatedTerms: ["asynchronous", "xhr", "fetch", "javascript"]
  },
  {
    id: "fetch-api",
    title: "Fetch API",
    category: "Web API",
    definition: "A modern interface for making HTTP requests in JavaScript that returns Promises. Fetch provides a cleaner, more powerful alternative to XMLHttpRequest.",
    example: "fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));",
    relatedTerms: ["ajax", "promise", "http", "api"]
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    category: "Web Design",
    definition: "An approach to web design that makes pages render well on different devices and screen sizes. Responsive design uses flexible grids, images, and CSS media queries.",
    relatedTerms: ["css", "media-query", "mobile", "flexible"]
  },
  {
    id: "flexbox",
    title: "Flexbox (CSS Flexible Box)",
    category: "CSS Layout",
    definition: "A CSS layout module that provides an efficient way to arrange, distribute, and align items in a container, even when sizes are unknown or dynamic. Flexbox is ideal for one-dimensional layouts.",
    example: ".container { display: flex; justify-content: space-between; }",
    relatedTerms: ["css", "layout", "grid", "responsive"]
  },
  {
    id: "css-grid",
    title: "CSS Grid",
    category: "CSS Layout",
    definition: "A two-dimensional CSS layout system that enables complex responsive layouts using rows and columns. Grid provides precise control over both horizontal and vertical positioning.",
    example: ".container { display: grid; grid-template-columns: 1fr 2fr 1fr; }",
    relatedTerms: ["css", "layout", "flexbox", "responsive"]
  },
  {
    id: "priority-queue",
    title: "Priority Queue",
    category: "Data Structure",
    definition: "An abstract data type where each element has a priority value, and elements with higher priority are served before elements with lower priority. Often implemented using heaps.",
    relatedTerms: ["heap", "queue", "data-structure", "tree"]
  },
  {
    id: "bst",
    title: "BST (Binary Search Tree)",
    category: "Data Structure",
    definition: "A binary tree where each node's left subtree contains only values less than the node's value, and the right subtree contains only values greater. BSTs enable efficient searching, insertion, and deletion in O(log n) average time.",
    relatedTerms: ["tree", "binary-tree", "data-structure", "search"]
  },
  {
    id: "avl-tree",
    title: "AVL Tree",
    category: "Data Structure",
    definition: "A self-balancing binary search tree where the heights of left and right subtrees of any node differ by at most one. Named after inventors Adelson-Velsky and Landis.",
    relatedTerms: ["bst", "tree", "balanced", "data-structure"]
  },
  {
    id: "hash-collision",
    title: "Hash Collision",
    category: "Data Structure",
    definition: "Occurs when two different inputs produce the same hash value in a hash table. Collisions are resolved using techniques like chaining or open addressing.",
    relatedTerms: ["hash-table", "hashing", "data-structure"]
  },
  {
    id: "adjacency-list",
    title: "Adjacency List",
    category: "Data Structure",
    definition: "A graph representation that stores a list of adjacent vertices for each vertex. Space-efficient for sparse graphs and commonly used in graph algorithms.",
    relatedTerms: ["graph", "data-structure", "adjacency-matrix"]
  },
  {
    id: "regex",
    title: "Regular Expression (Regex)",
    category: "Programming Concept",
    definition: "A sequence of characters that defines a search pattern, used for pattern matching in strings. Regular expressions are powerful tools for validation, searching, and text manipulation.",
    example: "const emailPattern = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\nemailPattern.test('user@example.com'); // true",
    relatedTerms: ["string", "pattern", "validation"]
  },
  {
    id: "code-review",
    title: "Code Review",
    category: "Development Practice",
    definition: "A software quality assurance process where developers examine code written by peers to identify bugs, ensure quality, and share knowledge. Code reviews improve code quality and team collaboration.",
    relatedTerms: ["pull-request", "git", "quality", "collaboration"]
  },
  {
    id: "pair-programming",
    title: "Pair Programming",
    category: "Development Practice",
    definition: "An agile development technique where two programmers work together at one workstation. One writes code (driver) while the other reviews each line (observer/navigator).",
    relatedTerms: ["agile", "collaboration", "development"]
  },
  {
    id: "semantic-versioning",
    title: "Semantic Versioning",
    category: "Development Practice",
    definition: "A versioning scheme using MAJOR.MINOR.PATCH format (e.g., 2.1.3). Increment MAJOR for breaking changes, MINOR for new features, and PATCH for bug fixes.",
    relatedTerms: ["version", "release", "npm"]
  },
  {
    id: "changelog",
    title: "Changelog",
    category: "Documentation",
    definition: "A file or document that chronologically lists notable changes for each version of a project. Changelogs help users and contributors understand what has changed between releases.",
    relatedTerms: ["version", "documentation", "release"]
  },
  {
    id: "open-source",
    title: "Open Source",
    category: "Software Development",
    definition: "Software with source code that anyone can inspect, modify, and enhance. Open source projects promote collaboration and transparency, often using licenses like MIT or GPL.",
    relatedTerms: ["github", "license", "collaboration"]
  },
  {
    id: "cli",
    title: "CLI (Command Line Interface)",
    category: "Tool",
    definition: "A text-based interface for interacting with software or operating systems by typing commands. CLIs provide powerful control and automation capabilities.",
    example: "git commit -m 'Add feature'\nnpm install express",
    relatedTerms: ["terminal", "shell", "bash"]
  },
  {
    id: "environment-variable",
    title: "Environment Variable",
    category: "Configuration",
    definition: "A dynamic value that can affect running processes on a computer. Environment variables are used to configure applications without hardcoding sensitive data like API keys.",
    example: "process.env.DATABASE_URL\nexport API_KEY='your-key-here'",
    relatedTerms: ["configuration", "security", "deployment"]
  },
  {
    id: "singleton",
    title: "Singleton Pattern",
    category: "Design Pattern",
    definition: "A creational design pattern that ensures a class has only one instance and provides a global access point to it. Useful for managing shared resources like database connections.",
    relatedTerms: ["design-pattern", "oop", "class"]
  },
  {
    id: "factory-pattern",
    title: "Factory Pattern",
    category: "Design Pattern",
    definition: "A creational design pattern that provides an interface for creating objects without specifying their exact classes. The factory method lets subclasses decide which class to instantiate.",
    relatedTerms: ["design-pattern", "oop", "object"]
  },
  {
    id: "observer-pattern",
    title: "Observer Pattern",
    category: "Design Pattern",
    definition: "A behavioral design pattern where an object (subject) maintains a list of dependents (observers) and notifies them of state changes. Widely used in event-driven programming.",
    relatedTerms: ["design-pattern", "event", "pub-sub"]
  },
  {
    id: "pub-sub",
    title: "Pub/Sub (Publish-Subscribe)",
    category: "Design Pattern",
    definition: "A messaging pattern where publishers send messages to topics without knowing subscribers, and subscribers receive messages from topics they're interested in. Enables loose coupling between components.",
    relatedTerms: ["observer-pattern", "event", "messaging"]
  },
  {
    id: "dependency-injection",
    title: "Dependency Injection",
    category: "Design Pattern",
    definition: "A design pattern where dependencies are provided (injected) to an object rather than created by the object itself. This promotes loose coupling and testability.",
    relatedTerms: ["design-pattern", "oop", "testing"]
  },
  {
    id: "minification",
    title: "Minification",
    category: "Optimization",
    definition: "The process of removing unnecessary characters from code (whitespace, comments, etc.) without changing functionality. Minification reduces file size and improves load times.",
    relatedTerms: ["optimization", "bundler", "build"]
  },
  {
    id: "tree-shaking",
    title: "Tree Shaking",
    category: "Optimization",
    definition: "A dead code elimination technique that removes unused exports from JavaScript modules during bundling. Tree shaking reduces bundle size by only including code that is actually used.",
    relatedTerms: ["webpack", "bundler", "optimization"]
  },
  {
    id: "code-splitting",
    title: "Code Splitting",
    category: "Optimization",
    definition: "A technique that splits code into smaller chunks that can be loaded on demand. Code splitting improves initial load time by only loading necessary code for the current page.",
    relatedTerms: ["lazy-loading", "webpack", "optimization"]
  },
  {
    id: "lazy-loading",
    title: "Lazy Loading",
    category: "Optimization",
    definition: "A design pattern that delays loading of resources until they are needed. Commonly used for images, components, and routes to improve initial page load performance.",
    relatedTerms: ["code-splitting", "optimization", "performance"]
  },
  {
    id: "transpilation",
    title: "Transpilation",
    category: "Build Process",
    definition: "The process of converting source code from one programming language to another at the same level of abstraction. Examples include TypeScript to JavaScript or modern JavaScript to older versions.",
    relatedTerms: ["babel", "typescript", "compiler"]
  },
  {
    id: "polyfill",
    title: "Polyfill",
    category: "Web Development",
    definition: "Code that provides modern functionality to older browsers that don't natively support it. Polyfills enable developers to use newer JavaScript features while maintaining backward compatibility.",
    relatedTerms: ["browser", "compatibility", "javascript"]
  },
  {
    id: "ram",
    title: "RAM (Random Access Memory)",
    category: "Computer Hardware",
    definition: "A type of volatile computer memory that provides high-speed, temporary storage for data and programs currently in use. RAM allows for quick read/write access and loses all data when power is turned off.",
    relatedTerms: ["cpu", "memory", "hardware", "volatile"]
  },
  {
    id: "hardware",
    title: "Hardware",
    category: "Computer Hardware",
    definition: "The physical components of a computer system that you can touch and see, such as the CPU, RAM, motherboard, hard drive, keyboard, and monitor. Hardware works with software to perform computing tasks.",
    relatedTerms: ["cpu", "ram", "motherboard", "peripheral", "software"]
  },
  {
    id: "motherboard",
    title: "Motherboard",
    category: "Computer Hardware",
    definition: "The main printed circuit board (PCB) in a computer that connects and allows communication between all hardware components including CPU, RAM, storage devices, and expansion cards.",
    relatedTerms: ["cpu", "ram", "hardware", "bios"]
  },
  {
    id: "gpu",
    title: "GPU (Graphics Processing Unit)",
    category: "Computer Hardware",
    definition: "A specialized electronic circuit designed to rapidly process and render graphics and images. Modern GPUs are also used for parallel processing tasks like machine learning, cryptocurrency mining, and scientific computing.",
    relatedTerms: ["cpu", "hardware", "rendering", "parallel-processing"]
  },
  {
    id: "ssd",
    title: "SSD (Solid State Drive)",
    category: "Computer Hardware",
    definition: "A storage device that uses integrated circuit assemblies to store data persistently, using flash memory. SSDs are faster, more durable, and consume less power than traditional hard disk drives (HDDs).",
    relatedTerms: ["storage", "hardware", "hdd", "memory"]
  },
  {
    id: "hdd",
    title: "HDD (Hard Disk Drive)",
    category: "Computer Hardware",
    definition: "A traditional data storage device that uses magnetic storage to store and retrieve digital data using rotating platters. HDDs offer larger capacity at lower cost than SSDs but are slower and more fragile.",
    relatedTerms: ["storage", "hardware", "ssd", "disk"]
  },
  {
    id: "peripheral",
    title: "Peripheral Device",
    category: "Computer Hardware",
    definition: "An external device that connects to a computer to provide additional functionality. Examples include keyboards, mice, printers, monitors, scanners, and external storage devices.",
    relatedTerms: ["hardware", "input", "output", "usb"]
  },
  {
    id: "bios",
    title: "BIOS (Basic Input/Output System)",
    category: "Computer Hardware",
    definition: "Firmware that initializes and tests hardware components during the boot process and provides runtime services for operating systems and programs. Modern computers use UEFI as a replacement for traditional BIOS.",
    relatedTerms: ["firmware", "boot", "motherboard", "uefi"]
  },
  {
    id: "firmware",
    title: "Firmware",
    category: "Software",
    definition: "Specialized software programmed into hardware devices that provides low-level control for the device's specific hardware. Firmware is stored in non-volatile memory and controls how the device operates.",
    relatedTerms: ["bios", "hardware", "software", "embedded"]
  },
  {
    id: "network",
    title: "Network",
    category: "Networking",
    definition: "A group of two or more interconnected computers and devices that can communicate and share resources such as files, printers, and internet connections. Networks can be local (LAN) or wide-area (WAN).",
    relatedTerms: ["lan", "wan", "router", "protocol", "internet"]
  },
  {
    id: "firewall",
    title: "Firewall",
    category: "Network Security",
    definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Firewalls create a barrier between trusted internal networks and untrusted external networks.",
    relatedTerms: ["security", "network", "cybersecurity", "port"]
  },
  {
    id: "malware",
    title: "Malware",
    category: "Cybersecurity",
    definition: "Malicious software designed to harm, exploit, or otherwise compromise computer systems, networks, or devices. Types include viruses, worms, trojans, ransomware, and spyware.",
    relatedTerms: ["virus", "cybersecurity", "security", "antivirus"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Security",
    definition: "The practice of protecting computer systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft. Cybersecurity encompasses technologies, processes, and practices designed to safeguard digital assets.",
    relatedTerms: ["security", "firewall", "encryption", "malware"]
  },
  {
    id: "router",
    title: "Router",
    category: "Networking",
    definition: "A networking device that forwards data packets between computer networks. Routers connect multiple networks together and determine the best path for data to travel from source to destination.",
    relatedTerms: ["network", "ip-address", "gateway", "switch"]
  },
  {
    id: "bandwidth",
    title: "Bandwidth",
    category: "Networking",
    definition: "The maximum rate of data transfer across a network connection, typically measured in bits per second (bps), megabits per second (Mbps), or gigabits per second (Gbps). Higher bandwidth allows more data to be transmitted simultaneously.",
    relatedTerms: ["network", "latency", "throughput", "internet"]
  },
  {
    id: "latency",
    title: "Latency",
    category: "Networking",
    definition: "The time delay between a user's action and the response from a system or network. Measured in milliseconds (ms), latency affects the responsiveness and performance of applications, especially real-time systems.",
    relatedTerms: ["network", "bandwidth", "performance", "ping"]
  },
  {
    id: "packet",
    title: "Packet",
    category: "Networking",
    definition: "A formatted unit of data transmitted over a network. Each packet contains both the data payload and control information (headers) such as source/destination addresses, enabling efficient and reliable data transmission.",
    relatedTerms: ["network", "protocol", "tcp-ip", "routing"]
  },
  {
    id: "dns",
    title: "DNS (Domain Name System)",
    category: "Networking",
    definition: "A hierarchical naming system that translates human-readable domain names (like google.com) into IP addresses that computers use to identify each other on networks. DNS is often called the 'phonebook of the internet'.",
    relatedTerms: ["domain", "ip-address", "url", "internet"]
  },
  {
    id: "url",
    title: "URL (Uniform Resource Locator)",
    category: "Web Technology",
    definition: "The address used to access resources on the internet, specifying the protocol (http/https), domain name, and path. Example: https://www.example.com/page.html",
    relatedTerms: ["http", "domain", "web", "uri"]
  },
  {
    id: "ip-address",
    title: "IP Address",
    category: "Networking",
    definition: "A unique numerical label assigned to each device connected to a network that uses the Internet Protocol for communication. IP addresses can be IPv4 (e.g., 192.168.1.1) or IPv6 format.",
    relatedTerms: ["network", "dns", "router", "tcp-ip"]
  },
  {
    id: "lan",
    title: "LAN (Local Area Network)",
    category: "Networking",
    definition: "A computer network that interconnects devices within a limited area such as a home, office, or building. LANs provide high-speed connectivity and resource sharing among connected devices.",
    relatedTerms: ["network", "wan", "router", "ethernet"]
  },
  {
    id: "wan",
    title: "WAN (Wide Area Network)",
    category: "Networking",
    definition: "A telecommunications network that extends over a large geographical area, connecting multiple LANs. The internet is the largest example of a WAN.",
    relatedTerms: ["network", "lan", "internet", "router"]
  },
  {
    id: "vpn",
    title: "VPN (Virtual Private Network)",
    category: "Network Security",
    definition: "A technology that creates a secure, encrypted connection over a less secure network like the internet. VPNs protect privacy, mask IP addresses, and enable secure remote access to private networks.",
    relatedTerms: ["security", "encryption", "network", "tunnel"]
  },
  {
    id: "ethernet",
    title: "Ethernet",
    category: "Networking",
    definition: "A family of wired networking technologies commonly used in LANs. Ethernet defines protocols for how data is transmitted over physical cables, with speeds ranging from 10 Mbps to 100+ Gbps.",
    relatedTerms: ["lan", "network", "cable", "protocol"]
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    category: "Networking",
    definition: "A wireless networking technology that allows devices to connect to a network and the internet using radio waves. Wi-Fi is based on IEEE 802.11 standards and is ubiquitous in homes, offices, and public spaces.",
    relatedTerms: ["wireless", "network", "router", "internet"]
  },
  {
    id: "neural-network",
    title: "Neural Network",
    category: "Artificial Intelligence",
    definition: "A computing system inspired by biological neural networks that learns to perform tasks by considering examples. Neural networks consist of interconnected nodes (neurons) organized in layers that process and transform input data.",
    relatedTerms: ["ai", "machine-learning", "deep-learning", "node"]
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    category: "Artificial Intelligence",
    definition: "A subset of machine learning based on artificial neural networks with multiple layers (deep neural networks). Deep learning excels at processing unstructured data like images, audio, and text, powering applications like image recognition and natural language processing.",
    relatedTerms: ["neural-network", "ai", "machine-learning", "cnn"]
  },
  {
    id: "big-data",
    title: "Big Data",
    category: "Data Science",
    definition: "Extremely large and complex datasets that cannot be processed using traditional data processing methods. Big data is characterized by the 3 Vs: Volume (amount), Velocity (speed), and Variety (types of data).",
    relatedTerms: ["data-science", "analytics", "hadoop", "nosql"]
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    category: "Emerging Technology",
    definition: "A type of computation that uses quantum-mechanical phenomena like superposition and entanglement to perform operations on data. Quantum computers can potentially solve certain problems exponentially faster than classical computers.",
    relatedTerms: ["qubit", "algorithm", "computing", "cryptography"]
  }
];
