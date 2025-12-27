import { Term } from "./terms";

export const apiTerms: Term[] = [
  {
    id: "api-design",
    title: "API Design",
    category: "API",
    definition: "The process of planning and creating application programming interfaces that are intuitive, consistent, and easy to use. Good API design considers resource naming, HTTP methods, error handling, versioning, and developer experience.",
    example: "Designing RESTful endpoints: GET /users/{id}, POST /users, PUT /users/{id}, DELETE /users/{id}",
    relatedTerms: ["rest", "api", "api-versioning", "api-documentation"]
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    category: "API",
    definition: "A server that acts as a single entry point for multiple backend services. API gateways handle routing, authentication, rate limiting, caching, and request/response transformation.",
    example: "Kong or AWS API Gateway routing requests to microservices while handling authentication and rate limiting.",
    relatedTerms: ["microservices", "api", "reverse-proxy", "load-balancing"]
  },
  {
    id: "api-versioning",
    title: "API Versioning",
    category: "API",
    definition: "The practice of managing changes to APIs while maintaining backward compatibility. Common strategies include URL versioning, header versioning, and query parameter versioning.",
    example: "URL versioning: /api/v1/users vs /api/v2/users; Header: Accept: application/vnd.api+json; version=2",
    relatedTerms: ["api", "backward-compatibility", "api-design", "breaking-change"]
  },
  {
    id: "api-documentation",
    title: "API Documentation",
    category: "API",
    definition: "Comprehensive reference materials describing how to use an API, including endpoints, parameters, request/response formats, authentication, and examples. Essential for developer adoption and success.",
    example: "Interactive documentation using Swagger/OpenAPI with try-it-out functionality for each endpoint.",
    relatedTerms: ["openapi", "swagger", "api", "developer-experience"]
  },
  {
    id: "openapi",
    title: "OpenAPI Specification",
    category: "API",
    definition: "A standard specification for describing REST APIs in a machine-readable format (JSON or YAML). Formerly known as Swagger, OpenAPI enables automatic documentation generation, client SDK generation, and API testing.",
    example: "openapi: 3.0.0, paths: { /users: { get: { summary: 'Get all users', responses: {...} } } }",
    relatedTerms: ["swagger", "api-documentation", "api", "rest"]
  },
  {
    id: "swagger",
    title: "Swagger",
    category: "API",
    definition: "A set of tools for designing, building, and documenting REST APIs. Now refers to tools that implement the OpenAPI Specification, including Swagger UI for interactive documentation.",
    example: "Swagger UI displaying interactive API documentation where developers can test endpoints directly in the browser.",
    relatedTerms: ["openapi", "api-documentation", "api", "rest"]
  },
  {
    id: "graphql-schema",
    title: "GraphQL Schema",
    category: "API",
    definition: "A strongly-typed schema that defines the structure of data in a GraphQL API, including types, queries, mutations, and relationships. The schema serves as a contract between client and server.",
    example: "type User { id: ID!, name: String!, email: String! } query { user(id: ID!): User }",
    relatedTerms: ["graphql", "api", "type-system", "schema"]
  },
  {
    id: "graphql-query",
    title: "GraphQL Query",
    category: "API",
    definition: "A read operation in GraphQL that allows clients to request specific data fields. Queries can fetch nested resources in a single request, reducing over-fetching and under-fetching.",
    example: "query { user(id: 1) { name, posts { title, comments { text } } } }",
    relatedTerms: ["graphql", "api", "query", "data-fetching"]
  },
  {
    id: "graphql-mutation",
    title: "GraphQL Mutation",
    category: "API",
    definition: "A write operation in GraphQL used to create, update, or delete data. Mutations can return the modified data, enabling optimistic UI updates.",
    example: "mutation { createUser(name: 'John', email: 'john@example.com') { id, name } }",
    relatedTerms: ["graphql", "api", "crud", "data-modification"]
  },
  {
    id: "graphql-resolver",
    title: "GraphQL Resolver",
    category: "API",
    definition: "A function that handles fetching data for a specific field in a GraphQL query. Resolvers connect schema fields to data sources like databases, REST APIs, or other services.",
    example: "const resolvers = { Query: { user: (parent, { id }, context) => db.users.findById(id) } };",
    relatedTerms: ["graphql", "api", "data-source", "backend"]
  },
  {
    id: "graphql-subscription",
    title: "GraphQL Subscription",
    category: "API",
    definition: "A real-time GraphQL operation that allows clients to receive updates when specific events occur. Subscriptions typically use WebSockets for bidirectional communication.",
    example: "subscription { messageAdded { id, text, user } } // Receives new messages in real-time",
    relatedTerms: ["graphql", "websocket", "real-time", "pub-sub"]
  },
  {
    id: "soap",
    title: "SOAP",
    category: "API",
    definition: "Simple Object Access Protocol - an XML-based messaging protocol for exchanging structured information. SOAP is highly standardized with built-in error handling and security, commonly used in enterprise systems.",
    example: "SOAP envelope with header and body: <soap:Envelope><soap:Body><GetUser><UserId>123</UserId></GetUser></soap:Body></soap:Envelope>",
    relatedTerms: ["xml", "web-service", "api", "rest"]
  },
  {
    id: "grpc",
    title: "gRPC",
    category: "API",
    definition: "A high-performance RPC (Remote Procedure Call) framework developed by Google using Protocol Buffers. gRPC supports bidirectional streaming and is more efficient than REST for service-to-service communication.",
    example: "Service definition: service UserService { rpc GetUser(UserId) returns (User); }",
    relatedTerms: ["rpc", "protobuf", "microservices", "api"]
  },
  {
    id: "protobuf",
    title: "Protocol Buffers (Protobuf)",
    category: "API",
    definition: "A language-neutral, platform-neutral serialization format developed by Google. Protobuf is smaller and faster than JSON or XML, commonly used with gRPC.",
    example: "message User { int32 id = 1; string name = 2; string email = 3; }",
    relatedTerms: ["grpc", "serialization", "api", "data-format"]
  },
  {
    id: "json-rpc",
    title: "JSON-RPC",
    category: "API",
    definition: "A remote procedure call protocol encoded in JSON. JSON-RPC is simpler than SOAP and allows calling functions on a server with JSON-formatted requests.",
    example: "{\"jsonrpc\": \"2.0\", \"method\": \"getUser\", \"params\": {\"id\": 123}, \"id\": 1}",
    relatedTerms: ["rpc", "json", "api", "remote-procedure-call"]
  },
  {
    id: "xml-rpc",
    title: "XML-RPC",
    category: "API",
    definition: "A remote procedure call protocol that uses XML to encode calls and HTTP as a transport mechanism. Predecessor to SOAP, simpler but less feature-rich.",
    example: "<methodCall><methodName>getUser</methodName><params><param><value><int>123</int></value></param></params></methodCall>",
    relatedTerms: ["rpc", "xml", "api", "soap"]
  },
  {
    id: "http-methods",
    title: "HTTP Methods",
    category: "API",
    definition: "Standard request methods in HTTP defining the desired action: GET (retrieve), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove), OPTIONS, HEAD.",
    example: "GET /users (list), POST /users (create), PUT /users/1 (replace), PATCH /users/1 (update), DELETE /users/1 (remove)",
    relatedTerms: ["http", "rest", "api", "crud"]
  },
  {
    id: "http-status-codes",
    title: "HTTP Status Codes",
    category: "API",
    definition: "Standard response codes indicating the result of an HTTP request. Grouped by category: 2xx (success), 3xx (redirection), 4xx (client error), 5xx (server error).",
    example: "200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error",
    relatedTerms: ["http", "api", "rest", "status-code"]
  },
  {
    id: "http-headers",
    title: "HTTP Headers",
    category: "API",
    definition: "Metadata passed with HTTP requests and responses. Headers control caching, authentication, content type, encoding, and other aspects of communication.",
    example: "Content-Type: application/json, Authorization: Bearer token123, Accept: application/json",
    relatedTerms: ["http", "api", "rest", "metadata"]
  },
  {
    id: "content-negotiation",
    title: "Content Negotiation",
    category: "API",
    definition: "The mechanism for serving different representations of a resource at the same URI. Clients specify preferred formats using Accept headers; servers respond accordingly.",
    example: "Accept: application/json for JSON response, Accept: application/xml for XML response from same endpoint",
    relatedTerms: ["http", "api", "rest", "content-type"]
  },
  {
    id: "pagination",
    title: "Pagination",
    category: "API",
    definition: "Dividing large datasets into smaller pages for efficient data transfer. Common patterns include offset-based, cursor-based, and page-number pagination.",
    example: "GET /users?page=2&limit=20 or GET /users?cursor=abc123&limit=20",
    relatedTerms: ["api", "rest", "performance", "database"]
  },
  {
    id: "cursor-pagination",
    title: "Cursor-Based Pagination",
    category: "API",
    definition: "A pagination technique using a pointer (cursor) to track position in a dataset. More efficient and consistent than offset pagination for large or frequently-changing datasets.",
    example: "GET /users?cursor=eyJpZCI6MTAwfQ==&limit=20 returns next 20 users after cursor position",
    relatedTerms: ["pagination", "api", "performance", "database"]
  },
  {
    id: "api-filtering",
    title: "API Filtering",
    category: "API",
    definition: "Allowing clients to specify criteria to narrow down response data. Filtering reduces payload size and improves performance by returning only relevant resources.",
    example: "GET /users?role=admin&active=true&created_after=2024-01-01",
    relatedTerms: ["api", "rest", "query-parameters", "search"]
  },
  {
    id: "api-sorting",
    title: "API Sorting",
    category: "API",
    definition: "Enabling clients to specify the order of returned data. Typically implemented using query parameters indicating sort field and direction.",
    example: "GET /users?sort=created_at:desc,name:asc",
    relatedTerms: ["api", "rest", "query-parameters", "ordering"]
  },
  {
    id: "api-rate-limit",
    title: "API Rate Limit",
    category: "API",
    definition: "A restriction on the number of API requests a client can make within a time window. Rate limits prevent abuse, ensure fair usage, and protect server resources.",
    example: "X-RateLimit-Limit: 1000, X-RateLimit-Remaining: 999, X-RateLimit-Reset: 1640995200",
    relatedTerms: ["rate-limiting", "api", "throttling", "api-security"]
  },
  {
    id: "throttling",
    title: "Throttling",
    category: "API",
    definition: "Deliberately slowing down or limiting the rate of requests to protect system resources. Unlike hard rate limits, throttling can slow responses rather than reject requests.",
    example: "Slowing API responses to 10 requests/second when detecting unusual traffic patterns",
    relatedTerms: ["rate-limiting", "api", "performance", "api-security"]
  },
  {
    id: "api-authentication",
    title: "API Authentication",
    category: "API",
    definition: "Verifying the identity of API clients using credentials like API keys, tokens, or OAuth. Authentication ensures only authorized users access protected resources.",
    example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... or X-API-Key: abc123xyz",
    relatedTerms: ["authentication", "api", "security", "authorization"]
  },
  
  {
    id: "bearer-token",
    title: "Bearer Token",
    category: "API",
    definition: "An access token included in the Authorization header of API requests. Bearer tokens grant access to protected resources and are commonly used with OAuth 2.0 and JWT.",
    example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0...",
    relatedTerms: ["jwt", "oauth", "api-authentication", "api"]
  },
  {
    id: "cors",
    title: "CORS (Cross-Origin Resource Sharing)",
    category: "API",
    definition: "A security mechanism that allows servers to specify which origins can access their resources. CORS headers enable controlled cross-domain requests from browsers.",
    example: "Access-Control-Allow-Origin: https://example.com, Access-Control-Allow-Methods: GET, POST",
    relatedTerms: ["http", "api", "security", "same-origin-policy"]
  },
  {
    id: "preflight-request",
    title: "Preflight Request",
    category: "API",
    definition: "An HTTP OPTIONS request sent by browsers before actual cross-origin requests to check if the server allows the request. Part of the CORS protocol.",
    example: "OPTIONS /api/users with Access-Control-Request-Method: POST header",
    relatedTerms: ["cors", "http", "api", "options"]
  },
  {
    id: "api-caching",
    title: "API Caching",
    category: "API",
    definition: "Storing API responses to reduce server load and improve performance. Caching can occur at multiple levels: client, CDN, reverse proxy, or application layer.",
    example: "Cache-Control: max-age=3600, ETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"",
    relatedTerms: ["caching", "api", "performance", "http-headers"]
  },
  {
    id: "etag",
    title: "ETag",
    category: "API",
    definition: "An HTTP response header providing a version identifier for a resource. ETags enable efficient caching and conditional requests, reducing bandwidth usage.",
    example: "Response: ETag: \"686897696a7c876b7e\", Request: If-None-Match: \"686897696a7c876b7e\" returns 304 Not Modified",
    relatedTerms: ["http-headers", "caching", "api", "conditional-request"]
  },
  {
    id: "conditional-request",
    title: "Conditional Request",
    category: "API",
    definition: "An HTTP request that executes only if certain conditions are met, using headers like If-None-Match, If-Modified-Since. Reduces unnecessary data transfer.",
    example: "If-Modified-Since: Wed, 21 Oct 2024 07:28:00 GMT returns 304 if unchanged, 200 with data if modified",
    relatedTerms: ["http-headers", "etag", "caching", "api"]
  },
  {
    id: "api-idempotency",
    title: "API Idempotency",
    category: "API",
    definition: "The property where making the same API request multiple times produces the same result as making it once. GET, PUT, DELETE are idempotent; POST typically is not.",
    example: "PUT /users/123 {name: 'John'} produces same result whether called once or multiple times",
    relatedTerms: ["idempotent", "api", "http-methods", "rest"]
  },
  {
    id: "hateoas",
    title: "HATEOAS",
    category: "API",
    definition: "Hypermedia As The Engine Of Application State - a REST constraint where responses include links to related resources, enabling client navigation through the API dynamically.",
    example: "{\"id\": 1, \"name\": \"John\", \"_links\": {\"self\": \"/users/1\", \"posts\": \"/users/1/posts\"}}",
    relatedTerms: ["rest", "api", "hypermedia", "api-design"]
  },
  {
    id: "hal",
    title: "HAL (Hypertext Application Language)",
    category: "API",
    definition: "A simple format for representing hypermedia links in JSON or XML, making APIs more discoverable. HAL includes conventions for embedding resources and links.",
    example: "{\"_links\": {\"self\": {\"href\": \"/users/1\"}}, \"_embedded\": {\"posts\": [...]}}",
    relatedTerms: ["hateoas", "api", "hypermedia", "rest"]
  },
  {
    id: "json-api",
    title: "JSON:API",
    category: "API",
    definition: "A specification for building APIs in JSON, defining conventions for resource structure, relationships, errors, filtering, and pagination. Promotes consistency across APIs.",
    example: "{\"data\": {\"type\": \"users\", \"id\": \"1\", \"attributes\": {\"name\": \"John\"}}}",
    relatedTerms: ["api", "json", "rest", "api-specification"]
  },
  {
    id: "api-error-handling",
    title: "API Error Handling",
    category: "API",
    definition: "Strategies for communicating errors to API clients, including appropriate status codes, error messages, error codes, and details for debugging and resolution.",
    example: "{\"error\": {\"code\": \"INVALID_EMAIL\", \"message\": \"Email format is invalid\", \"field\": \"email\"}}",
    relatedTerms: ["api", "http-status-codes", "error-handling", "api-design"]
  },
  {
    id: "api-validation",
    title: "API Validation",
    category: "API",
    definition: "Verifying that API request data meets expected format, type, and business rules before processing. Validation prevents invalid data from entering the system.",
    example: "Validating: email format, required fields, string lengths, numeric ranges, enum values",
    relatedTerms: ["api", "input-validation", "data-validation", "security"]
  },
  {
    id: "api-transformation",
    title: "API Transformation",
    category: "API",
    definition: "Converting data between different formats or structures as it passes through an API. Common in API gateways to adapt between client and backend formats.",
    example: "Transforming snake_case backend responses to camelCase for frontend consumption",
    relatedTerms: ["api", "data-mapping", "api-gateway", "serialization"]
  },
  {
    id: "api-composition",
    title: "API Composition",
    category: "API",
    definition: "Combining data from multiple API calls or services into a single response. Reduces client complexity and network roundtrips in microservices architectures.",
    example: "API gateway composing user profile from user-service, posts from content-service, and stats from analytics-service",
    relatedTerms: ["api", "microservices", "api-gateway", "aggregation"]
  },
  {
    id: "backend-for-frontend",
    title: "Backend for Frontend (BFF)",
    category: "API",
    definition: "A pattern where separate backend services are created for different frontend clients (web, mobile, etc.), optimizing API responses for each platform's needs.",
    example: "Mobile BFF returns minimal data for bandwidth efficiency; Web BFF returns rich data with full details",
    relatedTerms: ["api", "microservices", "api-design", "architecture"]
  },
  {
    id: "api-contract",
    title: "API Contract",
    category: "API",
    definition: "A formal agreement defining the expected behavior, inputs, and outputs of an API. Contracts enable consumer-driven development and prevent breaking changes.",
    example: "OpenAPI specification serving as a contract between frontend and backend teams",
    relatedTerms: ["api", "openapi", "contract-testing", "api-design"]
  },
  {
    id: "api-mocking",
    title: "API Mocking",
    category: "API",
    definition: "Creating simulated API responses for testing or development when the real API is unavailable. Mocks enable parallel development and comprehensive testing.",
    example: "Using MSW (Mock Service Worker) to intercept API calls and return predefined responses during testing",
    relatedTerms: ["mock-object", "testing", "api", "stub"]
  },
  {
    id: "api-sandbox",
    title: "API Sandbox",
    category: "API",
    definition: "A testing environment that mimics production but uses fake data, allowing developers to test API integration safely without affecting real systems or data.",
    example: "Stripe's test mode with test API keys and test credit card numbers for development",
    relatedTerms: ["api", "testing", "development-environment", "staging"]
  },
  {
    id: "api-deprecation",
    title: "API Deprecation",
    category: "API",
    definition: "The process of phasing out old API versions or endpoints. Proper deprecation includes advance notice, migration guides, and sunset dates to minimize disruption.",
    example: "Deprecation header: Sunset: Sat, 31 Dec 2024 23:59:59 GMT with migration documentation",
    relatedTerms: ["api-versioning", "api", "backward-compatibility", "api-lifecycle"]
  },
  {
    id: "api-monitoring",
    title: "API Monitoring",
    category: "API",
    definition: "Continuously tracking API performance, availability, error rates, and usage patterns. Monitoring enables proactive issue detection and capacity planning.",
    example: "Tracking response times, error rates, throughput, and uptime using tools like Datadog or New Relic",
    relatedTerms: ["api", "observability", "performance", "metrics"]
  },
  {
    id: "api-analytics",
    title: "API Analytics",
    category: "API",
    definition: "Collecting and analyzing data about API usage, including endpoint popularity, user behavior, performance patterns, and business metrics.",
    example: "Analyzing which endpoints are most used, average response times per endpoint, error rates by client",
    relatedTerms: ["api-monitoring", "api", "metrics", "data-analysis"]
  },
  {
    id: "api-logging",
    title: "API Logging",
    category: "API",
    definition: "Recording API requests and responses for debugging, auditing, and compliance. Logs typically include timestamps, endpoints, status codes, and sanitized data.",
    example: "Logging: timestamp, method, path, status code, response time, user ID (excluding sensitive data)",
    relatedTerms: ["logging", "api", "debugging", "audit-trail"]
  },
  {
    id: "api-tracing",
    title: "API Tracing",
    category: "API",
    definition: "Following a request's journey through distributed systems, recording timing and context at each service. Essential for debugging microservices architectures.",
    example: "Distributed tracing with Jaeger showing request flow: API Gateway → Auth Service → User Service → Database",
    relatedTerms: ["distributed-tracing", "api", "microservices", "observability"]
  },
  {
    id: "api-security-best-practices",
    title: "API Security Best Practices",
    category: "API",
    definition: "Guidelines for securing APIs including authentication, authorization, input validation, rate limiting, HTTPS, and protection against common vulnerabilities.",
    example: "Use HTTPS, validate all inputs, implement rate limiting, use OAuth 2.0, sanitize error messages",
    relatedTerms: ["api", "security", "authentication", "authorization"]
  },
  {
    id: "api-injection-attacks",
    title: "API Injection Attacks",
    category: "API",
    definition: "Security vulnerabilities where malicious code or commands are inserted into API inputs. Includes SQL injection, NoSQL injection, command injection, and XSS.",
    example: "SQL injection via API: POST /users {\"name\": \"'; DROP TABLE users;--\"} if not properly sanitized",
    relatedTerms: ["security", "sql-injection", "api", "input-validation"]
  },
  {
    id: "api-broken-authentication",
    title: "API Broken Authentication",
    category: "API",
    definition: "Security flaw where authentication mechanisms are improperly implemented, allowing attackers to assume user identities. Common in OWASP API Security Top 10.",
    example: "Weak JWT secrets, credentials in URLs, no token expiration, predictable session IDs",
    relatedTerms: ["api", "authentication", "security", "owasp"]
  },
  {
    id: "api-excessive-data-exposure",
    title: "API Excessive Data Exposure",
    category: "API",
    definition: "Security vulnerability where APIs return more data than necessary, exposing sensitive information. Requires proper filtering and field selection.",
    example: "GET /users returning passwords, tokens, internal IDs instead of filtering to safe fields",
    relatedTerms: ["api", "security", "data-privacy", "owasp"]
  },
  {
    id: "api-mass-assignment",
    title: "API Mass Assignment",
    category: "API",
    definition: "Vulnerability where APIs automatically bind client-provided data to internal objects without proper filtering, allowing modification of restricted fields.",
    example: "POST /users {\"name\": \"John\", \"isAdmin\": true} if isAdmin isn't filtered, user becomes admin",
    relatedTerms: ["api", "security", "input-validation", "owasp"]
  },
  {
    id: "api-lack-of-resources",
    title: "API Lack of Resources & Rate Limiting",
    category: "API",
    definition: "Security issue where APIs don't limit request frequency or payload size, enabling denial-of-service attacks and resource exhaustion.",
    example: "No rate limits allowing 10,000 requests/second from single client, crashing servers",
    relatedTerms: ["api", "rate-limiting", "dos", "security"]
  },
  {
    id: "api-testing-tools",
    title: "API Testing Tools",
    category: "API",
    definition: "Software for testing API functionality, performance, and security. Includes tools like Postman, Insomnia, REST Client, and automated testing frameworks.",
    example: "Using Postman collections for manual testing, Newman for CI/CD automation, and k6 for load testing",
    relatedTerms: ["api", "testing", "postman", "automation"]
  },
  {
    id: "insomnia",
    title: "Insomnia",
    category: "API",
    definition: "A popular open-source API client for designing, debugging, and testing REST, GraphQL, and gRPC APIs with features like environment variables and code generation.",
    example: "Using Insomnia to test GraphQL queries with variables and view formatted responses",
    relatedTerms: ["api", "testing", "postman", "api-client"]
  },
  {
    id: "rest-client",
    title: "REST Client",
    category: "API",
    definition: "A lightweight tool or VS Code extension for testing HTTP requests directly from code files. Allows writing requests in .http or .rest files.",
    example: "### Get User\nGET https://api.example.com/users/1\nAuthorization: Bearer {{token}}",
    relatedTerms: ["api", "http", "testing", "vscode"]
  },
  {
    id: "api-blueprint",
    title: "API Blueprint",
    category: "API",
    definition: "A markdown-based API documentation format that's human-readable and machine-processable. Alternative to OpenAPI, emphasizing simplicity and readability.",
    example: "# GET /users\n+ Response 200 (application/json)\n    + Body\n            {\"users\": [...]}",
    relatedTerms: ["api-documentation", "api", "markdown", "openapi"]
  },
  {
    id: "raml",
    title: "RAML (RESTful API Modeling Language)",
    category: "API",
    definition: "A YAML-based language for describing REST APIs. RAML emphasizes reusability through resource types and traits, enabling DRY API specifications.",
    example: "#%RAML 1.0\ntitle: My API\n/users:\n  get:\n    responses:\n      200:\n        body:\n          application/json:",
    relatedTerms: ["api-documentation", "api", "yaml", "openapi"]
  },
  {
    id: "async-api",
    title: "AsyncAPI",
    category: "API",
    definition: "A specification for defining asynchronous APIs like message-driven, event-driven, and streaming APIs. Similar to OpenAPI but for async communication.",
    example: "Documenting Kafka topics, WebSocket events, MQTT messages, and AMQP queues with AsyncAPI",
    relatedTerms: ["api-documentation", "event-driven", "message-queue", "api"]
  },
  {
    id: "api-client-generation",
    title: "API Client Generation",
    category: "API",
    definition: "Automatically creating client SDKs from API specifications like OpenAPI. Generated clients provide type-safe, language-specific interfaces to APIs.",
    example: "Using openapi-generator to create TypeScript, Python, Java clients from OpenAPI spec",
    relatedTerms: ["openapi", "api", "code-generation", "sdk"]
  },
  {
    id: "sdk",
    title: "SDK (Software Development Kit)",
    category: "API",
    definition: "A collection of tools, libraries, documentation, and code samples for interacting with a platform or API. SDKs simplify integration and provide language-specific abstractions.",
    example: "AWS SDK for JavaScript, Stripe SDK for Python, Twilio SDK for PHP",
    relatedTerms: ["api", "library", "api-client", "developer-tools"]
  },
  {
    id: "api-wrapper",
    title: "API Wrapper",
    category: "API",
    definition: "A library that provides a simplified, higher-level interface to an API, abstracting complexity and improving developer experience.",
    example: "A wrapper that turns REST API calls into simple functions: getUser(id) instead of fetch('/users/' + id)",
    relatedTerms: ["api", "library", "sdk", "abstraction"]
  },
  {
    id: "api-proxy",
    title: "API Proxy",
    category: "API",
    definition: "An intermediary server that forwards API requests to backend services. Proxies can add functionality like caching, logging, authentication, or request transformation.",
    example: "Nginx proxying /api/* requests to backend servers while adding authentication headers",
    relatedTerms: ["api", "reverse-proxy", "api-gateway", "middleware"]
  },
  {
    id: "reverse-proxy",
    title: "Reverse Proxy",
    category: "API",
    definition: "A server that sits in front of web servers and forwards client requests to them. Provides load balancing, SSL termination, caching, and security.",
    example: "Nginx or HAProxy distributing traffic across multiple backend servers",
    relatedTerms: ["api-proxy", "load-balancing", "nginx", "api"]
  },
  {
    id: "api-orchestration",
    title: "API Orchestration",
    category: "API",
    definition: "Coordinating multiple API calls in a specific sequence to accomplish a business process. The orchestrator manages workflow, error handling, and data flow.",
    example: "Order processing: validate payment → reserve inventory → create shipment → send confirmation",
    relatedTerms: ["api", "microservices", "workflow", "choreography"]
  },
  {
    id: "api-choreography",
    title: "API Choreography",
    category: "API",
    definition: "A decentralized approach where services react to events without central coordination. Each service knows its role and triggers other services through events.",
    example: "Order created event → Payment service processes → Inventory service updates → Shipping service initiates",
    relatedTerms: ["api", "event-driven", "microservices", "orchestration"]
  },
  {
    id: "service-mesh",
    title: "Service Mesh",
    category: "API",
    definition: "An infrastructure layer for managing service-to-service communication in microservices. Provides features like load balancing, service discovery, encryption, and observability.",
    example: "Istio or Linkerd handling traffic management, security, and monitoring between microservices",
    relatedTerms: ["microservices", "api", "kubernetes", "distributed-systems"]
  },
  {
    id: "api-federation",
    title: "API Federation",
    category: "API",
    definition: "Combining multiple APIs into a unified interface while maintaining separate implementations. Common in GraphQL Federation where multiple services expose a single schema.",
    example: "Apollo Federation combining user service, product service, and order service into one GraphQL endpoint",
    relatedTerms: ["graphql", "api", "microservices", "distributed-systems"]
  },
  {
    id: "api-load-balancing",
    title: "API Load Balancing",
    category: "API",
    definition: "Distributing API requests across multiple servers to optimize resource use, maximize throughput, minimize response time, and avoid overload.",
    example: "Round-robin, least connections, or IP hash algorithms distributing traffic across server pool",
    relatedTerms: ["load-balancing", "api", "scalability", "high-availability"]
  },
  {
    id: "api-circuit-breaker",
    title: "API Circuit Breaker",
    category: "API",
    definition: "A design pattern that prevents cascading failures by stopping requests to a failing service. After failures exceed a threshold, the circuit opens and fails fast.",
    example: "After 5 consecutive failures to payment service, circuit opens for 60 seconds, returning errors immediately",
    relatedTerms: ["api", "resilience", "fault-tolerance", "microservices"]
  },
  {
    id: "api-retry-logic",
    title: "API Retry Logic",
    category: "API",
    definition: "Automatically retrying failed API requests with strategies like exponential backoff. Improves reliability for transient failures without overwhelming services.",
    example: "Retry after 1s, then 2s, then 4s, then 8s with maximum 4 retries using exponential backoff",
    relatedTerms: ["api", "resilience", "exponential-backoff", "fault-tolerance"]
  },
  {
    id: "api-timeout",
    title: "API Timeout",
    category: "API",
    definition: "The maximum time allowed for an API request to complete before being terminated. Prevents resource exhaustion from slow or hanging requests.",
    example: "Setting 30-second timeout: request fails if response not received within 30 seconds",
    relatedTerms: ["api", "performance", "resilience", "configuration"]
  },
  {
    id: "api-webhook-delivery",
    title: "API Webhook Delivery",
    category: "API",
    definition: "The mechanism for reliably sending webhook events to subscribers, including retry logic, delivery confirmation, and failure handling.",
    example: "Webhook delivery: attempt immediate send, retry with exponential backoff up to 3 days, then mark failed",
    relatedTerms: ["webhook", "api", "event-driven", "async"]
  },
  {
    id: "webhook-security",
    title: "Webhook Security",
    category: "API",
    definition: "Techniques for securing webhook endpoints including signature verification, HTTPS, IP whitelisting, and timestamp validation to prevent tampering.",
    example: "Verifying HMAC signature: hash(secret + payload) === X-Webhook-Signature header",
    relatedTerms: ["webhook", "api", "security", "hmac"]
  },
  {
    id: "server-sent-events",
    title: "Server-Sent Events (SSE)",
    category: "API",
    definition: "A standard for servers to push real-time updates to clients over HTTP. Simpler than WebSockets but unidirectional (server to client only).",
    example: "EventSource API in browser: const events = new EventSource('/api/updates'); events.onmessage = (e) => console.log(e.data);",
    relatedTerms: ["real-time", "api", "websocket", "streaming"]
  },
  {
    id: "long-polling",
    title: "Long Polling",
    category: "API",
    definition: "A technique where the client requests information from the server, and the server holds the request open until new data is available, enabling near-real-time updates.",
    example: "Client makes request → Server waits up to 30s for new data → Returns immediately when data available or timeout",
    relatedTerms: ["real-time", "api", "websocket", "polling"]
  },
  {
    id: "api-streaming",
    title: "API Streaming",
    category: "API",
    definition: "Continuously sending data from server to client over a single connection. Common for large datasets, real-time updates, or video/audio content.",
    example: "Streaming large CSV files: server sends chunks as they're generated instead of waiting for complete file",
    relatedTerms: ["api", "real-time", "streaming", "chunked-transfer"]
  },
  {
    id: "api-batch-requests",
    title: "API Batch Requests",
    category: "API",
    definition: "Combining multiple API operations into a single request to reduce network overhead. Batch APIs process multiple operations and return combined responses.",
    example: "POST /batch [{\"method\": \"GET\", \"url\": \"/users/1\"}, {\"method\": \"GET\", \"url\": \"/users/2\"}]",
    relatedTerms: ["api", "performance", "optimization", "bulk-operations"]
  },
  {
    id: "api-bulk-operations",
    title: "API Bulk Operations",
    category: "API",
    definition: "Performing operations on multiple resources simultaneously. Bulk endpoints accept arrays of data and process them efficiently in single transactions.",
    example: "POST /users/bulk [{\"name\": \"John\"}, {\"name\": \"Jane\"}, {\"name\": \"Bob\"}] creates three users",
    relatedTerms: ["api", "batch-requests", "performance", "optimization"]
  },
  {
    id: "api-partial-response",
    title: "API Partial Response",
    category: "API",
    definition: "Allowing clients to specify which fields they want in the response, reducing payload size. Common pattern: using fields query parameter.",
    example: "GET /users/1?fields=name,email returns only {\"name\": \"John\", \"email\": \"john@example.com\"}",
    relatedTerms: ["api", "performance", "graphql", "field-selection"]
  },
  {
    id: "api-expansion",
    title: "API Expansion",
    category: "API",
    definition: "Including related resource data in a single request instead of requiring separate requests. Clients specify which relations to expand using parameters.",
    example: "GET /posts/1?expand=author,comments includes author and comments data in post response",
    relatedTerms: ["api", "performance", "eager-loading", "optimization"]
  },
  {
    id: "api-hypermedia-controls",
    title: "API Hypermedia Controls",
    category: "API",
    definition: "Including navigation links and available actions in API responses, guiding clients on what operations are possible. Core principle of HATEOAS.",
    example: "{\"status\": \"pending\", \"_actions\": {\"approve\": {\"method\": \"POST\", \"href\": \"/orders/1/approve\"}}}",
    relatedTerms: ["hateoas", "api", "rest", "discoverability"]
  },
  {
    id: "api-health-check",
    title: "API Health Check",
    category: "API",
    definition: "An endpoint that reports the operational status of an API and its dependencies. Used by monitoring systems and load balancers to verify service health.",
    example: "GET /health returns {\"status\": \"healthy\", \"database\": \"connected\", \"cache\": \"connected\"}",
    relatedTerms: ["api", "monitoring", "observability", "health-endpoint"]
  },
  {
    id: "api-readiness-check",
    title: "API Readiness Check",
    category: "API",
    definition: "An endpoint indicating whether a service is ready to accept traffic. Different from health checks, focuses on initialization completion.",
    example: "GET /ready returns 200 when database migrations complete and service fully initialized",
    relatedTerms: ["api", "health-check", "kubernetes", "deployment"]
  },
  {
    id: "api-metrics-endpoint",
    title: "API Metrics Endpoint",
    category: "API",
    definition: "An endpoint exposing operational metrics in a standardized format (often Prometheus format) for monitoring and alerting systems.",
    example: "GET /metrics returns request_count, error_rate, response_time_seconds in Prometheus format",
    relatedTerms: ["api", "monitoring", "prometheus", "observability"]
  }
];
