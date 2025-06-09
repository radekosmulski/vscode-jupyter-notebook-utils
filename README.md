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

- **Fold All Cells**: `Ctrl+Shift+[` (Windows/Linux) / `Cmd+Shift+[` (Mac)
- **Unfold All Cells**: `Ctrl+Shift+]` (Windows/Linux) / `Cmd+Shift+]` (Mac)

*Note: Shortcuts only work when a Jupyter notebook is focused.*

## Requirements

- VS Code 1.74.0 or higher
- Jupyter extension for VS Code

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Compile the extension: `npm run compile`
4. Install the extension in VS Code

## Development

- `npm run compile`: Compile TypeScript to JavaScript
- `npm run watch`: Watch for changes and auto-compile

## License

MIT# vscode-jupyter-notebook-utils
