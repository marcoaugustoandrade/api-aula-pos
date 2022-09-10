import app from './src/app.js'
import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3002

app.listen(port, () => { console.log(`API rodando na porta ${port}`) })
