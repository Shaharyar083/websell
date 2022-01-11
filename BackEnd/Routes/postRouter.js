const router = require("express").Router();
const PostModel = require("../Models/PostModel");
const multer = require("multer");
const cloudinary = require("../utility/cloudinary");
var nodemailer = require('nodemailer');

// Getting All Posts :
router.get("/get-market", async (req, res) => {
  try {
    let postData = await PostModel.find({ type: "market" });
    res.status(200).json({ msg: "All PostsData", data: postData });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting all Posts" });
  }
});

// Getting Posts by ID :
router.post("/my", async (req, res) => {
  let { id } = req.body
  try {
    let postData = await PostModel.find({ user: id }).populate("bid.user");
    res.status(200).json({ msg: "All MY Posts", data: postData });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting My Posts" });
  }
});

// Getting All Posts :
router.get("/get-admin", async (req, res) => {
  try {
    let postData = await PostModel.find({ type: "admin" });
    res.status(200).json({ msg: "All PostsData", data: postData });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting all Posts" });
  }
});

// Getting All Posts :
router.get("/get-websell", async (req, res) => {
  try {
    let postData = await PostModel.find({ type: "websell" });
    res.status(200).json({ msg: "All PostsData", data: postData });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting all Posts" });
  }
});

// Creating Post :
const upload = multer();
router.post("/create", upload.single("file"), async (req, res) => {
  try {
    let { url, niche, price, income, trend, source, user, type } = req.body;
    if (type == "market" || type == "websell") {
      const imgFile = req.file.path;
      console.log("FILE=========== ", req.file.path);
      cloudinary.uploader.upload(imgFile, async (error, result) => {
        if (result) {
          let PostData = new PostModel({
            url,
            niche,
            price,
            income,
            trend,
            source,
            type,
            user,
            img: result.url,
            imgId: result.public_id,
          });

          await PostData.save()
            .then((data) => {
              res.status(200).json({ msg: "Post Created Success", data });
            })
            .catch((err) => {
              res.status(400).json({ msg: "Error While Creating Post", err });
            });
        } else {
          res.status(400).json({ msg: "Error While Upload Img", error });
        }
      });
    } else {
      let PostData = new PostModel({
        url,
        niche,
        price,
        income,
        trend,
        source,
        type,
        user,
      });
      await PostData.save()
        .then((data) => {
          res.status(200).json({ msg: "Post Created Success", data });
        })
        .catch((err) => {
          res.status(400).json({ msg: "Error While Creating Post", err });
        });
    }
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Creating post", err });
  }
});


// Biding Post :
router.post("/bid", async (req, res) => {
  let { postId, userId, ammount } = req.body
  try {
    let postData = await PostModel.findOne({ _id: postId });

    let newData = postData

    newData.bid = newData.bid.length <= 0 ? [{ user: userId, ammount: ammount }] : [...newData.bid, { user: userId, ammount: ammount }]

    console.log(newData);
    // let completePost = postData
    // let bids = postData.bid

    // bids.push({ user: userId, ammount: ammount })
    // completePost.bid = bids

    let bidAdded = await newData.save()
    res.status(200).json({ msg: "BID to Post Success", data: bidAdded });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Server Error at BIDDING Post" });
  }
});

// Accept Offer :
router.post("/accept", async (req, res) => {
  let { userEmail, sellerEmail, price, url } = req.body
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
    const mailOptions = {
      from: process.env.EMAIL, // sender address
      to: userEmail, // list of receivers
      subject: 'OFFER ACCEPTED', // Subject line
      html: `<p> Your Offer (${url}) for ${price} is Accepted by seller. <br/> Please contact seller at ${sellerEmail} . Thanks </p>`// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Getting all Posts" });
  }
});

// Delete Post:
router.post("/delete", async (req, res) => {
  try {
    let { id } = req.body;
    let postInfo = PostModel.findById(id);
    await cloudinary.uploader.destroy(postInfo.imgId);
    let del = await PostModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Post Delete Success", data: del });
  } catch (err) {
    res.status(400).json({ msg: "Server Error at Delete Post", err });
  }
});

module.exports = router;
