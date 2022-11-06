import BookYourSpot from "./BookYourSpot";

const Agenda = (): JSX.Element => {
  return (
    <div className="w-[95vw] mt-8" id="agenda">
      <div className="text-6xl bg-[url('../public/AGENDA.svg')] text-center lg:py-8 mb-8" />
      <div className="hidden lg:flex border-t-2 border-black"/>
      <div className="text-6xl lg:text-[200px] font-bold text-center bg-[#E2FF8A] mt-12 py-12">
        AGENDA
      </div>
      <div className="items-center">
        <div className="text-5xl self-center text-center my-8">
          Catalyzing the DAOVOS mission and community
        </div>
        <div className="flex flex-col justify-center text-center self-center items-center text-2xl pb-32 lg:pb-80 bg-[url('../public/BALL.svg')] border-b-2 border-black">
          <p>Workshops on the DAOVOS DAO mission and governance DAOversity; Diversity, inclusion, equity and accessibility</p>
          <br/>
          <p>DAO governance, legal structures and taxation</p>
          <br/>
          <p>Onboarding the next billion DAO members</p>
          <br/>
          <p>Network states and the future of Communities</p>
          <br/>
          <p>Identity, transhumanism and ethics</p>
          <br/>
          <p>Regenerative finance</p>
          <br/>
          <BookYourSpot />
        </div>
      </div>
    </div>
  )
};

export default Agenda;