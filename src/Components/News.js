import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  document.title =
      props.mode.charAt(0).toUpperCase() + props.mode.slice(1) + "-NEXED";
    
  
  
  
  
      useEffect(() => {
        const fetchData = async () => {
          props.newProgress(10);
          console.log("Hello");
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.mode}&apiKey=a3c67517cd064f9ebf16913b4884db77&page=${page}&pageSize=21`;
          let data = await fetch(url);
          props.newProgress(30);
          let jsd = await data.json();
          props.newProgress(50);
          setArticles(jsd.articles);
          setLoading(true);
          setPage(page);
          setPageSize(jsd.totalResults);
          props.newProgress(100);
        };
    
        fetchData();
      }, [ props.mode]);
  
  
  
  const fetchMoreData= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.mode}&apiKey=a3c67517cd064f9ebf16913b4884db77&page=${page+1}&pageSize=21`;
    let data = await fetch(url);
    let jsd = await data.json();
    setArticles(articles.concat(jsd.articles));
    setLoading(true);
    setPage(page+1);
    
    console.log(articles.length);
    console.log(pageSize);
  }

  
    
    return (
      <div className="container">
        <h1 className="my-2 text-center">
          <strong>
            {props.mode === "general"
              ? "YOUR DAILY DIGEST"
              : props.mode.charAt(0).toUpperCase() +
                props.mode.slice(1)}
          </strong>
        </h1>
        {/* <Spinner load={this.state.loading} /> */}
        <InfiniteScroll
            dataLength={articles.length}
            
            next={fetchMoreData}
            // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            // inverse={true} //
            hasMore={articles.length!==pageSize && articles.length+1!==pageSize}
            loader={<Spinner/>}
            style={{overflow: 'none'}}
            // scrollableTarget="scrollableDiv"
          >
            <div className="container">
            <div className="row">
         
         {articles.map((Element) => {
           return (
             <div className="col-md-4" key={Element.url}>
               <Newsitem
                 title={Element.title ? Element.title.slice(0, 45) : ""}
                 desc={
                   Element.description
                     ? Element.description.slice(0, 80) + "..."
                     : ""
                 }
                 imageURl={Element.urlToImage}
                 url={Element.url}
                 author={Element.author}
                 publishedAt={
                   Element.publishedAt.charAt(8) +
                   Element.publishedAt.charAt(9) +
                   "-" +
                   Element.publishedAt.charAt(5) +
                   Element.publishedAt.charAt(6) +
                   "-" +
                   Element.publishedAt.charAt(0) +
                   Element.publishedAt.charAt(1) +
                   Element.publishedAt.charAt(2) +
                   Element.publishedAt.charAt(3)
                 }
                 tr={Element.source.name}
               />
             </div>
           );
         })}
       
     </div>
            </div>
        
        </InfiniteScroll>
        
        <div className="container" style={{textAlign: 'center'}}>Developed by Yash Sinha (All rights reserved)</div>
      </div>
    );
  
}

export default News;
