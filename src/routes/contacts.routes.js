const router = require("express-promise-router")();
const contactsController = require("../controllers/contacts.controller");

router.post("/contacts", contactsController.createContact);
router.get("/contacts", contactsController.listAllContacts);
router.get("/contacts/:id", contactsController.findContactById);
router.put("/contacts/:id", contactsController.updateContactById);
router.delete("/contacts/:id", contactsController.deleteContactById);

module.exports = router;
