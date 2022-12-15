const stopEventBubbling = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.stopPropagation();
};

export default stopEventBubbling;
