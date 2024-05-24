import React from "react";
import {
  Route,
  HashRouter as Router, // Change BrowserRouter to HashRouter
  Routes,
  Navigate,
} from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { PanelLayout } from "../components/layout/PanelLayout";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Voice from "../pages/DashboardPages/Voice/Voice";
import Bizz from "../pages/DashboardPages/Bizz/Bizz";
import Bank from "../pages/DashboardPages/Bank/Bank";
import Chat from "../pages/DashboardPages/Chat/Chat";
import AmazonPfeature from "../components/forms/AmazonPfeature";
import Cards from "../components/Cards/Cards";
import AmazonProduct from "../components/forms/AmazonProduct";
import BlogPost from "../components/forms/BlogPost";
import BlogPostIntro from "../components/forms/BlogPostIntro";
import BlogPostOutline from "../components/forms/BlogPostOutline";
import BlogPostTopicIdeas from "../components/forms/BlogPostTopicIdeas";
import BusinessOrProductName from "../components/forms/BusinessOrProductName";
import Commands from "../components/forms/Commands";
import CompanyBio from "../components/forms/CompanyBio";
import ContentImprover from "../components/forms/ContentImprover";
import CreativeStory from "../components/forms/CreativeStory";
import EmailSubjectLines from "../components/forms/EmailSubjectLines";
import FacebookAds from "../components/forms/FacebookAds";
import JobDescription from "../components/forms/JobDescription";
import LinkedInTopicIdeas from "../components/forms/LinkedInTopicIdeas";
import SignIn from "../components/UserAuthentication/SignIn";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Profile from '../components/Profile/Profile';
import SignUpForm from "../components/newRegistration/newRegister";
import latestLogin from '../components/newRegistration/newLogin'

// import newLogin from '../components/newRegistration/newLogin';

const isAuthenticated = true;

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/latestLogin" element={<latestLogin />} />

        <Route path="/" element={<SignUpForm />} />

        {/* <Route path="/" element={<Register />} /> */}

        {/* <Route path="/Login" element={<Login />} /> */}


        <Route
          path="/"
          errorElement={<ErrorPage />}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {/* <NavBar /> */}

              <PanelLayout />
            </PrivateRoute>
          }
        >
          <Route path="/Dashboard" index element={<Dashboard />} />
          {/* <Route path="/" index element={<NavBar />} /> */}

          <Route path="/voice" element={<Voice />} />
          <Route path="/bizz" element={<Bizz />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/AmazonPfeature" element={<AmazonPfeature />} />
          <Route path="/AmazonProduct" element={<AmazonProduct />} />
          <Route path="/AmazonProduct" element={<AmazonProduct />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/BlogPostIntro" element={<BlogPostIntro />} />
          <Route path="/BlogPostOutline" element={<BlogPostOutline />} />
          <Route path="/BlogPostTopicIdeas" element={<BlogPostTopicIdeas />} />
          <Route
            path="/BusinessOrProductName"
            element={<BusinessOrProductName />}
          />
          <Route path="/Commands" element={<Commands />} />
          <Route path="/CompanyBio" element={<CompanyBio />} />
          <Route path="/ContentImprover" element={<ContentImprover />} />
          <Route path="/CreativeStory" element={<CreativeStory />} />
          <Route path="/EmailSubjectLines" element={<EmailSubjectLines />} />
          <Route path="/FacebookAds" element={<FacebookAds />} />
          <Route path="/JobDescription" element={<JobDescription />} />
          <Route path="/LinkedInTopicIdeas" element={<LinkedInTopicIdeas />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/SignUpForm" element={<SignUpForm />} /> */}


        </Route>
      </Routes>
    </Router>
  );
}
