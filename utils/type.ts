export type BookmarkType = {
    id:number,
    link:string,
    title:string,
    description:string,
    tags:string[],
    private:boolean,
    toRead:boolean,
    date:string,
    isStarred:boolean
}