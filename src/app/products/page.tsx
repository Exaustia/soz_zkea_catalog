import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: "Soz - Tous les produits",
  };
}
export default function Products() {
  return (
    <DefaultLayout>
      <BreadCumb current={"Produits"} />
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        Tous les produits...
      </div>
    </DefaultLayout>
  );
}
