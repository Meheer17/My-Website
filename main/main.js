const r1 = require('./routes/rou1.js');
const r2 = require('./routes/rou2.js');
const r3 = require('./routes/projectsApi/api1.js');
const r4 = require('./routes/projectsApi/api2.js');
const r5 = require('./routes/projectsApi/api3.js');
const r6 = require('./routes/projectsApi/api4.js');
const r7 = require('./routes/projectsApi/auth.js');
const r8 = require('./routes/com.js');


module.exports = function(app) {
    require("./routes/db.js");
    r1(app)
    r2(app)
    r3(app)
    r4(app)
    r5(app)
    r6(app)
    r7(app)
    r8(app)
}