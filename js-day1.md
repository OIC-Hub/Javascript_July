3=# Day 1 — Introduction to JavaScript

---

## 1. What is JavaScript?

JavaScript is a **programming language** that makes websites come alive.

Every website you use every day is built with three things:

| Language | Job |
|---|---|
| **HTML** | The structure — the skeleton of the page |
| **CSS** | The design — the look and feel |
| **JavaScript** | The behaviour — what happens when you click, type, scroll |

### Real Life Analogy 🏠
Think of building a house:

> **HTML** is the bricks and walls — the structure
> **CSS** is the paint, tiles, and furniture — the looks
> **JavaScript** is the electricity — it makes things actually work (lights turn on, fans spin, doors open)

Without JavaScript, a website is just a static document — like a printed flyer. With JavaScript, it becomes interactive — like an app.

---

## 2. What Can JavaScript Do?

```
✅ Show or hide content when you click a button
✅ Validate a form before it is submitted
✅ Fetch data from an API without reloading the page
✅ Build full web apps (like Twitter, Instagram, YouTube)
✅ Build mobile apps (React Native)
✅ Build backend servers (Node.js)
✅ Build desktop apps (Electron)
```

JavaScript started as a browser language — but today it runs **everywhere**.

---

## 3. How to Run JavaScript

There are two ways to run JavaScript right now, today, without installing anything.

### Way 1 — The Browser Console

Every browser has a built-in JavaScript playground. Open it like this:

```
Chrome / Edge:   Right-click anywhere → Inspect → Console tab
Firefox:         Right-click anywhere → Inspect Element → Console tab
Mac shortcut:    Cmd + Option + J
Windows shortcut: Ctrl + Shift + J
```

Click on the Console tab, type this, and press Enter:

```js
console.log("Hello, World!");
```

You should see:
```
Hello, World!
```

That's JavaScript running. You just wrote your first line of code.

### Way 2 — VS Code + Node.js

Once you install Node.js, you can run JavaScript files from the terminal.

1. Create a file called `index.js`
2. Write your code inside
3. Open your terminal and run:

```bash
node index.js
```

We will be using VS Code + Node.js throughout this course.

---

## 4. `console.log()` — Your Best Friend

`console.log()` prints anything you put inside it to the screen. You will use it every single day as a developer to check what is happening in your code.

```js
console.log("Hello!");
console.log(100);
console.log(true);
console.log("My name is Ada");
```

Output:
```
Hello!
100
true
My name is Ada
```

Think of `console.log()` like the developer's way of asking:
> "Hey JavaScript, what is the value of this right now?"

---

## 5. Variables — Storing Information

A **variable** is like a box with a label on it. You put something inside the box, give it a name, and use it later.

```js
let name = "Ada";
//  ↑       ↑
// label   value inside the box
```

### The Three Ways to Create a Variable

| Keyword | Can Change? | When to Use |
|---|---|---|
| `var` | ✅ Yes | Old way — avoid it |
| `let` | ✅ Yes | When the value will change |
| `const` | ❌ No | When the value will NOT change |

### `let` — Use When Value Can Change

```js
let age = 20;
console.log(age); // 20

age = 21; // update the value
console.log(age); // 21
```

### `const` — Use When Value Stays the Same

```js
const country = "Nigeria";
console.log(country); // Nigeria

country = "Ghana"; // ❌ ERROR — you cannot change a const
```

### Good Variable Names

Variable names should be clear and describe what they hold:

```js
// ❌ Bad names — nobody knows what these mean
let x = "Ada";
let a = 25;
let d = "2025-01-01";

// ✅ Good names — clear and descriptive
let userName = "Ada";
let userAge = 25;
let joinDate = "2025-01-01";
```

### Naming Rules

```js
// ✅ Allowed
let firstName = "Ada";    // camelCase — standard in JavaScript
let age2 = 25;            // numbers allowed (not at the start)
let _score = 100;         // underscore allowed

// ❌ Not allowed
let 2fast = true;         // cannot start with a number
let my-name = "Ada";      // hyphens not allowed
let let = "hello";        // cannot use reserved words
```

---

## 6. Data Types — What Kind of Value is It?

Every value in JavaScript has a **type** — the kind of data it is.

### The 5 Basic Types You Need to Know Now

---

### 1. String — Text

Anything wrapped in quotes is a string. You can use single quotes, double quotes, or backticks.

```js
let name    = "Ada Lovelace";   // double quotes
let city    = 'Lagos';          // single quotes
let message = `Hello, Ada!`;    // backticks (template literals)

console.log(name);    // Ada Lovelace
console.log(city);    // Lagos
console.log(message); // Hello, Ada!
```

### 2. Number — Any Number

```js
let age   = 25;      // whole number
let price = 4999.99; // decimal number
let temp  = -3;      // negative number
```

### 3. Boolean — True or False

Only two possible values — `true` or `false`. Used for yes/no questions.

```js
let isLoggedIn  = true;
let isAdmin     = false;
let hasTicket   = true;

console.log(isLoggedIn); // true
```

### 4. Undefined — No Value Yet

When you create a variable but don't give it a value, it is `undefined`.

```js
let score;
console.log(score); // undefined
```

### 5. Null — Empty on Purpose

`null` means "this variable exists, but it has no value on purpose."

```js
let selectedEvent = null; // nothing selected yet
```

### Quick Type Check — `typeof`

