import clsx from "clsx";
type Group1164HelperProps = {
  additionalClassNames?: string;
};

function Group1164Helper({ additionalClassNames = "" }: Group1164HelperProps) {
  return (
    <div className={clsx("absolute h-0 left-0 w-[1110px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1110 1">
          <line id="Line 13" stroke="var(--stroke-0, #D5DADD)" x2="1110" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-0 not-italic text-[#2e3538] text-[18px] top-[217px] w-[651px]">How do I monitor my workflows?</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-0 not-italic text-[#2e3538] text-[18px] top-0 w-[651px]">How do I publish my workflow as a module?</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-0 not-italic text-[#2e3538] text-[18px] top-[72px] w-[651px]">How does the credit system work?</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-0 not-italic text-[#2e3538] text-[18px] top-[144px] w-[651px]">What types of APIs can I integrate?</p>
      <Group1164Helper additionalClassNames="top-[48px]" />
      <Group1164Helper additionalClassNames="top-[120px]" />
      <Group1164Helper additionalClassNames="top-[192px]" />
      <Group1164Helper additionalClassNames="top-[264px]" />
    </div>
  );
}