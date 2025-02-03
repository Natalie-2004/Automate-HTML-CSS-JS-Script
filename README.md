# Automate-HTML-CSS-JS-Script
A script to generate a directory with custom name and three files 'index.html', 'app.js', and 'styles.css'. There is a default template at index.html as well.

## Prerequisites

- Ensure you have Node.js installed on your system.
- If not yet, [Link to Download Node JS](https://nodejs.org/en/download)

## Manual

1. **Open Terminal:**
   - Navigate to the directory where your script is located.

2. **Run the Script:**
   - Use the following command to run the script:
    ```bash
    node yourScriptName.js [folderName]
    ```
   - Replace `yourScriptName.js` with the actual name of your script file.
   - `[folderName]` is optional. If not provided, the default name `Project` will be used.

3. **Directory Handling:**
   - If a directory with the specified name already exists, the script will prompt:
    ```
    Directory [folderName] already exists. Type YES to replace it, Type NO to terminate:
    ```
   - Type `YES` to delete the existing directory and create a new one.
   - Type `NO` to terminate the operation without making any changes.

4. **Files Created:**
   - `index.html`: Contains default HTML content.
   - `app.js`: An empty JavaScript file.
   - `styles.css`: An empty CSS file.
