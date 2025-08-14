📋 Project Management Dashboard – Kanban Board
A modern and responsive Kanban board application built with React, TailwindCSS, and @hello-pangea/dnd 🚀
Organize your workflow, track progress, and manage tasks easily with smooth drag-and-drop functionality.

✨ Features
🔄 Smooth Drag & Drop – Move and reorder tasks within and across lanes effortlessly with @hello-pangea/dnd

➕ Dynamic Task Creation – Add new tasks with a title and description directly from the board

📱 Responsive Design – Built with TailwindCSS for a clean, mobile-friendly UI

🎯 Task Priorities – Color-coded priority tags for clear visual cues

🗂 Global State Management – React Context API ensures consistent lane & task data everywhere

🖥 Full-Width Layout – Optimized to take advantage of available screen space

🛠 Tech Stack
⚛ React (Hooks & Functional Components)

🎨 TailwindCSS (Utility-first styling)

📦 @hello-pangea/dnd (Drag & Drop)

🎭 React Icons (Icons and UI embellishments)

🌐 Next.js (optional integration)

📦 Installation
bash

## Screen Shots
![alt text](<Screenshot 2025-08-13 213902.png>)
![alt text](<Screenshot 2025-08-13 213957.png>)
![alt text](<Screenshot 2025-08-13 214031.png>)

# 1️⃣ Clone repo

git clone https://github.com/yourusername/project-management-dashboard.git
cd project-management-dashboard

# 2️⃣ Install dependencies

npm install

# or

yarn install

# 3️⃣ Start development server

npm run dev

# or

yarn dev

# 4️⃣ Open in browser

http://localhost:3000
📂 Project Structure
text
src/
├── components/
│ ├── KanbanBoard.tsx # Main board with drag-and-drop context
│ ├── Lane.tsx # Individual lane (column)
│ ├── TaskCard.tsx # Draggable task card
├── context/
│ ├── KanbanContext.tsx # State management (lanes & tasks)
└── pages/
└── index.tsx # Entry point with layout components
🎮 How to Use
Drag and Drop: Move any task card between lanes or reorder within a lane

Add a Task: Click the ➕ button in the "To Do" lane

Visual Cues: Priority tags make it simple to spot high-priority items

🎨 Customization Ideas
🗓 Add deadlines, assigned user avatars, or tags

🎨 Theme the board by editing tailwind.config.js

📡 Integrate with a backend API for data persistence

🧩 Replace prompts with a modal form for better UX

🐞 Troubleshooting
Ensure unique task IDs for proper drag behavior

Use a Node.js version compatible with dependencies

Avoid mutating state directly—always update immutably

📜 License
MIT License © Atul Sagotra
