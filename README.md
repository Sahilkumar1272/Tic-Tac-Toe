# Tic-Tac-Toe Game 🕹️

## 📖 About the Project
This is a **Tic-Tac-Toe** game built using **HTML**, **CSS**, and **JavaScript**. It features two game modes:
- **Player vs Player**
- **Player vs Computer**

The game provides a simple, fun, and intuitive user experience, with a strategic AI for the computer mode.

---

## ✨ Features

### 🎮 Game Modes
- **Player vs Player:** Two players can take turns and play on the same device.
- **Player vs Computer:** The computer uses a strategic algorithm to make smart moves, including:
  - Checking for winning moves.
  - Blocking the player's winning moves.
  - Prioritizing center, corners, and sides.

### 🏆 Game Logic
- Detects winners based on predefined **winning patterns**.
- Declares a **draw** when all boxes are filled, and no winner is found.

### 🎨 User Interface
- Clean and simple UI with visible separation between game mode selection and game board.
- Congratulatory messages for winners and alerts for a draw.

---

## 🛠️ Technologies Used
- **HTML:** For creating the structure of the game.
- **CSS:** For styling the game interface.
- **JavaScript:** For game logic and interactivity.

---

## 🚀 How to Play
1. Select the game mode:
   - Player vs Player
   - Player vs Computer
2. Start the game.
3. Take turns placing your symbol (`O` or `X`) on the grid.
4. The first player to align their symbols in a row, column, or diagonal wins!
5. If the grid fills up and no one wins, the game ends in a draw.

---

## 📂 File Structure
- `index.html`: The main HTML file for the game interface.
- `style.css`: Contains all styles used in the game.
- `script.js`: Handles the game logic and interactivity.

---

## 🎯 Key Features of the Code

### 💡 Smart AI (Player vs Computer Mode)
The AI uses the following strategy:
- **Winning Check:** Attempts to win if a winning move is possible.
- **Blocking Move:** Blocks the player from winning if they are about to align three symbols.
- **Center Priority:** Tries to occupy the center position if available.
- **Corner Preference:** Chooses corners for better strategic advantage.
- **Random Side Pick:** Occupies available sides when other options are exhausted.

### ⏳ Smooth Gameplay
- Players take turns automatically, with the computer's move set to a **3-second delay** for a more natural feel.

---

## 📦 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/tic-tac-toe.git
2. Navigate to the project directory:
   ```base
     cd tic-tac-toe
4. Open the index.html file in your browser to start the game.

   
