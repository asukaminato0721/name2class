// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.name2class", () => {
      console.debug("name2class launch");
      const editor = vscode.window.activeTextEditor;
      const selection = editor.selection;
      const highlighted = (() => {
        return editor.document.getText(
          selection && !selection.isEmpty
            ? new vscode.Range(
                selection.start.line,
                selection.start.character,
                selection.end.line,
                selection.end.character
              )
            : editor.document.getWordRangeAtPosition(editor.selection.active)
        );
      })();

      editor.edit((editBuilder) => {
        editBuilder.insert(
          new vscode.Position(selection.start.line, 0),
          `
class ${highlighted.trim()} {}
`
        );
      });
    })
  );
}

// This method is called when your extension is deactivated
function deactivate() {
  console.debug("bye");
}

module.exports = {
  activate,
  deactivate,
};
