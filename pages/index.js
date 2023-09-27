import DefaultLayout from "@/features/Layouts/DefaultLayout";
import HeroBanner from "@/features/Home/components/HeroBanner";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";
import Testimonials from "@/features/Home/components/Testimonials";
import { getProperties } from "@/features/common/api/getProperties";

export default function Home({ featuredProperties }) {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  // const { hits } = require("@/features/data/properties");
  const properties = await getProperties(5);
  return {
    props: { featuredProperties: properties }, // hits.slice(0, 5) properties
  };
}
