import type { Metadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import { Cart } from "./Cart";

export const metadata: Metadata = {
  title: "Soz - Panier",
};

export default function Page() {
  return (
    <DefaultLayout>
      <BreadCumb current={"Panier"} />
      <Cart />
    </DefaultLayout>
  );
}
