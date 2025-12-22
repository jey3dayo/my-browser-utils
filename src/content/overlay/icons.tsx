import { Icon } from "@/components/icon";
import type { Theme } from "@/ui/theme";

export function PinIcon(): React.JSX.Element {
  return <Icon aria-hidden="true" name="pin" />;
}

export function CopyIcon(): React.JSX.Element {
  return <Icon aria-hidden="true" name="copy" />;
}

export function ThemeIcon({ theme }: { theme: Theme }): React.JSX.Element {
  let name: "monitor" | "moon" | "sun" = "monitor";
  if (theme === "dark") {
    name = "moon";
  } else if (theme === "light") {
    name = "sun";
  }
  return <Icon aria-hidden="true" name={name} />;
}
