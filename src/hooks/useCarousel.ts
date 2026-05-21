export function useCarousel<T>(items: T[]) {
  return {
    items,
    activeIndex: 0,
    activeItem: items[0]
  };
}
