import express from "express";
import { cadastrarAmostra } from "./controller/amostracontroller.js"
import amostraRoutes from "./routes/amostraRoutes.js"
import setorRoutes from "./routes/setorRoutes.js"

const app = express();

app.use(express.json());

app.use("/amostra", amostraRoutes )
app.use("/setor", setorRoutes )

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})
