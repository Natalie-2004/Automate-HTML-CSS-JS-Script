const fs = require('fs');
const path = require('path');
const readline = require('readline');
const folderName = process.argv[2] || 'Project';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (fs.existsSync(folderName)) {
    rl.question(`Directory ${folderName} already existed, type YES to replace, NO to terminate: `, (answer) => {
        if (answer.toUpperCase() == 'YES') {
            fs.rmSync(folderName, {recursive: true});
            createDir();
        } else if (answer.toUpperCase() == 'NO') {
            console.log('Terminated');
            rl.close();
        }
    })
} else {
    createDir();
}

function createDir() {
    try {
        fs.mkdirSync(folderName);
        fs.writeFileSync(path.join(folderName, 'index.html'), defaultHTML());
        fs.writeFileSync(path.join(folderName, 'app.js'), '');
        fs.writeFileSync(path.join(folderName, 'styles.css'), '');
    
        console.log(`Directory ${folderName} created successfully`);
    } catch (e) {
        console.log("CATCH ERROR: ");
        console.log(e);
    } finally {
        rl.close();
    }
}

function defaultHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/${folderName}/styles.css">
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
    `;
}

