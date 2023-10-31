import Image from "next/image";
import React from "react";

interface AddressItemProps {
  src: string;
  alt: string;
  text: string;
  desc: string;
}

const ADDRESS_ITEMS: AddressItemProps[] = [
  {
    src: "/images/email.svg",
    alt: "email",
    text: "پست الکترونیکی",
    desc: "Support@Raika.ir",
  },
  {
    src: "/images/tell.svg",
    alt: "tell",
    text: "شماره تماس",
    desc: "+89 939 804 1111",
  },
  {
    src: "/images/map.svg",
    alt: "map",
    text: "نــشانی",
    desc: "تهران، اینجا، اونجا، روبروی فلان پلاک 1، واحد فلان",
  },
];

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

const AddressItem: React.FC<AddressItemProps> = ({ src, alt, text, desc }) => (
  <div className="flex w-52 flex-wrap items-center justify-center">
    <Image
      className="mx-6 object-cover"
      width={90}
      height={90}
      src={src}
      alt={alt}
    />
    <h2 className="mt-3 text-center text-[1.5rem] font-semibold">{text}</h2>
    <p className="text-center">{desc}</p>
  </div>
);

const Address = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-around">
      {ADDRESS_ITEMS.map((item) => (
        <AddressItem
          key={item.alt}
          {...item}
          desc={item.alt === "tell" ? reverseString(item.desc) : item.desc}
        />
      ))}
    </div>
  );
};

export default Address;
