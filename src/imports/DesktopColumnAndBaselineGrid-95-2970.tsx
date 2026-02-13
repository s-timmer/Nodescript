import clsx from "clsx";
import imgImage24 from "figma:asset/82d160f20c6ca72aa70244ca210178fc6262a8c1.png";
type DesktopColumnAndBaselineGridHelperProps = {
  additionalClassNames?: string;
};

function DesktopColumnAndBaselineGridHelper({ additionalClassNames = "" }: DesktopColumnAndBaselineGridHelperProps) {
  return (
    <div className={clsx("absolute h-0 left-[calc(50%+20px)] w-[649.5px]", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 649.5 1">
          <path d="M0 0.5H649.5" id="Line 8" stroke="var(--stroke-0, #E9EBED)" />
        </svg>
      </div>
    </div>
  );
}

export default function DesktopColumnAndBaselineGrid() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Desktop - Column and Baseline Grid">
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.5] left-[51px] not-italic text-[#819097] text-[20px] top-[224px] w-[304px]">{`With developers building thousands of automated workflows through the platform, NodeScript is at the heart of visual programming. `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[51px] not-italic text-[#819097] text-[16px] text-nowrap top-[696px]">Latest Platform Statistics</p>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[calc(4.17%+12px)] overflow-clip p-[4px] rounded-[5px] top-[calc(50%+315.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button">
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#819097] text-[12px] text-nowrap tracking-[-0.24px]">Nodes</p>
      </div>
      <div className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[50px] not-italic text-[#819097] text-[64px] text-nowrap top-[72px] tracking-[-3px]">
        <p className="mb-0">Powering</p>
        <p>Automation</p>
      </div>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.1] left-[calc(50%+20px)] not-italic text-[#819097] text-[192px] text-nowrap top-[36px]">300M+</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.1] left-[calc(50%+20px)] not-italic text-[#819097] text-[96px] text-nowrap top-[463px]">3.6M</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.1] left-[calc(50%+20px)] not-italic text-[#819097] text-[96px] text-nowrap top-[651px]">24/7</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.1] left-[calc(75%+5px)] not-italic text-[#819097] text-[96px] text-nowrap top-[651px]">20K</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.1] left-[calc(75%+5px)] not-italic text-[#819097] text-[96px] text-nowrap top-[463px]">$500M</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.3] left-[50px] not-italic text-[#819097] text-[20px] text-nowrap top-[36px]">By the numbers</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[calc(50%+20px)] not-italic text-[#819097] text-[16px] text-nowrap top-[240px]">{`monthly automations `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[calc(50%+20px)] not-italic text-[#819097] text-[16px] text-nowrap top-[571px]">{`recent invocations `}</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[calc(50%+20px)] not-italic text-[#819097] text-[16px] text-nowrap top-[759px]">platform availability</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[calc(75%+5px)] not-italic text-[#819097] text-[16px] text-nowrap top-[571px]">annual bookings facilitated</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] left-[calc(75%+5px)] not-italic text-[#819097] text-[16px] text-nowrap top-[759px]">scripts written</p>
      <div className="absolute h-[156px] left-[51px] rounded-[9px] top-[528px] w-[304px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage24} />
      </div>
      <DesktopColumnAndBaselineGridHelper additionalClassNames="top-[35.5px]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="top-[442px]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="top-[624px]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="top-[804px]" />
      <div className="absolute h-0 left-[47px] top-[804px] w-[308px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <path d="M0 0.5H308" id="Line 15" stroke="var(--stroke-0, #E9EBED)" />
          </svg>
        </div>
      </div>
    </div>
  );
}