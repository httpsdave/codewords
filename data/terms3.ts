import { Term } from "./terms";

export const testingTerms: Term[] = [
  {
    id: "unit-testing",
    title: "Unit Testing",
    category: "Testing",
    definition: "A software testing method where individual units or components of code are tested in isolation. Unit tests verify that each unit functions correctly and are typically automated and run frequently during development.",
    example: "Testing a function that calculates sum: expect(sum(2, 3)).toBe(5);",
    relatedTerms: ["testing", "tdd", "jest", "mocha"]
  },
  {
    id: "integration-testing",
    title: "Integration Testing",
    category: "Testing",
    definition: "Testing where individual units or components are combined and tested as a group to verify they work together correctly. Integration tests ensure that interfaces between modules function properly.",
    example: "Testing that a user service correctly interacts with a database and authentication service.",
    relatedTerms: ["testing", "unit-testing", "e2e-testing", "api-testing"]
  },
  {
    id: "e2e-testing",
    title: "End-to-End Testing (E2E)",
    category: "Testing",
    definition: "Testing methodology that validates the entire application flow from start to finish, simulating real user scenarios. E2E tests ensure all integrated components work together in production-like environments.",
    example: "Using Cypress or Playwright to test a complete user journey: login → browse products → add to cart → checkout → confirmation.",
    relatedTerms: ["integration-testing", "cypress", "selenium", "playwright"]
  },
  {
    id: "test-driven-development",
    title: "Test-Driven Development (TDD)",
    category: "Testing",
    definition: "A software development methodology where tests are written before the actual code. The TDD cycle follows: write a failing test (Red), write minimal code to pass (Green), then refactor (Refactor).",
    example: "1) Write test: expect(isPrime(5)).toBe(true) 2) Implement isPrime() 3) Refactor for efficiency",
    relatedTerms: ["unit-testing", "bdd", "red-green-refactor", "testing"]
  },
  {
    id: "behavior-driven-development",
    title: "Behavior-Driven Development (BDD)",
    category: "Testing",
    definition: "An extension of TDD that uses natural language to describe software behavior. BDD focuses on collaboration between developers, QA, and non-technical stakeholders using scenarios written in Gherkin syntax.",
    example: "Given a user is logged in, When they click 'Checkout', Then they should see the payment form",
    relatedTerms: ["tdd", "cucumber", "gherkin", "acceptance-testing"]
  },
  {
    id: "acceptance-testing",
    title: "Acceptance Testing",
    category: "Testing",
    definition: "Testing performed to determine if a system meets business requirements and is acceptable for delivery. Often the final testing phase before software release, validating the system against user needs.",
    example: "Business stakeholders verify that the new reporting feature meets all specified requirements.",
    relatedTerms: ["bdd", "user-acceptance-testing", "testing", "qa"]
  },
  {
    id: "regression-testing",
    title: "Regression Testing",
    category: "Testing",
    definition: "Re-running previously completed tests to ensure that recent code changes haven't adversely affected existing functionality. Critical for maintaining software quality during continuous development.",
    example: "After fixing a bug, running the entire test suite to ensure no other features were broken.",
    relatedTerms: ["testing", "automation", "ci-cd", "test-suite"]
  },
  {
    id: "smoke-testing",
    title: "Smoke Testing",
    category: "Testing",
    definition: "Preliminary testing to check basic functionality of a build. If smoke tests fail, the build is rejected without further testing. Also called build verification testing.",
    example: "After deployment: verify app starts, homepage loads, database connects, and user can login.",
    relatedTerms: ["sanity-testing", "testing", "ci-cd", "build"]
  },
  {
    id: "sanity-testing",
    title: "Sanity Testing",
    category: "Testing",
    definition: "A narrow and focused testing approach to verify that specific functionality works correctly after minor code changes. More thorough than smoke testing but less comprehensive than full regression testing.",
    example: "After fixing a payment bug, test only the payment flow without running full test suite.",
    relatedTerms: ["smoke-testing", "regression-testing", "testing"]
  },
  {
    id: "performance-testing",
    title: "Performance Testing",
    category: "Testing",
    definition: "Testing that evaluates system responsiveness, stability, and speed under various conditions. Includes load testing, stress testing, and scalability testing to ensure performance requirements are met.",
    example: "Using JMeter to test if website handles 10,000 concurrent users with response times under 2 seconds.",
    relatedTerms: ["load-testing", "stress-testing", "testing", "benchmarking"]
  },
  {
    id: "load-testing",
    title: "Load Testing",
    category: "Testing",
    definition: "Performance testing that simulates expected user load on a system to measure response times and identify bottlenecks. Helps ensure the system can handle anticipated traffic volumes.",
    example: "Simulating 5,000 simultaneous users accessing an e-commerce site during a sale event.",
    relatedTerms: ["performance-testing", "stress-testing", "scalability", "testing"]
  },
  {
    id: "stress-testing",
    title: "Stress Testing",
    category: "Testing",
    definition: "Testing that pushes a system beyond normal operational capacity, often to breaking point, to identify maximum load limits and observe how gracefully the system fails.",
    example: "Continuously increasing concurrent users from 10,000 to 50,000 until system becomes unresponsive.",
    relatedTerms: ["load-testing", "performance-testing", "testing", "reliability"]
  },
  {
    id: "security-testing",
    title: "Security Testing",
    category: "Testing",
    definition: "Testing methodology that identifies vulnerabilities, threats, and risks in software. Includes penetration testing, vulnerability scanning, and security audits to ensure data protection and system integrity.",
    example: "Testing for SQL injection, XSS vulnerabilities, authentication bypass, and insecure API endpoints.",
    relatedTerms: ["penetration-testing", "vulnerability", "testing", "security"]
  },
  {
    id: "usability-testing",
    title: "Usability Testing",
    category: "Testing",
    definition: "Testing method where real users interact with software to evaluate ease of use, user experience, and identify interface problems. Focuses on user satisfaction and efficiency.",
    example: "Observing users navigate a new mobile app to identify confusing workflows or unclear buttons.",
    relatedTerms: ["ux", "user-testing", "testing", "ui"]
  },
  {
    id: "compatibility-testing",
    title: "Compatibility Testing",
    category: "Testing",
    definition: "Testing that verifies software functions correctly across different environments, including browsers, operating systems, devices, and network conditions.",
    example: "Testing a web app on Chrome, Firefox, Safari, Edge, and on Windows, macOS, iOS, and Android.",
    relatedTerms: ["cross-browser-testing", "testing", "responsive-design"]
  },
  {
    id: "accessibility-testing",
    title: "Accessibility Testing",
    category: "Testing",
    definition: "Testing to ensure software is usable by people with disabilities. Verifies compliance with accessibility standards like WCAG and tests with screen readers, keyboard navigation, and other assistive technologies.",
    example: "Testing that all images have alt text, forms are keyboard navigable, and color contrast meets WCAG AA standards.",
    relatedTerms: ["wcag", "a11y", "testing", "inclusive-design"]
  },
  {
    id: "mock-object",
    title: "Mock Object",
    category: "Testing",
    definition: "A simulated object that mimics the behavior of real objects in controlled ways. Mocks are used in unit testing to isolate the code being tested by replacing dependencies with controllable substitutes.",
    example: "jest.mock('database'); // Mock database calls in tests without actual DB connection",
    relatedTerms: ["stub", "fake", "test-double", "unit-testing"]
  },
  {
    id: "stub",
    title: "Stub",
    category: "Testing",
    definition: "A minimal implementation of a component that returns predefined responses. Stubs are used in testing to provide controlled responses without executing actual logic, simpler than mocks.",
    example: "const userStub = { getName: () => 'John Doe' }; // Stub returns hardcoded data",
    relatedTerms: ["mock-object", "fake", "test-double", "testing"]
  },
  {
    id: "test-fixture",
    title: "Test Fixture",
    category: "Testing",
    definition: "The fixed state or data used as a baseline for running tests. Fixtures ensure tests run in a predictable environment with consistent preconditions.",
    example: "beforeEach(() => { database.seed(testData); }); // Setup fixture before each test",
    relatedTerms: ["setup", "teardown", "test-data", "testing"]
  },
  {
    id: "test-coverage",
    title: "Test Coverage",
    category: "Testing",
    definition: "A metric measuring the percentage of code executed during testing. Common types include line coverage, branch coverage, and function coverage. Higher coverage generally indicates more thorough testing.",
    example: "Coverage report: 85% lines, 78% branches, 92% functions covered by tests",
    relatedTerms: ["code-coverage", "testing", "quality-metrics", "istanbul"]
  },
  {
    id: "assertion",
    title: "Assertion",
    category: "Testing",
    definition: "A statement in testing that verifies a condition is true. If an assertion fails, the test fails. Assertions are the fundamental building blocks of automated tests.",
    example: "expect(user.age).toBe(25); assert(result > 0); assertEquals(actual, expected);",
    relatedTerms: ["testing", "expect", "assert", "verification"]
  },
  {
    id: "test-suite",
    title: "Test Suite",
    category: "Testing",
    definition: "A collection of test cases grouped together, often organized by feature or component. Test suites help organize and run multiple related tests efficiently.",
    example: "describe('UserService', () => { it('creates user'), it('updates user'), it('deletes user') });",
    relatedTerms: ["test-case", "testing", "test-runner", "suite"]
  },
  {
    id: "test-case",
    title: "Test Case",
    category: "Testing",
    definition: "A specific scenario or set of conditions designed to test a particular aspect of functionality. Test cases include inputs, execution conditions, and expected results.",
    example: "Test Case: Verify login with valid credentials → Input: username='user@test.com', password='Pass123' → Expected: Redirect to dashboard",
    relatedTerms: ["test-suite", "testing", "test-scenario", "test-plan"]
  },
  {
    id: "test-automation",
    title: "Test Automation",
    category: "Testing",
    definition: "The use of software tools to execute tests automatically without manual intervention. Automation speeds up testing, increases coverage, and enables continuous integration.",
    example: "Automated test pipeline runs 2,000 unit tests, 500 integration tests, and 50 E2E tests on every commit.",
    relatedTerms: ["ci-cd", "testing", "selenium", "cypress"]
  },
  {
    id: "flaky-test",
    title: "Flaky Test",
    category: "Testing",
    definition: "A test that sometimes passes and sometimes fails without code changes, typically due to timing issues, race conditions, or environmental dependencies. Flaky tests reduce confidence in test suites.",
    example: "A test that fails intermittently due to relying on setTimeout() or network latency.",
    relatedTerms: ["testing", "test-reliability", "race-condition", "non-deterministic"]
  },
  {
    id: "test-double",
    title: "Test Double",
    category: "Testing",
    definition: "A generic term for any object that replaces a real dependency in tests. Includes mocks, stubs, fakes, spies, and dummies used to isolate code under test.",
    example: "Using a test double to replace an external API call with predictable test data.",
    relatedTerms: ["mock-object", "stub", "fake", "spy"]
  },
  {
    id: "spy",
    title: "Spy (Testing)",
    category: "Testing",
    definition: "A test double that records information about function calls (arguments, return values, call count) while still calling the real implementation. Used to verify behavior without full mocking.",
    example: "const spy = jest.spyOn(obj, 'method'); expect(spy).toHaveBeenCalledWith('arg');",
    relatedTerms: ["mock-object", "stub", "test-double", "testing"]
  },
  {
    id: "fake",
    title: "Fake (Testing)",
    category: "Testing",
    definition: "A working implementation that takes shortcuts unsuitable for production but useful for testing. Fakes have working behavior but are simplified versions of real dependencies.",
    example: "An in-memory database used instead of a real database for faster test execution.",
    relatedTerms: ["mock-object", "stub", "test-double", "testing"]
  },
  {
    id: "snapshot-testing",
    title: "Snapshot Testing",
    category: "Testing",
    definition: "A testing technique that captures the output of a component and compares it against a stored reference snapshot. Commonly used for UI testing to detect unexpected changes.",
    example: "expect(component.render()).toMatchSnapshot(); // Compares against saved snapshot",
    relatedTerms: ["testing", "jest", "react-testing", "visual-regression"]
  },
  {
    id: "visual-regression-testing",
    title: "Visual Regression Testing",
    category: "Testing",
    definition: "Automated testing that captures and compares screenshots to detect unintended visual changes. Helps ensure UI consistency across updates.",
    example: "Using Percy or Chromatic to compare before/after screenshots of every component on every commit.",
    relatedTerms: ["snapshot-testing", "testing", "ui-testing", "screenshot"]
  },
  {
    id: "mutation-testing",
    title: "Mutation Testing",
    category: "Testing",
    definition: "A testing technique that modifies (mutates) code to verify that tests catch the changes. If tests still pass with mutated code, it indicates weak test coverage.",
    example: "Changing + to - in code; if tests still pass, they're not adequately testing that operation.",
    relatedTerms: ["testing", "test-coverage", "quality-assurance", "stryker"]
  },
  {
    id: "property-based-testing",
    title: "Property-Based Testing",
    category: "Testing",
    definition: "A testing approach that verifies code properties hold for a wide range of automatically generated inputs, rather than testing specific examples. Finds edge cases developers might miss.",
    example: "For all strings s: reverse(reverse(s)) === s (using fast-check or hypothesis)",
    relatedTerms: ["testing", "fuzzing", "generative-testing", "quickcheck"]
  },
  {
    id: "contract-testing",
    title: "Contract Testing",
    category: "Testing",
    definition: "Testing that verifies interactions between services match agreed-upon contracts. Ensures API providers and consumers stay synchronized without requiring integrated testing environments.",
    example: "Using Pact to verify consumer expectations match provider implementations in microservices.",
    relatedTerms: ["api-testing", "microservices", "testing", "pact"]
  },
  {
    id: "monkey-testing",
    title: "Monkey Testing",
    category: "Testing",
    definition: "Random testing where invalid, unexpected, or random inputs are provided to find crashes and bugs. Named after the infinite monkey theorem.",
    example: "Automatically clicking random buttons and entering random text to find unexpected crashes.",
    relatedTerms: ["fuzzing", "testing", "chaos-testing", "random-testing"]
  },
  {
    id: "chaos-engineering",
    title: "Chaos Engineering",
    category: "Testing",
    definition: "The practice of intentionally introducing failures in production-like environments to test system resilience. Helps identify weaknesses before real failures occur.",
    example: "Netflix's Chaos Monkey randomly terminates instances to ensure systems handle failures gracefully.",
    relatedTerms: ["chaos-monkey", "resilience-testing", "testing", "site-reliability"]
  },
  {
    id: "a-b-testing",
    title: "A/B Testing",
    category: "Testing",
    definition: "A method of comparing two versions (A and B) by showing them to different user groups simultaneously and measuring which performs better based on defined metrics.",
    example: "Testing two checkout button colors to see which results in more purchases.",
    relatedTerms: ["split-testing", "testing", "experimentation", "conversion-optimization"]
  },
  {
    id: "canary-deployment",
    title: "Canary Deployment",
    category: "Testing",
    definition: "A deployment strategy where new versions are gradually rolled out to a small subset of users before full deployment. Allows early detection of issues with minimal user impact.",
    example: "Deploy new version to 5% of users, monitor for errors, then gradually increase to 100%.",
    relatedTerms: ["deployment", "blue-green-deployment", "testing", "progressive-delivery"]
  },
  {
    id: "blue-green-deployment",
    title: "Blue-Green Deployment",
    category: "Testing",
    definition: "A deployment strategy using two identical production environments (blue and green). Traffic switches between them, enabling zero-downtime deployments and instant rollback.",
    example: "Run new version in green environment, test, then switch traffic from blue to green instantly.",
    relatedTerms: ["deployment", "canary-deployment", "testing", "zero-downtime"]
  },
  {
    id: "test-pyramid",
    title: "Test Pyramid",
    category: "Testing",
    definition: "A testing strategy concept showing the ideal distribution of test types: many fast unit tests at the base, fewer integration tests in the middle, and minimal slow E2E tests at the top.",
    example: "70% unit tests, 20% integration tests, 10% E2E tests for optimal coverage and speed.",
    relatedTerms: ["testing", "testing-strategy", "unit-testing", "e2e-testing"]
  },
  {
    id: "testing-trophy",
    title: "Testing Trophy",
    category: "Testing",
    definition: "An alternative to the test pyramid emphasizing integration tests. Suggests focusing most effort on integration tests while maintaining some unit and E2E tests.",
    example: "More integration tests than the pyramid suggests, balancing confidence and speed.",
    relatedTerms: ["test-pyramid", "testing", "testing-strategy", "integration-testing"]
  },
  {
    id: "test-runner",
    title: "Test Runner",
    category: "Testing",
    definition: "A tool that executes tests and reports results. Test runners discover test files, run them in specified environments, and provide formatted output of passes and failures.",
    example: "Jest, Mocha, Karma, and Jasmine are popular JavaScript test runners.",
    relatedTerms: ["testing", "jest", "mocha", "test-framework"]
  },
  {
    id: "jest",
    title: "Jest",
    category: "Testing",
    definition: "A popular JavaScript testing framework developed by Facebook. Jest provides zero-config testing with built-in mocking, assertions, coverage reports, and snapshot testing.",
    example: "test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); });",
    relatedTerms: ["testing", "test-runner", "unit-testing", "react-testing"]
  },
  {
    id: "mocha",
    title: "Mocha",
    category: "Testing",
    definition: "A flexible JavaScript test framework for Node.js and browsers. Mocha provides the structure for organizing and running tests but requires separate assertion and mocking libraries.",
    example: "describe('Array', () => { it('should start empty', () => { assert.equal([].length, 0); }); });",
    relatedTerms: ["testing", "test-runner", "chai", "sinon"]
  },
  {
    id: "chai",
    title: "Chai",
    category: "Testing",
    definition: "A BDD/TDD assertion library for Node.js and browsers, commonly used with Mocha. Chai provides expressive assertion styles including expect, should, and assert.",
    example: "expect(foo).to.be.a('string'); expect(foo).to.equal('bar');",
    relatedTerms: ["mocha", "testing", "assertion", "bdd"]
  },
  {
    id: "sinon",
    title: "Sinon",
    category: "Testing",
    definition: "A standalone testing library providing spies, stubs, and mocks for JavaScript. Sinon works with any test framework and enables detailed function call verification.",
    example: "const stub = sinon.stub(object, 'method').returns(42);",
    relatedTerms: ["testing", "mock-object", "spy", "stub"]
  },
  {
    id: "cypress",
    title: "Cypress",
    category: "Testing",
    definition: "A modern end-to-end testing framework for web applications. Cypress runs in the browser, provides time-travel debugging, automatic waiting, and real-time reloading.",
    example: "cy.visit('/login').get('#email').type('user@test.com').get('#submit').click();",
    relatedTerms: ["e2e-testing", "testing", "selenium", "playwright"]
  },
  {
    id: "selenium",
    title: "Selenium",
    category: "Testing",
    definition: "A widely-used open-source framework for automating web browsers. Selenium supports multiple programming languages and browsers for cross-browser testing and web automation.",
    example: "WebDriver driver = new ChromeDriver(); driver.get('https://example.com');",
    relatedTerms: ["testing", "web-automation", "e2e-testing", "webdriver"]
  },
  {
    id: "playwright",
    title: "Playwright",
    category: "Testing",
    definition: "A modern end-to-end testing framework by Microsoft supporting Chromium, Firefox, and WebKit. Playwright offers cross-browser automation with a single API and advanced features like auto-waiting.",
    example: "await page.goto('https://example.com'); await page.click('button');",
    relatedTerms: ["e2e-testing", "testing", "cypress", "puppeteer"]
  },
  {
    id: "puppeteer",
    title: "Puppeteer",
    category: "Testing",
    definition: "A Node.js library providing a high-level API to control headless Chrome or Chromium browsers. Commonly used for automated testing, web scraping, and generating screenshots.",
    example: "const browser = await puppeteer.launch(); const page = await browser.newPage();",
    relatedTerms: ["testing", "automation", "playwright", "headless-browser"]
  },
  {
    id: "testcafe",
    title: "TestCafe",
    category: "Testing",
    definition: "A Node.js tool for end-to-end web testing that doesn't require WebDriver. TestCafe provides automatic waiting, concurrent test execution, and works on any browser.",
    example: "test('My Test', async t => { await t.click('#button').expect(Selector('#result').innerText).eql('Success'); });",
    relatedTerms: ["e2e-testing", "testing", "selenium", "cypress"]
  },
  {
    id: "junit",
    title: "JUnit",
    category: "Testing",
    definition: "A popular unit testing framework for Java. JUnit provides annotations for test methods, assertions for validation, and is the standard for Java testing.",
    example: "@Test public void testAddition() { assertEquals(5, calculator.add(2, 3)); }",
    relatedTerms: ["testing", "unit-testing", "java", "test-framework"]
  },
  {
    id: "pytest",
    title: "PyTest",
    category: "Testing",
    definition: "A powerful Python testing framework that makes it easy to write simple and scalable tests. PyTest supports fixtures, parametrization, and plugins for extended functionality.",
    example: "def test_sum(): assert sum([1, 2, 3]) == 6",
    relatedTerms: ["testing", "unit-testing", "python", "test-framework"]
  },
  {
    id: "rspec",
    title: "RSpec",
    category: "Testing",
    definition: "A behavior-driven development (BDD) testing framework for Ruby. RSpec uses a domain-specific language for writing readable test specifications.",
    example: "describe Calculator do it 'adds two numbers' do expect(calculator.add(2, 3)).to eq(5) end end",
    relatedTerms: ["testing", "bdd", "ruby", "test-framework"]
  },
  {
    id: "postman",
    title: "Postman",
    category: "Testing",
    definition: "A popular API development and testing platform. Postman allows developers to design, test, document, and monitor APIs with an intuitive interface and automated testing capabilities.",
    example: "Creating API requests, writing test scripts: pm.test('Status is 200', () => { pm.response.to.have.status(200); });",
    relatedTerms: ["api-testing", "testing", "rest", "api"]
  },
  {
    id: "supertest",
    title: "SuperTest",
    category: "Testing",
    definition: "A Node.js library for testing HTTP servers. SuperTest provides a high-level abstraction for testing APIs, commonly used with Express applications.",
    example: "request(app).get('/users').expect(200).expect('Content-Type', /json/);",
    relatedTerms: ["api-testing", "testing", "express", "nodejs"]
  },
  {
    id: "test-data-builder",
    title: "Test Data Builder",
    category: "Testing",
    definition: "A design pattern for creating test data objects with default values and customizable properties. Builders make tests more readable and maintainable by reducing setup boilerplate.",
    example: "const user = new UserBuilder().withEmail('test@test.com').withAge(25).build();",
    relatedTerms: ["testing", "test-fixture", "design-pattern", "builder-pattern"]
  },
  {
    id: "arrange-act-assert",
    title: "Arrange-Act-Assert (AAA)",
    category: "Testing",
    definition: "A pattern for organizing unit tests into three sections: Arrange (setup), Act (execute), Assert (verify). This structure improves test readability and maintainability.",
    example: "// Arrange: const user = new User(); // Act: user.login(); // Assert: expect(user.isLoggedIn).toBe(true);",
    relatedTerms: ["testing", "unit-testing", "given-when-then", "test-structure"]
  },
  {
    id: "given-when-then",
    title: "Given-When-Then",
    category: "Testing",
    definition: "A BDD-style structure for writing test scenarios. Given establishes context, When describes action, Then states expected outcome. Similar to Arrange-Act-Assert.",
    example: "Given a user is logged in, When they click logout, Then they should be redirected to homepage",
    relatedTerms: ["bdd", "testing", "arrange-act-assert", "gherkin"]
  },
  {
    id: "gherkin",
    title: "Gherkin",
    category: "Testing",
    definition: "A business-readable domain-specific language for behavior descriptions. Gherkin uses Given-When-Then syntax and is used by BDD frameworks like Cucumber.",
    example: "Feature: User Login\n  Scenario: Successful login\n    Given a user exists\n    When they enter valid credentials\n    Then they should see the dashboard",
    relatedTerms: ["bdd", "cucumber", "given-when-then", "testing"]
  },
  {
    id: "cucumber",
    title: "Cucumber",
    category: "Testing",
    definition: "A BDD testing tool that reads executable specifications written in Gherkin and runs them as automated tests. Supports multiple programming languages.",
    example: "Writing features in plain English that map to step definitions in code.",
    relatedTerms: ["bdd", "gherkin", "testing", "acceptance-testing"]
  },
  {
    id: "test-isolation",
    title: "Test Isolation",
    category: "Testing",
    definition: "The principle that each test should be independent and not affect or depend on other tests. Isolated tests can run in any order and produce consistent results.",
    example: "Using beforeEach() to reset state ensures each test starts fresh without side effects from previous tests.",
    relatedTerms: ["testing", "test-independence", "setup", "teardown"]
  },
  {
    id: "test-parametrization",
    title: "Test Parametrization",
    category: "Testing",
    definition: "A technique for running the same test with different input values. Reduces code duplication and makes it easy to test multiple scenarios.",
    example: "test.each([[1,1,2], [2,2,4], [3,3,6]])('adds %i + %i to equal %i', (a,b,expected) => { expect(add(a,b)).toBe(expected); });",
    relatedTerms: ["testing", "data-driven-testing", "parametrized-tests"]
  },
  {
    id: "test-reporting",
    title: "Test Reporting",
    category: "Testing",
    definition: "The process of generating and presenting test results in readable formats. Reports typically include pass/fail counts, execution time, coverage metrics, and failure details.",
    example: "Jest generating HTML coverage reports showing which lines of code are tested.",
    relatedTerms: ["testing", "test-coverage", "ci-cd", "quality-metrics"]
  },
  {
    id: "continuous-testing",
    title: "Continuous Testing",
    category: "Testing",
    definition: "The practice of executing automated tests continuously throughout the software delivery pipeline. Part of DevOps and CI/CD, ensuring fast feedback on code quality.",
    example: "Tests automatically run on every commit, pull request, and before deployment to production.",
    relatedTerms: ["ci-cd", "testing", "automation", "devops"]
  },
  {
    id: "shift-left-testing",
    title: "Shift-Left Testing",
    category: "Testing",
    definition: "An approach that moves testing activities earlier in the development lifecycle. Testing begins at requirements and design phases rather than after development.",
    example: "Writing acceptance criteria and test cases before coding starts; reviewing tests during design.",
    relatedTerms: ["testing", "testing-strategy", "early-testing", "agile"]
  },
  {
    id: "exploratory-testing",
    title: "Exploratory Testing",
    category: "Testing",
    definition: "An unscripted testing approach where testers actively explore the application, learn its behavior, and design tests simultaneously. Emphasizes tester creativity and critical thinking.",
    example: "A tester manually explores a new feature, trying unusual interactions and edge cases without predefined test scripts.",
    relatedTerms: ["manual-testing", "testing", "ad-hoc-testing", "qa"]
  },
  {
    id: "pairwise-testing",
    title: "Pairwise Testing",
    category: "Testing",
    definition: "A combinatorial testing technique that tests all possible pairs of input parameters rather than all combinations. Reduces test cases while maintaining good coverage.",
    example: "Testing a form with 5 fields having 3 options each: pairwise testing needs ~15 tests instead of 243 (3^5).",
    relatedTerms: ["testing", "combinatorial-testing", "test-optimization"]
  },
  {
    id: "boundary-value-testing",
    title: "Boundary Value Testing",
    category: "Testing",
    definition: "A testing technique that focuses on values at the boundaries of input ranges, where errors are most likely to occur.",
    example: "For age 18-65: test values 17, 18, 19 (lower boundary) and 64, 65, 66 (upper boundary).",
    relatedTerms: ["testing", "edge-case", "equivalence-partitioning"]
  },
  {
    id: "equivalence-partitioning",
    title: "Equivalence Partitioning",
    category: "Testing",
    definition: "A testing technique that divides input data into partitions that should be treated the same by the system. One test from each partition is sufficient.",
    example: "For age validation: invalid (<0), valid (0-120), invalid (>120) - test one value from each.",
    relatedTerms: ["testing", "boundary-value-testing", "test-design"]
  },
  {
    id: "test-harness",
    title: "Test Harness",
    category: "Testing",
    definition: "A collection of software and test data configured to test a program unit by running it under varying conditions and monitoring its behavior and outputs.",
    example: "A framework that sets up test environment, executes tests, and collects results automatically.",
    relatedTerms: ["testing", "test-framework", "test-runner", "automation"]
  },
  {
    id: "testing-in-production",
    title: "Testing in Production",
    category: "Testing",
    definition: "Techniques for safely testing with real users in production environments. Includes feature flags, canary releases, and A/B testing to validate changes with minimal risk.",
    example: "Using feature flags to enable a new feature for 1% of users while monitoring metrics.",
    relatedTerms: ["feature-flag", "canary-deployment", "testing", "production"]
  },
  {
    id: "smoke-test-suite",
    title: "Smoke Test Suite",
    category: "Testing",
    definition: "A collection of critical path tests that verify core functionality works. Smoke test suites are fast and run frequently to catch major issues quickly.",
    example: "A 5-minute test suite checking: app starts, database connects, API responds, key user flows work.",
    relatedTerms: ["smoke-testing", "testing", "critical-path", "build-verification"]
  },
  {
    id: "golden-master-testing",
    title: "Golden Master Testing",
    category: "Testing",
    definition: "A testing technique for legacy code where the current output is saved as the 'golden master' and future outputs are compared against it to detect changes.",
    example: "Running legacy system, saving all outputs, then comparing after refactoring to ensure behavior unchanged.",
    relatedTerms: ["testing", "legacy-code", "snapshot-testing", "characterization-testing"]
  },
  {
    id: "characterization-testing",
    title: "Characterization Testing",
    category: "Testing",
    definition: "Writing tests that document existing behavior of legacy code before refactoring. Tests characterize what the code currently does, not what it should do.",
    example: "Adding tests to untested legacy code to understand and preserve its current behavior during refactoring.",
    relatedTerms: ["testing", "legacy-code", "golden-master-testing", "refactoring"]
  },
  {
    id: "test-oracle",
    title: "Test Oracle",
    category: "Testing",
    definition: "A mechanism for determining whether a test has passed or failed by providing expected results. The oracle compares actual output with expected output.",
    example: "A function that calculates expected checksums to verify data integrity in tests.",
    relatedTerms: ["testing", "assertion", "verification", "expected-results"]
  },
  {
    id: "test-maintainability",
    title: "Test Maintainability",
    category: "Testing",
    definition: "The ease with which tests can be updated, extended, and understood. Maintainable tests use clear naming, avoid duplication, and remain synchronized with production code.",
    example: "Using page objects in E2E tests so UI changes only require updating one location.",
    relatedTerms: ["testing", "clean-code", "test-quality", "refactoring"]
  },
  {
    id: "page-object-model",
    title: "Page Object Model",
    category: "Testing",
    definition: "A design pattern in test automation that creates object repositories for web UI elements. Each page is represented as a class, improving test maintainability.",
    example: "class LoginPage { get emailInput() { return $('#email'); } login(email, pass) { this.emailInput.type(email); } }",
    relatedTerms: ["testing", "e2e-testing", "selenium", "test-maintainability"]
  }
];
