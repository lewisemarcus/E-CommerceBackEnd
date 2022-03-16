const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ include: Product })

    res.status(200).json(tagData)
  }
  catch (err) {
    res.status(500).json({
      message: 'Tag GET ERROR',
      body: err
    })
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: Product })

    if (!tagData) return res.status(404).json({ message: 'No tag found with this id!' })
    else res.status(200).json(tagData)
  }
  catch (err) {
    res.status(500).json({
      message: 'Tag id GET ERROR',
      body: err
    })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData)
  }
  catch (err) {
    res.status(400).json({
      message: 'Tag POST ERROR',
      body: err
    })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name
    },
      {
        where: {
          id: req.params.id
        }
      }
    )
    if (!tagData) return res.status(404).json({ message: 'No tag found with this id!' })
    else res.status(200).json({
      message: `Tag UPDATED to ${req.body.tag_name}`,
      body: tagData
    })
  }
  catch (err) {
    res.status(400).json({
      message: 'Tag UPDATE ERROR',
      body: err
    })
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({ where: { id: req.params.id } })

    if (!tagData) return res.status(404).json({ message: 'No Tag found with this id!' })
    else
      res.status(200).json({
        message: `Tag DELETED`,
        body: tagData
      })
  }
  catch (err) {
    res.status(500).json({
      message: 'Tag DELETE ERROR',
      body: err
    })
  }
});

module.exports = router;
