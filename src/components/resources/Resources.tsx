import {
  generateUserData,
  generateUserSource,
  userStructure,
} from "@/utils/fakers/user";
import { ResourceItem } from "../resource-item/ResourceItem";

const resources = [
  {
    name: "user",
    label: "User",
    structure: userStructure,
    generators: {
      output: generateUserData,
      source: generateUserSource,
    },
  },
];

export const Resources = () => {
  return (
    <div className="flex flex-col gap-10">
      {resources.map(({ name, label, structure, generators }) => {
        return (
          <ResourceItem
            name={name}
            label={label}
            structure={structure}
            generators={generators}
            key={name}
          />
        );
      })}
    </div>
  );
};
