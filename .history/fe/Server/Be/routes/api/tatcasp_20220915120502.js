var express = require("express");
var router = express.Router();
var db = require("../../models/database");

router.get("/", function (req, res, next) {
  let sql = `SELECT * FROM products`;
  db.query(sql, function (err, data) {
    console.log(data);
    res.json(data);
  });
});
router.get("/:id", function (req, res, next) {
  let id = req.params.id;
  let sql = "SELECT * FROM products WHERE id_sp = ?";
  db.query(sql, id, (err, d) => {
    res.json(d[0]);
  });
});

// router.post("/", function (req, res, next) {
//   let data = req.body;
//   let sql = "INSERT INTO products SET ?";
//   db.query(sql, data, (err, d) => {
//     if (err) throw err;
//     res.json({ thongbao: "Đã chèn xong đơn hàng" });
//   });
// });

module.exports = router;
