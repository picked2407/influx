import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const apiKey = "5d2d3b76-9d8f-42c1-9a23-504710f3b9f4";
  
  const { submit } = useWeb3Forms({
    access_key: apiKey,
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  useEffect(() => {
    // You can set the page title here if needed
    // document.title = 'Contact Us';
    window.scrollTo(0, 0);
  }, []);

  const renderForm = () => {
    return (
      <>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Full Name*</label>
          <input type="text" {...register("fullName")} className="cs-form_field" />
          <Spacing lg="20" md="20" />
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Email*</label>
          <input type="text" {...register("email")} className="cs-form_field" />
          <Spacing lg="20" md="20" />
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Creator or brand</label>
          <input type="text" {...register("projectType")} className="cs-form_field" />
          <Spacing lg="20" md="20" />
        </Div>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Message</label>
          <textarea
            {...register("message")}
            className="cs-form_field"
            style={{ height: '120px' }} 
            placeholder="Enter your message here..."
          />
          <Spacing lg="20" md="20" />
        </Div>
      </>
    );
  };

  const handleSendMessage = (formData) => {
    submit(formData);
  };

  return (
    <>
      <style>
        {`
        .cs-btn {
          border: 2px solid #FF4A17; 
          background-color: black; 
          color: white; 
          border-radius: 10px; 
          padding: 10px 20px; 
          margin-right: 10px; 
          cursor: pointer; 
          transition: background-color 0.3s, color 0.3s; 
        }

        .cs-btn:hover {
          background-color: #FF4A17; 
          color: black; 
        }
        `}
      </style>

      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="How can we <br/>help?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit(handleSendMessage)} className="my-10">
              {renderForm()}
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
            <Spacing lg="20" md="10" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
