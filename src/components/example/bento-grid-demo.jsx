import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header= {
            <div className="w-full h-10">
              {item.header}
            </div>
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Health Data Exchange",
    description: "Exchange patient data SECURELY across different hospitals",
    header: <img src="https://img.freepik.com/premium-vector/data-transfer_543534-249.jpg" className="object-cover "/>,
  },
  {
    title: "Veryfying Medicine",
    description: "Verifying Medicine Integrity within the supply chain to ensure no counterfeit products",
    header: <img src="https://pink.citeline.com/-/media/editorial/pink-sheet/2021/01/ps2101_magnifyingglass_pills_1324901444_1200.jpg?rev=8d304ab0c80f4d50a17ac566f01e071f&w=790&hash=23B0A88D28E79C098B18CAF64BFC042A" className="object-cover w-full h-full"/>,
  },
  {
    title: "TeleHealth",
    description: "Online pharmaceutical prescriptions and prescription management",
    header: <img src="https://imageio.forbes.com/specials-images/imageserve/63b2d5036b97606178584f56/Unrecognisable-African-American-woman-using-digital-device-to-get-advice-from-GP-/960x0.jpg?height=473&width=711&fit=bounds" className="object-cover w-full h-full"/>,
  },
  {
    title: "Patient Support Communities",
    description:"DAOs to share experiences, advice, and resources to each other",
    header: <img src="https://media.istockphoto.com/id/1334677692/vector/video-conference-illustration-people-talking-by-computer-programm-screen-with-colleagues.jpg?s=612x612&w=0&k=20&c=iBNgBkQewJ_rBB4xzCtgdYd0beXlqijfvApE2lDbcYY=" className="object-cover w-full h-full"/>,
  },
];
