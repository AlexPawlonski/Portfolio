interface Props {
  level: number;
  base: number;
  legendIsActive?: boolean;
}

export default function LevelBar({ level, base, legendIsActive }: Props) {
  const LegendItem = ({ title }: { title: string }) => {
    return (
      <span className="flex flex-col items-center">
        <h3>{title}</h3>
        <p className="text-xs mb-1">|</p>
      </span>
    );
  };

  const Bar = ({ level, base }: { level: number; base: number }) => {
    const divsLevel = [];
    for (let i = 0; i < level; i++) {
      divsLevel.push(
        <div
          key={i + "level"}
          className="levelSkill w-full"
          style={{ boxShadow: "#2c116e 0px 0px 10px" }}
        ></div>
      );
    }

    const divsBase = [];
    for (let i = 0; i < base - level; i++) {
      divsBase.push(
        <div key={i + "base"} className="levelBase w-full opacity-40 "></div>
      );
    }
    return (
      <div className="flex items-center justify-center gap-2 mb-2">
        {divsLevel} {divsBase}
      </div>
    );
  };

  if (legendIsActive) {
    return (
      <div className="w-full xl:w-1/3 lg:w-1/2">
        <div className="flex items-center justify-between">
          <LegendItem title="Nooby" />
          <LegendItem title="Medium" />
          <LegendItem title="Expert" />
        </div>
        <Bar level={level} base={base} />
      </div>
    );
  } else {
    return <Bar level={level} base={base} />;
  }
}