Use `typeof` to check what type a value is:

```js
console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object ← JavaScript quirk, just memorise it
```

---

## 7. Doing Math — Operators

### Arithmetic Operators

```js
let a = 10;
let b = 3;

console.log(a + b);  // 13  → addition
console.log(a - b);  // 7   → subtraction
console.log(a * b);  // 30  → multiplication
console.log(a / b);  // 3.33 → division
console.log(a % b);  // 1   → remainder (modulo)
console.log(a ** b); // 1000 → power (10 to the power of 3)
```

### The `%` (Modulo) Operator

This gives you the **remainder** after division. Very useful.

```js
console.log(10 % 3); // 1  → 10 divided by 3 = 3, remainder 1
console.log(10 % 2); // 0  → 10 divided by 2 = 5, remainder 0
console.log(7  % 2); // 1  → 7  divided by 2 = 3, remainder 1
```

**Common use:** Checking if a number is even or odd

```js
console.log(4 % 2 === 0); // true  → 4 is even
console.log(7 % 2 === 0); // false → 7 is odd
```

### Shorthand Operators

```js
let score = 10;

score += 5;  // same as score = score + 5  → 15
score -= 3;  // same as score = score - 3  → 12
score *= 2;  // same as score = score * 2  → 24
score /= 4;  // same as score = score / 4  → 6

score++;     // add 1 → 7
score--;     // subtract 1 → 6
```

---

## 8. String Tricks

### Joining Strings — Concatenation

```js
let firstName = "Ada";
let lastName  = "Lovelace";

let fullName = firstName + " " + lastName;
console.log(fullName); // Ada Lovelace
```

### Template Literals — Cleaner Way (use backticks)

Instead of joining strings with `+`, use backticks and `${}`:

```js
let name = "Ada";
let age  = 25;

// Old way
console.log("My name is " + name + " and I am " + age + " years old.");

// ✅ Template literal — cleaner
console.log(`My name is ${name} and I am ${age} years old.`);
```

Both print the same thing:
```
My name is Ada and I am 25 years old.
```

### Useful String Properties and Methods

```js
let name = "Ada Lovelace";

console.log(name.length);         // 12 — how many characters
console.log(name.toUpperCase());  // ADA LOVELACE
console.log(name.toLowerCase());  // ada lovelace
console.log(name.includes("Ada")); // true
console.log(name.replace("Ada", "Grace")); // Grace Lovelace
```

---

## 9. Comparison Operators — Asking True/False Questions

These compare two values and always return `true` or `false`.

```js
console.log(5 > 3);    // true  — 5 is greater than 3
console.log(5 < 3);    // false — 5 is not less than 3
console.log(5 >= 5);   // true  — 5 is greater than or equal to 5
console.log(5 <= 4);   // false — 5 is not less than or equal to 4
console.log(5 === 5);  // true  — 5 is equal to 5
console.log(5 !== 3);  // true  — 5 is NOT equal to 3
```

### `==` vs `===` — An Important Difference

Always use `===` (triple equals). It checks both the **value** and the **type**.

```js
console.log(5 == "5");  // true  ← ⚠️ only checks value, ignores type
console.log(5 === "5"); // false ← ✅ checks value AND type (5 is number, "5" is string)
console.log(5 === 5);   // true  ← ✅ same value, same type
```

> **Rule:** Always use `===` and `!==`. Forget that `==` exists.

---

## 10. Practice — Put It All Together

Write this code step by step and run it:

```js
// Your profile
const firstName = "Ada";
const lastName  = "Lovelace";
const age       = 25;
const city      = "Lagos";
const isStudent = true;

// Full name using template literal
const fullName = `${firstName} ${lastName}`;

// Print a profile card
console.log("===== Profile Card =====");
console.log(`Name:       ${fullName}`);
console.log(`Age:        ${age}`);
console.log(`City:       ${city}`);
console.log(`Is student: ${isStudent}`);
console.log(`Name length: ${fullName.length} characters`);
console.log(`Name in uppercase: ${fullName.toUpperCase()}`);
console.log(`Is from Lagos: ${city === "Lagos"}`);
console.log(`========================`);
```

Expected output:
```
===== Profile Card =====
Name:       Ada Lovelace
Age:        25
City:       Lagos
Is student: true
Name length: 12 characters
Name in uppercase: ADA LOVELACE
Is from Lagos: true
========================
```

---

## ✅ Day 1 Checklist
- [ ] Know what JavaScript is and what it does
- [ ] Can run JavaScript in the browser console and with Node.js
- [ ] Can use `console.log()` to print values
- [ ] Know the difference between `let` and `const`
- [ ] Know the 5 basic data types — string, number, boolean, undefined, null
- [ ] Can do basic math with operators
- [ ] Can use template literals with backticks
- [ ] Know the difference between `===` and `==`

## 💡 Practice Exercises

1. Create three variables — your name, your age, and your city. Print them all in one sentence using a template literal.
2. Create two number variables. Print their sum, difference, product, and remainder.
3. Create a variable called `password` with the value `"hello123"`. Print how many characters it has using `.length`.
4. Check if `"JavaScript"` includes the word `"Java"` using `.includes()`. Print the result.
5. **Bonus:** Create variables for the price of a product (`5000`) and a discount (`500`). Calculate the final price after the discount and print: `"Final price: ₦4500"` using a template literal.
