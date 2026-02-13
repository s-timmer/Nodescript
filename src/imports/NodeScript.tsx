import svgPaths from "./svg-ya6bswf9tl";
import imgPrimitiveImg from "figma:asset/802a7173fba4480b8b5e95594e6644dfc35553ff.png";
import { imgVector } from "./svg-spxvo";

function Sidebar() {
  return <div className="absolute h-[589px] left-0 top-0 w-[256px]" data-name="Sidebar" />;
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center justify-center left-[1294px] rounded-[4px] top-[22px] w-[34.188px]" data-name="Button">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Docs</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center justify-center left-[1354.19px] rounded-[4px] top-[22px] w-[53.656px]" data-name="Button">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Support</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p388cb800} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5baad20} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1439.84px] rounded-[4px] size-[32px] top-[16px]" data-name="Button">
      <Icon />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[1503.84px] overflow-clip rounded-[1.67772e+07px] size-[32px] top-[16px]" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.34)] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
      <PrimitiveSpan />
    </div>
  );
}

function AppHeader() {
  return (
    <div className="absolute bg-[#fafcfe] box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-0 top-0 w-[1556px]" data-name="AppHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)]" />
      <Container />
    </div>
  );
}

function App() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-full">
        <AppHeader />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[68.047px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[68.047px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[30px] left-0 not-italic text-[20px] text-nowrap text-slate-900 top-[-0.5px] whitespace-pre">Graphs</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[35.98px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-[62.977px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[62.977px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[11px] not-italic text-[14px] text-nowrap text-slate-900 top-[6.5px] whitespace-pre">All</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-slate-900 grow h-[36px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Create graph</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[194.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[194.336px]">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[69px] relative shrink-0 w-[1156px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[69px] items-start pb-px pt-[16px] px-[24px] relative w-[1156px]">
        <Container2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-slate-400 top-0 whitespace-pre">Name</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[64px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-slate-400 top-0 whitespace-pre">Visibility</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-slate-400 top-0 whitespace-pre">Last Modified</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-0 relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[32px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[228px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[21px] items-center relative w-[228px]">
        <Text1 />
        <Text2 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(241,245,249,0.3)] h-[46px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[46px] items-center pb-px pt-0 px-[24px] relative w-full">
          <Text />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[20px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-slate-900 top-[-1px] w-[146px]">Starter Graphs (13)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <SlotClone />
        <Text3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function GraphRow() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[41px] items-center pb-px pt-0 px-[24px] relative w-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[20px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-slate-900 top-[-1px] w-[181px]">1. Working with Data (3)</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <SlotClone1 />
        <Text4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function GraphRow1() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[41px] items-center pb-px pl-[48px] pr-[24px] pt-0 relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">1. The Basics</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container11 />
        <Text5 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-slate-100 h-[22px] left-0 rounded-[4px] top-[5px] w-[46.273px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Draft</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[102.27px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222.41px] rounded-[4px] size-[32px] top-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function PrimitiveImg1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-[62.27px] overflow-clip rounded-[1.67772e+07px] size-[24px] top-[4px]" data-name="Primitive.span">
      <PrimitiveImg1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[32px] relative shrink-0 w-[254.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[254.414px]">
        <Badge />
        <Text6 />
        <Button5 />
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function GraphRow2() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[49px] items-center pb-px pl-[72px] pr-[24px] pt-0 relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">2. Lists</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container14 />
        <Text7 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-slate-100 h-[22px] left-0 rounded-[4px] top-[5px] w-[46.273px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Draft</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[102.27px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222.41px] rounded-[4px] size-[32px] top-0" data-name="Button">
      <Icon5 />
    </div>
  );
}

function PrimitiveImg2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-[62.27px] overflow-clip rounded-[1.67772e+07px] size-[24px] top-[4px]" data-name="Primitive.span">
      <PrimitiveImg2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-[254.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[254.414px]">
        <Badge1 />
        <Text8 />
        <Button6 />
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function GraphRow3() {
  return (
    <div className="bg-[rgba(241,245,249,0.5)] h-[49px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[49px] items-center pb-px pl-[72px] pr-[24px] pt-0 relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">3. Objects</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container17 />
        <Text9 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-slate-100 h-[22px] left-0 rounded-[4px] top-[5px] w-[46.273px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Draft</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24px] left-[102.27px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222.41px] rounded-[4px] size-[32px] top-0" data-name="Button">
      <Icon6 />
    </div>
  );
}

function PrimitiveImg3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-[62.27px] overflow-clip rounded-[1.67772e+07px] size-[24px] top-[4px]" data-name="Primitive.span">
      <PrimitiveImg3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[32px] relative shrink-0 w-[254.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[254.414px]">
        <Badge2 />
        <Text10 />
        <Button7 />
        <PrimitiveSpan3 />
      </div>
    </div>
  );
}

function GraphRow4() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[49px] items-center pb-px pl-[72px] pr-[24px] pt-0 relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[147px] items-start relative shrink-0 w-full" data-name="Container">
      <GraphRow2 />
      <GraphRow3 />
      <GraphRow4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[188px] items-start relative shrink-0 w-full" data-name="Container">
      <GraphRow1 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">2. HTTP Requests</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container22 />
        <Text11 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function GraphRow5() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[41px] items-center pb-px pl-[48px] pr-[24px] pt-0 relative w-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">3. Caching</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container25 />
        <Text12 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-slate-100 h-[22px] left-0 rounded-[4px] top-[5px] w-[46.273px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Draft</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[102.27px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222.41px] rounded-[4px] size-[32px] top-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function PrimitiveImg4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-[62.27px] overflow-clip rounded-[1.67772e+07px] size-[24px] top-[4px]" data-name="Primitive.span">
      <PrimitiveImg4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[32px] relative shrink-0 w-[254.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[254.414px]">
        <Badge3 />
        <Text13 />
        <Button8 />
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function GraphRow6() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[49px] items-center pb-px pl-[48px] pr-[24px] pt-0 relative w-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">4. Create an API</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container28 />
        <Text14 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function GraphRow7() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[41px] items-center pb-px pl-[48px] pr-[24px] pt-0 relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-0 relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[20px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">5. Integrate Services</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <Container31 />
        <Text15 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-slate-100 h-[22px] left-0 rounded-[4px] top-[5px] w-[46.273px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-700 whitespace-pre">Draft</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[24px] left-[102.27px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222.41px] rounded-[4px] size-[32px] top-0" data-name="Button">
      <Icon8 />
    </div>
  );
}

function PrimitiveImg5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-[62.27px] overflow-clip rounded-[1.67772e+07px] size-[24px] top-[4px]" data-name="Primitive.span">
      <PrimitiveImg5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[32px] relative shrink-0 w-[254.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[254.414px]">
        <Badge4 />
        <Text16 />
        <Button9 />
        <PrimitiveSpan5 />
      </div>
    </div>
  );
}

function GraphRow8() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="GraphRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[49px] items-center pb-px pl-[48px] pr-[24px] pt-0 relative w-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[368px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <GraphRow5 />
      <GraphRow6 />
      <GraphRow7 />
      <GraphRow8 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col h-[409px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <GraphRow />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-[1156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[1156px]">
        <Container6 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function GraphsContent() {
  return (
    <div className="bg-[#fafcfe] h-[524px] relative shrink-0 w-[1156px]" data-name="GraphsContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[524px] items-start overflow-clip relative rounded-[inherit] w-[1156px]">
        <Container3 />
        <Container35 />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] h-[34px] relative shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1px_1px_2px] border-slate-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[34px] items-center justify-center pb-[10px] pt-[5px] px-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Details</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_2] h-[34px] relative shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1px_1px_2px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[34px] items-center justify-center pb-[10px] pt-[5px] px-[9px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">History</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="box-border gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[35px] px-0 py-[0.5px] relative rounded-[10px] shrink-0 w-full" data-name="Primitive.div">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function GraphDetailsPanel() {
  return (
    <div className="h-[76px] relative shrink-0 w-[399px]" data-name="GraphDetailsPanel">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[76px] items-start pb-px pt-[24px] px-[24px] relative w-[399px]">
        <PrimitiveDiv1 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_339)" id="Icon">
          <path d={svgPaths.p785ba00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 3.33333L12.6667 6" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_339">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-900 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon9 />
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[37px] not-italic text-[14px] text-nowrap text-slate-900 top-[8.5px] whitespace-pre">Edit graph</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Graph last modified</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[44px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function PrimitiveImg6() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-full" />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[32px] top-0" data-name="Primitive.span">
      <PrimitiveImg6 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <PrimitiveSpan6 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container36 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">Module last published</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[24px] left-[44px] top-[4px] w-[104.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-900 top-[-1px] whitespace-pre">3 months ago</p>
    </div>
  );
}

function PrimitiveImg7() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-full" />
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[1.67772e+07px] size-[32px] top-0" data-name="Primitive.span">
      <PrimitiveImg7 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <PrimitiveSpan7 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container38 />
    </div>
  );
}

function GraphDetailsPanel1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[152px] items-start relative shrink-0 w-full" data-name="GraphDetailsPanel">
      <Container37 />
      <Container39 />
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Primitive.div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[260px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Button10 />
          <GraphDetailsPanel1 />
        </div>
      </div>
    </div>
  );
}

function GraphDetailsPanel2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[399px]" data-name="GraphDetailsPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[399px]">
        <PrimitiveDiv2 />
      </div>
    </div>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="h-[1044px] relative shrink-0 w-[399px]" data-name="Primitive.div">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(0,0,0,0.18)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[1044px] items-start pl-px pr-0 py-0 relative w-[399px]">
        <GraphDetailsPanel />
        <GraphDetailsPanel2 />
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="bg-white h-[1120px] relative shrink-0 w-[400px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[1120px] items-start pl-px pr-0 py-0 relative w-[400px]">
        <GraphsContent />
        <PrimitiveDiv3 />
      </div>
    </div>
  );
}

function SidebarInset() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1184px] items-start left-[256px] top-0 w-[1556px]" data-name="SidebarInset">
      <App />
      <App1 />
    </div>
  );
}

function App2() {
  return (
    <div className="absolute h-[1184px] left-0 top-0 w-[1812px]" data-name="App">
      <Sidebar />
      <SidebarInset />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0.68%_0.14%_0.16%_0.14%]" data-name="Group">
      <div className="absolute inset-[18.75%_87.01%_36.32%_7.96%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-12.25px_-5.25px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
          <path clipRule="evenodd" d={svgPaths.p104b500} fill="var(--fill-0, #0090F9)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.68%_91.34%_52.45%_0.14%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.21px_-0.19px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={svgPaths.p2537a00} fill="var(--fill-0, #005B9C)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.67%_78.84%_18.45%_12.63%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.455px_-9.708px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={svgPaths.p1b17cf00} fill="var(--fill-0, #005B9C)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.75%_0.14%_15.52%_94.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-145.531px_-11.411px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
          <path d={svgPaths.p34f00800} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_7.09%_0.16%_86.96%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-133.912px_-13.719px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path d={svgPaths.p1810e300} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.7%_15.05%_15.52%_79.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-122.738px_-9.435px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
          <path d={svgPaths.p2da14e00} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_22.5%_15.52%_71.74%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-110.481px_-13.719px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path d={svgPaths.p1bb1de40} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_30.16%_14.68%_63.96%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.496px_-13.719px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
          <path d={svgPaths.p21423b00} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.75%_37.61%_14.68%_56.31%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-86.723px_-9.729px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path d={svgPaths.p3c4b1d00} fill="var(--fill-0, #0090F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_45.41%_14.68%_48.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-74.813px_-13.719px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
          <path d={svgPaths.p28c3a420} fill="var(--fill-0, #005B9C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.19%_53.09%_14.68%_40.97%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-63.099px_-9.572px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path d={svgPaths.p1f16800} fill="var(--fill-0, #005B9C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.99%_60.27%_14.68%_33.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-51.636px_-13.719px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
          <path d={svgPaths.p1dc57d00} fill="var(--fill-0, #005B9C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.58%_68.02%_15.52%_25.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-39.61px_-9.964px] mask-size-[154px_28px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
          <path d={svgPaths.p19915600} fill="var(--fill-0, #005B9C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function NodeScriptLogo() {
  return (
    <div className="h-[28px] relative shrink-0 w-[154px]" data-name="NodeScriptLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[28px] items-start relative w-[154px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_324)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_324">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppSidebar() {
  return (
    <div className="absolute h-[20px] left-[37px] overflow-clip top-[10px] w-[149px]" data-name="AppSidebar">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Sjors Timmer</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[194px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-[223px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[223px]">
        <Icon11 />
        <AppSidebar />
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34c7cb00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar1() {
  return (
    <div className="absolute h-[20px] left-[37px] overflow-clip top-[10px] w-[149px]" data-name="AppSidebar">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Default Workspace</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[194px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-[223px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[223px]">
        <Icon13 />
        <AppSidebar1 />
        <Icon14 />
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="h-[176px] relative shrink-0 w-[255px]" data-name="SidebarHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[20px] h-[176px] items-start pb-0 pl-[16px] pr-0 pt-[16px] relative w-[255px]">
        <NodeScriptLogo />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12V10.6667" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12V9.33333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12V8" id="Vector_5" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.391px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[48.391px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Graphs</p>
      </div>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-slate-200 box-border content-stretch flex gap-[12px] h-[32px] items-center left-[6px] overflow-clip pl-[14px] pr-0 py-0 rounded-[4px] top-0 w-[221px]" data-name="SlotClone">
      <Icon15 />
      <AppSidebar2 />
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.93px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[65.93px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Endpoints</p>
      </div>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[32px] items-center left-0 overflow-clip pl-[20px] pr-0 py-0 rounded-[4px] top-0 w-[239px]" data-name="SlotClone">
      <Icon16 />
      <AppSidebar3 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_16667)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_16667">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppSidebar4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.789px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[68.789px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Schedules</p>
      </div>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[32px] items-center left-0 overflow-clip pl-[20px] pr-0 py-0 rounded-[4px] top-0 w-[239px]" data-name="SlotClone">
      <Icon17 />
      <AppSidebar4 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone4 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18bc9880} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36b47000} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6L6 10" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6L10 10" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.555px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[60.555px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Variables</p>
      </div>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[32px] items-center left-0 overflow-clip pl-[20px] pr-0 py-0 rounded-[4px] top-0 w-[239px]" data-name="SlotClone">
      <Icon18 />
      <AppSidebar5 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[32px] left-0 top-[108px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone5 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.938px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[70.938px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Monitoring</p>
      </div>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[32px] items-center left-0 overflow-clip pl-[20px] pr-0 py-0 rounded-[4px] top-0 w-[239px]" data-name="SlotClone">
      <Icon19 />
      <AppSidebar6 />
    </div>
  );
}

function SidebarMenuItem4() {
  return (
    <div className="absolute h-[32px] left-0 top-[144px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9.33333 11.3333H3.33333" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 4.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2badb400} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p79fe00} id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AppSidebar7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[130.422px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] overflow-clip relative rounded-[inherit] w-[130.422px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Workspace settings</p>
      </div>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[32px] items-center left-0 overflow-clip pl-[20px] pr-0 py-0 rounded-[4px] top-0 w-[239px]" data-name="SlotClone">
      <Icon20 />
      <AppSidebar7 />
    </div>
  );
}

function SidebarMenuItem5() {
  return (
    <div className="absolute h-[32px] left-0 top-[180px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone7 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="h-[212px] relative shrink-0 w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[212px] relative w-[239px]">
        <SidebarMenuItem />
        <SidebarMenuItem1 />
        <SidebarMenuItem2 />
        <SidebarMenuItem3 />
        <SidebarMenuItem4 />
        <SidebarMenuItem5 />
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[255px]" data-name="SidebarContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pl-[8px] pr-0 pt-[8px] relative rounded-[inherit] w-[255px]">
        <SidebarMenu />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.047px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-slate-400 top-[-1px] whitespace-pre">Free plan</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[20px] relative rounded-[4px] shrink-0 w-[57.867px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center relative w-[57.867px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-900 whitespace-pre">Upgrade</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-0 top-0 w-[223px]" data-name="Container">
      <Text19 />
      <Button13 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[10px] w-[46.594px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-400 whitespace-pre">0.00%</p>
    </div>
  );
}

function Container41() {
  return <div className="bg-slate-900 h-[4px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv4() {
  return (
    <div className="absolute bg-[rgba(15,23,42,0.2)] box-border content-stretch flex flex-col h-[4px] items-start left-0 overflow-clip pr-[223px] py-0 rounded-[1.67772e+07px] top-0 w-[223px]" data-name="Primitive.div">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[32px] left-0 top-[32px] w-[223px]" data-name="Container">
      <Text20 />
      <PrimitiveDiv4 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute h-[20px] left-0 rounded-[4px] top-[74.5px] w-[85.281px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-slate-900 top-[0.5px] whitespace-pre">Show details</p>
    </div>
  );
}

function AppSidebar8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[223px]" data-name="AppSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[223px]">
        <Container40 />
        <Container42 />
        <Button14 />
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="h-[129px] relative shrink-0 w-[255px]" data-name="SidebarFooter">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[129px] items-start pb-[16px] pl-[16px] pr-0 pt-[17px] relative w-[255px]">
        <AppSidebar8 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[1184px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1184px] items-start relative w-full">
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter />
      </div>
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute box-border content-stretch flex h-[1184px] items-start left-0 pl-0 pr-px py-0 top-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-slate-300 border-solid inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_315)" id="Icon">
          <path d={svgPaths.p3f63f7f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_315">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-slate-900 h-[40px] left-[1657.41px] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[1120px] w-[130.594px]" data-name="Button">
      <Icon21 />
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[40px] not-italic text-[14px] text-nowrap text-white top-[10.5px] whitespace-pre">Quick Start</p>
    </div>
  );
}

export default function NodeScript() {
  return (
    <div className="bg-white relative size-full" data-name="NodeScript">
      <App2 />
      <Sidebar1 />
      <Button15 />
    </div>
  );
}