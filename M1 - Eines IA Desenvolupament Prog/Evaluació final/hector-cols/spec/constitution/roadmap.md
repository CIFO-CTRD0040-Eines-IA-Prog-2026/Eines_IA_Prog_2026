# Agent Execution Roadmap

To ensure zero drift across sequential code generation phases, the agent must strictly execute the software build in the following step-locked chronological sequence. A phase cannot begin until its predecessor is perfectly completed and locked.

## Phase Descriptions
1.  **Phase 1: Shared Core Stylesheet Synthesis (`style.css`)**
* Extract color tokens, spacing variables, and grid architectures implicit in the baseline source definitions. Lock design system boundaries.
2.  **Phase 2: Core Landing System Generation (`index.html`)**
* Construct the central routing hub page using semantic header/footer elements, explicit hyper-linking paths, and grid layouts.
3.  **Phase 3: Deep Level Documentation Content Generation (`level-X.html`)**
* Construct standard layout blueprints implementing left-hand Table of Contents sidebars and right-hand modular technical layouts featuring standard tables and cross-language tabs.

## Advance Tracking Verification
At the conclusion of each generation loop, the agent is required to write progress outputs directly into `spec/features/tasks.md` following a deterministic boolean schema (`[X]` for complete, `[ ]` for pending). No code pass can proceed if execution tracking errors appear.
