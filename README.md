# Open World Forum

----

## Prerequisite

* XCode with command line tools installed
* Android SDK with api target 17 installed: **brew install android**
* Node.js: **brew install node**
* Yeoman stack: **npm install -g grunt-cli bower yo**
* nomad-cli: **gem install nomad-cli**
* stitch: **gem install stitch**


## Build

* **cp tokens.json.example tokens.json**: add your testflightapp tokens
* **npm install && bower install**: install the dependencies
* **grunt**: build the application
* **grunt deploy**: upload apps to testflightapp


## License

MIT :

Copyright (C) 2013 Smile Mobile Team

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.