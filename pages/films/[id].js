import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';

const prisma = new PrismaClient();

export async function getStaticPaths() {
    // Get all Film IDs from the db
    const films = await prisma.film.findMany({
        select: { id: true },
    });
    return {
        paths: films.map(film => ({
            params: { id: film.id },
        })),
        fallback: true,
    };
};

export async function getStaticProps({ params }) {
    // Get the current film from the db
    const film = await prisma.film.findUnique({
        where: { id: params.id },
    });
    if (film) {
        return {
            props: JSON.parse(JSON.stringify(film)),
        };
    };
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
};

const ListedFilm = (film = null) => {
    // Get the Next.js router
    const router = useRouter();
    // Fallback 
    if (router.isFallback) {
        return 'Loading...';
    };

    return (
        <PageLayout>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-4">
                <div>
                    <h1 className="text-2xl font-semibold truncate">
                    {film?.title ?? ''}
                    </h1>
                    <ol className="inline-flex items-center space-x-1 text-gray-500">
                    <li>
                        <span>{film?.description ?? ''}</span>
                        <span aria-hidden="true"> · </span>
                    </li>
                    <li>
                        <span>{film?.director ?? ''}</span>
                        <span aria-hidden="true"> · </span>
                    </li>
                    <li>
                        <span>{film?.year ?? 0}</span>
                    </li>
                    </ol>
                </div>
                </div>

                <div className="mt-6 relative aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md overflow-hidden">
                {film?.image ? (
                    <Image
                    src={film.image}
                    alt={film.title}
                    layout="fill"
                    objectFit="cover"
                    />
                ) : null}
                </div>

                <p className="mt-8 text-lg">{film?.description ?? ''}</p>
            </div>
        </PageLayout>
    );
};

export default ListedFilm;