"use client";
import React, { useRef, useState } from "react";
import domtoimage from "dom-to-image";
import QRCode from "react-qr-code";

const MAX_NAME_LENGTH = 20;
const MAX_INFO_LENGTH = 40;

const downloadFile = (url: string, filename: string) => {
  const anchorElement = document.createElement("a");
  anchorElement.href = url;
  anchorElement.download = filename;
  anchorElement.click();
};

function QrCode() {
  const [url, setUrl] = useState("https://www.rrgen.xyz/");
  const [fileExt, setFileExt] = useState("png");
  const [name, setName] = useState("ALEX ON REKT");
  const [info, setInfo] = useState("FOUNDER RICHIE RICH");
  const [image, setImage] = useState("alex");
  const [color, setColor] = useState("lime");
  const ref = useRef<HTMLDivElement>(null);

  const onImageChange = (event: { target: { value: string } }) => {
    setImage(event.target.value);
  };
  const onColorChange = (event: { target: { value: string } }) => {
    setColor(event.target.value);
  };
  const onExtensionChange = (event: { target: { value: string } }) => {
    setFileExt(event.target.value);
  };
  const handleLinkChange = (event: { target: { value: string } }) => {
    const newLink = event.target.value;
    setUrl(newLink);
  };

  const handleNameChange = (event: { target: { value: string } }) => {
    const newName = event.target.value.slice(0, MAX_NAME_LENGTH);
    setName(newName);
  };

  const handleInfoChange = (event: { target: { value: string } }) => {
    const newInfo = event.target.value.slice(0, MAX_INFO_LENGTH);
    setInfo(newInfo);
  };
  const onDownloadClick = () => {
    if (ref.current) {
      domtoimage
        .toPng(ref.current)
        .then(function (dataUrl: string) {
          downloadFile(dataUrl, `qrcode.${fileExt}`);
        })
        .catch(function (error: any) {
          console.error("Error generating image", error);
        });
    }
  };
  let className = "";

  switch (color) {
    case "cyan":
      className = "bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700";
      break;
    case "teal":
      className = "bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700";
      break;
    case "sky":
      className = "bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700";
      break;
    case "blue":
      className = "bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700";
      break;
    case "indigo":
      className =
        "bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700";
      break;
    case "fuchsia":
      className =
        "bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-700";
      break;
    case "pink":
      className = "bg-gradient-to-r from-pink-700 via-pink-500 to-pink-700";
      break;
    case "rose":
      className = "bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700";
      break;
    case "purple":
      className =
        "bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700";
      break;
    case "violet":
      className =
        "bg-gradient-to-r from-violet-700 via-violet-500 to-violet-700";
      break;
    case "amber":
      className = "bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700";
      break;
    case "yellow":
      className =
        "bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700";
      break;
    case "lime":
      className = "bg-gradient-to-r from-lime-700 via-lime-500 to-lime-700";
      break;
    case "green":
      className = "bg-gradient-to-r from-green-700 via-green-500 to-green-700";
      break;
    case "emerald":
      className =
        "bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700";
      break;
    case "gray":
      className = "bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700";
      break;
    case "neutral":
      className =
        "bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700";
      break;
    case "stone":
      className = "bg-gradient-to-r from-stone-700 via-stone-500 to-stone-700";
      break;
    case "black":
      className = "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950";
      break;

    default:
      className = "";
      break;
  }
  return (
    <div className="w-full justify-center flex flex-col items-center text-white bg-transparent">
      {/* Card */}
      <div
        className={`${className} w-[700px] uppercase rounded-xl h-[400px] flex items-start justify-start relative group overflow-hidden`}
        ref={ref}
      >
        <div className={`w-2/3 h-full absolute flex justify-center items-end `}>
          <img src={`/profile/${image}.png`} className="" />
        </div>
        <div className="flex relative  flex-col w-full justify-around h-full text-end items-end">
          <div className="ml-auto w-2/3 flex flex-col px-4 tracking-tight">
            <span className="text-6xl font-[600]">{name}</span>
          </div>
          <QRCode
            value={url}
            size={140}
            bgColor="#ffffff"
            fgColor="rgb(17 24 39)"
            level="L"
            className="mx-4 rounded-md "
          />

          <div className="w-full flex gap-4 items-center justify-end h-12 px-4 py-0.5 bg-gradient-to-r from-gray-950/80 via-gray-900/50 to-gray-950/80">
            <span className="text-xl">{info}</span>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-start gap-4 max-w-2xl mt-20 w-full  flex-wrap">
        <input
          type="text"
          value={url}
          onChange={handleLinkChange}
          className="bg-gray-950 text-white rounded-full px-8 w-fit py-1"
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          maxLength={MAX_NAME_LENGTH}
          className="bg-gray-950 text-white rounded-full px-8 w-fit py-1"
        />
        <input
          type="text"
          value={info}
          onChange={handleInfoChange}
          maxLength={MAX_INFO_LENGTH}
          className="bg-gray-950 text-white rounded-full px-8 w-fit py-1"
        />
      </div>
      <div className="flex justify-start gap-4 max-w-2xl my-10 w-full flex-wrap">
        {" "}
        <select
          value={image}
          onChange={onImageChange}
          className="bg-gray-950 text-white rounded-full px-8 w-80 py-1"
        >
          {" "}
          <option value="alex">Alex</option>{" "}
          <option value="TENSORIANS-1909">TENSORIANS-1909</option>{" "}
          <option value="TENSORIANS-3045">TENSORIANS-3045</option>{" "}
          <option value="TENSORIANS-3829">TENSORIANS-3829</option>{" "}
          <option value="TENSORIANS-6218">TENSORIANS-6218</option>{" "}
          <option value="TENSORIANS-9041">TENSORIANS-9041</option>{" "}
          <option value="TENSORIANS-9209">TENSORIANS-9209</option>{" "}
          <option value="TENSORIANS-9694">TENSORIANS-9694</option>{" "}
          <option value="SMB-1234">SMB-1234</option>{" "}
          <option value="SMB-3370">SMB-3370</option>{" "}
          <option value="SMB-4783">SMB-4783</option>{" "}
          <option value="SMB-6217">SMB-6217</option>{" "}
          <option value="SMB-8859">SMB-8859</option>{" "}
          <option value="SMB-12381">SMB-12381</option>{" "}
          <option value="SMB-11110">SMB-11110</option>{" "}
          <option value="SMB-12381">SMB-12381</option>{" "}
          <option value="ML2138">MadLands-2138 female</option>{" "}
          <option value="ML2450">MadLands-2450 female</option>
          <option value="ML3081">MadLands-3081 female</option>
          <option value="ML6438">MadLands-6438 female</option>
          <option value="ML2385">MadLands-2385 male</option>
          <option value="ML7021">MadLands-7021 male</option>
          <option value="ML7607">MadLands-7607 male</option>
          <option value="ML9466">MadLands-9466 male</option>
          <option value="LILY4097">Lily-4097 female</option>
          <option value="LILY5884">Lily-5884 male</option>
          <option value="mc">MC</option>
        </select>
        <select
          value={color}
          onChange={onColorChange}
          className={`bg-gray-950 text-white rounded-full px-8 w-80 py-1`}
        >
          {" "}
          <option value="cyan">Cyan</option>
          <option value="teal">Teal</option>
          <option value="sky">Sky</option>
          <option value="emerald">Emerald</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="fuchsia">Fuchsia</option>
          <option value="violet">Violet</option>
          <option value="amber">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="lime">Lime</option>
          <option value="green">Green</option>
          <option value="rose">Rose</option>
          <option value="gray">Gray</option>
          <option value="stone">Stone</option>
          <option value="neutral">Neutral</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="flex justify-start gap-4 max-w-2xl w-full flex-wrap">
        {" "}
        <select
          value={fileExt}
          onChange={onExtensionChange}
          className="bg-gray-950 text-white rounded-full px-8 w-fit py-1 flex justify-center"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button
          onClick={onDownloadClick}
          className="bg-gray-950 text-white rounded-full px-8 w-fit py-1"
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default QrCode;
