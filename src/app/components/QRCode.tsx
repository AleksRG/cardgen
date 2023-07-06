"use client";
import React, { useRef, useState } from "react";
// import QRCodeStyling from "qr-code-styling";
import domtoimage from "dom-to-image";
import QRCode from "react-qr-code";

const MAX_NAME_LENGTH = 10;
const MAX_INFO_LENGTH = 30;

const downloadFile = (url: string, filename: string) => {
  const anchorElement = document.createElement("a");
  anchorElement.href = url;
  anchorElement.download = filename;
  anchorElement.click();
};

const App: React.FC = () => {
  const [url, setUrl] = useState("https://www.soltree.xyz/");
  const [fileExt, setFileExt] = useState("png");
  const [name, setName] = useState("alexrg");
  const [info, setInfo] = useState("CTO SOLTREE.XYZ");
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div>
      {/* Card */}
      <div
        className="bg-amber-500 flex w-[700px] items-end uppercase justify-around rounded-3xl h-[400px] "
        ref={ref}
      >
        <div className="w-1/2 h-full bg-[url(/3.png)] bg-center rounded-l-3xl"></div>
        <div className="flex flex-col justify-around h-full p-4 text-end w-1/2 items-end">
          <div className="w-full flex flex-col">
            <div className="overflow-hidden">
              <span className="text-6xl font-[600]">{name}</span>
            </div>
            <span className="tracking-tight text-xl">{info}</span>
          </div>
          <div className="mx-auto">
            <QRCode
              value={url}
              size={150}
              bgColor="#111111"
              fgColor="#FFFFFF"
              level="L"
            />
          </div>
          <div className="w-full flex items-center justify-center h-10">
            <img src="logo_su.svg" className="h-14" />
            <img src="logoSmoll.png" className="h-14 mr-2" />
            <img src="SFLogo.png" className="h-8" />
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-4 mt-20 w-full max-w-3xl flex-wrap">
        <input
          type="text"
          value={url}
          onChange={handleLinkChange}
          className="bg-amber-500 text-black rounded-full px-8 w-fit py-1"
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          maxLength={MAX_NAME_LENGTH}
          className="bg-amber-500 text-black rounded-full px-8 w-fit py-1"
        />
        <input
          type="text"
          value={info}
          onChange={handleInfoChange}
          maxLength={MAX_INFO_LENGTH}
          className="bg-amber-500 text-black rounded-full px-8 w-fit py-1"
        />
        <select
          value={fileExt}
          onChange={onExtensionChange}
          className="bg-amber-500 text-black rounded-full px-8 w-fit py-1 flex justify-center"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button
          onClick={onDownloadClick}
          className="bg-amber-500 text-black rounded-full px-8 w-fit py-1"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default App;
