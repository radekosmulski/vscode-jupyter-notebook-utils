import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const foldAllCells = vscode.commands.registerCommand('jupyter-notebook-utils.foldAllCells', async () => {
        const activeNotebook = vscode.window.activeNotebookEditor;
        
        if (!activeNotebook) {
            vscode.window.showErrorMessage('No active notebook found');
            return;
        }

        const notebook = activeNotebook.notebook;
        const cellCount = notebook.cellCount;
        
        for (let i = cellCount - 1; i >= 0; i--) {
            await vscode.commands.executeCommand('notebook.fold', { index: i });
        }
        
        vscode.window.showInformationMessage(`Folded ${cellCount} cells`);
    });

    const unfoldAllCells = vscode.commands.registerCommand('jupyter-notebook-utils.unfoldAllCells', async () => {
        const activeNotebook = vscode.window.activeNotebookEditor;
        
        if (!activeNotebook) {
            vscode.window.showErrorMessage('No active notebook found');
            return;
        }

        const notebook = activeNotebook.notebook;
        const cellCount = notebook.cellCount;
        
        for (let i = 0; i < cellCount; i++) {
            await vscode.commands.executeCommand('notebook.unfold', { index: i });
        }
        
        vscode.window.showInformationMessage(`Unfolded ${cellCount} cells`);
    });

    context.subscriptions.push(foldAllCells, unfoldAllCells);
}

export function deactivate() {}