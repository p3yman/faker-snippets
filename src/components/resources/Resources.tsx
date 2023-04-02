import { ResourceItem } from "../resource-item/ResourceItem";

const resources = {
  user: "User",
  company: "Company",
  animal: "Animal",
  product: "Product",
  cart: "Cart",
};

interface ResourcesProps {}

export const Resources = ({}: ResourcesProps) => {
  return (
    <div className="flex flex-col gap-10">
      {Object.entries(resources).map(([name, label]) => {
        return <ResourceItem name={name} label={label} key={name} />;
      })}
    </div>
  );
};
