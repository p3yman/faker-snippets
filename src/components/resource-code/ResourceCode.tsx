import { ReactNode, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ResourceCodeProps {
  code: string;
  copy?: boolean;
  actions?: Action[];
}

interface Action {
  name: string;
  label: string | ReactNode;
  onClick: () => void;
}

export const ResourceCode = ({
  code,
  copy = true,
  actions,
}: ResourceCodeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        language="javascript"
        style={okaidia}
        className="!text-sm !m-0 !rounded-t-none !rounded-b !bg-slate-800"
      >
        {code}
      </SyntaxHighlighter>
      <div className="absolute top-2 right-2 flex gap-1">
        {copy && (
          <CodeAction
            label={isCopied ? "Copied!" : "Copy"}
            onClick={handleCopyClick}
          />
        )}
        {actions?.length
          ? actions.map(({ name, label, onClick }) => {
              return <CodeAction label={label} onClick={onClick} key={name} />;
            })
          : null}
      </div>
    </div>
  );
};

const CodeAction = ({ label, onClick }: Partial<Action>) => {
  return (
    <button
      className=" bg-slate-700 text-gray-100 text-xs px-2 py-1 rounded hover:bg-slate-500 focus:bg-gray-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
