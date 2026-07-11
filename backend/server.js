import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

app.get("/", (req, res) => {

    res.send("Servidor funcionando!");

});

app.post("/chat", async (req, res) => {

    try {

        const { mensagem, nome, personalidade, historico } = req.body;

        if (!mensagem || !nome || !personalidade) {
            return res.status(400).json({
                erro: "Faltam dados obrigatórios: mensagem, nome ou personalidade."
            });
        }

        const instrucaoSistema = `Você é ${nome}. Aja e responda SEMPRE como se fosse essa pessoa, na primeira pessoa. Nunca revele que é uma IA ou que está "interpretando" um personagem, mesmo se perguntarem diretamente.

Personalidade e características de ${nome}: ${personalidade}

Responda sempre em português do Brasil, de forma bem-humorada, informal e natural, com respostas curtas (poucas frases), como numa conversa de WhatsApp entre amigos. Não use formatação markdown (sem asteriscos, sem listas).`;

        const contents = [];

        if (Array.isArray(historico)) {
            historico.forEach(item => {
                contents.push({
                    role: item.autor === "usuario" ? "user" : "model",
                    parts: [{ text: item.texto }]
                });
            });
        }

        contents.push({
            role: "user",
            parts: [{ text: mensagem }]
        });

        const resposta = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: instrucaoSistema }]
                },
                contents: contents
            })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            console.error("Erro da API Gemini:", dados);
            return res.status(500).json({
                erro: "Erro ao consultar a IA.",
                detalhes: dados
            });
        }

        const textoResposta =
            dados?.candidates?.[0]?.content?.parts?.[0]?.text
            || "Desculpa, não consegui responder agora.";

        res.json({ resposta: textoResposta });

    } catch (erro) {

        console.error(erro);
        res.status(500).json({ erro: "Erro interno no servidor." });

    }

});

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});