require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// base route

app.get("/", (req, res) => {
    console.log("Welcome to the API!");
});

// implementing gpt3

const configuration = new Configuration({
    organization: "org-vICj9H8TZWjRiLX60K2AlsXb",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// create a simple openai api call

app.post("/openai", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 100,
            temperature: 0.7,
        });

        res.json({
            message: response.data.choices[0].text,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "There has been in error in getting the data from the API" });
    }
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

const liveVideosRoutes = require("./routes/liveVideosRoute");
app.use("/live_videos", liveVideosRoutes);

const readingsRoutes = require("./routes/readingsRoute");
app.use("/readings", readingsRoutes);

const dictionariesRoutes = require("./routes/dictionariesRoute");
app.use("/dictionaries", dictionariesRoutes);

const dictionariesWordsRoutes = require("./routes/dictionariesWordsRoute");
app.use("/dictionaries_words", dictionariesWordsRoutes);

// server

app.listen(PORT, () => {
    console.log(`Express listening at http://localhost:${PORT}`);
});
