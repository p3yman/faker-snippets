import { useMemo, useState } from "react";
import { ResourceCode } from "../resource-code/ResourceCode";
import { ResourcePreview } from "../resource-preview/ResourcePreview";

interface ResourceItemProps {
  name: string;
  label: string;
}

const exampleCode = `// Users resource
const inter = Inter({ subsets: ['latin'] })
`;

const examplePreview = `const user = {
  name: 'John',
}
`;

export const ResourceItem = ({ name, label }: ResourceItemProps) => {
  const [tab, setTab] = useState<"code" | "preview">("code");

  const refreshButton = useMemo(() => {
    return {
      name: "refresh",
      label: "Refresh",
      onClick: () => {
        console.log("Refreshed!");
      },
    };
  }, []);

  return (
    <div className="w-full mb-12">
      <h1 className="font-title text-2xl mb-4">{label}</h1>
      <div className="flex gap-2 w-full">
        <div className="w-1/2">Fields...</div>
        <div className="w-1/2">
          <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-slate-800 rounded-t border-b border-slate-700">
            <Tab
              label="Code"
              active={tab === "code"}
              onClick={() => setTab("code")}
            />
            <Tab
              label="Preview"
              active={tab === "preview"}
              onClick={() => setTab("preview")}
            />
          </div>
          <div>
            {tab === "code" && <ResourceCode code={exampleCode} />}
            {tab === "preview" && (
              <ResourceCode code={examplePreview} actions={[refreshButton]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  const classes = active
    ? "text-blue-300 !border-blue-300"
    : "text-slate-400 hover:text-blue-100";
  return (
    <button
      className={`px-4 py-2 rounded-t border-b border-transparent transition-all ${classes}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
