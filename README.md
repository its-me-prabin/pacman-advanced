# pacman-js

[![CI/CD](https://github.com/its-me-prabin/pacman-advanced/actions/workflows/ci.yml/badge.svg)](https://github.com/its-me-prabin/pacman-advanced/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/its-me-prabin/pacman-advanced/branch/main/graph/badge.svg)](https://codecov.io/gh/its-me-prabin/pacman-advanced)
[![Code Style](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A classic Arcade Pac-Man game clone built with **JavaScript**, **HTML**, and **CSS**. Originally created by [Brent Ward](https://github.com/bward2), modernized with contemporary build tools, CI/CD automation, and comprehensive documentation.

### 🎮 **[Play the Game!](#deployment)**

🍒🍓🍊🍎🍈👾🔔🔑

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Testing & Code Quality](#testing--code-quality)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Architecture](#architecture)
- [License](#license)

---

## ✨ Features

- Classic Pac-Man gameplay mechanics
- Four AI-controlled ghosts (Blinky, Pinky, Inky, Clyde)
- Score tracking and high score storage
- Pause/Resume functionality
- Sound effects (toggle on/off)
- Responsive performance monitoring (FPS counter)
- Mobile-friendly layout
- Cross-browser compatibility

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI/CD pipeline
├── app/
│   ├── scripts/
│   │   ├── characters/
│   │   │   ├── ghost.js          # Ghost AI and behavior
│   │   │   └── pacman.js         # Pac-Man movement and logic
│   │   ├── core/
│   │   │   ├── gameCoordinator.js # Main game orchestrator
│   │   │   └── gameEngine.js     # Core game loop and timing
│   │   ├── pickups/
│   │   │   └── pickup.js         # Pellet and power-up logic
│   │   └── utilities/
│   │       ├── characterUtil.js  # Shared character utilities
│   │       ├── soundManager.js   # Audio management
│   │       └── timer.js          # Game timing utilities
│   ├── style/
│   │   ├── graphics/             # Sprites, backgrounds, and assets
│   │   └── scss/
│   │       ├── _variables.scss   # SCSS variables
│   │       ├── mainPage.scss     # Main page styling
│   │       ├── maze.scss         # Maze styling
│   │       ├── pacman.scss       # Pac-Man styling
│   │       ├── ghosts.scss       # Ghost styling
│   │       └── pickups.scss      # Pickup styling
│   └── tests/
│       ├── gameEngine.test.js    # Game engine tests
│       ├── gameCoordinator.test.js
│       ├── pacman.test.js
│       ├── ghost.test.js
│       ├── pickup.test.js
│       ├── characterUtil.test.js
│       ├── soundManager.test.js
│       └── timer.test.js
├── build/                        # Compiled output (auto-generated)
│   ├── app.js                   # Minified JavaScript
│   └── app.css                  # Compiled CSS
├── .eslintrc.js                 # ESLint configuration
├── .gitignore                   # Git ignore rules
├── gulpfile.js                  # Gulp build configuration
├── index.html                   # Main HTML file
├── package.json                 # Project dependencies
└── README.md                    # This file
```

---

## 📦 Prerequisites

- **Node.js**: >= 18.0.0 ([Download](https://nodejs.org/))
- **npm**: >= 9.0.0 (usually included with Node.js)

Check your versions:
```bash
node --version
npm --version
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-me-prabin/pacman-advanced.git
   cd pacman-advanced
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

---

## 🚀 Available Scripts

### Development

- **`npm start`** - Build and serve the game locally
  - Game runs at: http://localhost:8080/
  
- **`npm run watch`** - Watch for changes in JS and SCSS files
  - Automatically recompiles on file changes
  - Run this in one terminal while serving in another

- **`npm run serve`** - Start local development server only
  - Access at: http://localhost:8080/
  - Serves the entire project directory

### Code Quality

- **`npm run lint`** - Check code style with ESLint (Airbnb standard)
  
- **`npm run lint:fix`** - Automatically fix linting issues
  
- **`npm run lint:check`** - Generate lint report JSON file

### Testing & Coverage

- **`npm test`** - Run all tests with 100% code coverage requirement
  - Fails if coverage drops below 100%
  - Coverage report generated in `./coverage/` directory

- **`npm run coverage`** - Generate and report coverage metrics

### Building

- **`npm run build`** - Build for development
  - Concatenates and compiles files without minification
  - Source maps included for debugging

- **`npm run build:prod`** - Build for production
  - Minifies JavaScript and CSS
  - Removes development code blocks
  - Optimized for performance

---

## 💻 Development Workflow

### 1. Start Development Server
```bash
npm run watch   # In terminal 1 - watch and recompile
npm start       # In terminal 2 - start local server
```

### 2. Code Your Changes
- Edit files in `app/scripts/` or `app/style/scss/`
- Files automatically compile on save (with watch running)

### 3. Run Tests
```bash
npm test        # Run tests and check coverage
```

### 4. Lint Your Code
```bash
npm run lint    # Check for style issues
npm run lint:fix # Auto-fix issues
```

### 5. Build for Production
```bash
npm run build:prod
```

---

## 🧪 Testing & Code Quality

### Test Coverage
- **100% code coverage is enforced** on all pushes via Husky pre-push hook
- Tests use **Mocha** test runner and **Sinon** for mocking
- Coverage reports generated with **NYC**

### Running Tests
```bash
npm test              # Run all tests with coverage check
npm run coverage      # Generate coverage reports only
```

### Code Style
- **ESLint** with **Airbnb style guide**
- Enforced on commits via Husky pre-commit hook
- 0 linting errors required

### Enforced by Husky
- Pre-commit: ESLint check (0 errors)
- Pre-push: Unit tests (100% coverage)

---

## 🏗️ Building for Production

### Development Build
```bash
npm run build
# Output: build/app.js, build/app.css
```

### Production Build
```bash
npm run build:prod
# Output: Minified app.js (~50-60% smaller)
#         Minified app.css
```

### Build Output
- `build/app.js` - Concatenated and optionally minified JavaScript
- `build/app.css` - Compiled CSS from SCSS

---

## 🚢 Deployment

### GitHub Pages (Automatic)
The project deploys automatically to GitHub Pages on every push to the `master` or `main` branch via GitHub Actions.

**After your first push**, enable GitHub Pages:
1. Go to repository Settings → Pages
2. Select `main` branch as source
3. Your game will be live at: `https://YOUR_USERNAME.github.io/pacman-js/`

### Manual Deployment
```bash
npm run build:prod    # Create production build
git add build/        # Stage build files
git commit -m "Deploy to production"
git push origin master # Push to trigger GitHub Actions
```

### Custom Deployment
Configure your own hosting:
1. Build the project: `npm run build:prod`
2. Upload the entire project directory to your host
3. Access via your domain/URL

---

## 🌐 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Minimum versions**:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

**Features used**:
- ES2021 JavaScript (transpiled to ES5 via Babel)
- CSS Grid
- CSS Custom Properties (Variables)
- Canvas API
- Web Audio API

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Add/Update** tests (100% coverage required)
5. **Run** `npm run lint:fix` to fix style issues
6. **Run** `npm test` to ensure all tests pass
7. **Commit** your changes (`git commit -m 'Add amazing feature'`)
8. **Push** to the branch (`git push origin feature/amazing-feature`)
9. **Open** a Pull Request

### Code Guidelines
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Write tests for all new features
- Update documentation as needed
- Keep commits small and descriptive

---

## 🐛 Troubleshooting

### Issue: Port 8080 Already in Use
```bash
# Use a different port
http-server -p 9000

# Or find and kill the process using port 8080
# Windows: netstat -ano | findstr :8080
# Mac/Linux: lsof -i :8080
```

### Issue: "npm: command not found"
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

### Issue: Tests Fail with Coverage Below 100%
```bash
# Check coverage report
npm test          # Shows detailed coverage report
# Update tests to cover new code
```

### Issue: ESLint Errors on Commit
```bash
# Auto-fix issues
npm run lint:fix

# Then commit again
git commit -m "Your message"
```

### Issue: Build Files Not Updating
```bash
# Clear build directory and rebuild
npm run build
```

### Issue: Images/Sounds Not Loading in Browser
- Ensure the development server is running: `npm start`
- Check browser console for errors (F12)
- Verify `app/style/graphics/` directory exists with assets

---

## 🏛️ Architecture

### Game Loop
The core game uses a **fixed timestep** architecture:
1. **GameEngine** manages the main loop using `requestAnimationFrame`
2. Fixed timestep prevents framerate-dependent gameplay
3. FPS counter displays real-time frame rate

### Entity System
- Entities (Pacman, Ghosts, Pickups) have `update()` and `draw()` methods
- `GameCoordinator` manages all entities
- Collision detection between entities

### AI System
- Ghosts use **pathfinding** to chase Pac-Man
- Each ghost has unique behavior:
  - **Blinky** (Red): Aggressive chaser
  - **Pinky** (Pink): Ambusher
  - **Inky** (Cyan): Unpredictable
  - **Clyde** (Orange): Roaming

### Sound System
- `SoundManager` handles audio playback
- Web Audio API for sound effects
- Toggle sound on/off during gameplay

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 👏 Acknowledgments

- Original Pac-Man by Namco (1980)
- JavaScript community for amazing libraries and tools
- All contributors and issue reporters

---

## � Project Credits

**Original Game**
- Game implementation by [@bward2](https://github.com/bward2)
- Original repository: [bward2/pacman-js](https://github.com/bward2/pacman-js)
- Licensed under MIT License

**This Version - Enhancements**
- ✨ Modernized build system (Gulp 4, Babel, modern ESLint)
- ✨ GitHub Actions CI/CD pipeline with automated testing and deployment
- ✨ Comprehensive documentation (CONTRIBUTING, DEVELOPMENT, SECURITY guides)
- ✨ Production build optimization (~50% size reduction)
- ✨ Enhanced development experience and testing infrastructure
- ✨ Professional GitHub repository standards

---

## 📞 Support

- **Issues**: Report bugs via [GitHub Issues](https://github.com/its-me-prabin/pacman-advanced/issues)
- **Questions**: Use [GitHub Discussions](https://github.com/its-me-prabin/pacman-advanced/discussions)
- **Original Project**: [Visit original repo](https://github.com/bward2/pacman-js)

---

**Happy gaming! 🎮**

*P.S. If you improve this version, consider contributing back to the [original project](https://github.com/bward2/pacman-js) or creating your own fork!*
