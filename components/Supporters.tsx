import React from "react";

const Supporter = (props: any): JSX.Element => {
  const { image, title } = props;
  return (
    <div className="px-5 border-x border-black flex flex-col justify-center">
      {image && <img src={image} alt={title} className="max-h-[150px] min-w-[250px]"/>}
      {!image && <p>{title}</p>}
    </div>
  )
}

const Supporters = (): JSX.Element => {
  return (
    <div className="text-3xl flex font-bold py-2 overflow-x-scroll md:overflow-auto">
      <span className="px-5 flex flex-col justify-center">OUR SUPPORTERS</span>
      <div className="flex font-nunito font-semibold">
        <Supporter image={'/org_logos/ftwdao.svg'} />
        <Supporter title="DAO SUISSE" />
        <div className="px-5 border-x border-black flex flex-col justify-center">
          <img src='/org_logos/aramid.png' alt={'Aramid'} className="max-h-[150px] min-w-[250px] bg-[#2F005E] rounded-full pl-6 pr-10 py-3"/>
        </div>
        <Supporter image="/org_logos/NGV.png" />
        <Supporter title="BANKLESS DAO" />
        <Supporter title="Foresight Institute" image="/org_logos/foresight.svg" />
        <Supporter title="Hyphen.Earth" image="/org_logos/hyphenlogo_black.png"/>
        <Supporter title="MAKER DAO" image="/org_logos/logo_maker.svg" />
        <Supporter title="Tokentus" image="/org_logos/tokentus_full_blue.svg"/>
        <Supporter title="CV Labs" image="/org_logos/cv_labs.svg" />
        <Supporter title="Redhill.world" image="/org_logos/redhill.svg"/>
        <Supporter title="AMX Law" />
        <Supporter title="Diva Labs" />
        <Supporter title="1kx" />
        <Supporter title="Crypto Commons Association" />
        <Supporter title="Palmera" image="/org_logos/palmera.svg" />
      </div>
    </div>
  );
}

export default Supporters;
