export type setActiveFunction = (props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined;

export type headerProps = {
  location: Location;
};
