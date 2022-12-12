const stopEventBubbling = (
  e:
    | React.MouseEvent<HTMLFormElement, MouseEvent>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  e.stopPropagation();
};

export default stopEventBubbling;
