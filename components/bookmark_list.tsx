import { BookmarkType } from "../utils/type";
import BookmarkPreview from "./bookmark_preview";

interface BookmarkListProps {
    list: BookmarkType[],
    setList: (list: BookmarkType[]) => void;
}

const BookmarkList:React.ElementType = ({
    list
}:BookmarkListProps) => {
    return(
        <div className="w-2/4" >
            {list.map((bookmark) => {
                return(
                <div key={bookmark.id} >
                    <BookmarkPreview bookmark={bookmark} />
                    <div className="divider" ></div>
                </div>
                );
            })}
        </div>
    );
}

export default BookmarkList;