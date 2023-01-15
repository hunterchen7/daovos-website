import React from "react";

const Supporter = (props: any): JSX.Element => {
  const { image, title, url } = props;
  return (
    <a className="px-5 border-x border-black flex flex-col justify-center z-50 hover:cursor-pointer" href={url} target="_blank" rel="noreferrer">
      {image && <img src={image} alt={title} className="max-h-[150px] min-w-[250px] hover:scale-105 ease-in-out duration-150"/>}
      {!image && <p>{title}</p>}
    </a>
  )
}

const Supporters = (): JSX.Element => {
  return (
    <div className="text-3xl flex font-bold py-2 overflow-x-scroll md:overflow-auto">
      <span className="px-5 flex flex-col justify-center">OUR SUPPORTERS</span>
      <div className="flex font-nunito font-semibold">
        <Supporter image='/org_logos/ftwdao.svg' url="https://www.ftwdao.com/" />
        <Supporter title="DAO SUISSE" image="/org_logos/daosuisse.svg" url="https://www.daosuisse.com/" />
        <Supporter title="Aramid" image="/org_logos/aramid.png" url="https://aramid.finance" />
        <Supporter title="Next Gen Village" image="/org_logos/NGV.png" url="https://nextgenvillage.com/" />
        <Supporter title="BANKLESS DAO" image="/org_logos/bankless.jpg" url="https://www.bankless.community/" />
        <Supporter title="Foresight Institute" image="/org_logos/foresight.svg" url="https://foresight.org/" />
        <Supporter title="Hyphen.Earth" image="/org_logos/hyphenlogo_black.png" url="https://www.hyphen.earth/" />
        <Supporter title="MAKER DAO" image="/org_logos/logo_maker.svg" url="https://makerdao.com/en/" />
        <Supporter title="Tokentus" image="/org_logos/tokentus_full_blue.svg" url="https://tokentus.com/" />
        <Supporter title="CV Labs" image="/org_logos/cv_labs.svg" url="https://www.cvlabs.com/" />
        <Supporter title="Redhill.world" image="/org_logos/redhill.svg" url="https://redhill.world/" />
        <Supporter title="AMX Law" image="/org_logos/amx.jpg" url="https://www.amxlaw.com/" />
        <Supporter title="Diva Labs" image="org_logos/diva.svg" url="https://divalabs.org/" />
        <Supporter title="1kx" image="/org_logos/1kx.svg" url="https://1kx.network/" />
        <Supporter title="Crypto Commons Association" image="/org_logos/cca.svg" url="https://www.crypto-commons.org/" />
        <Supporter title="Palmera" image="/org_logos/palmera.svg" url="https://blog.palmeradao.xyz/" />
      </div>
    </div>
  );
}

export default Supporters;
