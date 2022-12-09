const stopEventBubbling = (
  e: React.MouseEvent<HTMLFormElement, MouseEvent>
) => {
  e.stopPropagation();
};

export default stopEventBubbling;
