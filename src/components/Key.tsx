import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";

interface Props {
  // children: JSX.Element;
  action: number;
  cls: string;
  icon: string;
  id: string;
  title: string;
  dispatchFn: React.Dispatch<number>;
}

export const Key = ({ icon, action, cls, id, title, dispatchFn }: Props) => {
  console.log("Key Rendered");

  return (
    <div
      id={id}
      title={title}
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
