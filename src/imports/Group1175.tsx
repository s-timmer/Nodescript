import clsx from "clsx";
import imgImage from "figma:asset/3965bf9afc4eeabcde5973519cf49419d0ed12ba.png";
import imgImage1 from "figma:asset/3d6ce4d8c0bff6a537c1405794b17063a14a6ad6.png";
import imgImage24 from "figma:asset/82d160f20c6ca72aa70244ca210178fc6262a8c1.png";
import imgImage2 from "figma:asset/49ceccdc91ca1cb9e60fe151e061ada8b64b228e.png";
type Group1175HelperProps = {
  additionalClassNames?: string;
};

function Group1175Helper({ additionalClassNames = "" }: Group1175HelperProps) {
  return (
    <div className={clsx("absolute h-0 top-0 w-[305px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 1">
          <line id="Line 8" stroke="var(--stroke-0, #5C6A70)" x2="305" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Group1175Helper additionalClassNames="left-0" />
      <Group1175Helper additionalClassNames="left-[345px]" />
      <Group1175Helper additionalClassNames="left-[690px]" />
      <Group1175Helper additionalClassNames="left-[1035px]" />
      <div className="absolute h-[438px] left-px rounded-[9px] top-[56px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage} />
      </div>
      <div className="absolute h-[438px] left-[346px] rounded-[9px] top-[56px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Fira_Sans:Bold',sans-serif] font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-px not-italic text-[0px] text-[16px] text-white top-[516px] w-[304px]">
        Code without typing.<span className="text-[#e9ebed]"> </span>
        <span className="text-[#d5dadd]">Build complex workflows through intuitive drag-and-drop nodes</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[1034px] not-italic text-[16px] text-white top-[518px] w-[304px]">
        <span>{`Intelligence meets automation. `}</span>
        <span className="text-[#d5dadd]">Native AI integration powers every node and workflow</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[691px] not-italic text-[16px] text-white top-[518px] w-[304px]">
        <span>{`Production ready immediately. `}</span>
        <span className="text-[#d5dadd]">One-click deployment with automatic scaling and management</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[346px] not-italic text-[16px] text-white top-[516px] w-[304px]">
        <span>{`Connect everything instantly. `}</span>
        <span className="text-[#d5dadd]">Seamlessly combine multiple APIs into unified automated workflows</span>
      </p>
      <div className="absolute h-[438px] left-[690px] rounded-[9px] top-[56px] w-[304px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage24} />
      </div>
      <div className="absolute h-[438px] left-[1034px] rounded-[9px] top-[56px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-0 not-italic text-[20px] text-white top-[20px] w-[304px]">{`Visual Programming `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[345px] not-italic text-[20px] text-white top-[20px] w-[304px]">{`API Integration `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[688px] not-italic text-[20px] text-white top-[20px] w-[306px]">{`Instant Deployment `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[1034px] not-italic text-[20px] text-white top-[20px] w-[304px]">AI Capabilities</p>
    </div>
  );
}