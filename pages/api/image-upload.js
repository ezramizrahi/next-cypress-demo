import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import { decode } from 'base64-arraybuffer';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb'
        },
    },
};

export default async function handler(req, res) {
    // upload image to supabase app
    if (req.method === 'POST') {
        let { image } = req.body;

        if (!image) {
            return res.status(500).json({ message: 'no img provided' });
        };

        try {
            const contentType = image.match(/data:(.*);base64/)?.[1];
            console.log('contentType', contentType)
            const base64FileData = image.split('base64,')?.[1];
            console.log('base64FILEData', base64FileData)
            if (!contentType || !base64FileData) {
                return res.status(500).json({ message: 'img data not valid' });
            };

            // upload img
            const fileName = nanoid();
            console.log('filename', fileName)
            const ext = contentType.split('/')[1];
            console.log('ext', ext)
            const path = `${fileName}.${ext}`;
            console.log('path', path)

            const { data, error: uploadError } = await supabase.storage
                .from(process.env.SUPABASE_BUCKET)
                .upload(path, decode(base64FileData), {
                    contentType,
                    upsert: true,
                });
            
            if (uploadError) {
                console.log('upload error', uploadError);
                throw new Error('unable to upload img to storage');
            };
            console.log('image-upload data', data)

            // construct public url
            const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/${data.path}`;

            return res.status(200).json({ url });
        } catch (error) {
            res.status(500).json({ message: 'something went wrong' });
        }
    } else {
        // HTTP method not supported
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `HTTP method ${req.method} is not supported.`});
    };
};