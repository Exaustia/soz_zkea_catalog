import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug;

  return {
    title: "Showroom",
  };
}
export default function Showroom() {
  return (
    <DefaultLayout>
      <BreadCumb current={"Showroom"} />
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        En cours de développement
      </div>
    </DefaultLayout>
  );
}
