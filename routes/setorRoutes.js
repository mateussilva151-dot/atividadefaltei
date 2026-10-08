import express from "express"
import { atualizarSetor, cadastrarSetor, deletarsetor, ListarSetor, BuscarSetorPorId } from "../controller/setorController.js"

const router = express.Router();

router.post("/", cadastrarSetor);
router.get("/", ListarSetor)
router.patch("/:indice", atualizarSetor)
router.delete("/:indice", deletarsetor)
router.get("/:indice", BuscarSetorPorId)

export default router;