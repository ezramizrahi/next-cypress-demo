import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Create a new home
    if (req.method === 'POST') {
        // try/catch block in case something goes wrong with request
        try {
            // destructuring
            const { image, title, description, director, year } = req.body;
            // create film record in db
            const film = await prisma.film.create({
                data: { image, title, description, director, year },
            });
            // return film to client that initiated the HTTP request
            res.status(200).json(film);
        } catch (error) {
            res.status(500).json({ message: 'Apologies - something went wrong' });
        }
    } else {
        // HTTP method not supported
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `HTTP method ${req.method} is not supported.`});
    };
};