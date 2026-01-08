import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="embed-map-responsive max-w-7xl w-full mx-auto my-10" >
      <div className="w-full">
        <iframe
          className="embed-map-frame"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sandanpur%20Road%2C%20Near%20Kumhrar%2C%20Patna%20-%20800006%2C%20Bihar%2C%20India&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          height="500px"
          width="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

     
    </div>
  );
};

export default GoogleMapEmbed;
