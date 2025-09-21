import { contacts } from "../../utils/data";

const Contacts = () => {

  return (
    <div className="flex flex-col gap-2 text-start text-text-primary">
      <div className={`px-1 py-2 text-sm font-semibold`} >
        Contacts
      </div>
      {contacts?.map((contact, index) => (
        <div
          className="grid grid-cols-6 gap-2 p-1 items-center"
          key={index}
        >
          <figure className="col-span-1 flex items-center justify-center relative w-fit">
            <img
              src={contact?.image}
              alt={`user${index}`}
              className="size-6 rounded-full object-cover"
            />
          </figure>
          <div className="text-start col-span-5 font-light">
            <p className={`text-sm line-clamp-1`} >
              {contact?.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
