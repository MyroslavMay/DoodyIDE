# DoodyIDE
_A fast-simple IDE written with Electron and ReactJS._

# Features
+ Simple, fast and do it's job (editing code and running it (no more 😉))
+ App is builded with [Chakra UI](https://www.chakra-ui.com/) (for UI), [ReactJS](https://react.dev) (main app), [Piston API](https://piston.readthedocs.io/en/latest/api-v2/) (for running code), [Monaco Editor](https://www.npmjs.com/package/monaco-editor) (for code editing)
+ Supports 20+ programming languages (including C, C++, Dart, Visual Basic, C# and more!)
+ Includes "Hello World!" in every language
+ Fully GPLv3
+ Supports online code running & compiling in cloud (using Piston API)
+ It is simple, as just 2 fields. First for code editing, second for running code
+ You get coding expierence just as VSCode, because it using the same editor as VSCode (Monaco)

# Screenshots
![Screenshot with sample JS code](https://github.com/MyroslavMay/DoodyIDE/blob/main/screenshots/1.png?raw=true)
<br>
<br>
![Screenshot with sample JS code and it's output](https://github.com/MyroslavMay/DoodyIDE/blob/main/screenshots/2.png?raw=true)
<br>
<br>
![Screenshot with sample Swift code and it's output](https://github.com/MyroslavMay/DoodyIDE/blob/main/screenshots/3.png?raw=true)

# How to run it
**__NOTE: currently, there are prebuilded binaries for Windows (x64) (Installer or portable) and Linux (x86_64) (portable), but it is untested. So try it out and share your results or Issues page!__**
## If you want to use prebuided binaries (Linux or Windows), follow this steps
1. Go to `Releases` page
![How to navigate to releases page](https://github.com/MyroslavMay/DoodyIDE/blob/main/screenshots/setup/go-to-releases.png?raw=true)
2. Scroll a little, you will find binaries for your OS (as on picture). Download a correct, then run the setup (if download installer), or unzip it somewhere and run main .exe (on Linux, you may need to do in executable). This works if you downloaded portable version.
![Download appropiate binary for your OS](https://github.com/MyroslavMay/DoodyIDE/blob/main/screenshots/setup/download-binary.png?raw=true)

## If you wanna to compile it, follow this steps
**Requiments: Node.js (with npm)**
> [!TIP]
> We recommend using Node.js version 22, but it can work with new versions.

1. Clone this repo (with `Github Desktop` or `Git`). If you using `Git` method, use this commands:
```
cd <CLONE_TO_DIR> # replace <CLONE_TO_DIR> with your directory
git clone https://github.com/MyroslavMay/DoodyIDE
cd DoodyIDE
```
2. Open your terminal (or IDE's integrated terminal), and run this commands
```
npm install # installs all dependencies
```
3. After that, you can test app bu running:
```
npm run dev # start app in development mode
```
4. To finish playing around, just close app.
5. Next, you need to choose your build target. It can be Linux, Windows or MacOS
> [!NOTE]
> Electron is supported to build cross-platform build (e.g. You building Windows build from Linux), but it can be broken. You may search on Internet how to solve this issue. But we recomend not doing cross-platform build at all.
