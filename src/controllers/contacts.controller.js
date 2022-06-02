const client = require("../config/database");
const { uuid } = require("uuidv4");

exports.createContact = async (req, res) => {
  const { name, picture, birthday, address, phone_number } = req.body;
  const constactId = uuid();
  const response = await client.query(
    "INSERT INTO contacts (_id, name, picture, birthday, address, phone_number) VALUES ($1, $2, $3, $4, $5, $6)",
    [constactId, name, picture, birthday, address, phone_number]
  );

  res.status(201).send({
    message: "Contact added successfully!",
    body: {
      contact: { name, picture, birthday, address, phone_number },
    },
  });
};

exports.listAllContacts = async (req, res) => {
  client.query("SELECT * FROM contacts", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json({
      message: "Listing all of the contacts",
      size: results.rows.length,
      data: results.rows,
    });
  });
  // res.status(200).json({});
};

exports.findContactById = async (req, res) => {
  const contactId = req.params.id;
  const response = await client.query("SELECT * FROM contacts WHERE _id = $1", [
    contactId,
  ]);
  res.status(200).send(response.rows);
};

exports.updateContactById = async (req, res) => {
  const contactId = req.params.id;
  const { name, picture, birthday, address, phone_number } = req.body;

  const response = await client.query(
    "UPDATE contacts SET name = $1, picture = $2, birthday = $3, address = $4, phone_number = $5 WHERE _id = $6",
    [name, picture, birthday, address, phone_number, contactId]
  );

  res.status(200).send({ message: "Contact Updated Successfully!" });
};

exports.deleteContactById = async (req, res) => {
  const contactId = req.params.id;
  await client.query("DELETE FROM contacts WHERE _id = $1", [contactId]);

  res.status(200).send({ message: "Contact deleted successfully!", contactId });
};
