import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dbConnection from './database/config';

export default class Server {

    private app: Application
    private port: string
    // private usuariosPath: string
    // private authPath: string
    // private apiDocsPath: string
    // private apiDocsPathJson: string
    
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'

        // this.usuariosPath = '/api/usuarios'
        // this.authPath = '/api/auth'
        // this.apiDocsPath = '/api/docs'
        // this.apiDocsPathJson = '/api/docs.json'

        // // Middlewares
        // this.middlewares()

        // // Rutas de la app
        // this.routes()
    }

    middlewares() {

        // CORS
        // this.app.use(cors())

        // Morgan
        this.app.use(morgan('dev'))

        // Lectura y parseo del body
        // this.app.use(express.json())

        // // Directorio público
        // this.app.use(express.static('public'))
    }

    routes() {
        // this.app.use(this.authPath, require('../routes/auth'))
        // this.app.use(this.usuariosPath, require('../routes/usuarios'))
        this.app.use('/*', (req, res) => res.status(404).json({ msg: 'Not found' }))
    }

    listen() {
        dbConnection()
            .then(c => {
                this.app.listen(this.port, () => {
                    console.log(`Server on port ${this.port}`);
                })
            }).catch(console.log)
    }
}

