import { BookmarkType } from "../utils/type";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

interface BookmarkProps {
    bookmark: BookmarkType,
}

interface StarProps {
    isStarred: boolean,
}

interface TagsProps {
    tags: string[],
}

const Star = ({isStarred}:StarProps) => {
    if (isStarred) {
        return <AiFillStar className="inline mr-2 mb-2 text-xl text-yellow-300" />;
    } else {
        return <AiOutlineStar className="inline mr-2 mb-2 text-xl" />;
    }
}

const Tags = ({tags}:TagsProps) => {
    return(
        <div>
            {tags.map(tag => {
                return(
                    <p className="text-stone-400 inline-block mr-2" >{tag}</p>
                );
            })}
        </div>
    );
    
}

const BookmarkPreview = ({
    bookmark,
}:BookmarkProps) => {
    return(
        <div>
            <div>
                <Star isStarred={bookmark.isStarred} />
                <a className="text-xl" href={bookmark.link}>{bookmark.title}</a>
            </div>
            <Tags tags={bookmark.tags} />
            <p>{bookmark.private}</p>
            <p>{bookmark.toRead}</p>
            <p>{bookmark.date}</p>
        </div>
    );
    
}

export default BookmarkPreview;