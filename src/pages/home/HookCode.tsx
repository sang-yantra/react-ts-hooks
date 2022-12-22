export interface IHookCode {
  children: JSX.Element;
}

const HookCode: React.FC<IHookCode> = ({ children }: IHookCode) => {
  return (
    <div
      className="sandpack sandpack--codeblock rounded-lg h-full w-full overflow-x-auto flex items-center bg-wash 
    dark:bg-gray-95 shadow-lg my-8"
    >
      <div className="sp-wrapper">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default HookCode;
