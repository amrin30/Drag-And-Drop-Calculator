🧮 Drag & Drop Calculator
A drag-and-drop calculator built with React, Tailwind CSS, and React DnD. This project allows users to drag calculator buttons and drop them into the input area for a more interactive experience. It also includes a dark mode toggle.

✨ Features
📦 Drag & Drop Functionality (React DnD)
🌙 Dark Mode Support
🎨 Styled with Tailwind CSS
🔄 Undo & Redo Actions
🧹 Clear Functionality
⚡ Fast and Responsive UI

🛠️ Technologies Used
React (Vite)
Tailwind CSS
React DnD
Context API (for theme management)
🚀 Installation & Setup
Clone the repository

sh
Copy
Edit
git clone https://github.com/your-username/drag-drop-calculator.git
cd drag-drop-calculator
Install dependencies

sh
Copy
Edit
npm install
Start the development server

sh
Copy
Edit
npm run dev
Open in browser
The app runs at: http://localhost:5173 (default Vite port)

📂 Project Structure
pgsql
Copy
Edit
📦 drag-drop-calculator
├── 📂 src
│   ├── 📂 components
│   │   ├── DraggableButton.jsx
│   │   ├── CalculatorDisplay.jsx
│   │   ├── ClearButton.jsx
│   │   ├── DarkModeToggle.jsx
│   ├── 📂 context
│   │   ├── ThemeContext.jsx
│   ├── 📂 pages
│   │   ├── CalculatorBuilder.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── main.jsx
├── 📜 package.json
├── 📜 README.md
🔧 Customization
To modify dark mode styles, update ThemeContext.jsx and index.css.
To change button styles, edit DraggableButton.jsx in /components.
💡 Future Improvements
✅ Mobile Drag & Drop Support
✅ Save user preferences (LocalStorage or DB)
✅ More calculator functions
🤝 Contributing
Feel free to contribute! Open an issue or submit a pull request.
