import React from 'react'
import './CreateCard.scss'
function CreateCard() {
  return (
    <React.Fragment>
      <div className="createCard">
        <div className="card">
            <div className="row">
                <div className="col-xl-6 col-lg-10 col-md-10 mx-auto">
                <h2>What do you want to  create?</h2>
                <div className="input-group">
                <input type="text" placeholder='Spacify a writing task' />
                <button className="start" >Start <img src="/images/star.svg" alt="stars" /></button>
                </div>
                <div className="cards">
                    <div className="mini-card">
                        <a href="">
                        <h4>Video ad</h4>
                        <p>Lorem Ipsum is simply dummy printing</p>
                        </a>
                    </div>
                    <div className="mini-card">
                        <a href="">
                        <h4>Product</h4>
                        <p>Lorem Ipsum is simply dummy printing</p>
                        </a>
                    </div>
                    <div className="mini-card">
                        <a href="">
                        <h4>Linkedin artical</h4>
                        <p>Lorem Ipsum is simply dummy printing</p>
                        </a>
                    </div>
                    <div className="mini-card">
                        <a href="">
                        <h4>Linkedin artical</h4>
                        <p>Lorem Ipsum is simply dummy printing</p>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateCard
