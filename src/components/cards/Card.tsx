export type CardProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
};

const Card = ({ image, name }: CardProps) => {
  return (
    <div className="cards-item card">
      <img className="card-image" src={image} alt={name} />
      <div className="card-title">
        <span className="card-name">{name} </span>
      </div>
    </div>
  );
};

// function selectColor(status: string) {
//   switch (status.toLowerCase()) {
//     case 'alive':
//       return 'card-status_alive';
//     case 'dead':
//       return 'card-status_dead';
//     default:
//       return 'card-status_unknown';
//   }
// }

export { Card };
