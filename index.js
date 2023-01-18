require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// base route

app.get("/", (req, res) => {
    console.log("Welcome to the API!");
});

// routes

const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

const studentsRoutes = require("./routes/studentsRoute");
app.use("/students", studentsRoutes);

const teachersRoutes = require("./routes/teachersRoute");
app.use("/teachers", teachersRoutes);

const invitationsRoutes = require("./routes/invitationsRoute");
app.use("/invitations", invitationsRoutes);

const lessonsRoutes = require("./routes/lessonsRoute");
app.use("/lessons", lessonsRoutes);

const reviewsRoutes = require("./routes/reviewsRoute");
app.use("/reviews", reviewsRoutes);

const liveVideos = require("./routes/liveVideosRoute");
app.use("/live_videos", liveVideos);

// server

app.listen(PORT, () => {
    console.log(`Express listening at http://localhost:${PORT}`);
});
