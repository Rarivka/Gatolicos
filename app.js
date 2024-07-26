require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');

// Inicializa la aplicación Express
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3018;

// Conexión a MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mi_proyecto';
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Inicialización de GridFS
let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

// Configuración de almacenamiento de Multer-GridFS
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

// Endpoint para subir imágenes
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

// Endpoint para obtener imágenes
app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({ err: 'No file exists' });
        }

        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
    });
});

// Ruta raíz
app.get('/', (req, res) => {
    res.send(`<h1> Bon dia 😊 Listening on port ${port} </h1>`);
});

// Ruta de gatos
const gatosRoutes = require('./routes/gatos.js');
app.use("/gatos", gatosRoutes);

// Inicializa la conexión a la base de datos
initDbConnect();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
