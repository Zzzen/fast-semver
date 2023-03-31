// @ts-check

const satisfiesWorker = require('./lib').satisfies;

/**
 * @type {import("./lib").satisfies}
 */
module.exports.satisfies = (req, version) => {
  if (typeof req !== "string" || typeof version !== "string") {
    return false;
  }

  return satisfiesWorker(req, version);
};
