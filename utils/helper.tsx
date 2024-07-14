export function handleForwardCarouselChange(images: string | any[], position: number, setPosition: (arg0: number) => void) {
    if (images.length - 1 === position) {
      setPosition(0);
    } else {
      setPosition((prev: number) => prev + 1);
    }
  }
  
  export function handleBackwardCarouselChange(images: string | any[], position: number, setPosition: (arg0: number) => void) {
    if (position === 0) {
      setPosition(images.length - 1);
    } else {
      setPosition((prev: number) => prev - 1);
    }
  }
  