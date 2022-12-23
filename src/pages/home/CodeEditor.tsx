import "./CodeEditor.css";

const openfunctionParanthiesis = "(";
const closefunctionParanthiesis = ")";
const openingBraces = "{";
const closingBraces = "}";

export interface IHookCode {
  functionName: string;
  functionBody: string;
  functionParams?: string;
  children?: JSX.Element;
}

const CodeEditor: React.FC<IHookCode> = ({
  functionName,
  functionBody,
  functionParams,
  children,
}: IHookCode) => {
  return (
    <div
      className="sandpack sandpack--codeblock rounded-lg h-full w-full overflow-x-auto flex items-center 
      bg-gray-800 shadow-lg my-8"
    >
      <div className="sp-wrapper">
        <div className="sp-stack">
          <div className="sp-code-editor">
            <pre className="sp-cm sp-pristine sp-javascript flex align-start">
              <code className="sp-pre-placeholder grow-[2]">
                <Line>
                  <LineKeyword>function </LineKeyword>
                  <Definition>{functionName}</Definition>
                  <FunParanthesis>
                    {openfunctionParanthiesis}
                    {functionParams && (
                      <FunParanthesis>
                        {openingBraces}
                        {functionParams}
                        {closingBraces}
                      </FunParanthesis>
                    )}
                    {closefunctionParanthiesis} {openingBraces}
                  </FunParanthesis>
                </Line>
                <div
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: functionBody }}
                ></div>
                <Line>
                  <FunParanthesis>{closingBraces}</FunParanthesis>
                </Line>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

interface ILine {
  children: React.ReactNode;
}

const Line: React.FC<ILine> = ({ children }: ILine) => {
  return <div className="cm-line">{children}</div>;
};

interface IKeyword {
  children: string;
}
const LineKeyword: React.FC<IKeyword> = ({ children }: IKeyword) => {
  return <span className="sp-syntax-keyword">{children}</span>;
};

interface IDefinition {
  children: string;
}

const Definition: React.FC<IDefinition> = ({ children }: IDefinition) => {
  return <span className="sp-syntax-definition">{children}</span>;
};

interface IParantesis {
  children: React.ReactNode;
}

const FunParanthesis: React.FC<IParantesis> = ({ children }: IParantesis) => {
  return <span className="sp-syntax-punctuation">{children}</span>;
};
