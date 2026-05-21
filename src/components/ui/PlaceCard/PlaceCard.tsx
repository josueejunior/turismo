import Link from "next/link";

type PlaceCardProps = {
  href: string;
  name: string;
  subtitle: string;
  logo: string;
  logoImage?: string;
};

export function PlaceCard({ href, name, subtitle, logo, logoImage }: PlaceCardProps) {
  return (
    <Link className="food-company-card" href={href}>
      <div className="company-logo-mark" style={logoImage ? { backgroundImage: `url(${logoImage})` } : undefined}>
        {!logoImage && logo}
      </div>
      <div>
        <span>{subtitle}</span>
        <strong>{name}</strong>
      </div>
    </Link>
  );
}
