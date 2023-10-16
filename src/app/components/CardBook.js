import Image from "next/image";

const CardBook = ({ title, cover, year, genre }) => {
  return (
    <section key={title}>
      <Image width={317} height={474} alt="Book cover" src={cover} />
      <p>{title}</p>
      <span>{year}</span>-<span>{genre}</span>
      <div>
        <button>Add to list</button>
      </div>
    </section>
  );
};

export default CardBook;
