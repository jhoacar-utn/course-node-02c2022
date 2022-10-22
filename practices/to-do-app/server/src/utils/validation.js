const { validationResult } = require("express-validator");
/**
 * This function iterate in each rule
 * Execute each rule with the request
 * Then evaluate if the request has errors
 * Then if it has errors, return that
 * otherwise return errors=null
 * @param {Middleware[]} rules 
 * @param {Request} request 
 */
module.exports.validate = (rules, request) => {

    rules.map((middleware) => {
        middleware(request, {}, () => { });
    })

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return {
            errors: errors.array()
        }
    }
    return {
        errors: null
    }
}