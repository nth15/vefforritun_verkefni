/**
 * @author Ólafur Sverrir Kjartansson 
 */

 const {
  DEBUG = false,
} = process.env;

function debug(...m) {
  if (DEBUG) {
    console.info(...m);
  }
}

module.exports = debug;
