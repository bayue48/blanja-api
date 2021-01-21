const productsModel = require('../models/products');
const getModel = require('../models/products')
const getSizeModel = require('../models/products')
const getColorModel = require('../models/products')
const form = require('../helper/form');

module.exports = {
    allProducts: (req,res) => {
        getModel.allProduct()
        .then((data) => {
          form.success(res, data)
        }).catch((err) => {
          form.error(res, err)
        })
      },

    sortProduct: (req, res) => {
        //pagination
        const { query } = req
        const limit = Number(query.limit) || 5 //jika tidak terdeklarasi limit otomatis 5
        const page = Number(query.page) || 1 //jika tidak terdeklarasi page otomatis 1
        const offset = (page - 1) * limit
        //search and filter
        const { name, color, size, category } = req.query;
        let addQuery = ``
        let urlQuery = ``
        let query_length = Object.keys(req.query).length
        if (query.page) {
          query_length -= 1
        }
        if (query.limit) {
          query_length -= 1
        }
        if(query.sortBy){
          query_length -=1
        }
        if(query.orderBy){
          query_length -=1
        }
        let initial = 1
        console.log(query_length)
        if (query_length != 0) {
          addQuery += `WHERE `
          if (name != null) {
            addQuery += `product_name like '%${name}%' `
            urlQuery += `name=${name}`
            urlQuery += `&`
            if (initial != query_length) {
              addQuery += `AND `
              initial += 1
            }
          }
          if (color != null) {
            addQuery += `product_color = ${color} `
            urlQuery += `color=${color}`
            urlQuery += `&`
            if (initial != query_length) {
              addQuery += `AND `
    
              initial += 1
            }
          }
          if (size != null) {
            addQuery += `product_size = ${size} `
            urlQuery += `size=${size}`
            urlQuery += `&`
            if (initial != query_length) {
              addQuery += `AND `
    
              initial += 1
            }
          }
          if (category != null) {
            addQuery += `product_category = ${category} `
            urlQuery += `category=${category}`
            urlQuery += `&`
            if (initial != query_length) {
              addQuery += `AND `
              initial += 1
            }
          }
        }
    
        //SORT
        const { sortBy, orderBy } = req.query
        if (sortBy != null) {
          if (orderBy == `desc`) {
            addQuery += `ORDER BY  ${sortBy} DESC `
            urlQuery += `sortBy=${sortBy}&orderBy=desc&`
          }else{
            addQuery += `ORDER BY ${sortBy} ASC `
            urlQuery += `sortBy=${sortBy}&orderBy=asc&`
          }
        }else{
          addQuery+= `ORDER BY created_at DESC `
          urlQuery +=`sortBy=created_at&orderBy=desc&`
        }
    
        console.log(urlQuery)
        console.log(addQuery)
        productsModel.countResult(addQuery)
          .then((result) => {
            productsModel.sortProduct(addQuery, urlQuery,result[0].total_result, page, offset, limit)
              .then((data) => {
                form.success(res, data)
              }).catch((err) => {
                form.error(res, err)
              })
          }).catch((error) => {
            res.status(500).json(error)
          })
      },
      getSize: (req, res) => {
        getModel.getSize()
          .then((data) => {
            form.success(res, data)
          }).catch((err) => {
            form.error(res, err)
          })
      },
      getColor: (req, res) => {
        getModel.getColor()
          .then((data) => {
            form.success(res, data)
          }).catch((err) => {
            form.error(res, err)
          })
      },
      getSizeId: (req, res) => {
        const { id } = req.params
        getSizeModel.getSize(id).then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    getColorId: (req, res) => {
        const { id } = req.params
        getColorModel.getColor(id).then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
      getByUser: (req,res) => {
        const { user_id } = req.params
        getModel.getByUser(user_id)
        .then((data) => {
          form.success(res, data)
        }).catch((err) =>{
          form.error(res, err)
        })
      },

    postNewProduct: (req, res) => {
        const { body } = req;
        const insertBody = {
            ...body,
            product_img: req.filePath,
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
        };
        const image = req.filePath.split(',')
        productsModel.postNewProduct(insertBody)
            .then((data) => {
                form.success(res, {
                    msg: 'Product succesfully added',
                    product_img: image,
                    data: { id: data.insertId, ...insertBody },
                }
                );
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    getProductById: (req, res) => {
        const { id } = req.params;

        productsModel.getProductById(id)
            .then((data) => {
                if (data.length) {
                    form.success(res, data)
                } else {
                    res.status(404).json({
                        msg: 'Data not Found',
                    });
                }
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const updateBody = {
            ...body,
            product_img: req.filePath,
            updated_at: new Date(Date.now())
        };
        const image = req.filePath.split(',')
        productsModel.updateProduct(updateBody, id)
            .then((data) => {
                form.success(res, {
                    msg: 'Product succesfully updated',
                    product_img: image,
                    data: { id: data.updateId, ...updateBody },
                }
                );
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        productsModel.deleteProduct(id)
            .then(() => {
                form.success(res, {
                    msg: 'Product succesfully deleted',
                },
                );
            })
            .catch(err => {
                form.error(res, err);
            })
    }
};