type TitleType = {
  name: string;
};

export const Title = ({ name }: TitleType) => {
  return <div className="title">{name}</div>;
};
