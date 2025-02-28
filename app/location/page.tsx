"use client";
import locations from "@/data/locations.json";
import Image from "next/image";

export default function Location() {
  return (
    <div className="md:hidden py-20 px-6">
      {/* Restaurant Image */}
      <div className="py-4 flex justify-center">
        <Image
          src="/restaurant-location.jpg"
          alt="JAGY's Smokehouse BBQ & Grillade Exterior"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Title */}
      <div className="py-2 text-4xl underline text-white">
        JAGY's Smokehouse BBQ & Grillade
      </div>

      {/* Address */}
      <div className="text-[var(--primary-color)] py-2 font-serif">
        {locations.address[0]}
      </div>

      {/* Phone Number */}
      <div className="mt-2 underline text-white">
        {locations.number[0]}
      </div>

      {/* Store Hours */}
      <div className="mt-5">
        <p className="font-bold text-xl text-[var(--primary-color)]">STORE HOURS</p>
        <div className="py-2 font-serif text-[var(--primary-color)]">
          {locations.hours.map((hour, index) => (
            <p key={index}>{hour}</p>
          ))}
        </div>
      </div>
      {/* Description */}
      <div className="mt-10 text-[var(--primary-color)] font-avenir">
        {locations.description.map((paragraph, index) => (
          <p key={index} className="py-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}