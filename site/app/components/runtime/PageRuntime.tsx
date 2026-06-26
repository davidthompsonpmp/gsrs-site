import BrandHero from "../brand/BrandHero";

type RuntimeSection = {
  sectionId: string;
  order: number;
  status: string;
  component: {
    reactComponent: string;
  };
  props?: Record<string, unknown>;
};

type PageRuntimeProps = {
  runtime: {
    theme?: any;
    sections?: RuntimeSection[];
  };
};

export default function PageRuntime({ runtime }: PageRuntimeProps) {
  const sections = runtime.sections ?? [];

  return (
    <>
      {sections.map((section) => {
        if (section.component.reactComponent === "BrandHero") {
          return <BrandHero key={section.sectionId} theme={runtime.theme} />;
        }

        return null;
      })}
    </>
  );
}
