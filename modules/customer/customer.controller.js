(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var CustomerMiddleware = require('./customer.module')().CustomerMiddleware;

    /** 
     * @swagger 
     * /customers: 
     *   post: 
     *     description: Create an Employee 
     *     parameters: 
     *     - in: formData
     *       name: firstName
     *       type: string
     *       description: A person's firstName.
     *     - in: formData
     *       name: lastName
     *       type: string
     *       description: A person's lastName.
     *     - in: formData
     *       name: email
     *       type: string
     *       description: A person's email.
     *     - in: formData
     *       name: phoneNumber
     *       type: number
     *       description: A person's phoneNumber.
     *     - in: formData
     *       name: address
     *       type: String
     *       description: A person's address.
     *     - in: formData
     *       name: city
     *       type: String
     *       description: A person's city.
     *     - in: formData
     *       name: state
     *       type: String
     *       description: A person's state.
     *     - in: formData
     *       name: zipCode
     *       type: String
     *       description: A person's zipCode.
     *     - in: formData
     *       name: country
     *       type: String
     *       description: A person's country.
     *     responses:  
     *       201: 
     *         description: Created  
     *   
     */

    router.post('/',
        CustomerMiddleware.addCustomer,
        function (req, res) {
            res.status(201).json(req.response);
        });
        
/** 
     * @swagger 
     * /customers: 
     *   get: 
     *     description: Get all Employee 
     *     responses:  
     *       200: 
     *         description: Success  
     *   
     */

    router.get('/',
        CustomerMiddleware.getCustomers,
        function (req, res) {
            res.status(200).json(req.response);
        });

                /** 
     * @swagger 
     * /customers/{customerId}: 
     *   get: 
     *     description: get one Employee 
     *     parameters:
     *     - in: path
     *       name: customerId
     *     responses:  
     *       200: 
     *         description: Success  
     *   
     */
    
    router.get('/:customerId',
        CustomerMiddleware.getCustomerById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:customerId',
        CustomerMiddleware.modifyCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });

        /** 
     * @swagger 
     * /customers/{customerId}: 
     *   delete: 
     *     description: delete one Employee 
     *     parameters:
     *     - in: path
     *       name: customerId
     *     responses:  
     *       200: 
     *         description: Success  
     *   
     */
    
    router.delete('/:customerId',
        CustomerMiddleware.removeCustomer,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();