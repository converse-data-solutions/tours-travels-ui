import Image from "next/image";
import img from "../../../public/GetToKnowUs.png";

const ImageGetToKnowUs = () => {
  return (
    <div className="w-full h-full">
      <Image height={100} width={1000} src={img} alt="" />
    </div>
  );
};

export default ImageGetToKnowUs;
