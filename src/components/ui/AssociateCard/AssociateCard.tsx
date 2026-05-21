type AssociateCardProps = {
  name: string;
  logoImage?: string;
};

export function AssociateCard({ name, logoImage }: AssociateCardProps) {
  return (
    <span className="logo-tile" style={logoImage ? { backgroundImage: `url(${logoImage})` } : undefined}>
      {!logoImage && name}
    </span>
  );
}
