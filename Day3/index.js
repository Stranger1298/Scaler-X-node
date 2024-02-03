const { exec } = require('child_process');
const os = require('os');

function executeCommand(command) {
    const isWindows = os.platform() === 'win32';

    const actualCommand = isWindows ? `cmd /c ${command}` : command;

    exec(actualCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Command Output:\n${stdout}`);
    });
}

// Test Cases:

executeCommand('dir');

executeCommand('echo "Hello, Node.js!"');