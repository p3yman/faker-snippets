import { generateUserData, generateUserSource } from "@/utils/fakers/user";
import { ResourceItem } from "../resource-item/ResourceItem";

const resources = [
  {
    name: "user",
    label: "User",
    generators: {
      output: generateUserData,
      source: generateUserSource,
    },
  },
];

interface ResourcesProps {}

export const Resources = ({}: ResourcesProps) => {
  return (
    <div className="flex flex-col gap-10">
      {resources.map(({ name, label, generators }) => {
        return (
          <ResourceItem
            name={name}
            label={label}
            generators={generators}
            key={name}
          />
        );
      })}
    </div>
  );
};
