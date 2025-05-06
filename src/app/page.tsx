import Categories from "@/components/Categories";
import Type from "@/components/Type";

export default function Home() {
  return (
    <div className="w-full h-full p-6 bg-secondary" >
      <Categories />
      <Type typename="Healthy Living" typeDescription="Healthy Living books are designed to educate and inspire readers" css="mt-10" />
    </div>
  );
}
