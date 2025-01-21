import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";

export const Key = ({ icon, action, cls, id, dispatchFn }: TYPES.KeyProps) => {
  console.log("Key Rendered");

  return (
    <div
      id={id}
      className={`key ${cls}`}
      onClick={(e) => {
        const btn = e.target as HTMLDivElement;
        btn.classList.add("clicked");
        setTimeout(() => {
          btn.classList.remove("clicked");
        }, 200);
        dispatchFn(action);
      }}
    >
      <FontAwesomeIcon icon={faIcons[icon]} />
    </div>
  );
};
