https://github.com/acdlite/react-fiber-architecture

// good ressource

<!-- Great! Let’s break down Fiber, Virtual DOM, and Reconciliation in React in detail — these are core concepts that power React's rendering system, especially in React 16 and beyond.

🧠 1. Virtual DOM (VDOM)
What is it?
The Virtual DOM is a lightweight in-memory representation of the actual DOM (browser’s Document Object Model). React uses it to optimize and manage UI updates.

How it works:
**React creates a Virtual DOM tree based on your JSX.
**When your state or props change, a new VDOM is created.
**React diffs the new VDOM with the previous one (diffing algorithm).
**React calculates the minimum number of changes and applies them to the real DOM. -->
<!-- 
Why use Virtual DOM?
**Performance: Manipulating the real DOM is slow. Virtual DOM operations are fast because they happen in memory.
**Declarative UI: You declare what UI should look like, and React figures out how to efficiently update it.
 -->




<!-- 
🔄 2. Reconciliation
What is it?
Reconciliation is the process where React compares the new VDOM with the old one (diffing) and updates the real DOM accordingly.

Key Features:
**React assumes components with the same key or type are the same and only updates what's changed.
**Elements with different types are completely replaced.
**Keys help React identify which items have changed, been added, or removed (important in lists).

Example:
<ul>
  <li key="1">Apple</li>
  <li key="2">Banana</li>
</ul>
If Banana becomes Mango and the key stays "2", React will only change the text, not recreate the entire node.
 -->





<!-- 🧵 3. React Fiber
What is Fiber?
Fiber is the reconciliation engine introduced in React 16. It replaces the older stack-based algorithm with an interruptible, asynchronous architecture.

Why was Fiber introduced?
**To allow splitting rendering work into units.
**To make rendering interruptible and pausable.
**To support concurrent rendering (a major feature in React 18+). -->

<!-- 
How Fiber Works (Simplified):
**React breaks rendering work into “units of work” called fibers.
**It builds a tree of fiber nodes (each corresponds to a React element/component).
**These units can be paused, resumed, and reused, making it possible to defer less important updates.
**Once the work is done, React commits the changes to the real DOM. -->


<!-- Real-life Analogy:
**Virtual DOM is like a blueprint for a house.
**Reconciliation is like comparing the old blueprint to a new one to see what changed.
**Fiber is like a project manager who can pause and prioritize tasks (e.g., paint kitchen before fixing the roof), improving overall efficiency. -->

