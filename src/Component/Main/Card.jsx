const Card = ({ fetchData, setSelected, selected }) => {
  const data = fetchData;

  const handleCardClick = (id) => {
    setSelected(id);
  };
  const filteredTickets = selected
    ? data.filter((t) => t.id === selected)
    : data;
  console.log(filteredTickets);
  return (
    <div className="">
      <h1 className="text-[#34485A] font-semibold text-2xl">
        Customer Tickets{" "}
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {data.map((ticket) => (
          <div
            onClick={() => handleCardClick(ticket)}
            className=" mt-6 bg-[#FFFFFF] shadow-2xl p-5 rounded-xl"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-[#001931] text-lg">
                {ticket.title}
              </h3>
              <button
                className={`bg-[#02A53B80] rounded-2xl px-4 py-1 ${
                  ticket.status === "Open"
                    ? "bg-[#02A53B80]"
                    : "bg-[#9C770099] bg-opacity-30 "
                }`}
              >
                {ticket.status === "Open" ? "Open" : "In-Progress"}
              </button>
            </div>
            <p className="text-[#627382]">{ticket.description}</p>
            <div className="flex justify-between  items-center mt-2">
              <div className="flex gap-3">
                <h3 className="text-[#627382]">{ticket.id}</h3>
                <h3
                  className={` ${
                    ticket.priority === "Low Priority"
                      ? "text-[#02A53B]"
                      : ticket.priority === "Medium Priority"
                      ? "text-[#FEBB0C]"
                      : "text-[#F83044]"
                  }`}
                >
                  {ticket.priority.toUpperCase()}
                </h3>
              </div>
              <div className="flex gap-3 text-[#627382]">
                <h3>{ticket.customer}</h3>
                <h3>{ticket.createdAt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
