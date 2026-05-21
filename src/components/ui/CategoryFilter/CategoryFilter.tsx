import { Tag } from "@/components/common/Tag";

type CategoryFilterProps = {
  categories: string[];
};

export function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="category-row tourism-category-row" aria-label="Categorias">
      {categories.map((category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </div>
  );
}
