import "./db"
import "./models/Topic";
import app from "./server";

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`✅ Listening http://localhost:${PORT}/`)
});