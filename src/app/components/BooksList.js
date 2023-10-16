import booksList from "../data/books";
import CardBook from "./CardBook";

const BooksList = () => {
  return (
    <section>
      {booksList.library.map(({ book }) => {
        const { title, genre, year, cover } = book;
        return (
          <CardBook
            key={title}
            title={title}
            genre={genre}
            year={year}
            cover={cover}
          />
        );
      })}
    </section>
  );
};

export default BooksList;
