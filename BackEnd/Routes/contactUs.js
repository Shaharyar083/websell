const mongoose = require("mongoose");
const router = require("express").Router();
const Message = require("../Models/contactUs");

// Register User :
router.post("/send", async (req, res) => {
  console.log("/message/send route ==========>");
  try {
    let { name, email, message } = req.body;

    let msg = await Message.create({
      name,
      email,
      message,
    });
    await msg
      .save()
      .then((data) => {
        res.status(200).json({ msg: "Message received", data });
      })
      .catch((err) => {
        res.status(400).json({ msg: "Message not received", err });
      });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Contact US", err });
  }
});

router.get("/get-msg", async (req, res) => {
  try {
    let data = await Message.find();
    res.status(200).json({ msg: "All Messages", data });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting all Posts" });
  }
});

module.exports = router;
