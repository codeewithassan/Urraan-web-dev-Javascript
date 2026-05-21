## 5. Attributes and Styling

These methods and properties allow you to dynamically interact with an HTML element's attributes (like `class`, `src`, `href`, or `id`) and modify its visual presentation directly through JavaScript.

### Attributes Management

* **`getAttribute(attr)`**
  * **Definition:** This method retrieves the current value of a specified attribute on an HTML element. If the attribute does not exist on that element, it returns `null`.
  * **Syntax & Example:**
    ```javascript
    // Selects an anchor link and gets its destination URL
    const link = document.querySelector("a");
    const currentHref = link.getAttribute("href"); 
    ```

* **`setAttribute(attr, value)`**
  * **Definition:** This method sets a new value for an attribute on the specified element. If the attribute already exists, the value is updated; if it does not exist, a new attribute is created with the specified name and value.
  * **Syntax & Example:**
    ```javascript
    // Selects an image element and changes its source file path
    const profileImage = document.querySelector("img");
    profileImage.setAttribute("src", "avatar-updated.png"); 
    ```

### Element Styling

* **`node.style`**
  * **Definition:** This property is used to get or set the inline style of an element. When accessing CSS properties through this object in JavaScript, properties are written using **camelCase** instead of hyphens (e.g., `background-color` becomes `backgroundColor`).
  * **Syntax & Example:**
    ```javascript
    // Selects a container and applies inline CSS styles directly
    const element = document.querySelector(".card");
    element.style.backgroundColor = "#9B82F3"; 
    element.style.marginTop = "20px";
    element.style.display = "block";
    ```
---

## 6. DOM Manipulation: Inserting and Deleting Elements

These methods allow you to dynamically create new HTML elements, position them precisely anywhere relative to an existing target node, or remove them entirely from the page layout.

### Creating an Element

Before you can place an element onto the page, you must create it in memory first using `document.createElement()`.

* **`document.createElement("tagName")`**
  * **Definition:** Creates a new HTML element node specified by the tag name string, but does not automatically attach it to the visible webpage layout.
  * **Syntax & Example:**
    ```javascript
    // Creates a new <div> element node in memory
    let el = document.createElement("div");
    el.innerText = "New Content"; // Modifying the node before insertion
    ```

### Inserting Elements

Once an element is created in memory, you can place it onto your page relative to an existing target node (`node`) using the following structural approaches:

#### 1. Inside Insertion (Nested Container Layouts)
* **`node.append(el)`**
  * **Definition:** Inserts the new element node at the **very end** of the specified target node's internal structural content.
  * **Example:** Places the item inside the container, right after its last existing child element.

* **`node.prepend(el)`**
  * **Definition:** Inserts the new element node at the **very beginning** of the specified target node's internal structural content.
  * **Example:** Places the item inside the container, right before its first existing child element.

#### 2. Outside Insertion (Sibling Placement Layouts)
* **`node.before(el)`**
  * **Definition:** Inserts the new element node directly **before** the targeted node as a preceding sibling element.
  * **Example:** Places the item completely outside of the container, directly on top of it.

* **`node.after(el)`**
  * **Definition:** Inserts the new element node directly **after** the targeted node as a succeeding sibling element.
  * **Example:** Places the item completely outside of the container, directly underneath it.

---

### Deleting Elements

* **`node.remove()`**
  * **Definition:** Completely deletes the targeted node from the active DOM document tree structure, removing it and its contents entirely from the web page.
  * **Syntax & Example:**
    ```javascript
    // Selects a specific element and deletes it from the layout
    const redundantBox = document.querySelector(".old-banner");
    redundantBox.remove(); 
    ```
