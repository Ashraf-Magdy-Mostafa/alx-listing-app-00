import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE, APP_NAME } from '../constants';

const Home: NextPage = () => (
  <>
    <Head>
      <title>{APP_NAME}</title>
      <meta name="description" content="ALX Listing App - Airbnb clone foundational structure" />
    </Head>
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">{APP_NAME}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Sample Property"
          imageSrc={PLACEHOLDER_IMAGE}
          description="A cozy place to stay."
          onClick={() => alert('Card clicked!')}
        />
      </div>
      <div className="mt-6">
        <Button
          label="Click Me"
          onClick={() => alert('Button clicked!')}
          variant="primary"
        />
      </div>
    </main>
  </>
);

export default Home;
