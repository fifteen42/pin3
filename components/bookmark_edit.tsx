import { BookmarkType } from "../utils/type";

interface BookmarkProps {
    bookmark: BookmarkType,
}

const BookmarkEdit = ({
    bookmark,
}:BookmarkProps) => {
    return(
        <div>
            <p>{bookmark.link}</p>
            <p>{bookmark.title}</p>
            <p>{bookmark.description}</p>
            <p>{bookmark.tags}</p>
            <p>{bookmark.private}</p>
            <p>{bookmark.toRead}</p>
        </div>
    );
    
}

export default BookmarkEdit;