import svgPaths from "./svg-tr8bvpyaut";
import imgAvatar from "figma:asset/802a7173fba4480b8b5e95594e6644dfc35553ff.png";

function Main() {
  return <div className="absolute bottom-0 left-[288px] right-0 top-0" data-name="Main" />;
}

function Component4Large1200Px1535Px() {
  return (
    <div className="absolute bg-white h-[1024px] left-0 top-0 w-[1440px]" data-name="4. Large (1200px-1535px)">
      <Main />
    </div>
  );
}

function ListItemText() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Fira_Sans:Bold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full">Graphs</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <ListItemText />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-[rgba(25,118,210,0.08)] content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="ListItem">
      <Container />
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full">Endpoints</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <ListItemText1 />
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="ListItem">
      <Container1 />
    </div>
  );
}

function ListItemText2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full">Variables</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <ListItemText2 />
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="ListItem">
      <Container2 />
    </div>
  );
}

function ListItemText3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full">Members</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <ListItemText3 />
        </div>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="ListItem">
      <Container3 />
    </div>
  );
}

function ListItemText4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full">Settings</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <ListItemText4 />
        </div>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="ListItem">
      <Container4 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[120px]" data-name="Menu">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function ArrowDropDownFilled() {
  return (
    <div className="absolute right-0 size-[24px] top-1/2 translate-y-[-50%]" data-name="ArrowDropDownFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDropDownFilled">
          <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="var(--fill-0, #6F7071)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 flex flex-col font-['Roboto:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ubio Sandbox</p>
      </div>
      <ArrowDropDownFilled />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[2px] items-center left-[12px] px-[4px] py-0 top-0" data-name="Label Container">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Workspace</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <Container7 />
          <LabelContainer />
        </div>
      </div>
    </div>
  );
}

function SelectOutlined() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[32px] top-[32px] w-[224px]" data-name="Select/Outlined">
      <Input />
    </div>
  );
}

function WorkspaceMenu() {
  return (
    <div className="absolute bg-white bottom-0 left-0 top-[64px] w-[288px]" data-name="Workspace Menu">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Menu />
        <SelectOutlined />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Base() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[4px] relative shrink-0" data-name="Base">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create graph
      </p>
    </div>
  );
}

function ButtonContained() {
  return (
    <div className="absolute bg-[#0086e6] bottom-0 box-border content-stretch flex flex-col items-center justify-center left-[39.2%] overflow-clip right-[39.2%] rounded-[4px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] top-[60%]" data-name="Button/Contained">
      <Base />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="absolute h-[80px] left-[603px] top-[274px] w-[523px]" data-name="Empty state">
      <ButtonContained />
      <div className="absolute bottom-[70%] flex flex-col font-['Source_Sans_3:Regular',_sans-serif] font-normal justify-center leading-[0] left-0 right-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center top-0 tracking-[0.15px]">
        <p className="leading-[1.5]">No graphs here yet, get started</p>
      </div>
    </div>
  );
}

