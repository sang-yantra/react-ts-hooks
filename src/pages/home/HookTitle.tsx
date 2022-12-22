export interface IHookTitle {
  id: string;
  children: string;
}

const HookTitle: React.FC<IHookTitle> = ({ id, children }: IHookTitle) => {
  return (
    <h2 id={id} className="text-3xl text-white leading-10 font-bold my-6">
      {children}
    </h2>
  );
};

export default HookTitle;
