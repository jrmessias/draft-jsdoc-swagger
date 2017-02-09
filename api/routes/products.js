/**
 * @swagger
 * resourcePath: /api/
 * description: All endpoints
 */

/**
 * @swagger
 * definitions:
 * HelloWorldResponse:
 *   required:
 *     - message
 *   properties:
 *     message:
 *       type: string
 * ErrorResponse:
 *   required:
 *     - message
 *   properties:
 *     message:
 *       type: string
 * NotFoundResponse:
 *   required:
 *     - message
 *   properties:
 *     message:
 *       type: string        
 *
 */
/**
 * @swagger
 * models:
 *   Product:
 *     id: Product
 *     properties:
 *       name:
 *         type: string
 *         require: true
 *       description:
 *         type: string
 *         require: true
 *       quantity:
 *         type: integer
 *         require: false
 *       price:
 *         type: float
 *         require: false
 */

 var express = require('express');
 var router = express.Router();
 var Products = require('../models/Products');

/**
* @swagger
* path: /products
* operations:
*   -  httpMethod: GET
*      summary: Get all products
*      notes: For get one product see product/{id}
*      responseClass: Product
* responses:
*   "200":
*     description: Success
*     schema:
*       $ref: "#/definitions/HelloWorldResponse"
*   "404":
*     description: Not found
*     schema:
*       $ref: "#/definitions/NotFoundResponse"
*   default:
*     description: Error
*     schema:
*       $ref: "#/definitions/ErrorResponse"
*/
 router.get('/', (req, res) => {
    Products
    .find({})
    .exec()
    .then((data) => {
        if (!data) {
            return res.json({
                status: false,
                data: {}
            })
        }
        return res.json({
            status: true,
            data
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err
        })
    });
})

/**
 * @swagger
 * path: /products 
 * operations:
 *   -  httpMethod: POST
 *      summary: Create new product
 *      notes: 
 *      responseClass: Product
 *      consumes: 
 *        - application/json
 *        - text/xml
 *      parameters:
 *        - name: name
 *          description: Name
 *          paramType: form
 *          required: true
 *          dataType: string
 *        - name: quantity
 *          description: Quantity
 *          paramType: form
 *          required: true
 *          dataType: integer
 *        - name: description
 *          description: Description
 *          paramType: form
 *          required: false
 *          dataType: string
 *        - name: price
 *          description: Price
 *          paramType: form
 *          required: false
 *          dataType: float
 * responses:
 *   "200":
 *     description: Testing
 *   "400":
 *     description: TestingAgain
 */     
 .post('/', (req, res) => {
    let product = new Products(req.body);
    product
    .save()
    .then((data) => {
        return res.json({
            status: true,
            data
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err
        })
    });
})

/**
 * @swagger
 * path: /products/{id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Get specified product
 *      notes: 
 *      responseClass: Product
 *      consumes: 
 *        - application/json
 *        - text/xml
 *      parameters:
 *        - name: id
 *          description: id
 *          paramType: path
 *          required: true
 *          dataType: string
 */
//            .findOne({
//                '_id': req.params.id
//            })
//            .find({
//                '_id' : req.params.id
//            })
.get('/:id', (req, res) => {
    Products
    .findById(req.params.id)
    .then((data) => {
        if (!data) {
            return res.json({
                status: false,
                data: {}
            })
        }
        return res.json({
            status: true,
            data
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err
        })
    });

})
/**
 * @swagger
 * path: /products/{id}
 * operations:
 *   -  httpMethod: PUT
 *      summary: Update specified product
 *      notes: 
 *      responseClass: Product
 *      consumes: 
 *        - application/json
 *        - text/xml
 *      parameters:
 *        - name: id
 *          description: id
 *          paramType: path
 *          required: true
 *          dataType: string
 *        - name: name
 *          description: Name
 *          paramType: form
 *          required: true
 *          dataType: string
 *        - name: quantity
 *          description: Quantity
 *          paramType: form
 *          required: true
 *          dataType: integer
 *        - name: description
 *          description: Description
 *          paramType: form
 *          required: false
 *          dataType: string
 *        - name: price
 *          description: Price
 *          paramType: form
 *          required: false
 *          dataType: float
 *      responses:
 *        '200':
 *          description: 'Pagamento cancelado'
 */
 .put('/:id', (req, res) => {
    Products
    .update({
        _id: req.params.id
    }, req.body)
    .then((data) => {
        Products
        .findById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.json({
                    status: false,
                    data: {}
                })
            }
            return res.json({
                status: true,
                data
            })
        })
        .catch((err) => {
            return res.json({
                status: false,
                data: err
            })
        });
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err
        })
    });
})
/**
 * @swagger
 * path: /products/{id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: DELETE specified product
 *      notes: 
 *      responseClass: Product
 *      consumes: 
 *        - application/json
 *        - text/xml
 *      parameters:
 *        - name: id
 *          description: id
 *          paramType: path
 *          required: true
 *          dataType: string
 */
 .delete('/:id', (req, res) => {
    Products
    .remove({
        _id: req.params.id
    })
    .then((data) => {
        return res.json({
            status: true,
            data
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err
        })
    });
});

 module.exports = router;
