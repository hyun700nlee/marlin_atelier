import { Studio } from "sanity";
import config from "../../../sanity.config";

export default function SanityStudio() {
  return (
    <div className="sanity-studio-root">
      <Studio config={config} />
    </div>
  );
}
