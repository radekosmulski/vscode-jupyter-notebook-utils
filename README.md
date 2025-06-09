# Jupyter Notebook Utils

A VS Code extension that provides utilities for working with Jupyter notebooks, specifically the ability to fold or unfold all cells at once.

## Features

- **Fold All Cells**: Collapses all cells in the active Jupyter notebook
- **Unfold All Cells**: Expands all cells in the active Jupyter notebook

## Usage

### Commands

Access these commands through the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

- `Jupyter Notebook Utils: Fold All Cells`
- `Jupyter Notebook Utils: Unfold All Cells`

### Keyboard Shortcuts

- **Fold All Cells**: `Ctrl+K, Ctrl+0` (Windows/Linux) / `Cmd+K, Cmd+0` (Mac)
- **Unfold All Cells**: `Ctrl+K, Ctrl+J` (Windows/Linux) / `Cmd+K, Cmd+J` (Mac)

*Note: Shortcuts only work when a Jupyter notebook is focused.*

## Requirements

- VS Code 1.74.0 or higher
- Jupyter extension for VS Code

## Installation

Install from the VS Code Marketplace:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Jupyter Notebook Utils"
4. Click Install

Or install via command line:
```bash
code --install-extension radek-osmulski.vscode-jupyter-notebook-utils
```

**Marketplace Link**: [Jupyter Notebook Utils](https://marketplace.visualstudio.com/items?itemName=radek-osmulski.vscode-jupyter-notebook-utils)

## Development

For development and contributing:

1. Clone this repository
2. Install dependencies: `npm install`
3. Compile the extension: `npm run compile`
4. Press F5 to run in Extension Development Host

### Scripts

- `npm run compile`: Compile TypeScript to JavaScript
- `npm run watch`: Watch for changes and auto-compile
- `vsce package`: Package extension as .vsix file
- `vsce publish`: Publish to marketplace

## License

MIT
