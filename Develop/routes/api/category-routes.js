const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ include: Product })

    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: Product })

    if (!categoryData) return res.status(404).json({ message: 'No category found with this id!' })

    else {
      res.status(200).json(categoryData)
    }
  }
  catch (err) {
    res.status(500).json({
      message: 'Category GET ERROR',
      body: err
    })
  }
});

router.post('/', async (req, res) => {
  // create a new category'
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(400).json({
      message: 'Category POST ERROR',
      body: err
    })
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      }
    )
    if (!categoryData) return res.status(404).json({ message: 'No category found with this id!' })
    else {
      res.status(200).json({
        message: `Category UPDATED to ${req.body.category_name}`,
        body: categoryData})
    }
  }
  catch (err) {
    res.status(400).json({
      message: 'Category UPDATE ERROR',
      body: err
    })
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({ where: { id: req.params.id } })

    if (!categoryData) return res.status(404).json({ message: 'No category found with this id!' })
    else {
      res.status(200).json({
        message: `Category DELETED`,
        body: categoryData})
    }
  }
  catch (err) {
    res.status(500).json({
      message: 'Category DELETE ERROR',
      body: err
    })
  }
});

module.exports = router;
