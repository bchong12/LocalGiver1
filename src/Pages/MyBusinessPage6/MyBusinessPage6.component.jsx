import React from "react";
import HeaderDashboard from "../../Component/Header-dashboard/Header-dashboard.component";
import "./MyBusinessPage6.component.css";
import axios from "axios";

class MyBusinessPage6 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="my-business-page">
          <div className="top-coffee">
            <h1>Small Business 1</h1>
            <p>
              Your local community coffee shop, serving fresh coffee since 1967
            </p>
          </div>
          <div className="middle-of-business">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/edyeTWip6m0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="deals">
              <div className="deal">
                <p className="deal-title">
                  Get Our Book On How to Design Flowers! More Exactly How We Do
                  It In-house!
                </p>
                <p className="deal-price">$35</p>
                <button
                  onClick={() => {
                    axios.post(
                      "https://ancient-woodland-39807.herokuapp.com/api/cart/new",
                      { title: "Floral Book", price: 35 }
                    );
                  }}
                  className="deal-button"
                >
                  Add To Cart
                </button>
              </div>
              <div className="deal">
                <p className="deal-title">
                  Get A Voucher for $50 a fraction of the price, redeemable when
                  we re-open!
                </p>
                <p className="deal-price">$45</p>
                <button
                  onClick={() => {
                    axios.post(
                      "https://ancient-woodland-39807.herokuapp.com/api/cart/new",
                      { title: "Voucher", price: 45 }
                    );
                  }}
                  className="deal-button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="business-line" />
          <div className="story">
            <h1>Story</h1>
            <div className="top-of-story">
              <img
                className="us-img"
                src="https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              />
            </div>
            <p className="story-text">
              At SMALL BUSINESS 6 we're more than just a floral company. We
              combine our mission to be a catalyst for love with a dedication to
              producing the finest coffees and food offerings through our
              franchises. We love the big wide world we live in and make helping
              its people a core aim of our business. The waft of excellent
              hand-roasted coffee is surely one of the world’s greatest aromas,
              but to us, it represents more than just a job well done. It’s an
              opportunity to change the world we live in; to put people before
              profit; to give back to the community. Just SMALL BUSINESS 1 has
              been a finalist in the prestigious Roaster of the Year in 2014 and
              2015. The business has grown since its inception seven years ago.
              Our franchises now offer great food to match our coffee. A cup of
              coffee represents a chance to stop, think, relax and watch the
              world for a while. Sitting down with a group of friends and
              solving global problems over a quality cup of coffee (or three) is
              surely one of the world's favorite pastimes. So what if the act of
              purchasing and drinking coffee was solving major problems in
              itself? If you're buying from us... it is! Though a business, our
              key aim is to give a large portion of our profits to worthy
              causes. Which is why we give a percentage of the profit on each
              bag sold online. That's not all; our wonderful franchisees also
              donate to local charities and causes in their region. All you need
              is love... You could say our story is one based on love; love of
              locally, hand-roasted coffee, love of people, and love of our
              community. It began when owners Rob and Emily Webb made the
              decision to adopt. They already had two beautiful kids, Isabel and
              Charlie, however, the call to adopt was strong for the pair and in
              2009 Rob was on a flight to Ethiopia. Little was Rob to know that
              this event was to change not just his life and the lives of his
              two newly adopted children Tigist and Amelie, but also those of
              countless other people. For Rob had one of those inspirational
              ideas -- a true light bulb moment -- as he added up the expense of
              the adoption trip — and learned of the sacrifice and challenges of
              people in the same situation. What if he were to set up a hand
              roasting business as a for-profit venture that existed to help
              others? One that took the customers into a form of social
              partnership? A simple idea but, like all great thoughts, one that
              was to have enormous power. In essence, Rob decided to start a
              business dedicated to using hand-roasted coffees to help others
              whose passion was to... well... just love. Rob began his venture
              by converting an 800 square foot space in which they installed a
              small roaster, developed a few roasting profiles, set up a simple
              e-commerce store front, put word out on Facebook, and waited. It
              was a success! The orders started arriving and family and friends
              were brought in to help in packing and posting. Just Love Coffee
              Roasters, a for-profit venture dedicated to giving away a portion
              of its profits was born! Just under $100,000 was given back to the
              community in the first year, proving that a socially-minded
              enterprise could work. Since that time the business has grown
              through online sales, wholesale distribution, and franchise
              development. One of our goals has been to change the stereotype of
              the typical cafe and we now offer a full food menu -- not just
              pastries and snacks -- to go with our coffee at our franchises.
              When you walk into one of our coffee shops you have the option of
              a full dining range to complement our coffee. We also help
              fundraisers “caffeinate their fundraising.” Opening a free account
              with us to raise money for a good cause is easy. We handle the
              orders, fulfilment, and shipping and this is perfect for social
              media alerts. Our journey has just begun but we love that we’ve
              managed to do good while delivering a few of life’s great
              pleasures: a cup of excellent coffee, a full and exciting menu and
              a relaxing atmosphere. Who says crazy dreams don’t come true? At
              Just SMALL BUSINESS 6 Floral Roasters, we want to work with our
              customers to “...be the change that you wish to see in the world.”
              We believe we can change the world, one bean at a time.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default MyBusinessPage6;
