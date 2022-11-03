// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGzip = require('../../../app/middleware/gzip');
import ExportRobot = require('../../../app/middleware/robot');

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof ExportGzip;
    robot: typeof ExportRobot;
  }
}
