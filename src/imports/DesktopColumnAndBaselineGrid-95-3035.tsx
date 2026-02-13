import clsx from "clsx";
import imgScreenshot20250123At2148221 from "figma:asset/95cec1c58da02ff242713a80d8f9cfe292eba2aa.png";
import imgScreenshot20250123At2145041 from "figma:asset/c31afdf943884657f512dc09047bf01994de94ec.png";
import imgScreenshot20250123At2142262 from "figma:asset/56c894c8b579314a67d6ccac3e133a1dd3315ad7.png";
import imgScreenshot20250123At2145211 from "figma:asset/9299954e0f157d0289709de815f51b81fd133457.png";
import imgScreenshot20250123At2144561 from "figma:asset/2f33fa12010e91b6eb58980602310c16feda6f81.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-0 mix-blend-multiply overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("absolute h-[116px]", additionalClassNames)}>{children}</Wrapper1>;
}
type Screenshot20250123AtProps = {
  additionalClassNames?: string;
};

function Screenshot20250123At({ children, additionalClassNames = "" }: React.PropsWithChildren<Screenshot20250123AtProps>) {
  return <Wrapper1 additionalClassNames={clsx("absolute left-[calc(58.33%+39px)] w-[465px]", additionalClassNames)}>{children}</Wrapper1>;
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.107] not-italic text-[#5c6a70] text-[16px] w-[336px]", additionalClassNames)}>
      <p className="mb-0">
        {text}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">{text1}</p>
    </div>
  );
}

export default function DesktopColumnAndBaselineGrid() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - Column and Baseline Grid">
      <div className="absolute contents left-[50px] top-[67px]">
        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[1.3] left-[70px] not-italic text-[#004f87] text-[20px] text-nowrap top-[67px]">Why NodeScript</p>
        <div className="absolute left-[50px] size-[12px] top-[74px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #004F87)" id="Ellipse 40" r="6" />
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[calc(16.67%+40px)] top-[60px]">
        <div className="absolute bg-[#f5f5f5] h-[492px] left-[calc(16.67%+40px)] top-[60px] w-[535px]" />
        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[1.107] left-[calc(16.67%+84px)] not-italic text-[#2e3538] text-[20px] text-nowrap top-[96px]">Increase reliability</p>
        <Helper text="Our platform scans your workflows and integrations to catch potential issues before deployment." text1="Learn about Health Checks." additionalClassNames="left-[calc(16.67%+85px)] top-[132px]" />
      </div>
      <div className="absolute contents left-[calc(58.33%+15px)] top-[60px]">
        <div className="absolute bg-[#f5f5f5] h-[492px] left-[calc(58.33%+15px)] top-[60px] w-[535px]" />
        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[1.107] left-[calc(58.33%+59px)] not-italic text-[#2e3538] text-[20px] text-nowrap top-[96px]">Monitor performance</p>
        <Helper text="View detailed metrics and logs for every node in your workflow, with real-time execution tracking." text1="Learn about Monitoring." additionalClassNames="left-[calc(58.33%+60px)] top-[132px]" />
      </div>
      <div className="absolute contents left-[calc(16.67%+40px)] top-[592px]">
        <div className="absolute bg-[#f5f5f5] h-[492px] left-[calc(16.67%+40px)] top-[592px] w-[535px]" />
        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[1.107] left-[calc(16.67%+84px)] not-italic text-[#2e3538] text-[20px] text-nowrap top-[628px]">Streamline development</p>
        <Helper text="Create and reuse modular components to accelerate development and maintain consistency." text1="Learn about Modules." additionalClassNames="left-[calc(16.67%+85px)] top-[664px]" />
      </div>
      <div className="absolute contents left-[calc(58.33%+15px)] top-[592px]">
        <div className="absolute bg-[#f5f5f5] h-[492px] left-[calc(58.33%+15px)] top-[592px] w-[535px]" />
        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[1.107] left-[calc(58.33%+59px)] not-italic text-[#2e3538] text-[20px] text-nowrap top-[628px]">Scale automatically</p>
        <Helper text="NodeScript handles infrastructure scaling automatically based on your workload demands." text1="Learn about Auto-scaling." additionalClassNames="left-[calc(58.33%+60px)] top-[664px]" />
      </div>
      <div className="absolute contents left-[calc(58.33%+39px)] top-[828px]">
        <Screenshot20250123At additionalClassNames="h-[130px] top-[922px]">
          <img alt="" className="absolute h-[140.77%] left-0 max-w-none top-[-40.77%] w-full" src={imgScreenshot20250123At2148221} />
        </Screenshot20250123At>
        <Screenshot20250123At additionalClassNames="h-[61px] top-[828px]">
          <img alt="" className="absolute h-[300%] left-0 max-w-none top-0 w-full" src={imgScreenshot20250123At2148221} />
        </Screenshot20250123At>
      </div>
      <div className="absolute h-[201px] left-[calc(58.33%+42px)] top-[319px] w-[435px]" data-name="Screenshot 2025-01-23 at 21.45.21 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250123At2145211} />
      </div>
      <div className="absolute h-[220px] left-[calc(16.67%+58px)] top-[315px] w-[454px]" data-name="Screenshot 2025-01-23 at 21.44.56 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250123At2144561} />
      </div>
      <div className="absolute contents left-[calc(16.67%+56px)] top-[836px]">
        <Wrapper additionalClassNames="left-[calc(16.67%+56px)] top-[836px] w-[457px]">
          <img alt="" className="absolute h-[171.55%] left-0 max-w-none top-0 w-full" src={imgScreenshot20250123At2145041} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[calc(16.67%+61px)] top-[952px] w-[454px]">
          <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-50%] w-full" src={imgScreenshot20250123At2142262} />
        </Wrapper>
      </div>
    </div>
  );
}