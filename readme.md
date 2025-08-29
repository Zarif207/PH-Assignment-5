1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : The difference between getElementById and getElementByClassName is that getElementById is for a single, unique element on a page, like a social security number, and is selected with (#). A class is for multiple elements that share a common style or function, such as a group of students, and is selected with (.).


2.How do you create and insert a new element into the DOM?
   
Answer : To create and insert a new element I create it with document.createElement() and then insert it into the main page using a method like appendChild() on a parent element.


3.What is Event Bubbling and how does it work?

Answer : Event bubbling is a mechanism where an event on an element like a click triggers on that element first and then propagates up the DOM tree to its parent. Then its grandparent and so on.


4.What is Event Delegation in JavaScript? Why is it useful?

Answer : Event delegation is a technique where I can add a single event listener to a parent element instead of adding separate listeners to each of its child elements. It's useful because it improves performance by reducing the number of listeners especially when dealing with a large or dynamic list of items.


5.What is the difference between preventDefault() and stopPropagation() methods?

Answer : preventDefault() stops the browser's default behavior for an event. While stopPropagation() stops the event from bubbling up the DOM tree to parent elements.

