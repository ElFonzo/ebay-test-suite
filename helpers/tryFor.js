const retry = require('bluebird-retry');

const tryFor = (max, interval)=> {
    return (fn) => retry(fn, {max_tries: max, interval: interval})
}

module.exports = {
    tryFor
}