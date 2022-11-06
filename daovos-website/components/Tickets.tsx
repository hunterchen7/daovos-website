import Image from "next/image";

const Tickets = (): JSX.Element => {
  const Ticket = (props: any): JSX.Element => {
    const { title, price } = props;
    return (
      <div>
        <div className="w-[180px] h-[210px] bg-[#E2FF8A]">
          $ {price}
        </div>
        <svg width="163" height="262" viewBox="0 0 163 262" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="161" height="260" fill="#E2FF8A"/>
          <path d="M64.0348 150.4C78.8188 141.472 109.923 132.448 124.899 131.392V131.008C109.635 129.952 78.2428 120.832 64.0348 112.192L63.4588 112.96C65.2828 118.816 69.7948 126.208 73.6348 130.24L38.1148 127.936V134.464L73.6348 132.352C69.8908 136.288 65.4748 143.488 63.4588 149.632L64.0348 150.4Z" fill="black"/>
          <rect x="1" y="1" width="161" height="260" stroke="black" stroke-width="2"/>
        </svg>
      </div>
    )
  }

  return (
    <div className="w-[97vw] -mt-64" id="tickets">
      <div className="flex justify-end">
        <Image src="/ticket.svg" alt="TICKETS" width={1200} height={300}/>
      </div>
      <div>
        Select the ticket that best suits your needs
      </div>
      <div>

      </div>
    </div>
  );
}

export default Tickets;