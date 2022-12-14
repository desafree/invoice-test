import { useState } from "react";

function useTrigger() {
  const [trigger, setTrigger] = useState(false);
  const handleTrigger = () => {
    setTrigger((prevState) => !prevState);
  };

  return { trigger, handleTrigger };
}

export default useTrigger;
