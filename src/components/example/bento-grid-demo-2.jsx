import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridSecondDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>)
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Health Data Exchange",
    description: "Exchange patient data SECURELY across different hospitals",
    header: <img src="https://img.freepik.com/premium-vector/data-transfer_543534-249.jpg" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  object-cover" />,
    className: "md:col-span-2",
  },
  {
    title: "Veryfying Medicine",
    description: "Verifying Medicine Integrity, ensure no counterfeit products",
    header: <img src="https://pink.citeline.com/-/media/editorial/pink-sheet/2021/01/ps2101_magnifyingglass_pills_1324901444_1200.jpg?rev=8d304ab0c80f4d50a17ac566f01e071f&w=790&hash=23B0A88D28E79C098B18CAF64BFC042A"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  object-cover" />,
    className: "md:col-span-1",
  },
  {
    title: "TeleHealth",
    description: "Online pharmaceutical prescriptions and prescription management",
    header: <img src="https://imageio.forbes.com/specials-images/imageserve/63b2d5036b97606178584f56/Unrecognisable-African-American-woman-using-digital-device-to-get-advice-from-GP-/960x0.jpg?height=473&width=711&fit=bounds" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  object-cover" />,
    className: "md:col-span-1",
  },
  {
    title: "Patient Support Communities",
    description:"DAOs to share experiences, advice, and resources to each other",
    header: <img src="https://media.istockphoto.com/id/1334677692/vector/video-conference-illustration-people-talking-by-computer-programm-screen-with-colleagues.jpg?s=612x612&w=0&k=20&c=iBNgBkQewJ_rBB4xzCtgdYd0beXlqijfvApE2lDbcYY=" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  object-cover" />,
    className: "md:col-span-2",
  },
];
