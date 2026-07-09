# Product Mission & Principles

## 1. Product Description
The product is a language-agnostic, responsive, framework-free documentation website titled **CodeAcademy**. The purpose of the site is to visually map and explain the core concepts of computer science and programming. The content is explicitly organized across distinct learning tiers:
* **Level 1:** Foundational Programming (Variables, Types, Control Flow, Loops, Functions, Scope, and Standard Input/Output).
* **Level 2:** Intermediate Concepts (Object-Oriented Programming, Data Structures, Algorithms, Memory Management, and Error Handling).
* **Level 3:** Advanced Concepts (To be provisioned structurally matching Level 1 and 2 patterns).

## 2. Core Objective
The target goal of this product is to provide a deterministic, ultra-lightweight web platform where students can understand computer science theories paired with immediate cross-language syntax comparisons without the noise of interactive code runners or stateful widgets.

## 3. Content & Architecture Generation Principles
To minimize non-deterministic content drift during agent generation passes, the content must rigidly follow these four rules:
1.  **Clarity Before Completeness:** Prioritize clear definitions of core behaviors over exhaustive edge cases. Do not allow the agent to guess or introduce additional sub-topics not covered in structural baselines.
2.  **Idea + Example Pattern:** Every structural sub-topic must introduce the technical definition immediately followed by a practical code block visualization. No topic is allowed to exist as text-only prose.
3.  **Sober and Direct Tone:** Content must read like clean, educational documentation. Avoid conversational fillers, marketing hooks, or exclamation points (e.g., use "An isolated program is of little use." instead of "Wow, your code is stuck in a bubble!").
4.  **Device-Agnostic Fluidity:** Layout compositions must scale deterministically across mobile and desktop viewpoints natively via responsive semantic design patterns, using zero external responsive adjustments or scripts.