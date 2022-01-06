const router = require("express").Router();
const PostModel = require("../Models/PostModel");
const multer = require("multer");
const cloudinary = require("../utility/cloudinary");

// Getting All Posts :
router.get("/get", async (req, res) => {
  try {
    let postData = PostModel.find();
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
    if (type == "market") {
      const imgFile = req.file.path;
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
