const trxModel = require('../models/trx')
const form = require ('../helper/form')
const { promises } = require('fs')

module.exports = {
    addTrx: (req, res) => {
        const {body} = req
        console.log(body)
        trxModel.addTrx(body)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })

    },

    addMultiple: (req, res) =>{
        const {body} = req
        console.log(body)
        trxModel.addOrder(body)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    getMyTrans: (req, res) =>{
        const {userId} = req.params
        trxModel.getMyTrans(userId)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },

    getOrderDetails: (req, res) =>{
        const {trxId} = req.params
        Promise.all([
            trxModel.getTransDetails(trxId),
            trxModel.getOrderDetails(trxId)
        ])
        .then((result) =>{
            let finalResult = result[0].data
            finalResult.cardOrder = result[1].data
            res.status(200).json({
                status:200,
                message:`Detail Order ${trxId}`,
                data:finalResult
            })
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    getItemsTrx: (req, res) => {
        const { trxId } = req.params
        trxModel.getOrderDetails(trxId)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },

    getItemtoReview: (req, res) => {
        const { trxId } = req.params
        trxModel.getItemtoReview(trxId)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}