import { PrismaClient } from '@prisma/client';
import PageLayout from '../components/PageLayout';
import Grid from '../components/Grid';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  // Get all films
  const films = await prisma.film.findMany();
  // Pass the data to the Film component
  return {
    props: {
      // props for the Film component
      films: JSON.parse(JSON.stringify(films)),
    },
  };
};

export default function Film({ films = [] }) {
  return (
    <PageLayout>
      <h1 className="text-xl font-medium text-gray-800">
        Top-rated films
      </h1>
      <p className="text-gray-500">
        Explore some of the best films
      </p>
      <div className="mt-8">
        <Grid films={films} />
      </div>
    </PageLayout>
  );
};