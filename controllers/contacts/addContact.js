const { ctrlWrapper } = require('../../utils');
const { Contact } = require('../../models');

const addContact = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = ctrlWrapper(addContact);
