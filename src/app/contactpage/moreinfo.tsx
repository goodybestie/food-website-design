import React from 'react';

export default function MoreInfo() {
  return (
    <div className="flex pl-8 md:pl-none justify-start md:justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div>
          <h3 className="mb-3 text-[#2C2F24] text-xl font-bold">Call Us:</h3>
          <p className="text-[#AD343E] text-md mt-2 font-bold">+1-234-567-8900</p>
        </div>
        
        <div>
          <h3 className="mb-3 text-[#2C2F24] text-xl font-bold">Hours:</h3>
          <p>Mon-Fri: 11am - 8pm</p>
          <p>Sat, Sun: 9am - 10pm</p>
        </div>
        
        <div>
          <h3 className="mb-3 text-[#2C2F24] text-xl font-bold">Our Location:</h3>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345 <br />United States</p>
        </div>

      </div>
    </div>
  );
}
