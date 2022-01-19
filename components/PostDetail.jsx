import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import moment from 'moment';

const PostDetail = ({ post }) => {

  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages(post.book.url)
  }, [post])
  const book = useRef();
  const pageToGo = useRef();

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>

        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold text-center">{post.title}</h1>
          <p className="text-gray-500 text-center my-4">{post.exerpt}</p>
          <h1 className="text-2xl text-center my-16 break-all">{post.desc}</h1>
          {pages && pages.length > 0 && <div className="w-full">
            <h1 className="text-xl font-semibold mb-4">FlipBook</h1>
            <HTMLFlipBook width={400} height={1414.2 / 2.5} ref={book} className='w-full'>
              {pages.map((page, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center justify-center w-full h-full bg-white"><img src={page}></img></div>
                  </div>
                )
              })}
            </HTMLFlipBook>
            <button onClick={() =>
              book.current.pageFlip().flipPrev()} className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-teal-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>Previous page</button>
            <button onClick={() =>
              book.current.pageFlip().flipNext()} className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-teal-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-2'>Next page</button>
          </div>}
        </div>
      </div>
    </>
  );
};

export default PostDetail;