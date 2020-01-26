'use strict';

var moment = require('moment');
var fs = require('fs');
var path = require('path');

var now = moment();
var jsonPath = path.join(__dirname, 'version.js');

var versionFileContent = "export default {\n  version: '1." + now.format('YYMM') + "." + now.format('DDHHmm') + "',\n  buildTime: '" + now.toISOString(false) + "',\n};\n";

fs.writeFile(jsonPath, versionFileContent, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
//# sourceMappingURL=version-generator.js.map