import Link from "next/link";
import Layout from "../src/components/Layout";
import {SocialLinks} from "../src/components/SocialLinks";

const NotFoundPage = () => (
  <Layout title="Coming Soon - KAZOMO">
    <img
      src="/images/xera.svg"
      alt="Kazomo "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Coming soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">404</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          Page not found
        </p>
      </div>
      <div className="text-center">
        <Link href="/">
          <button className="mx-10 lg:max-w-xl lg:mx-auto p-5 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-5">
      <SocialLinks />
    </div>
  </Layout>
);

export default NotFoundPage;
