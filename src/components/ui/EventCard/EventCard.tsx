import Link from "next/link";
import { getImageUrl } from "@/utils/getImageUrl";

type EventCardProps = {
  href: string;
  image?: string;
  title: string;
  date: string;
  category?: string;
};

export function EventCard({ href, image, title, date, category }: EventCardProps) {
  return (
    <Link className="event-line" href={href}>
      <div className="event-line-image" style={{ backgroundImage: `url(${getImageUrl(image)})` }} />
      <div>
        <span>{category ? `${category} · ${date}` : date}</span>
        <h3>{title}</h3>
        <small>Ver experiência</small>
      </div>
    </Link>
  );
}
