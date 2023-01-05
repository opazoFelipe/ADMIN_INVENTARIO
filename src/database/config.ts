import mongoose from 'mongoose'
mongoose.set('strictQuery', false);

export default async () => {
    
    try {
        
        await mongoose.connect(process.env.MONGO_DB_CNN as string)

        console.log('Base de datos Online');

    } catch (error) {
        console.error(error)
        throw new Error('Error al inicializar la base de datos')
    }

}

