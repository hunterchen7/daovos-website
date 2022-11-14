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
      <Supporter title="ARAMID DAO" />
      <Supporter title="NGV DAO" />
      <Supporter title="BANKLESS DAO" />
    </div>
  );
}

export default Supporters;