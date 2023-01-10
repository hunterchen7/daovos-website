import React from "react";

const Supporter = (props: any): JSX.Element => {
  var title = "";
  for (var i = 0; i < props.title.length; i++) {
    title += title != " " ? props.title[i] : " ";
  }
  return (
    <div className="px-5 border-x border-black">
      {title}
    </div>
  )
}

const Supporters = (): JSX.Element => {
  return (
    <div className="text-5xl flex font-bold py-6 overflow-x-scroll md:overflow-auto">
      <span className="px-5">OUR SUPPORTERS</span>
      <Supporter title="FTW DAO" />
      <Supporter title="DAO SUISSE" />
      <Supporter title="Aramid Labs" />
      <Supporter title="NextGenVillage Association" />
      <Supporter title="BANKLESS DAO" />
      <Supporter title="The Foresight Institute" />
      <Supporter title="Hyphen.Earth" />
      <Supporter title="MAKER DAO" />
      <Supporter title="Tokentus" />
      <Supporter title="CV Labs" />
      <Supporter title="Redhill.world" />
      <Supporter title="AMX Law" />
      <Supporter title="Diva Labs" />
    </div>
  );
}

export default Supporters;