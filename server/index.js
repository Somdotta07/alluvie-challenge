const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const users = [
  {
    name: "Test",
    surname: "User",
    email: "test@user.com",
    communications: {
      email: {
        email: "test@user.com",
        notifications: true,
      },
      telegram: {
        chat_id: 1111,
        notifications: false,
      },
    },
  },
];

app.use(cors());
app.get("/api/user/self", (req, res) => {
  res.send(users);
});

app.put("/api/user/self", (req, res) => {
//   const queryParams = req.query;
//    res.json({
//     queryParams
// //   });
//         res.send('test25');
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
