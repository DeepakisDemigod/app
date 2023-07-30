import React from "react";
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <>
       <header>
        <section className="hero">
          <div className="hero-content">
            <h1>404 | page not found</h1>
            <h3>seems like you are lost, go to <a href="/">home</a></h3>
          </div>
        </section> 
      </header>
    </>
  )
}

export default ErrorPage;
