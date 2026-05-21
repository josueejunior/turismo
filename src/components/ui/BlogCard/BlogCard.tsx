import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";

type BlogCardProps = {
  href: string;
  image?: string;
  title: string;
  subtitle: string;
};

export function BlogCard({ href, image, title, subtitle }: BlogCardProps) {
  return (
    <Link className="blog-row" href={href}>
      <div className="blog-row-image" style={{ backgroundImage: `url(${getImageUrl(image)})` }} />
      <div>
        <span>POSTAGEM</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
}
