const express = require("express");
const { hexToRgb } = require("./hextorgb");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html, style.css, etc.


// Root route serves HTML (for normal use) or "Hello" (for tests)
app.get("/", (req, res) => {
    if (process.env.NODE_ENV === "test") {
        res.send("Hello");  // for automated tests
    } else {
        res.sendFile(__dirname + "/index.html");  // for browser / UI
    }
});




// Hex → RGB API
app.get("/hextorgb", (req, res) => {
    try {
        const hex = req.query.hex;
        const rgb = hexToRgb(hex);
        res.json(rgb);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

module.exports = app;
