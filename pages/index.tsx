import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import BookmarkList from '../components/bookmark_list';
import Header from "../components/header";
import { BookmarkType } from '../utils/type';

const Home: NextPage = () => {
  const [list, setList] = useState<BookmarkType[]>([]);

  useEffect(() => {
    const list = [
      {
        id:1,
        link:"https://github.com/firebase/firebase-admin-node/issues/320",
        title:"All firestore set(doc) calls fail",
        description:"dmin.firestore().collection('whatever').doc(\"\"+id)",
        tags:["firebase","bug"],
        private:false,
        toRead:false,
        date:"2022-11-26 00:04:51",
        isStarred:true
      },
      {
        id:2,
        link:"https://github.com/firebase/firebase-admin-node/issues/320",
        title:"All firestore set(doc) calls fail",
        description:"dmin.firestore().collection('whatever').doc(\"\"+id)",
        tags:["firebase","bug"],
        private:false,
        toRead:false,
        date:"2022-11-26 00:04:51",
        isStarred:false
      },
      {
        id:3,
        link:"https://github.com/firebase/firebase-admin-node/issues/320",
        title:"All firestore set(doc) calls fail",
        description:"dmin.firestore().collection('whatever').doc(\"\"+id)",
        tags:["firebase","bug"],
        private:false,
        toRead:false,
        date:"2022-11-26 00:04:51",
        isStarred:false
      },
      {
        id:4,
        link:"https://github.com/firebase/firebase-admin-node/issues/320",
        title:"All firestore set(doc) calls fail",
        description:"dmin.firestore().collection('whatever').doc(\"\"+id)",
        tags:["firebase","bug"],
        private:false,
        toRead:false,
        date:"2022-11-26 00:04:51",
        isStarred:true
      },
    ]
    setList(list);
  }, []);

  return (
    <div className='mx-10' >
      <Header />
      <div className='divider mt-0'></div>
      <BookmarkList
        list={list}
      />
    </div>
  )
}

export default Home
