import clsx from "clsx";
import imgImage from "figma:asset/3965bf9afc4eeabcde5973519cf49419d0ed12ba.png";
import imgImage1 from "figma:asset/3d6ce4d8c0bff6a537c1405794b17063a14a6ad6.png";
import imgImage24 from "figma:asset/82d160f20c6ca72aa70244ca210178fc6262a8c1.png";
import imgImage2 from "figma:asset/49ceccdc91ca1cb9e60fe151e061ada8b64b228e.png";
type DesktopColumnAndBaselineGridHelperProps = {
  additionalClassNames?: string;
};

function DesktopColumnAndBaselineGridHelper({ additionalClassNames = "" }: DesktopColumnAndBaselineGridHelperProps) {
  return (
    <div className={clsx("absolute h-0 top-[713px] w-[305px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 1">
          <line id="Line 8" stroke="var(--stroke-0, #5C6A70)" x2="305" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function DesktopColumnAndBaselineGrid() {
  return (
    <div className="bg-[#272a2a] relative size-full" data-name="Desktop - Column and Baseline Grid">
      <p className="absolute bg-clip-text bg-gradient-to-b font-['Fira_Sans:Regular',sans-serif] from-[#ff4672] leading-[1.107] left-[50px] not-italic text-[96px] to-[#57b9ff] top-[207px] tracking-[-2px] w-[880px]" style={{ WebkitTextFillColor: "transparent" }}>
        From prototype to scalable service
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.3] left-[49px] not-italic text-[#f9f9f9] text-[32px] top-[443px] w-[570px]">Build scalable applications directly in your browser.</p>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[calc(8.33%+6.5px)] overflow-clip px-[16px] py-[13px] rounded-[5px] top-[calc(50%-148px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button">
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5c6a70] text-[20px] text-nowrap tracking-[-0.4px]">Start building</p>
      </div>
      <div className="absolute bg-[#2e3538] content-stretch flex h-[36px] items-center justify-center left-[calc(12.5%+24.5px)] overflow-clip p-[13px] rounded-[5px] top-[calc(50%-566px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button">
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">Powering $500M+ in annual transactions</p>
      </div>
      <div className="absolute bg-[#e6e6e6] content-stretch flex items-center left-[calc(95.83%-33px)] overflow-clip px-[16px] py-[13px] rounded-[5px] top-[calc(50%-690.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button">
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e3538] text-[16px] text-nowrap">Sign up</p>
      </div>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(83.33%+36px)] not-italic text-[16px] text-nowrap text-white top-[39px]">Log in</p>
      <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[normal] left-[51px] not-italic text-[20px] text-nowrap text-white top-[34px]">NodeScript</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(8.33%+81px)] not-italic text-[16px] text-nowrap text-white top-[39px]">Examples</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(16.67%+54px)] not-italic text-[16px] text-nowrap text-white top-[39px]">Pricing</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(25%+8px)] not-italic text-[16px] text-nowrap text-white top-[39px]">Docs</p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(25%+67px)] not-italic text-[16px] text-nowrap text-white top-[39px]">Contact</p>
      <DesktopColumnAndBaselineGridHelper additionalClassNames="left-[50px]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="left-[calc(25%+35px)]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="left-[calc(50%+20px)]" />
      <DesktopColumnAndBaselineGridHelper additionalClassNames="left-[calc(75%+5px)]" />
      <div className="absolute h-[438px] left-[51px] rounded-[9px] top-[769px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage} />
      </div>
      <div className="absolute h-[438px] left-[calc(25%+36px)] rounded-[9px] top-[769px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Fira_Sans:Bold',sans-serif] font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[51px] not-italic text-[0px] text-[16px] text-white top-[1229px] w-[304px]">
        Code without typing.<span className="text-[#e9ebed]"> </span>
        <span className="text-[#d5dadd]">Build complex workflows through intuitive drag-and-drop nodes</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(75%+4px)] not-italic text-[16px] text-white top-[1231px] w-[304px]">
        <span>{`Intelligence meets automation. `}</span>
        <span className="text-[#d5dadd]">Native AI integration powers every node and workflow</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(50%+21px)] not-italic text-[16px] text-white top-[1231px] w-[304px]">
        <span>{`Production ready immediately. `}</span>
        <span className="text-[#d5dadd]">One-click deployment with automatic scaling and management</span>
      </p>
      <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[normal] left-[calc(25%+36px)] not-italic text-[16px] text-white top-[1229px] w-[304px]">
        <span>{`Connect everything instantly. `}</span>
        <span className="text-[#d5dadd]">Seamlessly combine multiple APIs into unified automated workflows</span>
      </p>
      <div className="absolute h-[438px] left-[calc(50%+20px)] rounded-[9px] top-[769px] w-[304px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage24} />
      </div>
      <div className="absolute h-[438px] left-[calc(75%+4px)] rounded-[9px] top-[769px] w-[304px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}