const { response } = require("express");
const express = require("express");
const app = express();
const cors = require('cors');
const users = [{
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
    }
}]

app.use(cors());
app.get("/api/user/self", (req, res) => {
    res.send(users)
})
    
app.put('/api/user/self', (req, res) => {
    
    
    // console.log(users.id);
    const user = req.body;
    // user.email = req.body.email;
    // user.communications.email.email = req.body.communications.email.email;
    // user.communications.email.notifications = req.body.communications.email.notifications;
    // user.communications.telegram.chat_id = req.body.communications.telegram.chat_id;
    // user.communications.telegram.notifications = req.body.communications.telegram.notifications;
    res.send(req.params);

})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
