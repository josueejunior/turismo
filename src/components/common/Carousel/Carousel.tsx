type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  return <div className="carousel-shell">{children}</div>;
}
