const express = require('express')
const addressRouter = express.Router()
const addressController = require('../controllers/address')

addressRouter.post("/", addressController.addAddress)
addressRouter.patch("/:id", addressController.changeAddress )
addressRouter.get("/:userId", addressController.getAddress)
addressRouter.get("/get/:id", addressController.getAddressId)
addressRouter.delete("/:id",  addressController.deleteAdress)

module.exports = addressRouter
