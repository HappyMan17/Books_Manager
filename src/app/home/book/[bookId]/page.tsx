interface BookDetailProps {
  params: {
    bookId: string;
  }
}

const BookDetail = ({ params }: BookDetailProps) => {
  return (
    <div>
      <h1>Book Details for ID: {params.bookId}</h1>
      {/* Render book details based on the id */}
    </div>
  );
};

export default BookDetail;