function NodescriptLogoBlueDark() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[154px]" data-name="nodescript-logo-blue-dark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 28">
        <g clipPath="url(#clip0_1_13042)" id="nodescript-logo-blue-dark">
          <path clipRule="evenodd" d={svgPaths.p99d8bc0} fill="var(--fill-0, #0090F9)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pf843500} fill="var(--fill-0, #005B9C)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p38f8dd80} fill="var(--fill-0, #005B9C)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p22953cb0} fill="var(--fill-0, #0090F9)" id="Vector_4" />
          <path d={svgPaths.p2ab0f700} fill="var(--fill-0, #0090F9)" id="Vector_5" />
          <path d={svgPaths.p2a4d3c00} fill="var(--fill-0, #0090F9)" id="Vector_6" />
          <path d={svgPaths.p477e100} fill="var(--fill-0, #0090F9)" id="Vector_7" />
          <path d={svgPaths.p2411cd00} fill="var(--fill-0, #0090F9)" id="Vector_8" />
          <path d={svgPaths.p13172480} fill="var(--fill-0, #0090F9)" id="Vector_9" />
          <path d={svgPaths.pec8c980} fill="var(--fill-0, #005B9C)" id="Vector_10" />
          <path d={svgPaths.p3e353a00} fill="var(--fill-0, #005B9C)" id="Vector_11" />
          <path d={svgPaths.p3cf57880} fill="var(--fill-0, #005B9C)" id="Vector_12" />
          <path d={svgPaths.p3f857100} fill="var(--fill-0, #005B9C)" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_1_13042">
            <rect fill="white" height="28" width="154" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoWordmark() {
  return (
    <div className="h-[28px] relative shrink-0 w-[154px]" data-name="Logo + wordmark">
      <NodescriptLogoBlueDark />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left Side">
      <LogoWordmark />
    </div>
  );
}

function Base1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[5px] py-[4px] relative shrink-0" data-name="Base">
      <p className="font-['Fira_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre">Docs</p>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button/Text">
      <Base1 />
    </div>
  );
}

function Base2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[5px] py-[4px] relative shrink-0" data-name="Base">
      <p className="font-['Fira_Sans:Medium',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre">FAQs</p>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button/Text">
      <Base2 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[64px] size-full" src={imgAvatar} />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Avatar">
      <Avatar4 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <ButtonText />
      <ButtonText1 />
      <Avatar5 />
    </div>
  );
}

function MinHeight() {
  return <div className="h-[64px] shrink-0 w-[2.798e_-6px]" data-name="min-height" />;
}

function MainMenu() {
  return (
    <div className="absolute bg-white left-0 top-0 w-[1440px]" data-name="Main_ menu">
      <div className="box-border content-stretch flex items-center overflow-clip px-[32px] py-0 relative rounded-[inherit] w-[1440px]">
        <LeftSide />
        <Frame32 />
        <MinHeight />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SearchFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SearchFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SearchFilled">
          <path d={svgPaths.p156ceb00} fill="var(--fill-0, #6F7071)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AdornmentStart() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AdornmentStart">
      <SearchFilled />
    </div>
  );
}

function AdornStartContainer() {
  return (
    <div className="content-stretch flex h-px items-center relative shrink-0" data-name="Adorn. Start Container">
      <AdornmentStart />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[4px] relative shrink-0 w-full" data-name="Content">
      <AdornStartContainer />
      <p className="basis-0 font-['Fira_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.38)] tracking-[0.15px]">Search</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative rounded-[4px] shrink-0 w-[220px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Content />
    </div>
  );
}

function TextFieldOutlined() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0" data-name="Text Field/Outlined">
      <Input1 />
    </div>
  );
}

function Base3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[4px] relative shrink-0" data-name="Base">
      <p className="font-['Fira_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.4px] whitespace-pre">Create graph</p>
    </div>
  );
}

function ButtonContained1() {
  return (
    <div className="bg-[#007bd3] box-border content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip relative rounded-[4px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Button/Contained">
      <Base3 />
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Header">
      <div className="basis-0 flex flex-col font-['Fira_Sans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[34px] text-[rgba(0,0,0,0.87)] tracking-[0.25px]">
        <p className="leading-[1.235]">Graphs</p>
      </div>
      <TextFieldOutlined />
      <ButtonContained1 />
    </div>
  );
}

function IconName() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="icon + name">
      <Header />
    </div>
  );
}

function PageHeading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[328px] top-[112px] w-[1072px]" data-name="Page Heading">
      <IconName />
    </div>
  );
}

export default function Graphs() {
  return (
    <div className="bg-white relative size-full" data-name="Graphs">
      <Component4Large1200Px1535Px />
      <WorkspaceMenu />
      <EmptyState />
      <MainMenu />
      <PageHeading />
    </div>
  );
}