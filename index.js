import { log } from "./utils";
import { createSignal, createEffect, createMemo } from "./reactive";

log("1. Create");
const [firstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Smith");
const [showFullName, setShowFullName] = createSignal(true);

const displayName = createMemo(() => {
  if (!showFullName()) return firstName();
  return `${firstName()} ${lastName()}`;
});

createEffect(() => log("My name is", displayName()));

log("2. Set showFullName: false ");
setShowFullName(false);

log("3. Change lastName");
setLastName("Legend");

log("4. Set showFullName: true");
setShowFullName(true);
