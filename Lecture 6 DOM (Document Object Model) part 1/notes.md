# DOM (Document Object Model) Cheat Sheet

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. It represents the structure of the document as a branching tree of objects.

---

## 1. DOM Selection (How to Select Elements)

### The Traditional Way
* **By ID:** 
  ```javascript
  document.getElementById("myID");
  ```
* **By Class Name:** (Returns a live `HTMLCollection`)
  ```javascript
  document.getElementsByClassName("myClass"); 
  ```
* **By Tag Name:** (Returns a live `HTMLCollection`)
  ```javascript
  document.getElementsByTagName("p");
  ```

### The Modern & Better Way
* **`querySelector`:** Returns the **first** element that matches the specified CSS selector(s).
  ```javascript
  document.querySelector("#myID");      // Selects by ID
  document.querySelector(".myClass");   // Selects by Class
  document.querySelector("p");          // Selects by Tag
  ```
* **`querySelectorAll`:** Returns a static **`NodeList`** containing all matching elements.
  ```javascript
  document.querySelectorAll(".myClass");
  ```

---

## 2. Element Properties

* **`tagName`**: Returns the uppercase tag name for element nodes (e.g., `DIV`, `P`).
* **`innerText`**: Returns the visible text content of the element and all its children (respects CSS styling and hides hidden text).
* **`innerHTML`**: Returns or sets the plain text or full HTML contents markup inside the element.
* **`textContent`**: Returns the raw textual content of all elements, including hidden items, spaces, and script elements.

---

## 3. DOM Architecture: Nodes vs Elements

### Key Definitions
* **Node**: The generic name for any single object in the DOM tree. Everything in your HTML file is a node.
  * **Element Nodes:** The actual HTML tags (e.g., `<div>`, `<p>`).
  * **Text Nodes:** The raw text inside or between HTML tags.
  * **Comment Nodes:** HTML comments (e.g., `<!-- comment -->`).
* **Parent Node**: A node that contains other nodes inside it.
* **Child Node**: A node directly nested inside another node.
* **Sibling Nodes:** Nodes that share the exact same parent.

### Visual Tree Structure Example
Consider this HTML snippet:
```html
<div id="parent">
  <p>Hello <span>World</span></p>
  <!-- This is a comment -->
</div>
```

Breaking down its DOM relations:
* The `<div>` is the **Parent Node**.
* The `<p>` element is a **Child Node** of the `<div>`.
* The `<span>` element is a **Child Node** of the `<p>` (making it a grandchild of the `<div>`).
* The strings `"Hello "` and `"World"` are **Text Nodes**.
* The code `<!-- This is a comment -->` is a **Comment Node**.

---

## 4. JavaScript Traversal Rules

When navigating the DOM in JavaScript, pay close attention to whether you are targeting generic **Nodes** or strictly HTML **Elements**.

1. **The "Node" Approach (Includes Text & Comments)**
   * Properties containing the word "Node" or "Child" count text nodes, empty spaces, and comments alongside elements.
   * `childNodes` returns *every* item, including the blank line breaks between tags.

2. **The "Element" Approach (HTML Tags Only)**
   * Properties containing the word "Element" or "Children" strictly filter out everything except valid HTML tags.

### Quick Navigation Reference



| Target Destination | Node Approach (Includes Text/Comments) | Element Approach (HTML Tags Only) |
| :--- | :--- | :--- |
| **All items inside** | `element.childNodes` | `element.children` |
| **The first item** | `element.firstChild` | `element.firstElementChild` |
| **The last item** | `element.lastChild` | `element.lastElementChild` |
| **The next sibling** | `node.nextSibling` | `element.nextElementSibling` |
