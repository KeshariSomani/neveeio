const Stat = (props) => {
  return (
    <div className="flex gap-16 items-center lg:gap-5">
      <img src={props.symbol} alt="symbol" className="w-28" />
      <div>
        <p className="text-4xl text-primary font-bold">{props.title}</p>
        <p className="text-lg font-bold">{props.description}</p>
      </div>
    </div>
  );
};

export default Stat;
