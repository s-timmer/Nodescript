import clsx from "clsx";
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute left-[calc(91.67%+54px)] size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 1165">
          <path d="M8 2.4153e-08L8 16" id="Line 17" stroke="var(--stroke-0, black)" />
          <path d="M16 8L4.60087e-08 8" id="Line 18" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}
type Group1164HelperProps = {
  additionalClassNames?: string;
};

function Group1164Helper({ additionalClassNames = "" }: Group1164HelperProps) {
  return (
    <div className={clsx("absolute h-0 left-[calc(16.67%+40px)] w-[1110px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1110 1">
          <line id="Line 13" stroke="var(--stroke-0, #D5DADD)" x2="1110" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function DesktopColumnAndBaselineGrid() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - Column and Baseline Grid">
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.3] left-[calc(16.67%+40px)] not-italic text-[#2e3538] text-[64px] top-[48px] w-[460px]">Everything you need to know</p>
      <div className="absolute contents left-[50px] top-[64px]">
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.3] left-[70px] not-italic text-[#8d0525] text-[20px] text-nowrap top-[64px]">FAQ</p>
        <div className="absolute left-[50px] size-[12px] top-[71px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #8D0525)" id="Ellipse 40" r="6" />
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[calc(16.67%+40px)] top-[396px]">
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-[calc(16.67%+40px)] not-italic text-[#2e3538] text-[18px] top-[613px] w-[651px]">How do I monitor my workflows?</p>
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-[calc(16.67%+40px)] not-italic text-[#2e3538] text-[18px] top-[396px] w-[651px]">How do I publish my workflow as a module?</p>
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-[calc(16.67%+40px)] not-italic text-[#2e3538] text-[18px] top-[468px] w-[651px]">How does the credit system work?</p>
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.204] left-[calc(16.67%+40px)] not-italic text-[#2e3538] text-[18px] top-[540px] w-[651px]">What types of APIs can I integrate?</p>
        <Group1164Helper additionalClassNames="top-[444px]" />
        <Group1164Helper additionalClassNames="top-[516px]" />
        <Group1164Helper additionalClassNames="top-[588px]" />
        <Group1164Helper additionalClassNames="top-[660px]" />
      </div>
      <Helper additionalClassNames="top-[399px]" />
      <Helper additionalClassNames="top-[471px]" />
      <Helper additionalClassNames="top-[543px]" />
      <Helper additionalClassNames="top-[616px]" />
    </div>
  );
}